import { useGetProductsQuery } from "@/services/products";
import { Product } from "@/types";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductsCard({ data }: { data: Product }) {

  const discountedPrice = data.price * (data.discountPercentage / 100);

  return (
    <Link
      href={`/${data.id}`}
      style={{
        textDecoration: "none",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            lg: "183px",
            xl: "183px",
          },
          height: "400px",
        }}
      >
        <Box
          component={"img"}
          sx={{
            width: {
              xs: "100%",
              md: 183,
            },
            height: 238,
            maxHeight: { xs: "100%", md: 238 },
            maxWidth: { xs: "100%", md: 183 },
          }}
          src={data.thumbnail}
          alt="product"
        />

        <Box
          sx={{
            px: "25px",
            pt: "25px",
            pb: "35px",
          }}
        >
          <Typography
            sx={{
              color: "primary.dark",
              fontsize: "16px",
              fontWeight: 700,
              textAlign: "center",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
              textTransform: "capitalize",
              width: {

                xs :'100%',
                md :  "131px"
              },
              lineClamp: 1,
            }}
          >
            {data.title}
          </Typography>

          <Typography
            sx={{
              color: "primary.main",
              textTransform: "capitalize",
              fontsize: "14px",
              fontWeight: 700,
              textAlign: "center",
              mt: "10px",
            }}
          >
            {data.category}
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: "10px",
            }}
          >
            <Typography
              sx={{
                mr: "5px",
                fontSize: "16px",
                fontWeight: 700,
                color: "#BDBDBD",
                textAlign: "center",
              }}
            >
              ${data.price}
            </Typography>

            <Typography
              sx={{
                mr: "5px",
                fontSize: "16px",
                fontWeight: 700,
                color: "#23856D",
                textAlign: "center",
              }}
            >
              ${discountedPrice.toFixed(2)}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Link>
  );
}
