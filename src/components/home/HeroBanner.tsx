import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

export function HeroBanner() {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=500&q=80"
          alt="新鲜农产品"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-lg">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                新鲜农产品，直达您家
              </h1>
              <p className="text-white text-lg mb-6">
                农夫庄园精选全国各地优质农副产品，为您提供绿色、健康、地道的美食体验。
              </p>
              <div className="flex flex-wrap gap-3">
                <Button 
                  size={isMobile ? "default" : "lg"} 
                  className="bg-green-600 hover:bg-green-700"
                  asChild
                >
                  <Link to="/categories">
                    立即选购
                  </Link>
                </Button>
                <Button 
                  size={isMobile ? "default" : "lg"} 
                  variant="outline" 
                  className="bg-white text-green-700 border-green-700 hover:bg-green-50"
                  asChild
                >
                  <Link to="/featured">
                    特色产品
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Feature Badges */}
      <div className="container mx-auto px-4 -mt-6 md:-mt-10 relative z-10">
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center text-center">
            <img 
              src="https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50&q=80" 
              alt="产地直供" 
              className="w-12 h-12 mb-2 rounded-full object-cover"
            />
            <h3 className="font-medium text-green-700">产地直供</h3>
            <p className="text-xs text-gray-500">从农田到餐桌</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <img 
              src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50&q=80" 
              alt="品质保障" 
              className="w-12 h-12 mb-2 rounded-full object-cover"
            />
            <h3 className="font-medium text-green-700">品质保障</h3>
            <p className="text-xs text-gray-500">严格质检标准</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <img 
              src="https://images.unsplash.com/photo-1635439028096-1a7e2a56a0d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50&q=80" 
              alt="新鲜配送" 
              className="w-12 h-12 mb-2 rounded-full object-cover"
            />
            <h3 className="font-medium text-green-700">新鲜配送</h3>
            <p className="text-xs text-gray-500">冷链全程保鲜</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <img 
              src="https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50&q=80" 
              alt="无忧退换" 
              className="w-12 h-12 mb-2 rounded-full object-cover"
            />
            <h3 className="font-medium text-green-700">无忧退换</h3>
            <p className="text-xs text-gray-500">7天无理由退换</p>
          </div>
        </div>
      </div>
    </div>
  );
}