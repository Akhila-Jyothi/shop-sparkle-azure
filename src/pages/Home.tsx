import { useState } from 'react';
import Navbar from '@/components/Navbar';
import BannerCarousel from '@/components/BannerCarousel';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Category } from '@/types/product';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

const categories: Category[] = ['Electronics', 'Fashion', 'Home & Kitchen', 'Sports & Fitness', 'Books & Stationery'];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesPrice && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar onSearch={setSearchQuery} />
      
      <main className="container mx-auto px-4 py-8">
        <BannerCarousel />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="space-y-6">
            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <div className="space-y-2">
                <Button
                  variant={selectedCategory === 'All' ? 'default' : 'outline'}
                  className="w-full justify-start"
                  onClick={() => setSelectedCategory('All')}
                >
                  All Products
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    className="w-full justify-start"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Price Range</h3>
              <div className="space-y-4">
                <Slider
                  min={0}
                  max={100000}
                  step={1000}
                  value={priceRange}
                  onValueChange={setPriceRange}
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>₹{priceRange[0].toLocaleString()}</span>
                  <span>₹{priceRange[1].toLocaleString()}</span>
                </div>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">
                {selectedCategory === 'All' ? 'All Products' : selectedCategory}
              </h2>
              <p className="text-muted-foreground">{filteredProducts.length} products found</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
