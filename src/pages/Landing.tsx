
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Search, User, ShoppingCart, ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
          <div className="flex flex-col justify-center z-10">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Nourish Your Body Naturally</h2>
            <p className="text-xl text-gray-700 mb-8">Experience the finest selection of organic snacks and superfoods, carefully curated for your wellness journey.</p>
            <Button className="w-fit bg-black text-white px-8 py-6 text-lg font-semibold">
              Shop Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="relative h-full min-h-[400px]">
            {/* Background for hero section */}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-transparent z-0">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Premium nuts background"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "NATURAL NUTS",
              image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            },
            {
              title: "DRIED FRUITS",
              image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            },
            {
              title: "SUPPLEMENTS",
              image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            },
            {
              title: "DRINKS",
              image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            }
          ].map((category, index) => (
            <Card key={index} className="relative overflow-hidden rounded-2xl cursor-pointer h-[300px]">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-6 left-6">
                <span className="bg-black text-white px-6 py-2 rounded-full font-medium">{category.title}</span>
              </div>
            </Card>
          ))}
          <Card className="relative overflow-hidden rounded-2xl cursor-pointer h-[300px] md:col-span-2">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Bars and Snacks"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-6 left-6">
              <span className="bg-black text-white px-6 py-2 rounded-full font-medium">BARS AND SNACKS</span>
            </div>
          </Card>
        </div>
      </section>

      {/* Quality Feedback Section */}
      <section className="container mx-auto px-4 py-16 relative">
        <div className="mb-12">
          <span className="text-sm font-medium text-gray-600 uppercase">Video Reviews</span>
          <h2 className="text-5xl font-extrabold text-gray-900 mt-2">PREMIUM QUALITY VERIFIED BY HEALTH ENTHUSIASTS</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative rounded-2xl overflow-hidden cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
              alt="Video review thumbnail"
              className="w-full h-[400px] object-cover object-top"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button className="bg-white text-black rounded-full w-16 h-16 flex items-center justify-center">
                <Play className="h-6 w-6" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-sm font-medium text-gray-600 mb-2">New reviews</h3>
                <div className="text-4xl font-bold">12.43%</div>
                <div className="text-green-500 text-sm mt-2">
                  <ArrowRight className="inline mr-1 h-4 w-4" />
                  +3.8% from last month
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-sm font-medium text-gray-600 mb-2">New users</h3>
                <div className="text-4xl font-bold">0.17%</div>
                <div className="text-green-500 text-sm mt-2">
                  <ArrowRight className="inline mr-1 h-4 w-4" />
                  +2.5% from last month
                </div>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-gray-700 mb-6">Our customers love the exceptional quality and taste of our products. Join thousands of health-conscious individuals who have made us their go-to source for natural snacks.</p>
              <Button className="bg-black text-white px-6 py-3 font-medium">
                Read All Reviews <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">BESTSELLERS THIS MONTH</h2>
          <p className="text-gray-600 mt-4">Discover what our customers are loving right now</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <Card key={item} className="overflow-hidden cursor-pointer">
              <div className="h-[250px] overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d`}
                  alt={`Product ${item}`}
                  className="w-full h-full object-cover object-top transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">Organic Snack Mix</h3>
                  <span className="text-sm font-bold">$12.99</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">Premium blend of nuts and dried fruits</p>
                <Button className="w-full bg-black text-white py-2">
                  Add to Cart
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">JOIN OUR HEALTHY COMMUNITY</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">Subscribe to our newsletter for exclusive offers, nutrition tips, and first access to new products.</p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-l-lg border-none focus:outline-none"
            />
            <Button className="bg-black text-white px-6 py-3 rounded-r-lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Healthy Bites</h3>
              <p className="text-gray-400">Premium healthy snacks delivered to your doorstep.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Shop</h3>
              <ul className="space-y-2">
                {["All Products", "Natural Nuts", "Dried Fruits", "Supplements", "Drinks"].map((item) => (
                  <li key={item}><Link to="#" className="text-gray-400 hover:text-white">{item}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                {["About Us", "Sustainability", "Our Farmers", "Careers", "Contact"].map((item) => (
                  <li key={item}><Link to="#" className="text-gray-400 hover:text-white">{item}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Help</h3>
              <ul className="space-y-2">
                {["Customer Service", "FAQs", "Shipping & Returns", "Privacy Policy", "Terms & Conditions"].map((item) => (
                  <li key={item}><Link to="#" className="text-gray-400 hover:text-white">{item}</Link></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 Healthy Bites. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
