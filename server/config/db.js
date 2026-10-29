import mongoose from 'mongoose';

// Prevent Mongoose from hanging indefinitely when MongoDB is disconnected
mongoose.set('bufferTimeoutMS', 3000);

/**
 * Connect to MongoDB Atlas or local MongoDB using Mongoose.
 * Validates connection string and handles connection errors cleanly.
 */
const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri || uri.includes('<username>') || uri.includes('<password>')) {
    console.warn('\n⚠️  [MongoDB Warning]: MONGO_URI in server/.env has placeholder credentials.');
    console.warn('👉 Please update server/.env with your real MongoDB Atlas connection string:');
    console.warn('   MONGO_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/luxe_db\n');
    return false;
  }

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`✅ MongoDB Connected successfully: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    return false;
  }
};

export default connectDB;
