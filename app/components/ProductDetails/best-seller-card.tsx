import { useGetProductsQuery } from "@/services/products";
import { Product } from "@/types";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BestSellerCard({ data }: { data: Product }) {
  return (
    <Link
      style={{
        textDecoration: "none",
      }}
      href={`/${data.id}`}
    >
      <Box
        sx={{
          width: "239px",
          height: "442px",
        }}
      >
        <Image src={data.thumbnail} alt="prodct" width={239} height={238} />

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

              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
              textTransform: "capitalize",

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

              mt: "10px",
            }}
          >
            {data.category}
          </Typography>

          <Box
            sx={{
              display: "flex",

              mt: "10px",
            }}
          >
            <Typography
              sx={{
                mr: "5px",
                fontSize: "16px",
                fontWeight: 700,
                color: "#BDBDBD",
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
              }}
            >
              ${data.discountPercentage}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Link>
  );
}
