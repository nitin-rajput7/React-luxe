import mongoose from 'mongoose';
import dotenv from 'dotenv';
import dns from 'dns';
import Product from '../models/Product.js';

try {
  dns.setServers(['8.8.8.8', '8.8.4.4']);
} catch {
  // Use default OS DNS
}

dotenv.config();

const products = [
  // MEN
  {
    title: 'Leather Jacket Premium',
    description: 'Handcrafted from 100% full-grain calfskin leather with a sleek modern cut and heavy-duty brass hardware. Tailored to perfection for evening and streetwear.',
    price: 199.99,
    category: 'Men',
    image: '/src/assets/images/Background (1).png',
    rating: 4.9,
    reviewsCount: 38,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Jet Black', 'Espresso Brown'],
    inStock: true,
    featured: true,
  },
  {
    title: 'Classic White T-Shirt',
    description: 'Engineered with heavyweight 240 GSM organic Supima cotton. Unmatched softness, reinforced ribbed collar, and minimal luxury finish.',
    price: 29.99,
    category: 'Men',
    image: '/src/assets/images/Background.png',
    rating: 4.7,
    reviewsCount: 64,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Pure White', 'Off-White Heather'],
    inStock: true,
    featured: false,
  },
  {
    title: 'Slim Fit Denim Jeans',
    description: 'Japanese selvedge denim woven on vintage shuttle looms. 13oz comfort stretch denim engineered for an exquisite tailored fit.',
    price: 89.99,
    category: 'Men',
    image: '/src/assets/images/Background (3).png',
    rating: 4.6,
    reviewsCount: 33,
    sizes: ['30', '32', '34', '36'],
    colors: ['Deep Indigo', 'Washed Stone'],
    inStock: true,
    featured: false,
  },
  {
    title: 'Classic Leather Chelsea Boots',
    description: 'Hand-burnished leather chelsea boots with elastic side gussets, Goodyear welt construction, and pull tabs for effortless luxury.',
    price: 159.99,
    category: 'Men',
    image: '/src/assets/images/Background (5).png',
    rating: 4.8,
    reviewsCount: 19,
    sizes: ['8', '9', '10', '11'],
    colors: ['Vintage Brown', 'Matte Black'],
    inStock: true,
    featured: false,
  },
  {
    title: 'Urban Streetwear Hoodie',
    description: 'Relaxed drop-shoulder silhouette built with 450 GSM French Terry cotton. Double-layered hood, hidden side seam pockets.',
    price: 69.99,
    category: 'Men',
    image: '/src/assets/images/Street Style Hoodie.png',
    rating: 4.8,
    reviewsCount: 36,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Washed Black', 'Heather Grey'],
    inStock: true,
    featured: true,
  },
  {
    title: 'Casual Linen Summer Shirt',
    description: 'Breathable 100% French flax linen tailored for warm summer breezes. Features relaxed camp collar and pearl buttons.',
    price: 54.99,
    category: 'Men',
    image: '/src/assets/images/Background (4).png',
    rating: 4.5,
    reviewsCount: 18,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Sky Blue', 'Sand White'],
    inStock: true,
    featured: false,
  },

  // WOMEN
  {
    title: 'Elegant Black Dress',
    description: 'Crafted with meticulous attention to detail, this timeless silhouette is the epitome of modern elegance. Made from a premium, breathable silk blend that drapes effortlessly.',
    price: 149.99,
    category: 'Women',
    image: '/src/assets/images/Elegant Black Dress.png',
    rating: 5.0,
    reviewsCount: 52,
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Onyx Black', 'Midnight Navy'],
    inStock: true,
    featured: true,
  },
  {
    title: 'Winter Wool Coat',
    description: 'Structured double-breasted long coat woven from ultra-warm Italian virgin wool. Features tailored lapels and deep silk-lined pockets.',
    price: 249.99,
    category: 'Women',
    image: '/src/assets/images/Winter Wool Coat.png',
    rating: 4.8,
    reviewsCount: 29,
    sizes: ['S', 'M', 'L'],
    colors: ['Camel Beige', 'Charcoal Grey'],
    inStock: true,
    featured: true,
  },
  {
    title: 'Beige Knit Cashmere Sweater',
    description: 'Spun from pure grade-A Mongolian cashmere. Luxuriously soft, lightweight yet insulating, with refined ribbed cuffs and hem.',
    price: 79.99,
    category: 'Women',
    image: '/src/assets/images/Background (2).png',
    rating: 4.9,
    reviewsCount: 45,
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Oatmeal Beige', 'Soft Sage'],
    inStock: true,
    featured: false,
  },
  {
    title: 'Atelier Silk Slip Gown',
    description: 'Bias-cut 100% Mulberry silk evening gown that glides gracefully along the contour of the body.',
    price: 189.99,
    category: 'Women',
    image: '/src/assets/images/detailpageblackdress.png',
    rating: 4.9,
    reviewsCount: 28,
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Nocturne Black', 'Champagne Rose'],
    inStock: true,
    featured: false,
  },
  {
    title: 'Tailored Linen Trench Coat',
    description: 'Lightweight linen blend trench with horn buttons, storm flaps, and removable waist belt.',
    price: 169.99,
    category: 'Women',
    image: '/src/assets/images/Women.png',
    rating: 4.7,
    reviewsCount: 21,
    sizes: ['S', 'M', 'L'],
    colors: ['Khaki Cream', 'Olive Earth'],
    inStock: true,
    featured: false,
  },

  // KIDS
  {
    title: 'Kids Cozy Cotton Pullover',
    description: 'Soft organic combed fleece with playful detailing. Designed with gentle stretch ribbing to provide all-day comfort and warmth.',
    price: 39.99,
    category: 'Kids',
    image: '/src/assets/images/Kids.png',
    rating: 4.9,
    reviewsCount: 22,
    sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y'],
    colors: ['Butter Yellow', 'Sky Mint'],
    inStock: true,
    featured: false,
  },
  {
    title: 'Kids Organic Denim Overalls',
    description: 'Ultra-durable, hypoallergenic organic cotton denim with adjustable shoulder buckles and reinforced knees.',
    price: 49.99,
    category: 'Kids',
    image: '/src/assets/images/Kids.png',
    rating: 4.8,
    reviewsCount: 16,
    sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y'],
    colors: ['Vintage Wash Blue', 'Natural Ecru'],
    inStock: true,
    featured: false,
  },
  {
    title: 'Kids Soft Knit Merino Cardigan',
    description: 'Non-itchy, gentle pure merino wool cardigan with wood buttons and charming ribbed trim.',
    price: 44.99,
    category: 'Kids',
    image: '/src/assets/images/Kids.png',
    rating: 4.9,
    reviewsCount: 19,
    sizes: ['3-4Y', '5-6Y', '7-8Y'],
    colors: ['Dusty Rose', 'Oatmeal'],
    inStock: true,
    featured: false,
  },

  // ACCESSORIES
  {
    title: 'Premium White Sneakers',
    description: 'Low-top minimalist leather sneakers handcrafted in Portugal with cushioned Italian memory-foam insoles and durable Margom rubber cupsoles.',
    price: 119.99,
    category: 'Accessories',
    image: '/src/assets/images/Premium White Sneakers.png',
    rating: 4.9,
    reviewsCount: 41,
    sizes: ['7', '8', '9', '10', '11'],
    colors: ['Chalk White', 'Monochrome Black'],
    inStock: true,
    featured: true,
  },
  {
    title: 'Luxury Leather Handbag',
    description: 'A timeless structured silhouette crafted with smooth Italian nappa leather, magnetic gold-tone clasp, and adjustable shoulder strap.',
    price: 179.99,
    category: 'Accessories',
    image: '/src/assets/images/Accessories.png',
    rating: 4.9,
    reviewsCount: 23,
    sizes: ['Standard'],
    colors: ['Caramel Tan', 'Noir Black'],
    inStock: true,
    featured: false,
  },
];

const seedData = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri || uri.includes('<username>') || uri.includes('<password>')) {
    console.error('❌ Cannot seed database: Please provide your real MongoDB Atlas connection string in server/.env');
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB for seeding...');

    await Product.deleteMany({});
    console.log('Cleared existing products.');

    const created = await Product.insertMany(products);
    console.log(`✅ Successfully seeded ${created.length} luxury products into MongoDB!`);

    process.exit(0);
  } catch (error) {
    console.error(`❌ Seeding failed: ${error.message}`);
    process.exit(1);
  }
};

seedData();
