import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: "1",
    name: "张先生",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5,
    text: "农夫庄园的东北大米真的很不错，颗粒饱满，煮出来的米饭香甜可口，全家人都很喜欢。以后会一直购买的！",
    product: "东北黑土地有机大米"
  },
  {
    id: "2",
    name: "李女士",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5,
    text: "赣南脐橙真的太好吃了，酸甜可口，汁水丰富，而且物流很快，包装也很好，橙子完好无损地送到家。",
    product: "赣南脐橙"
  },
  {
    id: "3",
    name: "王先生",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
    rating: 4,
    text: "云南松茸品质很好，菌香浓郁，炖汤特别鲜美。价格虽然不便宜，但是物有所值，很满意这次购买。",
    product: "云南野生松茸"
  },
  {
    id: "4",
    name: "赵女士",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5,
    text: "四川青花椒香气十足，麻味浓郁，用来做麻辣火锅简直绝配。包装也很好，保存了花椒的新鲜度。",
    product: "四川青花椒"
  },
  {
    id: "5",
    name: "刘先生",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5,
    text: "陕西红富士苹果脆甜多汁，个头大小均匀，表皮光滑红润，是我吃过的最好吃的苹果之一。",
    product: "陕西红富士苹果"
  }
];

export function Testimonials() {
  return (
    <section className="py-12 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-2">顾客评价</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            听听我们的顾客怎么说，他们的真实体验是对农夫庄园最好的肯定。
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-3">"{testimonial.text}"</p>
                    
                    <p className="text-sm text-green-700 font-medium">
                      购买产品: {testimonial.product}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:flex justify-end gap-2 mt-4">
            <CarouselPrevious className="relative static left-0 right-0 translate-y-0 bg-white border-green-200 text-green-700 hover:bg-green-50 hover:text-green-800" />
            <CarouselNext className="relative static left-0 right-0 translate-y-0 bg-white border-green-200 text-green-700 hover:bg-green-50 hover:text-green-800" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}