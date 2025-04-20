import React, { useState } from 'react';
import { Search, Filter, SortDesc, Grid, List, ChevronDown } from 'lucide-react';
import ProductCard from '../components/products/ProductCard';
import ProductRow from '../components/products/ProductRow';
import ProductFilters from '../components/products/ProductFilters';

interface ProductData {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  rating: number;
  reviews: number;
  sold: number;
  image: string;
  badge?: string;
}

const ProductSearch: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data for products
  const products: ProductData[] = [
    {
      id: 1,
      name: 'Xiaomi Redmi Note 10 Pro 8GB RAM 128GB ROM Smartphone',
      price: 'Rp3,599,000',
      originalPrice: 'Rp3,999,000',
      discount: '10%',
      rating: 4.8,
      reviews: 1245,
      sold: 5000,
      image: 'https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      badge: 'Mall',
    },
    {
      id: 2,
      name: 'Nike Air Force 1 Low \'07\' Men\'s Shoes White Original',
      price: 'Rp1,549,000',
      rating: 4.9,
      reviews: 3456,
      sold: 10000,
      image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      name: 'COSRX Advanced Snail 96 Mucin Power Essence 100ml',
      price: 'Rp189,000',
      originalPrice: 'Rp219,000',
      discount: '14%',
      rating: 4.9,
      reviews: 9876,
      sold: 20000,
      image: 'https://images.pexels.com/photos/4465829/pexels-photo-4465829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      badge: 'Official',
    },
    {
      id: 4,
      name: 'Samsung Galaxy S23 Ultra 12GB RAM 256GB ROM Smartphone',
      price: 'Rp18,999,000',
      originalPrice: 'Rp19,999,000',
      discount: '5%',
      rating: 4.7,
      reviews: 789,
      sold: 2000,
      image: 'https://images.pexels.com/photos/1447254/pexels-photo-1447254.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      badge: 'Mall',
    },
    {
      id: 5,
      name: 'Philips Air Fryer HD9252/90 Digital Touch Control',
      price: 'Rp1,299,000',
      originalPrice: 'Rp1,799,000',
      discount: '28%',
      rating: 4.8,
      reviews: 2345,
      sold: 8000,
      image: 'https://images.pexels.com/photos/4108570/pexels-photo-4108570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 6,
      name: 'Apple AirPods Pro 2nd Generation with MagSafe Charging Case',
      price: 'Rp3,199,000',
      rating: 4.9,
      reviews: 4567,
      sold: 15000,
      image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      badge: 'Official',
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement search logic here
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Product Search</h1>
        <p className="mt-1 text-sm text-gray-500">
          Search and analyze Shopee products
        </p>
      </div>

      <div className="card p-5 mb-6">
        <form onSubmit={handleSearch}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="input pl-10 py-3 w-full"
                placeholder="Search products by name, brand, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex space-x-2">
              <button
                type="button"
                className="btn btn-outline py-3 flex items-center"
                onClick={toggleFilters}
              >
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </button>
              <button
                type="submit"
                className="btn btn-primary py-3 flex-shrink-0"
              >
                Search
              </button>
            </div>
          </div>
        </form>

        {showFilters && <ProductFilters />}
      </div>

      <div className="card mb-6">
        <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div className="mb-3 sm:mb-0">
            <span className="text-sm text-gray-700">
              <strong>123,456</strong> products found
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <span className="text-sm text-gray-700 mr-2">Sort by:</span>
              <div className="relative">
                <select className="input py-1 pr-8 pl-2 text-sm appearance-none">
                  <option>Best Match</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                  <option>Most Popular</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                className={`p-1.5 rounded ${
                  viewMode === 'grid' ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'
                }`}
                onClick={() => setViewMode('grid')}
                aria-label="Grid view"
              >
                <Grid className="h-5 w-5 text-gray-600" />
              </button>
              <button
                className={`p-1.5 rounded ${
                  viewMode === 'list' ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'
                }`}
                onClick={() => setViewMode('list')}
                aria-label="List view"
              >
                <List className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {products.map((product) => (
              <ProductRow key={product.id} product={product} />
            ))}
          </div>
        )}

        <div className="p-4 border-t border-gray-200 flex justify-center">
          <nav className="flex items-center">
            <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-50">
              Previous
            </button>
            <div className="mx-2 flex">
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`w-10 h-10 mx-1 flex items-center justify-center rounded-md ${
                    page === 1
                      ? 'bg-primary-50 text-primary-600 border border-primary-300'
                      : 'border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-50">
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;