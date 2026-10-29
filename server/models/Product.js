import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Product title is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Product description is required'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'Product price is required'],
      min: [0, 'Price must be a positive number'],
    },
    category: {
      type: String,
      required: [true, 'Product category is required'],
      enum: {
        values: ['Men', 'Women', 'Kids', 'Accessories'],
        message: '{VALUE} is not a supported category',
      },
    },
    image: {
      type: String,
      required: [true, 'Product image URL or path is required'],
    },
    rating: {
      type: Number,
      default: 4.8,
      min: 0,
      max: 5,
    },
    reviewsCount: {
      type: Number,
      default: 14,
    },
    sizes: {
      type: [String],
      default: ['S', 'M', 'L'],
    },
    colors: {
      type: [String],
      default: ['Classic Black', 'Neutral Grey'],
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
