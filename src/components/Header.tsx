
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, MapPin } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useIsMobile } from "@/hooks/use-mobile"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import CartSheet from "@/components/CartSheet"
import { useCart } from "@/context/CartContext";

const Header = () => {
  const isMobile = useIsMobile()
  const { cart } = useCart();
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          My Shop
        </Link>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  Explore our site.
                </SheetDescription>
              </SheetHeader>
              <Separator className="my-4" />
              <div className="flex flex-col space-y-2">
                <Link to="/" className="header-link">Home</Link>
                <Link to="/profile" className="header-link">Profile</Link>
                <Link to="/history" className="header-link">History</Link>
                <Link to="/location" className="header-link">Location</Link>
                <Link to="/about" className="header-link">About</Link>
                <Link to="/contact" className="header-link">Contact</Link>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Link to="/" className="header-link">Home</Link>
                </NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Link to="/profile" className="header-link">Profile</Link>
                </NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Link to="/history" className="header-link">History</Link>
                </NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Link to="/location" className="header-link">Location</Link>
                </NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Link to="/about" className="header-link">About</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] md:grid-cols-2">
                    <li>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Link 1
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Link 2
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Link to="/contact" className="header-link">Contact</Link>
                </NavigationMenuTrigger>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        )}

        <div className="flex items-center space-x-4">
          <Button variant="outline" size="icon" asChild>
            <Link to="/cart">
              <ShoppingBag className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-shop-red text-white text-xs font-semibold px-2 py-1 rounded-full">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </Button>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <CartSheet />
    </header>
  );
};

export default Header;
