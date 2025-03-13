
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingCart, ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <ShoppingCart className="mx-auto h-16 w-16 text-gray-400 mb-4" />
            <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="mb-6">Add some products to your cart to proceed with checkout.</p>
            <Link to="/products">
              <Button>Start Shopping</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const tax = cartTotal * 0.07; // 7% tax
  const shipping = cartTotal > 100 ? 0 : 9.99;
  const orderTotal = cartTotal + tax + shipping;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <div className="p-6 border-b">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-lg">
                      Cart Items ({cartItems.length})
                    </h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      onClick={clearCart}
                    >
                      Clear Cart
                    </Button>
                  </div>
                </div>

                <div className="divide-y">
                  {cartItems.map(({ product, quantity }) => (
                    <div key={product.id} className="p-6 flex flex-col sm:flex-row gap-4">
                      <div className="flex-shrink-0">
                        <Link to={`/products/${product.id}`}>
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-24 h-24 object-contain"
                          />
                        </Link>
                      </div>
                      <div className="flex-1">
                        <Link to={`/products/${product.id}`}>
                          <h3 className="font-medium text-lg hover:text-primary transition-colors">
                            {product.name}
                          </h3>
                        </Link>
                        <p className="text-gray-500 text-sm mb-2">
                          {product.category}
                        </p>
                        <div className="flex items-center justify-between flex-wrap gap-4">
                          <div className="flex items-center border rounded-md">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => updateQuantity(product.id, quantity - 1)}
                              className="h-8 w-8 rounded-l-md"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center text-sm">{quantity}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => updateQuantity(product.id, quantity + 1)}
                              disabled={quantity >= product.stock}
                              className="h-8 w-8 rounded-r-md"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="font-semibold">${(product.price * quantity).toFixed(2)}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeFromCart(product.id)}
                              className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-20">
                <h2 className="font-semibold text-lg mb-4">Order Summary</h2>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Estimated Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="flex justify-between font-semibold text-lg mb-6">
                  <span>Total</span>
                  <span>${orderTotal.toFixed(2)}</span>
                </div>
                
                <Link to="/checkout">
                  <Button className="w-full gap-2">
                    Proceed to Checkout <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                
                <div className="mt-6">
                  <Link to="/products" className="text-primary flex items-center justify-center hover:underline">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
