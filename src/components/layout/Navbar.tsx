
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingCart, User, Search, BookmarkIcon } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import AuthDialog from "@/components/auth/AuthDialog";

const Navbar = () => {
  const { cartCount } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <div className="px-2 py-6">
                <div onClick={() => handleNavigation("/")} className="flex items-center gap-2 font-bold cursor-pointer">
                  PC Parts Haven
                </div>
                <nav className="mt-6 flex flex-col gap-4">
                  <div onClick={() => handleNavigation("/")} className="text-sm font-medium hover:underline cursor-pointer">
                    Home
                  </div>
                  <div onClick={() => handleNavigation("/products")} className="text-sm font-medium hover:underline cursor-pointer">
                    All Products
                  </div>
                  <div onClick={() => handleNavigation("/about")} className="text-sm font-medium hover:underline cursor-pointer">
                    About Us
                  </div>
                  <div onClick={() => handleNavigation("/contact")} className="text-sm font-medium hover:underline cursor-pointer">
                    Contact
                  </div>
                  <div onClick={() => handleNavigation("/faq")} className="text-sm font-medium hover:underline cursor-pointer">
                    FAQ
                  </div>
                  <div onClick={() => handleNavigation("/favorites")} className="text-sm font-medium hover:underline cursor-pointer">
                    My Favorites
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            PC Parts Haven
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/products" className="text-sm font-medium transition-colors hover:text-primary">
            Products
          </Link>
          <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About Us
          </Link>
          <Link to="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
          <Link to="/faq" className="text-sm font-medium transition-colors hover:text-primary">
            FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <div className="relative hidden md:block">
            {isSearchOpen ? (
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="border rounded-md py-1 px-2 w-full max-w-[200px]"
                  autoFocus
                  onBlur={() => setIsSearchOpen(false)}
                />
                <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            )}
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsAuthOpen(true)}
            className="relative group"
          >
            <User className="h-5 w-5 group-hover:text-primary transition-colors" />
            <span className="sr-only">Account</span>
          </Button>
          <Link to="/favorites">
            <Button 
              variant="ghost" 
              size="icon"
              className="relative group"
            >
              <BookmarkIcon className="h-5 w-5 group-hover:text-primary transition-colors" />
              <span className="sr-only">Favorites</span>
            </Button>
          </Link>
          <Link to="/cart">
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative group"
            >
              <ShoppingCart className="h-5 w-5 group-hover:text-primary transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
        </div>
      </div>
      <AuthDialog open={isAuthOpen} onOpenChange={setIsAuthOpen} />
    </header>
  );
};

export default Navbar;
