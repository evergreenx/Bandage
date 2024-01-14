import { ProductInterface } from '@/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const productsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  reducerPath: 'api',
  endpoints: (build) => ({
    getProducts: build.query<ProductInterface , void>({
      query: (args) => "products/",

      
    }),
  }),
})

// Export hooks for usage in functional components
export const { useGetProductsQuery } = productsApi