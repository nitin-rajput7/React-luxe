import dns from 'dns';

// Ensure SRV DNS resolution succeeds across all ISPs and Windows systems
try {
  dns.setServers(['8.8.8.8', '8.8.4.4']);
} catch {
  // Use default OS DNS if custom server setting fails
}

// Prevent Mongoose from hanging indefinitely when MongoDB is disconnected
mongoose.set('bufferTimeoutMS', 5000);

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
      dbName: 'luxe_db',
      serverSelectionTimeoutMS: 8000,
    });
    console.log(`✅ MongoDB Connected successfully: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    return false;
  }
};

export default connectDB;
