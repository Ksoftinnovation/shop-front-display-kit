
import React from 'react';
import CartSheet from './CartSheet';

// This component is just a wrapper for CartSheet to maintain compatibility
export const Cart: React.FC = () => {
  return <CartSheet />;
};

export default Cart;
