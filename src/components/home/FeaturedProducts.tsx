import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { ShoppingCart, Star } from "lucide-react";

export function FeaturedProducts() {
  // Filter featured products
  const featuredProducts = products.filter(product => product.isFeatured);
  
  return (
    <section className="py-12 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800">特色产品</h2>
          <Link to="/featured" className="text-green-700 hover:text-green-500 font-medium">
            查看全部 &rarr;
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
                {product.isNew && (
                  <Badge className="absolute top-2 right-2 bg-green-600">新品</Badge>
                )}
                {product.originalPrice && (
                  <Badge variant="outline" className="absolute top-2 left-2 bg-red-500 text-white border-none">
                    特惠
                  </Badge>
                )}
              </div>
              
              <CardContent className="pt-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="text-sm">{product.rating}</span>
                  </div>
                </div>
                
                <div className="mb-2 text-sm text-gray-500">
                  {product.region} | {product.category}
                </div>
                
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                  {product.description}
                </p>
                
                <div className="flex items-center">
                  <span className="text-lg font-bold text-green-700">¥{product.price}</span>
                  {product.originalPrice && (
                    <span className="ml-2 text-sm text-gray-500 line-through">
                      ¥{product.originalPrice}
                    </span>
                  )}
                </div>
              </CardContent>
              
              <CardFooter className="pt-0 flex justify-between">
                <Button 
                  variant="outline" 
                  className="text-green-700 border-green-700 hover:bg-green-50"
                  asChild
                >
                  <Link to={`/product/${product.id}`}>
                    查看详情
                  </Link>
                </Button>
                <Button className="bg-green-700 hover:bg-green-800">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  加入购物车
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}