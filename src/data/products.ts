export interface Product {
  id: string;
  name: string;
  category: string;
  region: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isPopular?: boolean;
  isFeatured?: boolean;
  stock: number;
  specifications?: {
    weight?: string;
    packaging?: string;
    origin?: string;
    storageMethod?: string;
    shelfLife?: string;
  };
}

export const products: Product[] = [
  {
    id: "1",
    name: "东北黑土地有机大米",
    category: "粮食",
    region: "东北",
    price: 59.9,
    originalPrice: 69.9,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e8ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    description: "来自东北黑土地的有机大米，颗粒饱满，口感软糯，富含多种微量元素，营养丰富。采用传统农耕方式种植，不使用化肥和农药，保证食品安全。",
    rating: 4.8,
    reviewCount: 256,
    isPopular: true,
    isFeatured: true,
    stock: 100,
    specifications: {
      weight: "5kg/袋",
      packaging: "真空包装",
      origin: "黑龙江省",
      storageMethod: "阴凉干燥处",
      shelfLife: "12个月"
    }
  },
  {
    id: "2",
    name: "赣南脐橙",
    category: "水果",
    region: "江西",
    price: 39.9,
    originalPrice: 49.9,
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    description: "赣南脐橙产于江西省赣州市，果肉细嫩多汁，甜酸适口，富含维生素C和多种矿物质。采用生态种植方式，保证果实新鲜度和口感。",
    rating: 4.7,
    reviewCount: 189,
    isNew: true,
    isPopular: true,
    stock: 80,
    specifications: {
      weight: "5kg/箱",
      packaging: "礼盒装",
      origin: "江西省赣州市",
      storageMethod: "冷藏保存",
      shelfLife: "7-15天"
    }
  },
  {
    id: "3",
    name: "云南野生松茸",
    category: "菌类",
    region: "云南",
    price: 299.9,
    image: "https://images.unsplash.com/photo-1602344198099-1a4c8451c595?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    description: "云南野生松茸，采自高海拔无污染森林，肉质肥厚，菌香浓郁，富含多种氨基酸和微量元素，是难得的天然珍品。",
    rating: 4.9,
    reviewCount: 78,
    isFeatured: true,
    stock: 30,
    specifications: {
      weight: "500g/盒",
      packaging: "保鲜盒装",
      origin: "云南省香格里拉",
      storageMethod: "冷藏保存",
      shelfLife: "3-5天"
    }
  },
  {
    id: "4",
    name: "陕西红富士苹果",
    category: "水果",
    region: "陕西",
    price: 29.9,
    originalPrice: 39.9,
    image: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    description: "陕西洛川红富士苹果，果形端正，色泽鲜艳，果肉脆甜多汁，香气浓郁。采用标准化种植，保证品质稳定。",
    rating: 4.6,
    reviewCount: 215,
    isPopular: true,
    stock: 150,
    specifications: {
      weight: "5kg/箱",
      packaging: "泡沫网套",
      origin: "陕西省洛川县",
      storageMethod: "冷藏保存",
      shelfLife: "30-60天"
    }
  },
  {
    id: "5",
    name: "四川青花椒",
    category: "调料",
    region: "四川",
    price: 19.9,
    image: "https://images.unsplash.com/photo-1599909366516-6c1d2d95e8c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    description: "四川汉源青花椒，麻味浓郁，香气四溢，是川菜不可或缺的调味品。精选优质花椒，手工采摘，保证品质。",
    rating: 4.8,
    reviewCount: 132,
    isNew: true,
    stock: 200,
    specifications: {
      weight: "100g/袋",
      packaging: "真空包装",
      origin: "四川省汉源县",
      storageMethod: "阴凉干燥处",
      shelfLife: "24个月"
    }
  }
];

export const categories = [
  { id: "1", name: "粮食", count: 15, image: "https://images.unsplash.com/photo-1586201375761-83865001e8ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" },
  { id: "2", name: "水果", count: 28, image: "https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" },
  { id: "3", name: "蔬菜", count: 32, image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" },
  { id: "4", name: "菌类", count: 12, image: "https://images.unsplash.com/photo-1602344198099-1a4c8451c595?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" },
  { id: "5", name: "调料", count: 18, image: "https://images.unsplash.com/photo-1599909366516-6c1d2d95e8c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" }
];

export const regions = [
  { id: "1", name: "东北", count: 25, image: "https://images.unsplash.com/photo-1586201375761-83865001e8ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" },
  { id: "2", name: "华北", count: 18, image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" },
  { id: "3", name: "华东", count: 30, image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" },
  { id: "4", name: "华中", count: 22, image: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" },
  { id: "5", name: "西南", count: 28, image: "https://images.unsplash.com/photo-1602344198099-1a4c8451c595?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" }
];