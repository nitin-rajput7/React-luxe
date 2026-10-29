import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: false,
  },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true, min: 1 },
  size: { type: String, default: 'M' },
  image: { type: String, required: false },
});

const customerSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Customer name is required'] },
  email: { type: String, required: [true, 'Customer email is required'] },
  phone: { type: String, default: '' },
  address: { type: String, required: [true, 'Shipping address is required'] },
  city: { type: String, required: [true, 'City is required'] },
  postalCode: { type: String, default: '' },
});

const orderSchema = new mongoose.Schema(
  {
    items: [orderItemSchema],
    customer: {
      type: customerSchema,
      required: true,
    },
    subtotal: {
      type: Number,
      required: true,
      min: 0,
    },
    shippingFee: {
      type: Number,
      default: 0,
    },
    totalAmount: {
      type: Number,
      required: true,
      min: 0,
    },
    status: {
      type: String,
      enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
      default: 'Pending',
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
