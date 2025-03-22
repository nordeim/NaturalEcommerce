import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import ProductGrid from '@/components/shop/ProductGrid';
import ProductFilter from '@/components/shop/ProductFilter';

const Shop = () => {
  const [location] = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<number | undefined>();
  const [searchTerm, setSearchTerm] = useState('');

  // Parse categoryId from URL if present
  useEffect(() => {
    const searchParams = new URLSearchParams(location.split('?')[1]);
    const categoryParam = searchParams.get('category');
    
    if (categoryParam) {
      setSelectedCategory(parseInt(categoryParam, 10));
    }
  }, [location]);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-display font-bold text-dark mb-4">Our Products</h1>
          <p className="text-lg text-dark opacity-70 max-w-2xl mx-auto">
            Explore our collection of natural wellness products designed to enhance your daily self-care rituals.
          </p>
        </div>
        
        <div className="lg:flex lg:gap-10">
          <div className="lg:w-1/4">
            <ProductFilter 
              onCategoryChange={setSelectedCategory} 
              onSearchChange={setSearchTerm}
              selectedCategory={selectedCategory}
            />
          </div>
          
          <div className="lg:w-3/4">
            <ProductGrid 
              selectedCategory={selectedCategory}
              searchTerm={searchTerm}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
