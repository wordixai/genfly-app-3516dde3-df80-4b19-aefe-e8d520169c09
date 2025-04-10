import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function PromotionBanner() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="bg-green-700 rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                新人专享优惠
              </h2>
              <p className="text-green-100 mb-6">
                首次注册即可获得50元优惠券，购买任意产品均可使用。
                限时活动，赶快行动吧！
              </p>
              <div className="flex flex-wrap gap-3">
                <Button 
                  className="bg-white text-green-700 hover:bg-green-100"
                  asChild
                >
                  <Link to="/register">
                    立即注册
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-green-600"
                  asChild
                >
                  <Link to="/promotions">
                    查看更多优惠
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80" 
                alt="新人优惠" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}