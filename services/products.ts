import { ProductInterface } from '@/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  reducerPath: 'api',
  endpoints: (build) => ({
    getProducts: build.query<ProductInterface, { limit?: number; skip?: number }>({
      query: ({ limit = 10, skip = 0 }) => `products?limit=${limit}&skip=${skip}`,
    }),

    getSingleProducts: build.query<ProductInterface, { id : string | string[]}>({
        query: ({id }) => `products/${id}`,
      }),
  }),
});

// Export hooks for usage in functional components
export const { useGetProductsQuery , useGetSingleProductsQuery } = productsApi;