
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from '@/components/ui/sonner';

// Define product type
export interface CartProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  discountPercentage?: number;
}

// Define context type
interface CartContextType {
  cart: CartProduct[];
  addToCart: (product: Omit<CartProduct, 'quantity'>) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  totalItems: number;
  totalPrice: number;
}

// Create context with default values
const CartContext = createContext<CartContextType | undefined>(undefined);

// Hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Cart provider component
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartProduct[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add product to cart
  const addToCart = (product: Omit<CartProduct, 'quantity'>) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      
      if (existingProduct) {
        // Increase quantity if product already in cart
        const updatedCart = prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        toast.success(`Added another ${product.name} to your cart`);
        return updatedCart;
      } else {
        // Add new product to cart
        toast.success(`${product.name} added to your cart`);
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    
    // Open the cart when adding an item
    setIsCartOpen(true);
  };

  // Remove product from cart
  const removeFromCart = (productId: string) => {
    setCart((prevCart) => {
      const productToRemove = prevCart.find(item => item.id === productId);
      if (productToRemove) {
        toast.info(`${productToRemove.name} removed from cart`);
      }
      return prevCart.filter(item => item.id !== productId);
    });
  };

  // Update product quantity
  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Clear entire cart
  const clearCart = () => {
    setCart([]);
    toast.info('Cart cleared');
  };

  // Calculate total items
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  
  // Calculate total price
  const totalPrice = cart.reduce((total, item) => {
    const itemPrice = item.discountPercentage 
      ? item.price * (1 - item.discountPercentage / 100) 
      : item.price;
    return total + (itemPrice * item.quantity);
  }, 0);

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart,
      isCartOpen,
      setIsCartOpen,
      totalItems,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};
