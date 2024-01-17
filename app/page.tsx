"use client";
import { Container, Typography } from "@mui/material";


import Button from "@mui/material/Button";
import FooterCta from "./components/Home/footer-cta";
import { Grid, Paper } from "@mui/material";
import BestSellerProducts from "./components/Home/Products/best-seller";
import { useGetProductsQuery } from "@/services/products";
import Features from "./components/Home/Products/features";
import Hero from "./components/Home/hero";
import StandardImageList from "./components/Home/testimonial";

export default function IndexPage() {

  return (
    <>
      <Container>
        <Typography></Typography>



<Hero />
        
        <BestSellerProducts />

        <Features />

        <StandardImageList />
      </Container>

      <FooterCta />
    </>
  );
}
