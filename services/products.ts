import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Product {
  id: number;
  price: number;
  brand: string;
  description: string;
  // Add any other properties based on your actual API response
}

interface ProductsResponse {
  products: Product[];
}
export const productsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  reducerPath: 'api',
  endpoints: (build) => ({
    getProducts: build.query<ProductsResponse , void>({
      query: (args) => "products/",

      
    }),
  }),
})

// Export hooks for usage in functional components
export const { useGetProductsQuery } = productsApi