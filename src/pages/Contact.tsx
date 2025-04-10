import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-green-800 mb-2">联系我们</h1>
          <p className="text-gray-600">
            如果您有任何问题、建议或合作意向，欢迎通过以下方式联系我们。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-semibold text-green-700 mb-4">联系方式</h2>
            
            <div className="space-y-6">
              <div className="flex">
                <Phone className="h-6 w-6 text-green-700 mr-4" />
                <div>
                  <h3 className="font-medium mb-1">客服电话</h3>
                  <p className="text-gray-600">400-123-4567</p>
                  <p className="text-sm text-gray-500">周一至周日 9:00-20:00</p>
                </div>
              </div>
              
              <div className="flex">
                <Mail className="h-6 w-6 text-green-700 mr-4" />
                <div>
                  <h3 className="font-medium mb-1">电子邮箱</h3>
                  <p className="text-gray-600">contact@nongfuzhuangyuan.com</p>
                  <p className="text-sm text-gray-500">我们会在24小时内回复您的邮件</p>
                </div>
              </div>
              
              <div className="flex">
                <MapPin className="h-6 w-6 text-green-700 mr-4" />
                <div>
                  <h3 className="font-medium mb-1">公司地址</h3>
                  <p className="text-gray-600">中国北京市朝阳区农夫大厦</p>
                  <p className="text-sm text-gray-500">邮编: 100000</p>
                </div>
              </div>
              
              <div className="flex">
                <Clock className="h-6 w-6 text-green-700 mr-4" />
                <div>
                  <h3 className="font-medium mb-1">营业时间</h3>
                  <p className="text-gray-600">周一至周五: 9:00-18:00</p>
                  <p className="text-gray-600">周六至周日: 10:00-16:00</p>
                </div>
              </div>
              
              <div className="flex">
                <MessageSquare className="h-6 w-6 text-green-700 mr-4" />
                <div>
                  <h3 className="font-medium mb-1">在线客服</h3>
                  <p className="text-gray-600">点击网站右下角的客服图标</p>
                  <p className="text-sm text-gray-500">或扫描下方二维码添加客服微信</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex items-center justify-center md:justify-start">
              <div className="text-center mr-6">
                <img 
                  src="https://images.unsplash.com/photo-1588421357574-87938a86fa28?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" 
                  alt="微信客服" 
                  className="w-24 h-24 border border-green-200 mb-2"
                />
                <p className="text-xs text-gray-500">微信客服</p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1588421357574-87938a86fa28?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" 
                  alt="公众号" 
                  className="w-24 h-24 border border-green-200 mb-2"
                />
                <p className="text-xs text-gray-500">官方公众号</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-semibold text-green-700 mb-4">留言反馈</h2>
            <p className="text-gray-600 mb-6">
              如果您有任何问题或建议，请填写以下表单，我们会尽快回复您。
            </p>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    姓名
                  </label>
                  <Input id="name" placeholder="请输入您的姓名" />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    电话
                  </label>
                  <Input id="phone" placeholder="请输入您的电话号码" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  电子邮箱
                </label>
                <Input id="email" type="email" placeholder="请输入您的电子邮箱" />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  主题
                </label>
                <Input id="subject" placeholder="请输入留言主题" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  留言内容
                </label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder="请详细描述您的问题或建议..."
                ></textarea>
              </div>
              
              <Button className="w-full bg-green-700 hover:bg-green-800">
                提交留言
              </Button>
            </form>
          </div>
        </div>
        
        <Separator className="my-12" />
        
        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-800 mb-6">常见问题</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-green-700 mb-2">1. 如何注册成为会员？</h3>
              <p className="text-gray-600">
                点击网站右上角的"登录/注册"按钮，填写相关信息即可完成注册。注册成功后，您将获得新人专享优惠券。
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-green-700 mb-2">2. 配送范围和时间是怎样的？</h3>
              <p className="text-gray-600">
                我们目前支持全国大部分地区配送，一般在下单后1-3个工作日内发货，3-5天送达。偏远地区可能需要额外1-3天。
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-green-700 mb-2">3. 如何申请退换货？</h3>
              <p className="text-gray-600">
                我们支持7天无理由退换，30天质量问题包退包换。您可以在"个人中心-我的订单"中找到相应订单，点击"申请退换"按钮进行操作。
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-green-700 mb-2">4. 有哪些支付方式？</h3>
              <p className="text-gray-600">
                我们支持微信支付、支付宝、银联卡等多种支付方式，您可以根据自己的习惯选择合适的支付方式。
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-green-700 mb-2">5. 如何成为供应商？</h3>
              <p className="text-gray-600">
                如果您有优质的农副产品想要在我们平台上销售，请发送邮件至supplier@nongfuzhuangyuan.com，我们的商务团队会与您联系。
              </p>
            </div>
          </div>
        </section>
        
        {/* Company Certificates */}
        <section>
          <h2 className="text-2xl font-bold text-green-800 mb-6">企业资质</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="border rounded-lg p-4 text-center">
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" 
                alt="营业执照" 
                className="w-full h-auto mb-2"
              />
              <p className="text-sm font-medium text-gray-700">营业执照</p>
            </div>
            
            <div className="border rounded-lg p-4 text-center">
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" 
                alt="食品经营许可证" 
                className="w-full h-auto mb-2"
              />
              <p className="text-sm font-medium text-gray-700">食品经营许可证</p>
            </div>
            
            <div className="border rounded-lg p-4 text-center">
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" 
                alt="质量管理体系认证" 
                className="w-full h-auto mb-2"
              />
              <p className="text-sm font-medium text-gray-700">质量管理体系认证</p>
            </div>
            
            <div className="border rounded-lg p-4 text-center">
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" 
                alt="有机产品认证" 
                className="w-full h-auto mb-2"
              />
              <p className="text-sm font-medium text-gray-700">有机产品认证</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;