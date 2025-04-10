import { Layout } from "@/components/layout/Layout";
import { HeroBanner } from "@/components/home/HeroBanner";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { RegionalProducts } from "@/components/home/RegionalProducts";
import { Testimonials } from "@/components/home/Testimonials";
import { PromotionBanner } from "@/components/home/PromotionBanner";

const Index = () => {
  return (
    <Layout>
      <HeroBanner />
      <CategoryShowcase />
      <FeaturedProducts />
      <RegionalProducts />
      <PromotionBanner />
      <Testimonials />
    </Layout>
  );
};

export default Index;