import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import aboutPoster from "@/assets/images/AboutPoster.png"; // Import the image

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">About PC Parts Haven</h1>
            
            <div className="mb-12">
              {/* Use imported image */}
              <img 
                src={aboutPoster} 
                alt="Our Team" 
                className="rounded-lg w-full h-auto mb-6"
              />
              
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2015, PC Parts Haven began with a simple mission: to provide PC enthusiasts, gamers, and professionals with high-quality computer components at competitive prices. What started as a small online store run by three tech enthusiasts has grown into one of the most trusted names in PC components retail.
              </p>
              <p className="text-gray-700 mb-4">
                Our founders, all avid gamers and PC builders themselves, were frustrated with the lack of reliable sources for quality PC parts. They decided to create a store that not only offered premium products but also provided expert advice and exceptional customer service.
              </p>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                At PC Parts Haven, our mission is to empower our customers to build the perfect computing experience. We believe that everyone deserves access to high-quality PC components, regardless of their technical expertise or budget.
              </p>
              <p className="text-gray-700 mb-4">
                We're committed to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Offering a carefully curated selection of premium PC components from trusted manufacturers</li>
                <li>Providing transparent information and expert advice to help customers make informed decisions</li>
                <li>Delivering exceptional customer service at every stage of the purchasing journey</li>
                <li>Building a community of PC enthusiasts who share our passion for technology</li>
              </ul>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="font-bold text-lg mb-2">Expert Knowledge</h3>
                  <p className="text-gray-700">
                    Our team consists of passionate PC builders and tech enthusiasts who are always ready to share their expertise and help you find the right components for your needs.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="font-bold text-lg mb-2">Quality Assurance</h3>
                  <p className="text-gray-700">
                    We only stock products from reputable manufacturers and conduct quality checks to ensure that every item meets our high standards.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="font-bold text-lg mb-2">Competitive Pricing</h3>
                  <p className="text-gray-700">
                    We work directly with manufacturers and distributors to offer competitive prices without compromising on quality.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="font-bold text-lg mb-2">Exceptional Support</h3>
                  <p className="text-gray-700">
                    Our customer support team is available 7 days a week to assist with any questions or issues you might have.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
              <p className="text-gray-700 mb-4">
                PC Parts Haven is more than just an online store – we're a community of tech enthusiasts who share a passion for building and upgrading PCs. Follow us on social media, subscribe to our newsletter, or visit our blog to stay updated on the latest tech news, product releases, and building guides.
              </p>
              <p className="text-gray-700">
                Thank you for choosing PC Parts Haven as your trusted source for PC components. We look forward to helping you build your dream machine!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
