"use client";
import { Container, Typography } from "@mui/material";
import { Counter } from "./components/Counter/Counter";

import Button from "@mui/material/Button";
import FooterCta from "./components/Home/footer-cta";
import { Grid, Paper } from "@mui/material";
import BestSellerProducts from "./components/Home/Products/best-seller";
import { useGetProductsQuery } from "@/services/products";

export default function IndexPage() {

  return (
    <>
      <Container>
        <Typography></Typography>

        
        <BestSellerProducts />
      </Container>

      <FooterCta />
    </>
  );
}
