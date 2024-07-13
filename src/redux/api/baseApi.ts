import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (url) => ({
        url: url,
        method: "GET",
      }),
      providesTags: ["products"],
    }),
    getProductDetails: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: ["products"],
    }),
    addProduct: builder.mutation({
      query: (data) => {
        return {
          url: "/products/create-product",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["products"],
    }),
    updateProduct: builder.mutation({
      query: (data) => {
        return {
          url: `/products/${data?._id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["products"],
    }),
    removeProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),
    checkout: builder.mutation({
      query: (data) => ({
        url: `/checkout`,
        method: "POST",
        body: data
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useUpdateProductMutation,
  useRemoveProductMutation,
  useAddProductMutation,
  useCheckoutMutation
} = baseApi;
