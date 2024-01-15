import {
  AWSLogo,
  HolliLogo,
  LyftLogo,
  PiedPiperLogo,
  RedditLogo,
  StripeLogo,
} from "@/app/assets";
import { Stack } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function SponsorContain() {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 2 }}
      sx={{
        display: "flex",
        py : "50px",
        justifyContent : 'space-between',
        alignItems:'center'
      }}
    >
      <Image src={HolliLogo} alt="holli logo" />

      <Image src={LyftLogo} alt="holli logo" />
      <Image src={PiedPiperLogo} alt="holli logo" />
      <Image src={StripeLogo} alt="holli logo" />

      <Image src={AWSLogo} alt="holli logo" />

      <Image src={RedditLogo} alt="holli logo" />
    </Stack>
  );
}
