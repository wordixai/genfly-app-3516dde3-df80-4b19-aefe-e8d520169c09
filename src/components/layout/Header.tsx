import { Link } from "react-router-dom";
import { ShoppingCart, Menu, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1582284540020-8acbe03f4924?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50&q=80" 
                alt="农夫庄园" 
                className="h-10 w-10 rounded-full mr-2"
              />
              <span className="text-xl font-bold text-green-700">农夫庄园</span>
            </Link>
          </div>

          {/* Search Bar - Hidden on Mobile */}
          {!isMobile && (
            <div className="hidden md:flex flex-1 max-w-md mx-4">
              <div className="relative w-full">
                <Input 
                  type="search" 
                  placeholder="搜索农产品..." 
                  className="w-full pr-10 border-green-200 focus:border-green-500"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          )}

          {/* Navigation Icons */}
          <div className="flex items-center space-x-1 md:space-x-4">
            {isMobile && (
              <Button variant="ghost" size="icon" className="text-green-700" onClick={toggleMenu}>
                <Menu className="h-6 w-6" />
              </Button>
            )}
            
            {!isMobile && (
              <>
                <Link to="/user">
                  <Button variant="ghost" size="icon" className="text-green-700">
                    <User className="h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/cart">
                  <Button variant="ghost" size="icon" className="text-green-700 relative">
                    <ShoppingCart className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      3
                    </span>
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Search - Only visible on mobile */}
        {isMobile && (
          <div className="mt-3">
            <div className="relative w-full">
              <Input 
                type="search" 
                placeholder="搜索农产品..." 
                className="w-full pr-10 border-green-200 focus:border-green-500"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b shadow-lg z-50">
            <nav className="container mx-auto px-4 py-2">
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="block py-2 text-green-700 font-medium" onClick={toggleMenu}>
                    首页
                  </Link>
                </li>
                <li>
                  <Link to="/categories" className="block py-2 text-green-700 font-medium" onClick={toggleMenu}>
                    产品分类
                  </Link>
                </li>
                <li>
                  <Link to="/user" className="block py-2 text-green-700 font-medium" onClick={toggleMenu}>
                    个人中心
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="block py-2 text-green-700 font-medium" onClick={toggleMenu}>
                    购物车 (3)
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="block py-2 text-green-700 font-medium" onClick={toggleMenu}>
                    联系我们
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex justify-center mt-2">
            <ul className="flex space-x-8">
              <li>
                <Link to="/" className="text-green-700 font-medium hover:text-green-500">
                  首页
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-green-700 font-medium hover:text-green-500">
                  产品分类
                </Link>
              </li>
              <li>
                <Link to="/featured" className="text-green-700 font-medium hover:text-green-500">
                  特色产品
                </Link>
              </li>
              <li>
                <Link to="/new" className="text-green-700 font-medium hover:text-green-500">
                  当季新品
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-green-700 font-medium hover:text-green-500">
                  联系我们
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}