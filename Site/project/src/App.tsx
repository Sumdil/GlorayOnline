import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';
import { Cart } from './components/Cart';
import { CustomerForm } from './components/CustomerForm';
import { Product, CartItem } from './types';

// Sample products data
const products: Product[] = [
  {
    id: 1,
    name: "Classic White Sneakers",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
    description: "Timeless white sneakers for everyday wear"
  },
  {
    id: 2,
    name: "Leather Backpack",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa",
    description: "Durable leather backpack perfect for daily use"
  },
  {
    id: 3,
    name: "Minimalist Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
    description: "Elegant timepiece with simple design"
  },
  {
    id: 4,
    name: "Denim Jacket",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0",
    description: "Classic denim jacket for any season"
  }
];

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems(items => {
      const existingItem = items.find(item => item.id === product.id);
      if (existingItem) {
        return items.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...items, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
      />

      {/* Hero Section */}
      <div className="relative h-[70vh] bg-black">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
          alt="Hero"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Summer Collection 2024</h1>
            <p className="text-xl mb-8">Discover our latest arrivals</p>
            <a
              href="#products"
              className="bg-white text-black px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section id="products" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </section>

      {/* Customer Form Section */}
      <section id="checkout" className="max-w-7xl mx-auto px-4 py-16">
        <CustomerForm onSubmit={console.log} />
      </section>

      {/* Cart */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />
    </div>
  );
}

export default App;