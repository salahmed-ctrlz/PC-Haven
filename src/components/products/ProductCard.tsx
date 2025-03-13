
import React from "react";
import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
          {product.featured && (
            <span className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded-md">
              Featured
            </span>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // Add to wishlist functionality would go here
            }}
          >
            <Heart className="h-5 w-5" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/products/${product.id}`}>
            <h3 className="font-medium hover:text-primary transition-colors line-clamp-2">
              {product.name}
            </h3>
          </Link>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">${product.price.toFixed(2)}</span>
          <div className="flex items-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                  stroke={i < Math.floor(product.rating) ? "none" : "currentColor"}
                  className={`w-4 h-4 ${
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
            <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full gap-2"
          onClick={() => addToCart(product)}
        >
          <ShoppingCart className="w-4 h-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
