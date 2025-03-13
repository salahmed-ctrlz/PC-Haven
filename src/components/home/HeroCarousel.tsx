import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import premiumPartsImage from "@/components/home/Premium PC Parts & Accessories.png";
import nextGenGraphicsImage from "@/components/home/Next-Gen Graphics Cards.png";
import dreamSetupImage from "@/components/home/Build Your Dream Setup.png";

const heroSlides = [
  {
    id: 1,
    image: premiumPartsImage,
    title: "Premium PC Parts & Accessories",
    description: "Build your dream gaming PC with top-quality components",
    cta: "Shop Now",
    link: "/products"
  },
  {
    id: 2,
    image: nextGenGraphicsImage,
    title: "Next-Gen Graphics Cards",
    description: "Experience incredible realism with the latest GPUs",
    cta: "Explore GPUs",
    link: "/products?category=Graphics%20Cards"
  },
  {
    id: 3,
    image: dreamSetupImage,
    title: "Build Your Dream Setup",
    description: "Find everything you need for your perfect PC build",
    cta: "Start Building",
    link: "/products"
  }
];


const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  // Auto rotate slides
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-[500px] md:h-[600px]">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {heroSlides.map((slide) => (
          <div
            key={slide.id}
            className="w-full h-full flex-shrink-0 relative"
            style={{
              backgroundImage: `url(${slide.image})`, // Use the URL path here
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-3xl animate-fadeIn">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl md:text-2xl mb-8">{slide.description}</p>
                <Link to={slide.link}>
                  <Button size="lg" className="text-lg px-8 py-6">
                    {slide.cta}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2"
        onClick={goToPrevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2"
        onClick={goToNextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
