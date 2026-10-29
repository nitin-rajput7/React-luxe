import mongoose from 'mongoose';
import Order from '../models/Order.js';

// In-memory fallback storage for when MongoDB Atlas is connecting or offline
const memoryOrders = [];

// @desc    Create a new customer order
// @route   POST /api/orders
// @access  Public
export const createOrder = async (req, res, next) => {
  try {
    const { items, customer, subtotal, shippingFee, totalAmount } = req.body;

    if (!items || items.length === 0) {
      res.status(400);
      throw new Error('No order items provided');
    }

    if (!customer || !customer.name || !customer.email || !customer.address) {
      res.status(400);
      throw new Error('Complete customer details (name, email, address) are required');
    }

    if (mongoose.connection.readyState !== 1) {
      const demoOrder = {
        _id: 'ORD-' + Math.floor(100000 + Math.random() * 900000),
        items,
        customer,
        subtotal,
        shippingFee: shippingFee || 0,
        totalAmount,
        status: 'Pending',
        createdAt: new Date(),
      };
      memoryOrders.unshift(demoOrder);
      return res.status(201).json({
        success: true,
        message: 'Order placed successfully (Demo Mode - connect Atlas in server/.env for persistent cloud DB)',
        data: demoOrder,
      });
    }

    const order = await Order.create({
      items,
      customer,
      subtotal,
      shippingFee: shippingFee || 0,
      totalAmount,
      status: 'Pending',
    });

    res.status(201).json({
      success: true,
      message: 'Order placed successfully',
      data: order,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all orders
// @route   GET /api/orders
// @access  Public (or Admin)
export const getOrders = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(200).json({
        success: true,
        count: memoryOrders.length,
        data: memoryOrders,
      });
    }

    const orders = await Order.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: orders.length,
      data: orders,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Public
export const getOrderById = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      const found = memoryOrders.find((o) => o._id === req.params.id);
      if (found) return res.status(200).json({ success: true, data: found });
    }

    const order = await Order.findById(req.params.id);

    if (!order) {
      res.status(404);
      throw new Error('Order not found');
    }

    res.status(200).json({
      success: true,
      data: order,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update order status
// @route   PUT /api/orders/:id/status
// @access  Public (or Admin)
export const updateOrderStatus = async (req, res, next) => {
  try {
    const { status } = req.body;

    if (mongoose.connection.readyState !== 1) {
      const found = memoryOrders.find((o) => o._id === req.params.id);
      if (found) {
        found.status = status;
        return res.status(200).json({ success: true, message: 'Order status updated', data: found });
      }
    }

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!order) {
      res.status(404);
      throw new Error('Order not found');
    }

    res.status(200).json({
      success: true,
      message: 'Order status updated',
      data: order,
    });
  } catch (error) {
    next(error);
  }
};
