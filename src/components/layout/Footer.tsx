import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-green-50 text-green-800 pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">关于农夫庄园</h3>
            <p className="text-sm">
              农夫庄园致力于搭建优质的农副产品和土特产电商平台，汇聚各地特色农副产品，为消费者提供新鲜、绿色、地道的购物体验。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">快速链接</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:underline">首页</Link>
              </li>
              <li>
                <Link to="/categories" className="hover:underline">产品分类</Link>
              </li>
              <li>
                <Link to="/featured" className="hover:underline">特色产品</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">联系我们</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">联系方式</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>400-123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>contact@nongfuzhuangyuan.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1" />
                <span>中国北京市朝阳区农夫大厦</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">关注我们</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-green-700 hover:text-green-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-green-700 hover:text-green-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-green-700 hover:text-green-500">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-4">
              <img 
                src="https://images.unsplash.com/photo-1588421357574-87938a86fa28?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" 
                alt="QR Code" 
                className="w-24 h-24 border border-green-200"
              />
              <p className="text-xs mt-1">扫码关注公众号</p>
            </div>
          </div>
        </div>

        <div className="border-t border-green-200 mt-8 pt-6 text-center text-sm">
          <p>© 2023 农夫庄园. 保留所有权利.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link to="/privacy" className="hover:underline">隐私政策</Link>
            <Link to="/terms" className="hover:underline">使用条款</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}