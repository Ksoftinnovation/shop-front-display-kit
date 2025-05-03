
import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Pinterest, 
  Snapchat, 
  Tiktok, 
  Linkedin,
  Apple,
  Android
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">COMPANY INFO</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-shop-purple transition-colors">About SHEIN</a></li>
              <li><a href="#" className="text-sm hover:text-shop-purple transition-colors">Fashion Blogger</a></li>
              <li><a href="#" className="text-sm hover:text-shop-purple transition-colors">Social Responsibility</a></li>
              <li><a href="#" className="text-sm hover:text-shop-purple transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Help & Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">HELP & SUPPORT</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-shop-purple transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm hover:text-shop-purple transition-colors">Returns</a></li>
              <li><a href="#" className="text-sm hover:text-shop-purple transition-colors">Refund</a></li>
              <li><a href="#" className="text-sm hover:text-shop-purple transition-colors">How To Order</a></li>
              <li><a href="#" className="text-sm hover:text-shop-purple transition-colors">How To Track</a></li>
              <li><a href="#" className="text-sm hover:text-shop-purple transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm hover:text-shop-purple transition-colors">SHEIN VIP</a></li>
              <li><a href="#" className="text-sm hover:text-shop-purple transition-colors">Affiliate</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">CUSTOMER CARE</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-shop-purple transition-colors">Contact us</a></li>
              <li><a href="#" className="text-sm hover:text-shop-purple transition-colors">Payment Method</a></li>
              <li><a href="#" className="text-sm hover:text-shop-purple transition-colors">Bonus Point</a></li>
            </ul>
          </div>

          {/* Find Us On */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">FIND US ON</h3>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="text-shop-black hover:text-shop-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-shop-black hover:text-shop-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-shop-black hover:text-shop-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-shop-black hover:text-shop-purple transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-shop-black hover:text-shop-purple transition-colors">
                <Pinterest size={20} />
              </a>
              <a href="#" className="text-shop-black hover:text-shop-purple transition-colors">
                <Snapchat size={20} />
              </a>
              <a href="#" className="text-shop-black hover:text-shop-purple transition-colors">
                <Tiktok size={20} />
              </a>
              <a href="#" className="text-shop-black hover:text-shop-purple transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* App */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">APP</h3>
            <div className="flex gap-4">
              <a href="#" className="text-shop-black hover:text-shop-purple transition-colors">
                <Apple size={20} />
              </a>
              <a href="#" className="text-shop-black hover:text-shop-purple transition-colors">
                <Android size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 mb-10">
          <h3 className="text-base font-semibold mb-6 text-center md:text-left">SIGN UP FOR SHEIN STYLE NEWS</h3>
          
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-2">
              <Input 
                type="email" 
                placeholder="Your Email Address" 
                className="flex-1"
              />
              <Button className="bg-shop-black hover:bg-shop-purple text-white">
                Subscribe
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex flex-row">
                <Button 
                  variant="outline" 
                  className="rounded-r-none border-r-0"
                >
                  ZA + 27
                </Button>
                <Input 
                  type="tel" 
                  placeholder="Your phone number for SMS" 
                  className="flex-1 rounded-l-none"
                />
              </div>
              <Button className="bg-shop-black hover:bg-shop-purple text-white">
                Subscribe
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex flex-row">
                <Button 
                  variant="outline" 
                  className="rounded-r-none border-r-0"
                >
                  ZA + 27
                </Button>
                <Input 
                  type="text" 
                  placeholder="WhatsApp Account" 
                  className="flex-1 rounded-l-none"
                />
              </div>
              <Button className="bg-shop-black hover:bg-shop-purple text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="my-10">
          <h3 className="text-base font-semibold mb-6 text-center md:text-left">WE ACCEPT</h3>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center">VISA</div>
            <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center">MC</div>
            <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center">Amex</div>
            <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center">Disc</div>
            <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center">PayP</div>
            <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center">Apple</div>
            <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center">DinC</div>
            <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center">Klarna</div>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Copyright & Legal */}
        <div className="text-xs text-shop-neutral-gray">
          <div className="mb-3">©2009-2025 SHEIN All Rights Reserved</div>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="hover:text-shop-purple transition-colors">Privacy Center</a>
            <span>|</span>
            <a href="#" className="hover:text-shop-purple transition-colors">Privacy & Cookie Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-shop-purple transition-colors">Terms & Conditions</a>
            <span>|</span>
            <a href="#" className="hover:text-shop-purple transition-colors">Marketplace IP Rules</a>
            <span>|</span>
            <a href="#" className="hover:text-shop-purple transition-colors">IP Notice</a>
            <span>|</span>
            <a href="#" className="hover:text-shop-purple transition-colors">Imprint</a>
            <span>|</span>
            <a href="#" className="hover:text-shop-purple transition-colors">Ad Choice</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
