import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { categories } from "@/data/products";

export function CategoryShowcase() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-2">产品分类</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            农夫庄园精选全国各地优质农副产品，种类丰富，品质保证，满足您的多样化需求。
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link to={`/categories/${category.id}`} key={category.id}>
              <Card className="overflow-hidden hover:shadow-md transition-shadow h-full">
                <div className="h-32 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-medium text-green-700">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count}种产品</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}