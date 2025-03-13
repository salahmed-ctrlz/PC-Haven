
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Minus, Plus, Heart, ShoppingCart, ChevronLeft } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <p className="mb-6">The product you're looking for does not exist.</p>
            <Link to="/products">
              <Button>Back to Products</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Link to="/products" className="text-primary flex items-center hover:underline">
              <ChevronLeft className="h-4 w-4 mr-1" /> Back to Products
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Product Images */}
            <div className="bg-white rounded-lg overflow-hidden border">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-contain aspect-square"
              />
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                      stroke={i < Math.floor(product.rating) ? "none" : "currentColor"}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-500 ml-2">{product.rating} Rating</span>
              </div>

              <div className="text-3xl font-bold mb-6">${product.price.toFixed(2)}</div>

              <p className="text-gray-700 mb-6">{product.description}</p>

              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <div className="text-gray-700 font-medium">Availability:</div>
                  <div className="ml-2">
                    {product.stock > 0 ? (
                      <span className="text-green-600">{product.stock} in stock</span>
                    ) : (
                      <span className="text-red-600">Out of stock</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-gray-700 font-medium">Category:</div>
                  <div className="ml-2">{product.category}</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center border rounded-md">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                    className="h-10 w-10"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-10 text-center">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={incrementQuantity}
                    disabled={quantity >= product.stock}
                    className="h-10 w-10"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={handleAddToCart} 
                  className="flex-1 gap-2"
                  disabled={product.stock === 0}
                >
                  <ShoppingCart className="h-5 w-5" /> Add to Cart
                </Button>
                <Button variant="outline" size="icon" className="h-10 w-10">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <Tabs defaultValue="description" className="mb-12">
            <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0">
              <TabsTrigger
                value="description"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent py-3"
              >
                Description
              </TabsTrigger>
              <TabsTrigger
                value="specifications"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent py-3"
              >
                Specifications
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent py-3"
              >
                Reviews
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="pt-6">
              <p className="text-gray-700">{product.description}</p>
              <p className="text-gray-700 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Sed eu turpis quis nunc facilisis sagittis. Proin
                tincidunt magna vel tellus consequat, non fermentum nisl
                venenatis. Morbi malesuada libero eu diam porttitor, ac
                scelerisque lectus condimentum.
              </p>
            </TabsContent>
            <TabsContent value="specifications" className="pt-6">
              <div className="border-t">
                <div className="grid grid-cols-3 py-3 border-b">
                  <div className="font-medium">Category</div>
                  <div className="col-span-2">{product.category}</div>
                </div>
                <div className="grid grid-cols-3 py-3 border-b">
                  <div className="font-medium">Manufacturer</div>
                  <div className="col-span-2">PC Parts Haven</div>
                </div>
                <div className="grid grid-cols-3 py-3 border-b">
                  <div className="font-medium">Model</div>
                  <div className="col-span-2">PCH-{product.id}00{product.id}</div>
                </div>
                <div className="grid grid-cols-3 py-3 border-b">
                  <div className="font-medium">Warranty</div>
                  <div className="col-span-2">2 Years Limited Warranty</div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="pt-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
                <div className="flex items-center mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                        stroke={i < Math.floor(product.rating) ? "none" : "currentColor"}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"
                        }`}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-700">
                    Based on {Math.floor(Math.random() * 50) + 10} reviews
                  </span>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="border-b pb-6">
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill={i < 5 ? "currentColor" : "none"}
                          stroke={i < 5 ? "none" : "currentColor"}
                          className={`w-4 h-4 ${
                            i < 5 ? "text-yellow-400" : "text-gray-300"
                          }`}
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 font-bold">Amazing product!</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-2">
                    By John D. on March 15, 2023
                  </p>
                  <p className="text-gray-700">
                    This is exactly what I was looking for. The quality is outstanding
                    and it works perfectly with my setup. Highly recommended!
                  </p>
                </div>
                
                <div className="border-b pb-6">
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill={i < 4 ? "currentColor" : "none"}
                          stroke={i < 4 ? "none" : "currentColor"}
                          className={`w-4 h-4 ${
                            i < 4 ? "text-yellow-400" : "text-gray-300"
                          }`}
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 font-bold">Great value for money</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-2">
                    By Sarah M. on February 28, 2023
                  </p>
                  <p className="text-gray-700">
                    I'm very impressed with the quality given the price point. Shipping
                    was quick and the item arrived well-packaged. Would buy from this store again.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {relatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
