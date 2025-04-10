import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { categories, regions, products } from "@/data/products";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-green-800 mb-2">产品分类</h1>
          <p className="text-gray-600">
            浏览农夫庄园的全部产品分类，找到您喜爱的农副产品和土特产。
          </p>
        </div>

        {/* Categories Section */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-green-700 mb-4">按品类浏览</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {categories.map((category) => (
              <Link to={`/categories/${category.id}`} key={category.id}>
                <Card className="overflow-hidden hover:shadow-md transition-shadow h-full">
                  <div className="h-40 overflow-hidden">
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
        </section>

        <Separator className="my-8" />

        {/* Regions Section */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-green-700 mb-4">按地域浏览</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {regions.map((region) => (
              <Link to={`/regions/${region.id}`} key={region.id}>
                <Card className="overflow-hidden hover:shadow-md transition-shadow h-full">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={region.image} 
                      alt={region.name} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <CardContent className="p-4 text-center">
                    <h3 className="font-medium text-green-700">{region.name}</h3>
                    <p className="text-sm text-gray-500">{region.count}种产品</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        <Separator className="my-8" />

        {/* Popular Products */}
        <section>
          <h2 className="text-xl font-semibold text-green-700 mb-4">热门产品</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {products.filter(p => p.isPopular).map((product) => (
              <Link to={`/product/${product.id}`} key={product.id}>
                <Card className="overflow-hidden hover:shadow-md transition-shadow h-full">
                  <div className="h-32 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <CardContent className="p-3">
                    <h3 className="font-medium text-green-700 text-sm line-clamp-1">{product.name}</h3>
                    <p className="text-xs text-gray-500 mb-1">{product.region}</p>
                    <p className="font-bold text-green-700 text-sm">¥{product.price}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Categories;