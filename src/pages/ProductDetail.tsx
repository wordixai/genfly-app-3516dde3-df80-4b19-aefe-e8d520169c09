import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";
import { ShoppingCart, Heart, Share2, Truck, Shield, Star, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  
  // Find the product by ID
  const product = products.find(p => p.id === id);
  
  // If product not found
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">产品未找到</h1>
          <p className="mb-6">抱歉，您查找的产品不存在或已下架。</p>
          <Button asChild>
            <Link to="/categories">
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回产品列表
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-green-700">首页</Link>
          {" > "}
          <Link to="/categories" className="hover:text-green-700">产品分类</Link>
          {" > "}
          <Link to={`/categories/${product.category}`} className="hover:text-green-700">{product.category}</Link>
          {" > "}
          <span className="text-gray-700">{product.name}</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="bg-white rounded-lg overflow-hidden border">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Product Info */}
          <div>
            <div className="flex flex-wrap items-start justify-between mb-2">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Heart className="h-5 w-5 text-gray-600" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Share2 className="h-5 w-5 text-gray-600" />
                </Button>
              </div>
            </div>
            
            <div className="flex items-center mb-4">
              <div className="flex mr-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} 
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">{product.rating} ({product.reviewCount}条评价)</span>
            </div>
            
            <div className="flex items-center mb-4">
              <Badge className="mr-2 bg-green-100 text-green-800 hover:bg-green-200">{product.region}</Badge>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200">{product.category}</Badge>
              {product.isNew && (
                <Badge className="ml-2 bg-blue-100 text-blue-800 hover:bg-blue-200">新品</Badge>
              )}
            </div>
            
            <div className="mb-6">
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-red-600 mr-3">¥{product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">¥{product.originalPrice}</span>
                )}
              </div>
            </div>
            
            <Separator className="my-6" />
            
            {/* Quantity Selector */}
            <div className="mb-6">
              <p className="text-gray-700 font-medium mb-2">数量</p>
              <div className="flex items-center">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                  className="h-10 w-10 rounded-r-none"
                >
                  -
                </Button>
                <div className="h-10 w-16 flex items-center justify-center border-t border-b">
                  {quantity}
                </div>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={incrementQuantity}
                  disabled={quantity >= product.stock}
                  className="h-10 w-10 rounded-l-none"
                >
                  +
                </Button>
                <span className="ml-4 text-sm text-gray-500">库存: {product.stock}</span>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-6">
              <Button className="flex-1 bg-red-600 hover:bg-red-700">
                立即购买
              </Button>
              <Button className="flex-1 bg-green-700 hover:bg-green-800">
                <ShoppingCart className="mr-2 h-5 w-5" />
                加入购物车
              </Button>
            </div>
            
            {/* Shipping & Guarantee */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-start mb-3">
                <Truck className="h-5 w-5 text-green-700 mr-2 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-700">配送信息</p>
                  <p className="text-sm text-gray-600">全国大部分地区3-5天送达，偏远地区可能需要额外1-3天</p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="h-5 w-5 text-green-700 mr-2 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-700">品质保障</p>
                  <p className="text-sm text-gray-600">7天无理由退换，30天质量问题包退包换</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Details Tabs */}
        <Tabs defaultValue="details" className="mb-12">
          <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0">
            <TabsTrigger 
              value="details" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-green-700 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3"
            >
              产品详情
            </TabsTrigger>
            <TabsTrigger 
              value="specs" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-green-700 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3"
            >
              规格参数
            </TabsTrigger>
            <TabsTrigger 
              value="reviews" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-green-700 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3"
            >
              用户评价 ({product.reviewCount})
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="details" className="pt-6">
            <div className="prose max-w-none">
              <h3 className="text-xl font-bold text-green-800 mb-4">产品详情</h3>
              <p>{product.description}</p>
              <div className="my-6">
                <img 
                  src={product.image} 
                  alt={`${product.name} 详情图`} 
                  className="w-full max-w-2xl mx-auto rounded-lg"
                />
              </div>
              <h4 className="text-lg font-semibold text-green-700 mb-2">产品特点</h4>
              <ul className="list-disc pl-5 mb-4">
                <li>优质{product.region}特产，地道原产地风味</li>
                <li>严格质量把控，确保食品安全</li>
                <li>传统工艺与现代技术相结合，保留原汁原味</li>
                <li>精美包装，送礼自用两相宜</li>
              </ul>
              <h4 className="text-lg font-semibold text-green-700 mb-2">营养价值</h4>
              <p>
                {product.name}富含多种营养物质，对人体健康有诸多益处。
                经常食用可以增强免疫力，补充人体所需的多种维生素和矿物质。
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="specs" className="pt-6">
            <h3 className="text-xl font-bold text-green-800 mb-4">规格参数</h3>
            <div className="bg-white rounded-lg border overflow-hidden">
              <table className="w-full">
                <tbody>
                  {product.specifications?.weight && (
                    <tr className="border-b">
                      <td className="py-3 px-4 bg-gray-50 font-medium w-1/4">规格重量</td>
                      <td className="py-3 px-4">{product.specifications.weight}</td>
                    </tr>
                  )}
                  {product.specifications?.packaging && (
                    <tr className="border-b">
                      <td className="py-3 px-4 bg-gray-50 font-medium w-1/4">包装方式</td>
                      <td className="py-3 px-4">{product.specifications.packaging}</td>
                    </tr>
                  )}
                  {product.specifications?.origin && (
                    <tr className="border-b">
                      <td className="py-3 px-4 bg-gray-50 font-medium w-1/4">产地</td>
                      <td className="py-3 px-4">{product.specifications.origin}</td>
                    </tr>
                  )}
                  {product.specifications?.storageMethod && (
                    <tr className="border-b">
                      <td className="py-3 px-4 bg-gray-50 font-medium w-1/4">储存方法</td>
                      <td className="py-3 px-4">{product.specifications.storageMethod}</td>
                    </tr>
                  )}
                  {product.specifications?.shelfLife && (
                    <tr>
                      <td className="py-3 px-4 bg-gray-50 font-medium w-1/4">保质期</td>
                      <td className="py-3 px-4">{product.specifications.shelfLife}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </TabsContent>
          
          <TabsContent value="reviews" className="pt-6">
            <h3 className="text-xl font-bold text-green-800 mb-4">用户评价</h3>
            <div className="mb-6 flex items-center">
              <div className="text-4xl font-bold text-green-700 mr-4">{product.rating}</div>
              <div>
                <div className="flex mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} 
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600">基于 {product.reviewCount} 条评价</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Sample reviews */}
              <div className="border-b pb-6">
                <div className="flex justify-between mb-2">
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" 
                      alt="用户头像" 
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-medium">张先生</p>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">2023-05-15</span>
                </div>
                <p className="text-gray-700 mt-2">
                  {product.name}真的很不错，颗粒饱满，口感软糯，全家人都很喜欢。以后会一直购买的！
                </p>
              </div>
              
              <div className="border-b pb-6">
                <div className="flex justify-between mb-2">
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" 
                      alt="用户头像" 
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-medium">李女士</p>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">2023-04-28</span>
                </div>
                <p className="text-gray-700 mt-2">
                  包装很好，物流也很快，产品质量不错，符合预期。就是价格稍微有点贵，希望能有更多优惠活动。
                </p>
              </div>
              
              <Button variant="outline" className="w-full">查看更多评价</Button>
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Related Products */}
        <section>
          <h3 className="text-xl font-bold text-green-800 mb-4">相关推荐</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 5)
              .map((relatedProduct) => (
                <Link to={`/product/${relatedProduct.id}`} key={relatedProduct.id}>
                  <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-32 overflow-hidden">
                      <img 
                        src={relatedProduct.image} 
                        alt={relatedProduct.name} 
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                    <div className="p-3">
                      <h4 className="font-medium text-green-700 text-sm line-clamp-1">{relatedProduct.name}</h4>
                      <p className="text-xs text-gray-500 mb-1">{relatedProduct.region}</p>
                      <p className="font-bold text-green-700 text-sm">¥{relatedProduct.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProductDetail;