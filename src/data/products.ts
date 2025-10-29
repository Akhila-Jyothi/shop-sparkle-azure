import { Product } from '@/types/product';
import laptopImg from '@/assets/products/laptop.jpg';
import headphonesImg from '@/assets/products/headphones.jpg';
import smartphoneImg from '@/assets/products/smartphone.jpg';
import tshirtImg from '@/assets/products/tshirt.jpg';
import shoesImg from '@/assets/products/shoes.jpg';
import coffeeMakerImg from '@/assets/products/coffee-maker.jpg';
import yogaMatImg from '@/assets/products/yoga-mat.jpg';
import booksImg from '@/assets/products/books.jpg';

export const products: Product[] = [
  // Electronics (8 products)
  {
    id: '1',
    name: 'Premium Laptop Pro',
    price: 89999,
    category: 'Electronics',
    image: laptopImg,
    description: 'High-performance laptop with latest processor',
    stock: 15,
    rating: 4.8
  },
  {
    id: '2',
    name: 'Wireless Headphones Max',
    price: 12999,
    category: 'Electronics',
    image: headphonesImg,
    description: 'Noise-cancelling wireless headphones',
    stock: 30,
    rating: 4.6
  },
  {
    id: '3',
    name: 'Smartphone X Pro',
    price: 54999,
    category: 'Electronics',
    image: smartphoneImg,
    description: 'Latest smartphone with 5G connectivity',
    stock: 25,
    rating: 4.7
  },
  {
    id: '4',
    name: 'Smart Watch Series 5',
    price: 24999,
    category: 'Electronics',
    image: smartphoneImg,
    description: 'Fitness tracking smartwatch',
    stock: 40,
    rating: 4.5
  },
  {
    id: '5',
    name: 'Bluetooth Speaker',
    price: 4999,
    category: 'Electronics',
    image: headphonesImg,
    description: 'Portable wireless speaker',
    stock: 50,
    rating: 4.4
  },
  {
    id: '6',
    name: 'Gaming Mouse RGB',
    price: 2499,
    category: 'Electronics',
    image: laptopImg,
    description: 'High DPI gaming mouse',
    stock: 60,
    rating: 4.3
  },
  {
    id: '7',
    name: 'Mechanical Keyboard',
    price: 7999,
    category: 'Electronics',
    image: laptopImg,
    description: 'RGB mechanical keyboard',
    stock: 35,
    rating: 4.6
  },
  {
    id: '8',
    name: 'Wireless Earbuds',
    price: 3999,
    category: 'Electronics',
    image: headphonesImg,
    description: 'True wireless earbuds',
    stock: 45,
    rating: 4.5
  },
  
  // Fashion (8 products)
  {
    id: '9',
    name: 'Classic Cotton T-Shirt',
    price: 599,
    category: 'Fashion',
    image: tshirtImg,
    description: 'Comfortable cotton t-shirt',
    stock: 100,
    rating: 4.2
  },
  {
    id: '10',
    name: 'Running Shoes Pro',
    price: 4999,
    category: 'Fashion',
    image: shoesImg,
    description: 'Professional running shoes',
    stock: 75,
    rating: 4.7
  },
  {
    id: '11',
    name: 'Denim Jeans',
    price: 1999,
    category: 'Fashion',
    image: tshirtImg,
    description: 'Slim fit denim jeans',
    stock: 80,
    rating: 4.4
  },
  {
    id: '12',
    name: 'Casual Sneakers',
    price: 2999,
    category: 'Fashion',
    image: shoesImg,
    description: 'Everyday casual sneakers',
    stock: 65,
    rating: 4.3
  },
  {
    id: '13',
    name: 'Hoodie Sweatshirt',
    price: 1499,
    category: 'Fashion',
    image: tshirtImg,
    description: 'Warm comfortable hoodie',
    stock: 55,
    rating: 4.5
  },
  {
    id: '14',
    name: 'Sports Cap',
    price: 399,
    category: 'Fashion',
    image: tshirtImg,
    description: 'Adjustable sports cap',
    stock: 90,
    rating: 4.1
  },
  {
    id: '15',
    name: 'Leather Belt',
    price: 799,
    category: 'Fashion',
    image: shoesImg,
    description: 'Premium leather belt',
    stock: 70,
    rating: 4.3
  },
  {
    id: '16',
    name: 'Designer Sunglasses',
    price: 2499,
    category: 'Fashion',
    image: tshirtImg,
    description: 'UV protection sunglasses',
    stock: 50,
    rating: 4.6
  },

  // Home & Kitchen (6 products)
  {
    id: '17',
    name: 'Coffee Maker Deluxe',
    price: 6999,
    category: 'Home & Kitchen',
    image: coffeeMakerImg,
    description: 'Automatic coffee maker',
    stock: 30,
    rating: 4.5
  },
  {
    id: '18',
    name: 'Blender Pro 3000',
    price: 3999,
    category: 'Home & Kitchen',
    image: coffeeMakerImg,
    description: 'High-speed blender',
    stock: 25,
    rating: 4.4
  },
  {
    id: '19',
    name: 'Non-Stick Cookware Set',
    price: 8999,
    category: 'Home & Kitchen',
    image: coffeeMakerImg,
    description: '10-piece cookware set',
    stock: 20,
    rating: 4.6
  },
  {
    id: '20',
    name: 'Rice Cooker Electric',
    price: 2999,
    category: 'Home & Kitchen',
    image: coffeeMakerImg,
    description: 'Automatic rice cooker',
    stock: 35,
    rating: 4.3
  },
  {
    id: '21',
    name: 'Microwave Oven',
    price: 7499,
    category: 'Home & Kitchen',
    image: coffeeMakerImg,
    description: '20L microwave oven',
    stock: 15,
    rating: 4.5
  },
  {
    id: '22',
    name: 'Dinner Plate Set',
    price: 1999,
    category: 'Home & Kitchen',
    image: coffeeMakerImg,
    description: '24-piece dinner set',
    stock: 40,
    rating: 4.2
  },

  // Sports & Fitness (6 products)
  {
    id: '23',
    name: 'Yoga Mat Premium',
    price: 1299,
    category: 'Sports & Fitness',
    image: yogaMatImg,
    description: 'Non-slip yoga mat',
    stock: 45,
    rating: 4.6
  },
  {
    id: '24',
    name: 'Dumbbell Set 10kg',
    price: 2499,
    category: 'Sports & Fitness',
    image: yogaMatImg,
    description: 'Adjustable dumbbell set',
    stock: 30,
    rating: 4.5
  },
  {
    id: '25',
    name: 'Resistance Bands',
    price: 799,
    category: 'Sports & Fitness',
    image: yogaMatImg,
    description: 'Exercise resistance bands',
    stock: 60,
    rating: 4.3
  },
  {
    id: '26',
    name: 'Gym Bag Large',
    price: 1999,
    category: 'Sports & Fitness',
    image: yogaMatImg,
    description: 'Spacious gym bag',
    stock: 40,
    rating: 4.4
  },
  {
    id: '27',
    name: 'Jump Rope Speed',
    price: 399,
    category: 'Sports & Fitness',
    image: yogaMatImg,
    description: 'Adjustable jump rope',
    stock: 70,
    rating: 4.2
  },
  {
    id: '28',
    name: 'Water Bottle 1L',
    price: 499,
    category: 'Sports & Fitness',
    image: yogaMatImg,
    description: 'Insulated water bottle',
    stock: 80,
    rating: 4.5
  },

  // Books & Stationery (6 products)
  {
    id: '29',
    name: 'Bestseller Novel Collection',
    price: 1499,
    category: 'Books & Stationery',
    image: booksImg,
    description: 'Set of 5 bestseller novels',
    stock: 50,
    rating: 4.7
  },
  {
    id: '30',
    name: 'Premium Notebook A5',
    price: 299,
    category: 'Books & Stationery',
    image: booksImg,
    description: 'Ruled notebook 200 pages',
    stock: 100,
    rating: 4.4
  },
  {
    id: '31',
    name: 'Gel Pen Set 10pcs',
    price: 199,
    category: 'Books & Stationery',
    image: booksImg,
    description: 'Smooth writing gel pens',
    stock: 120,
    rating: 4.3
  },
  {
    id: '32',
    name: 'Study Desk Organizer',
    price: 799,
    category: 'Books & Stationery',
    image: booksImg,
    description: 'Multi-compartment organizer',
    stock: 45,
    rating: 4.5
  },
  {
    id: '33',
    name: 'Art Supplies Kit',
    price: 2499,
    category: 'Books & Stationery',
    image: booksImg,
    description: 'Complete art supplies set',
    stock: 35,
    rating: 4.6
  },
  {
    id: '34',
    name: 'Sticky Notes Pack',
    price: 149,
    category: 'Books & Stationery',
    image: booksImg,
    description: 'Colorful sticky notes',
    stock: 150,
    rating: 4.2
  }
];
