/**
 * Centralized API service for communicating with the Node.js/Express backend.
 */
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

// Fallback luxury products in case the backend server or Atlas connection is offline
import fallbackLeatherJac from '../assets/images/Background (1).png';
import fallbackDress from '../assets/images/Elegant Black Dress.png';
import fallbackCoat from '../assets/images/Winter Wool Coat.png';
import fallbackTshirt from '../assets/images/Background.png';
import fallbackSneaker from '../assets/images/Premium White Sneakers.png';
import fallbackHandbag from '../assets/images/Accessories.png';
import fallbackJeans from '../assets/images/Background (3).png';
import fallbackBoots from '../assets/images/Background (5).png';
import fallbackSweater from '../assets/images/Background (2).png';
import fallbackHoodie from '../assets/images/Street Style Hoodie.png';
import fallbackShirt from '../assets/images/Background (4).png';
import fallbackKids from '../assets/images/Kids.png';
import fallbackGown from '../assets/images/detailpageblackdress.png';
import fallbackTrench from '../assets/images/Women.png';

export const FALLBACK_PRODUCTS = [
  // MEN
  {
    _id: '672000000000000000000001',
    title: 'Leather Jacket Premium',
    description: 'Handcrafted from 100% full-grain calfskin leather with a sleek modern cut and heavy-duty brass hardware.',
    price: 199.99,
    category: 'Men',
    image: fallbackLeatherJac,
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
    description: 'Engineered with heavyweight 240 GSM organic Supima cotton. Unmatched softness and clean luxury finish.',
    price: 29.99,
    category: 'Men',
    image: fallbackTshirt,
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
    description: 'Japanese selvedge denim woven on vintage shuttle looms with comfort stretch.',
    price: 89.99,
    category: 'Men',
    image: fallbackJeans,
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
    description: 'Hand-burnished leather chelsea boots with elastic side gussets and Goodyear welt construction.',
    price: 159.99,
    category: 'Men',
    image: fallbackBoots,
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
    description: 'Relaxed drop-shoulder silhouette built with 450 GSM French Terry cotton.',
    price: 69.99,
    category: 'Men',
    image: fallbackHoodie,
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
    description: 'Breathable 100% French flax linen tailored for warm summer breezes.',
    price: 54.99,
    category: 'Men',
    image: fallbackShirt,
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
    description: 'Crafted with meticulous attention to detail, this timeless silhouette is the epitome of modern elegance. Made from a premium silk blend.',
    price: 149.99,
    category: 'Women',
    image: fallbackDress,
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
    description: 'Structured double-breasted long coat woven from ultra-warm Italian virgin wool with deep silk-lined pockets.',
    price: 249.99,
    category: 'Women',
    image: fallbackCoat,
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
    description: 'Spun from pure grade-A cashmere. Luxuriously soft, lightweight yet insulating.',
    price: 79.99,
    category: 'Women',
    image: fallbackSweater,
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
    description: 'Bias-cut 100% Mulberry silk evening gown that glides gracefully along the contour of the body.',
    price: 189.99,
    category: 'Women',
    image: fallbackGown,
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
    description: 'Lightweight linen blend trench with horn buttons, storm flaps, and removable waist belt.',
    price: 169.99,
    category: 'Women',
    image: fallbackTrench,
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
    description: 'Soft organic combed fleece with playful detailing and gentle stretch ribbing.',
    price: 39.99,
    category: 'Kids',
    image: fallbackKids,
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
    description: 'Ultra-durable, hypoallergenic organic cotton denim with adjustable shoulder buckles and reinforced knees.',
    price: 49.99,
    category: 'Kids',
    image: fallbackKids,
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
    image: fallbackKids,
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
    description: 'Low-top minimalist leather sneakers handcrafted with cushioned Italian memory-foam insoles.',
    price: 119.99,
    category: 'Accessories',
    image: fallbackSneaker,
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
    description: 'A timeless structured silhouette crafted with smooth Italian nappa leather, magnetic gold-tone clasp.',
    price: 179.99,
    category: 'Accessories',
    image: fallbackHandbag,
    rating: 4.9,
    reviewsCount: 23,
    sizes: ['Standard'],
    colors: ['Caramel Tan', 'Noir Black'],
    inStock: true,
    featured: false,
  },
];

export const api = {
  // Products
  async getProducts(params = {}) {
    const query = new URLSearchParams();
    if (params.category && params.category !== 'All') query.append('category', params.category);
    if (params.search) query.append('search', params.search);
    if (params.minPrice) query.append('minPrice', params.minPrice);
    if (params.maxPrice) query.append('maxPrice', params.maxPrice);
    if (params.sort) query.append('sort', params.sort);
    if (params.featured) query.append('featured', 'true');

    try {
      const res = await fetch(`${API_BASE_URL}/products?${query.toString()}`);
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      const data = await res.json();
      return data.data;
    } catch {
      // Local fallback with simulated filtering
      let list = [...FALLBACK_PRODUCTS];
      if (params.category && params.category !== 'All') {
        list = list.filter((p) => p.category.toLowerCase() === params.category.toLowerCase());
      }
      if (params.featured) {
        list = list.filter((p) => p.featured);
      }
      if (params.search) {
        const q = params.search.toLowerCase();
        list = list.filter((p) => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
      }
      if (params.minPrice) list = list.filter((p) => p.price >= Number(params.minPrice));
      if (params.maxPrice) list = list.filter((p) => p.price <= Number(params.maxPrice));
      if (params.sort === 'price-asc') list.sort((a, b) => a.price - b.price);
      if (params.sort === 'price-desc') list.sort((a, b) => b.price - a.price);
      if (params.sort === 'rating') list.sort((a, b) => b.rating - a.rating);
      return list;
    }
  },

  async getProductById(id) {
    try {
      const res = await fetch(`${API_BASE_URL}/products/${id}`);
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      const data = await res.json();
      return data.data;
    } catch {
      const match = FALLBACK_PRODUCTS.find((p) => p._id === id || p.title.toLowerCase().includes(id.toLowerCase()));
      return match || FALLBACK_PRODUCTS[0];
    }
  },

  // Orders
  async createOrder(orderData) {
    try {
      const res = await fetch(`${API_BASE_URL}/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });
      const data = await res.json();
      return data;
    } catch (err) {
      console.warn('Backend unavailable, simulating order locally:', err);
      return {
        success: true,
        message: 'Order placed in demo offline mode!',
        data: { _id: 'DEMO-' + Date.now(), ...orderData },
      };
    }
  },

  // Contact Messages
  async sendMessage(messageData) {
    try {
      const res = await fetch(`${API_BASE_URL}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(messageData),
      });
      const data = await res.json();
      return data;
    } catch (err) {
      console.warn('Backend unavailable, simulating message receipt:', err);
      return {
        success: true,
        message: 'Your message has been recorded (local mode)!',
      };
    }
  },
};
