import mongoose from 'mongoose';
import Message from '../models/Message.js';

const memoryMessages = [];

// @desc    Submit a contact form message
// @route   POST /api/messages
// @access  Public
export const createMessage = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      res.status(400);
      throw new Error('Name, email, and message are required fields');
    }

    if (mongoose.connection.readyState !== 1) {
      const demoMsg = {
        _id: 'MSG-' + Math.floor(100000 + Math.random() * 900000),
        name,
        email,
        subject: subject || 'General Inquiry',
        message,
        status: 'Unread',
        createdAt: new Date(),
      };
      memoryMessages.unshift(demoMsg);
      return res.status(201).json({
        success: true,
        message: 'Thank you! Your message has been received by our concierge team.',
        data: demoMsg,
      });
    }

    const newMessage = await Message.create({
      name,
      email,
      subject: subject || 'General Inquiry',
      message,
    });

    res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received by our concierge team.',
      data: newMessage,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all contact messages
// @route   GET /api/messages
// @access  Public (or Admin)
export const getMessages = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(200).json({
        success: true,
        count: memoryMessages.length,
        data: memoryMessages,
      });
    }

    const messages = await Message.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: messages.length,
      data: messages,
    });
  } catch (error) {
    next(error);
  }
};
