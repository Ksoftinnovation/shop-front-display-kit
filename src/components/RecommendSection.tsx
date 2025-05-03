
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from './ui/carousel';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { ShoppingCart } from 'lucide-react';

// Product type definition
interface Product {
  id: string;
  name: string;
  price: number;
  discountPercentage?: number;
  image: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'SHEIN Clasi Women\'s Striped Commuter Blouse',
    price: 7.40,
    discountPercentage: 20,
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9'
  },
  {
    id: '2',
    name: 'SHEIN LUNE Women\'s Casual Solid V-Neck Sweater',
    price: 8.24,
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901'
  },
  {
    id: '3',
    name: 'SHEIN EZwear 3pcs/Set Casual Slim Cami',
    price: 7.38,
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027'
  },
  {
    id: '4',
    name: 'SHEIN Clasi Elegant Commuter Women\'s Blouse',
    price: 10.11,
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22'
  },
  {
    id: '5',
    name: 'INAWLY Women\'s Letter Print Drop Shoulder Hoodie',
    price: 11.76,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb'
  }
];

const RecommendSection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-display font-semibold text-center mb-8">Recommend</h2>
        
        <div className="relative px-4 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {products.map((product) => (
                <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/5">
                  <Card className="border-none shadow-none">
                    <CardContent className="p-0">
                      <div className="overflow-hidden rounded-md aspect-square mb-3">
                        <img 
                          src={product.image}
                          alt={product.name}
                          className="object-cover w-full h-full transition-transform hover:scale-105"
                        />
                      </div>
                      <div className="mt-2">
                        <h3 className="text-sm font-medium truncate" title={product.name}>
                          {product.name}
                        </h3>
                      </div>
                    </CardContent>
                    <CardFooter className="p-0 pt-2 flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-shop-red font-medium">${product.price.toFixed(2)}</span>
                        {product.discountPercentage && (
                          <span className="ml-2 text-xs border border-shop-red text-shop-red px-1">
                            -{product.discountPercentage}%
                          </span>
                        )}
                      </div>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="rounded-full h-8 w-8"
                        aria-label="Add to cart"
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex left-0" />
            <CarouselNext className="hidden md:flex right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default RecommendSection;
