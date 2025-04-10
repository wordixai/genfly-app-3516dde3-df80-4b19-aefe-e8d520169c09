import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Capacitor } from "@capacitor/core";
import Index from "./pages/Index";
import Categories from "./pages/Categories";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Handle back button for Android
    if (Capacitor.isNativePlatform() && Capacitor.getPlatform() === 'android') {
      document.addEventListener('backbutton', (e) => {
        // Custom back button handling if needed
        if (window.location.pathname === '/') {
          // Ask before exiting app if on home page
          if (window.confirm('确定要退出应用吗？')) {
            (window as any).navigator.app.exitApp();
          }
        } else {
          // Otherwise just go back
          window.history.back();
        }
      });
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;