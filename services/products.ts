import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  reducerPath: 'api',
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products/",
    }),
  }),
})

// Export hooks for usage in functional components
export const { useGetProductsQuery } = productsApi