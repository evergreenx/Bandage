"use client ";

import { FooterBg } from "@/app/assets";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function FooterCta() {

    const imageURL = "https://cdn.pixabay.com/photo/2023/05/20/20/39/european-roller-8007340__340.jpg";

  return (
    <Box
      sx={{
        height: "640px",
        bgcolor: "yellow",
        backgroundImage: `url(${FooterBg.src})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "571px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          mx: "auto",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontsize: "14px",
            color: "#23A6F0",
            mb: "30px",
            fontWeight: 400,
          }}
        >
          Designing Better Experience
        </Typography>
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: 700,
            color: "primary.dark",
          }}
        >
          Problems trying to resolve the conflict between
        </Typography>

        <Typography
          sx={{
            fontsize: "14px",
            color: "priamry.main",
            my: "30px",
            fontWeight: 400,
          }}
        >
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:
        </Typography>

        <Typography
          sx={{
            color: "#23856D",
            fontSize: "34px",
            fontWeight: 700,
            mb: "30px",
          }}
        >
          $16.48
        </Typography>

        <Button
          sx={{
            bgcolor: "#23A6F0",
            color: "#fff",
            fontSize: "14px",
            py: "15px",
            px: "40px",
            borderRadius: "5px",
            fontWeight: 700,
            width: "292px",
            mx: "auto",

            ":hover": {
                bgcolor: "#23A6F0",
              },
          }}
        >
          ADD YOUR CALL TO ACTION
        </Button>
      </Box>
    </Box>
  );
}
