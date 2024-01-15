"use client";
import { Box } from "@mui/material";
import { useParams } from "next/navigation";
import React from "react";

export default function page() {
  const { id } = useParams();
  return (
    <Box>
      {id}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo iure beatae
      sint, atque repudiandae cumque officiis corporis dolores facilis, quia
      error autem praesentium impedit dolor fugit animi velit unde totam.
    </Box>
  );
}
