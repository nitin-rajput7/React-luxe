import mongoose from 'mongoose';
import Product from '../models/Product.js';

const DEMO_PRODUCTS = [
  // MEN
  {
    _id: '672000000000000000000001',
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
    _id: '672000000000000000000002',
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
    _id: '672000000000000000000003',
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
    _id: '672000000000000000000004',
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
    _id: '672000000000000000000005',
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
    _id: '672000000000000000000006',
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
    _id: '672000000000000000000007',
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
    _id: '672000000000000000000008',
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
    _id: '672000000000000000000009',
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
    _id: '672000000000000000000010',
    title: 'Atelier Silk Slip Gown',
    description: 'Bias-cut 100% Mulberry silk evening gown that glides gracefully along the contour of the body. Features an alluring open cowl back.',
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
    _id: '672000000000000000000011',
    title: 'Tailored Linen Trench Coat',
    description: 'Lightweight linen blend trench with horn buttons, storm flaps, and removable waist belt. The perfect transition piece.',
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
    _id: '672000000000000000000012',
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
    _id: '672000000000000000000013',
    title: 'Kids Organic Denim Overalls',
    description: 'Ultra-durable, hypoallergenic organic cotton denim with adjustable shoulder buckles and reinforced knees for adventurous play.',
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
    _id: '672000000000000000000014',
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
    _id: '672000000000000000000015',
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
    _id: '672000000000000000000016',
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

// @desc    Get all products (with optional filtering, search, and sorting)
// @route   GET /api/products
// @access  Public
export const getProducts = async (req, res, next) => {
  try {
    const { category, search, minPrice, maxPrice, featured, sort } = req.query;

    // If MongoDB is not yet connected, serve offline demo data seamlessly
    if (mongoose.connection.readyState !== 1) {
      let list = [...DEMO_PRODUCTS];
      if (category && category !== 'All') {
        list = list.filter((p) => p.category.toLowerCase() === category.toLowerCase());
      }
      if (featured === 'true') {
        list = list.filter((p) => p.featured);
      }
      if (search) {
        const q = search.toLowerCase();
        list = list.filter((p) => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
      }
      if (minPrice) list = list.filter((p) => p.price >= Number(minPrice));
      if (maxPrice) list = list.filter((p) => p.price <= Number(maxPrice));
      if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
      if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
      if (sort === 'rating') list.sort((a, b) => b.rating - a.rating);

      return res.status(200).json({
        success: true,
        count: list.length,
        data: list,
        source: 'local-memory (Connect Atlas in server/.env for live database)',
      });
    }

    const query = {};

    if (category && category !== 'All') query.category = category;
    if (featured === 'true') query.featured = true;

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ];
    }

    if (minPrice !== undefined || maxPrice !== undefined) {
      query.price = {};
      if (minPrice !== undefined && minPrice !== '') query.price.$gte = Number(minPrice);
      if (maxPrice !== undefined && maxPrice !== '') query.price.$lte = Number(maxPrice);
    }

    let sortOption = { createdAt: -1 };
    if (sort === 'price-asc') sortOption = { price: 1 };
    else if (sort === 'price-desc') sortOption = { price: -1 };
    else if (sort === 'rating') sortOption = { rating: -1 };

    const products = await Product.find(query).sort(sortOption);

    res.status(200).json({
      success: true,
      count: products.length,
      data: products,
      source: 'mongodb-atlas',
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single product by ID
// @route   GET /api/products/:id
// @access  Public
export const getProductById = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      const match = DEMO_PRODUCTS.find((p) => p._id === req.params.id || p.title.toLowerCase().includes(req.params.id.toLowerCase()));
      if (match) {
        return res.status(200).json({ success: true, data: match, source: 'local-memory' });
      }
    }

    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404);
      throw new Error('Product not found');
    }

    res.status(200).json({
      success: true,
      data: product,
      source: 'mongodb-atlas',
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create a new product
// @route   POST /api/products
// @access  Public (or Admin)
export const createProduct = async (req, res, next) => {
  try {
    const { title, description, price, category, image, sizes, colors, featured } = req.body;

    const product = await Product.create({
      title,
      description,
      price,
      category,
      image,
      sizes,
      colors,
      featured,
    });

    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update an existing product
// @route   PUT /api/products/:id
// @access  Public (or Admin)
export const updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!product) {
      res.status(404);
      throw new Error('Product not found');
    }

    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Public (or Admin)
export const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      res.status(404);
      throw new Error('Product not found');
    }

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};
