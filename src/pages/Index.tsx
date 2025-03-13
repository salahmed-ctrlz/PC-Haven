import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroCarousel from "@/components/home/HeroCarousel";
import ProductCard from "@/components/products/ProductCard";
import { categories, partners, products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import aboutPoster from "@/assets/images/AboutPoster.png"; // Import image

const Index = () => {
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroCarousel />

        {/* Categories Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Product Categories</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Browse our wide selection of PC components and accessories to build your perfect setup
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/products?category=${encodeURIComponent(category.name)}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 duration-300 flex flex-col items-center p-4">
                    <div className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center mb-4">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="font-medium text-center group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
                <p className="text-gray-600">Our handpicked selection of premium components</p>
              </div>
              <Link to="/products">
                <Button variant="outline" className="hidden md:flex items-center gap-2">
                  View All Products <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredProducts.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center mt-10 md:hidden">
              <Link to="/products">
                <Button variant="outline" className="items-center gap-2">
                  View All Products <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">About PC Parts Haven</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2015, PC Parts Haven has been the go-to destination for PC enthusiasts, gamers, and professionals looking for high-quality computer components and accessories.
                </p>
                <p className="text-gray-600 mb-6">
                  We pride ourselves on offering the latest technology, competitive prices, and exceptional customer service. Our team of tech experts is always available to help you find the perfect parts for your build.
                </p>
                <Link to="/about">
                  <Button>Learn More About Us</Button>
                </Link>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={aboutPoster} // Use imported image
                  alt="About PC Parts Haven"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Our Partners</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We work with the most trusted brands in the industry to bring you reliable and high-performance components
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="bg-white rounded-lg p-6 flex items-center justify-center hover:shadow-md transition-shadow"
                >
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="h-12 opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
