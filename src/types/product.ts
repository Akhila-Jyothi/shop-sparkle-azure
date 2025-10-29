export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  stock: number;
  rating: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export type Category = 'Electronics' | 'Fashion' | 'Home & Kitchen' | 'Sports & Fitness' | 'Books & Stationery';
