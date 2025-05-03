
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Custom navigation link component for consistent styling
  const NavLink = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
  >(({ className, children, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(
        "block py-2 px-3 text-sm font-medium transition-colors hover:text-shop-red",
        className
      )}
      {...props}
    >
      {children}
    </a>
  ));
  NavLink.displayName = "NavLink";

  return (
    <header className="w-full">
      {/* Top promotional bar */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="bg-black p-1 rounded">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-semibold">FLASH SALE</span>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="3" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                <path d="M7 7H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M7 17H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="font-semibold">FAQ</span>
              <span className="text-sm text-gray-500">Shipping & Payment & More</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M4 12l4-4m0 0l4 4m-4-4v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 12l-4-4m0 0l-4 4m4-4v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="flex flex-col">
                <span className="font-semibold">SHARE & EARN</span>
                <span className="text-xs font-bold text-shop-red">GET 10% OFF <span className="text-gray-500">NO MIN. SPEND</span></span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="font-semibold">AFFILIATE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header with logo and search */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <button 
              className="md:hidden mr-4"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu />
            </button>
            <h1 className="text-3xl font-display font-extrabold tracking-tighter">FASHIONISTA</h1>
          </div>

          <div className="hidden md:flex relative max-w-md w-full mx-4">
            <Input
              type="search"
              placeholder="Search for products..."
              className="pr-10 border-gray-300 focus-visible:ring-shop-red"
            />
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-0 top-0 bottom-0 text-gray-400 hover:text-shop-red"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <User className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute top-0 right-0 bg-shop-red text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation - replaced with shadcn components */}
      <nav className="border-b">
        <div className="container mx-auto px-4">
          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)} className="w-full justify-start py-2">
              {isMenuOpen ? "Close Menu" : "Menu"} <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
            </Button>
          </div>
          
          {/* Desktop and Mobile Navigation */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block py-1`}>
            <NavigationMenu className="max-w-full w-full justify-start">
              <NavigationMenuList className="flex-wrap justify-start">
                {/* Categories Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-shop-red data-[state=open]:bg-transparent data-[state=open]:text-shop-red">
                    Categories
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="z-50 bg-white">
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {["Women Clothing", "Men Clothing", "Kids", "Shoes", "Accessories"].map((category) => (
                        <li key={category}>
                          <NavigationMenuLink asChild>
                            <a
                              href="#"
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-white to-gray-50 p-3 hover:from-gray-50 hover:to-gray-100 hover:text-shop-red"
                            >
                              <div className="mb-2 text-sm font-medium">
                                {category}
                              </div>
                              <p className="text-xs leading-tight text-gray-500">
                                Explore our collection of {category.toLowerCase()}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Regular navigation items with hover effect */}
                {["New In", "Sale", "Women", "Men", "Kids", "Shoes", "Accessories", "Beauty", "Home"].map((item) => (
                  <NavigationMenuItem key={item}>
                    <NavigationMenuLink asChild>
                      <NavLink href="#">{item}</NavLink>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
