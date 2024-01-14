import { useGetProductsQuery } from "@/services/products";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function BestSellerProducts() {

  const { data, error, isLoading } = useGetProductsQuery()

  if (isLoading) {

      return 'loading'
  }
  return (
    <Box
      sx={{
        py: "80px",
      }}
    >
      <Typography
        sx={{
          color: "primary.main",
          fontSize: "20px",
          fontWeight: 400,
          textAlign: "center",
          mb: "10px",
        }}
      >
        Featured Products
      </Typography>

      <Typography
        sx={{
          color: "primary.dark",
          fontSize: "24px",
          fontWeight: 700,
          textAlign: "center",
          mb: "10px",
        }}
      >
        BESTSELLER PRODUCTS
      </Typography>

      <Typography
        sx={{
          color: "primary.main",
          fontSize: "14px",
          fontWeight: 400,
          textAlign: "center",
        }}
      >
        Problems trying to resolve the conflict between
      </Typography>

      {/* products */}

      {
        data.products.map((i)=>{ 



          <h1>


{i.title}

            </h1>
        }) 
      }
    </Box>
  );
}
