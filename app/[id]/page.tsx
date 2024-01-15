"use client";
import {
  useGetProductsQuery,
  useGetSingleProductsQuery,
} from "@/services/products";
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useParams } from "next/navigation";
import React from "react";
import BestSellerCard from "../components/ProductDetails/best-seller-card";
import BestSellerProducts from "../components/Home/Products/best-seller";
import { Product } from "@/types";
import SponsorContain from "../components/ProductDetails/sponsor-contain";

export default function page() {
  const { id } = useParams();

  const { data, error, isLoading, isFetching } = useGetSingleProductsQuery({
    id,
  });

  const {
    data: bestsellerData,
    error: bestselleError,
    isLoading: bestsellerIsLoading,
  } = useGetProductsQuery({ limit: 8 });

  return (
    <Container>
      {id}

      <Typography>{JSON.stringify(data)}</Typography>

      {isLoading && (
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress color="primary" />
        </Stack>
      )}
<Typography
            sx={{
              color: "primary.dark",
              fontSize: "24px",
              fontWeight: 700,
              mb: '50px',
              mt: '48px'
         
           
            }}
          >
        BESTSELLER PRODUCTS
      </Typography>

      {bestsellerIsLoading && (
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress color="primary" />
        </Stack>
      )}

      <Grid
        container
        sx={{
          py: "48",
        }}
        spacing={"30px"}
      >
        {bestsellerData &&
          bestsellerData?.products.map((product: Product) => {
            return (
              <Grid
                item
                md={3}
                sx={{
                  mb: "15px",
                }}
                xs={12}
              >
                <BestSellerCard data={product} key={product.id} />
              </Grid>
            );
          })}
      </Grid>

      <SponsorContain />
    </Container>
  );
}