
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners."
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping typically takes 3-5 business days for domestic orders and 7-14 business days for international orders. Express shipping options are available at checkout."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. Please check the shipping calculator at checkout for specific details."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items. Products must be in original packaging and in unused condition. Some items like CPUs and opened software are non-returnable for security reasons."
    },
    {
      question: "Are the products new or refurbished?",
      answer: "Unless explicitly stated as 'Refurbished' or 'Open Box', all products are brand new and come with the manufacturer's warranty."
    },
    {
      question: "Do you offer price matching?",
      answer: "Yes, we offer price matching on identical products from authorized retailers. Contact our customer service with details of the competitor's offer to request a price match."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account and viewing your order history."
    },
    {
      question: "Do you offer warranties on products?",
      answer: "All products come with the manufacturer's warranty. We also offer optional extended warranty plans on select items at checkout."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
        
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="bg-primary/5 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-3">Still have questions?</h2>
          <p className="mb-4">Our support team is here to help you with any questions you might have.</p>
          <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md" asChild>
            <Link to="/contact">Contact Support</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
