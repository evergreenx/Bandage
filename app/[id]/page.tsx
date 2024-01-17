"use client";
import {
  useGetProductsQuery,
  useGetSingleProductsQuery,
} from "@/services/products";
import {
  Box,
  Breadcrumbs,
  CircularProgress,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { useParams } from "next/navigation";
import React from "react";
import BestSellerCard from "../components/ProductDetails/best-seller-card";
import BestSellerProducts from "../components/Home/Products/best-seller";
import { Product } from "@/types";
import SponsorContain from "../components/ProductDetails/sponsor-contain";
import ProductInfo from "../components/ProductDetails/product-info";
import ProductsCard from "../components/Home/Products/products-card";
import CenteredTabs from "../components/ProductDetails/tab";

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

  const customSepetor = () => {
    return (
      <>
        <svg
          width="10"
          height="16"
          viewBox="0 0 10 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_541_574)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.680771 0.180771C0.737928 0.123469 0.805828 0.0780066 0.880583 0.0469869C0.955337 0.0159672 1.03548 0 1.11641 0C1.19735 0 1.27749 0.0159672 1.35224 0.0469869C1.427 0.0780066 1.4949 0.123469 1.55205 0.180771L8.9358 7.56452C8.9931 7.62168 9.03857 7.68958 9.06959 7.76433C9.10061 7.83909 9.11657 7.91923 9.11657 8.00016C9.11657 8.0811 9.10061 8.16124 9.06959 8.23599C9.03857 8.31074 8.9931 8.37865 8.9358 8.4358L1.55205 15.8196C1.43651 15.9351 1.27981 16 1.11641 16C0.953015 16 0.79631 15.9351 0.680771 15.8196C0.565232 15.704 0.500322 15.5473 0.500322 15.3839C0.500322 15.2205 0.565232 15.0638 0.680771 14.9483L7.63011 8.00016L0.680771 1.05205C0.623469 0.994897 0.578006 0.926996 0.546986 0.852242C0.515967 0.777487 0.5 0.697347 0.5 0.616412C0.5 0.535478 0.515967 0.455338 0.546986 0.380583C0.578006 0.305829 0.623469 0.237928 0.680771 0.180771Z"
              fill="#BDBDBD"
            />
          </g>
          <defs>
            <clipPath id="clip0_541_574">
              <rect
                width="9"
                height="16"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </>
    );
  };
  return (
    <>
      <Box
        sx={{
          bgcolor: "#FAFAFA",
          pb: "48px",
        }}
      >
        <Container>
          <Breadcrumbs
            separator={customSepetor()}
            sx={{
              py: "24px",
              mb: "24px",
            }}
            aria-label="breadcrumb"
          >
            <Link
              underline="hover"
              sx={{
                color: "#252B42",
                fontSize: "14px",
                fontWeight: 700,
              }}
              href="/"
            >
              Home
            </Link>

            <Link
              underline="hover"
              sx={{
                fontSize: "14px",
                color: "#BDBDBD",
              }}
              href={`/${id}`}
              aria-current="page"
            >
              {id}
            </Link>
          </Breadcrumbs>

          {data && <ProductInfo product={data} />}
        </Container>
      </Box>

      {data && <CenteredTabs data={data} />}

      <Container>
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

        {/* product details */}

        <Typography
          sx={{
            color: "primary.dark",
            fontSize: "24px",
            fontWeight: 700,
            mb: "50px",
            mt: "48px",
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
                  <ProductsCard data={product} key={product.id} />
                </Grid>
              );
            })}
        </Grid>

        <SponsorContain />
      </Container>
    </>
  );
}
