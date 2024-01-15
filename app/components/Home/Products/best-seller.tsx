import { useGetProductsQuery } from "@/services/products";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ProductsCard from "./products-card";
import { Product, ProductInterface } from "@/types";

import CircularProgress from "@mui/material/CircularProgress";

export default function BestSellerProducts() {
  const [skip, setSkip] = useState(0);
  const limit = 10;
  const { data, error, isLoading, isFetching } = useGetProductsQuery({
    limit,
    skip,
  });
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  const handleLoadMore = () => {
    setSkip((prevSkip) => prevSkip + limit);
  };

  React.useEffect(() => {
    if (data?.products) {
      setAllProducts((prevProducts) => [...prevProducts, ...data.products]);
    }
  }, [data]);
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
          mb: "32px",
        }}
      >
        Problems trying to resolve the conflict between
      </Typography>

      {/* products */}

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

      <Grid
        container
        sx={{
          p: "24px",
        }}
        spacing={"30px"}
      >
        {data &&
          allProducts.map((product: Product) => {
            return (
              <Grid
                item
                md={12 / 5}
                sx={{
                  mb: "15px",
                }}
                xs={12}
              >
                <ProductsCard data={product} key={product.id} />
              </Grid>
            );
          })}
      </Grid>

      {data && data?.products.length > 0 && !isFetching && (
        <Button
          disabled={isFetching}
          onClick={handleLoadMore}
          sx={{
            borderRadius: "5px",
            px: "40px",
            py: " 15px",
            fontSize: "14px",
            color: "#23A6F0",
            fontWeight: 700,
            border: "1px solid #23A6F0",
            textTransform: "uppercase",
            mt: "24px",
            mx: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          load more products
        </Button>
      )}

      <Typography></Typography>
    </Box>
  );
}
