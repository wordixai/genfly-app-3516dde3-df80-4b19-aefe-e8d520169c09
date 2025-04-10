import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { regions, products } from "@/data/products";
import { ShoppingCart } from "lucide-react";

export function RegionalProducts() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-2">地域特产</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            中国地大物博，各地都有独特的农副产品和土特产，农夫庄园为您精选各地道地特产。
          </p>
        </div>
        
        <Tabs defaultValue={regions[0].id} className="w-full">
          <TabsList className="w-full flex flex-wrap justify-center mb-6">
            {regions.map((region) => (
              <TabsTrigger 
                key={region.id} 
                value={region.id}
                className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800"
              >
                {region.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {regions.map((region) => {
            // Filter products by region
            const regionProducts = products.filter(product => product.region === region.name).slice(0, 4);
            
            return (
              <TabsContent key={region.id} value={region.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {regionProducts.map((product) => (
                    <Card key={product.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="h-40 overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium text-green-700 mb-1 line-clamp-1">{product.name}</h3>
                        <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-green-700">¥{product.price}</span>
                          <Button size="sm" className="bg-green-700 hover:bg-green-800 h-8 w-8 p-0">
                            <ShoppingCart className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="text-center mt-8">
                  <Button 
                    variant="outline" 
                    className="border-green-700 text-green-700 hover:bg-green-50"
                    asChild
                  >
                    <Link to={`/regions/${region.id}`}>
                      查看更多{region.name}特产
                    </Link>
                  </Button>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}