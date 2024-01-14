 export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    brand: string;
    category: string;
    discountPercentage: number;
    rating: number;
    stock: number;
    thumbnail: string;
    images: string[];
  }
  
  export interface ProductInterface {
    products: Product[];
  }