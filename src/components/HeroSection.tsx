
import React from 'react';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section>
      {/* Main hero banner */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070')" 
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">Summer Collection 2025</h1>
            <p className="text-lg md:text-xl mb-8">Discover the latest trends and styles for the season</p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-shop-black hover:bg-shop-red hover:text-white">
                Shop Women
              </Button>
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-shop-black">
                Shop Men
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories showcase */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-center mb-10">Shop by Category</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {/* Category 1 */}
          <div className="category-item">
            <div className="category-image">
              <img 
                src="https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?q=80&w=1925&auto=format&fit=crop" 
                alt="Dresses"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="category-title">Dresses</h3>
          </div>

          {/* Category 2 */}
          <div className="category-item">
            <div className="category-image">
              <img 
                src="https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?q=80&w=1887&auto=format&fit=crop" 
                alt="Tops"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="category-title">Tops & Blouses</h3>
          </div>

          {/* Category 3 */}
          <div className="category-item">
            <div className="category-image">
              <img 
                src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1972&auto=format&fit=crop" 
                alt="Knitwear"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="category-title">Knitwear</h3>
          </div>

          {/* Category 4 */}
          <div className="category-item">
            <div className="category-image">
              <img 
                src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=2070&auto=format&fit=crop" 
                alt="Sweatshirts"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="category-title">Sweatshirts</h3>
          </div>

          {/* Category 5 */}
          <div className="category-item">
            <div className="category-image">
              <img 
                src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1972&auto=format&fit=crop" 
                alt="Outerwear"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="category-title">Outerwear</h3>
          </div>

          {/* Category 6 */}
          <div className="category-item">
            <div className="category-image">
              <img 
                src="https://images.unsplash.com/photo-1582418702059-97ebafb35d09?q=80&w=1915&auto=format&fit=crop" 
                alt="Denim"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="category-title">Denim</h3>
          </div>

          {/* Category 7 */}
          <div className="category-item">
            <div className="category-image">
              <img 
                src="https://images.unsplash.com/photo-1509631179476-1e8e2eb3c0da?q=80&w=1976&auto=format&fit=crop" 
                alt="Bottoms"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="category-title">Bottoms</h3>
          </div>
        </div>
      </div>

      {/* Promotional banners */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Promo banner 1 */}
          <div className="relative h-80 rounded-lg overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop')" 
              }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="absolute inset-0 flex flex-col justify-center p-8 text-white">
              <h3 className="text-3xl font-display font-bold mb-2">New Arrivals</h3>
              <p className="mb-4">Fresh styles added weekly</p>
              <Button className="self-start bg-white text-shop-black hover:bg-shop-red hover:text-white">
                Shop Now
              </Button>
            </div>
          </div>

          {/* Promo banner 2 */}
          <div className="relative h-80 rounded-lg overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop')" 
              }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="absolute inset-0 flex flex-col justify-center p-8 text-white">
              <h3 className="text-3xl font-display font-bold mb-2">Summer Sale</h3>
              <p className="text-xl mb-4">Up to 70% Off</p>
              <Button className="self-start bg-white text-shop-black hover:bg-shop-red hover:text-white">
                Shop Sale
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
