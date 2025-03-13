
import React, { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/products/ProductCard"; // Fixed import
import { Product, products } from "@/data/products";

const Favorites = () => {
  const { toast } = useToast();
  const [favorites, setFavorites] = useState<Product[]>([]);

  // For demo purposes, just show some random products as favorites
  useEffect(() => {
    // Simulate loading favorites
    const randomFavorites = products
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    
    setFavorites(randomFavorites);
  }, []);

  const removeFavorite = (productId: number) => {
    setFavorites(favorites.filter(product => product.id !== productId));
    toast({
      title: "Removed from favorites",
      description: "Product has been removed from your favorites",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">My Favorites</h1>

        {favorites.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-medium mb-2">No favorites yet</h2>
            <p className="text-gray-500 mb-6">Items you add to your favorites will appear here</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favorites.map((product) => (
              <div key={product.id} className="relative">
                <ProductCard product={product} />
                <button
                  onClick={() => removeFavorite(product.id)}
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full p-2 shadow-sm z-10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="red"
                    stroke="red"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Favorites;
