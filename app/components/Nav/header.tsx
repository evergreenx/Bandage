"use client";
import {
  FacebookIcon,
  InstagramIcon,
  Logo,
  MailIcon,
  SearchIcon,
  StoreIcon,
  TwitterIcon,
  WishtlistIcon,
  YoutubeIcon,
  avatarIcon,
  phoneIcon,
} from "@/app/assets";
import { ReduxState } from "@/lib/redux";
import { selectWishListCount } from "@/lib/redux/slices/wishlistSlice/selector";


import { Instagram } from "@mui/icons-material";
import { Box, Container, Link, Typography } from "@mui/material";
import Image from "next/image";

import React from "react";
import { useSelector } from "react-redux";


export default function Header() {

 const selectWishList = useSelector(selectWishListCount)

 



  return (
    <Box
      sx={{
        bgcolor: "#fff",
        height: "138px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          display: "flex",

          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box>
            <Link href={"/"}>
              <Image src={Logo} alt="bandage logo" />
            </Link>
          </Box>

          <Box
            sx={{
       
              ml  : '119px',
              display: {

                xs: 'none', lg: 'flex', xl: 'flex' 
  
              },
       
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                color : "primary.main",
                fontWeight: 700,
                cursor: "pointer",
                mr: "15px",
              }}
            >
              Home
            </Typography>

            <Typography
              sx={{
                fontSize: "14px",
                color : "primary.main",
                fontWeight: 700,
                cursor: "pointer",
                mr: "15px",
              }}
            >
              Shop
            </Typography>

            <Typography
              sx={{
                fontSize: "14px",
                color : "primary.main",
                fontWeight: 700,
                cursor: "pointer",
                mr: "15px",
              }}
            >
              About
            </Typography>

            <Typography
              sx={{
                fontSize: "14px",
                color : "primary.main",
                fontWeight: 700,
                cursor: "pointer",
                mr: "15px",
              }}
            >
              Blog
            </Typography>

            <Typography
              sx={{
                fontSize: "14px",
                color : "primary.main",
                fontWeight: 700,
                cursor: "pointer",
                mr: "15px",
              }}
            >
              Contact
            </Typography>

            <Typography
              sx={{
                fontSize: "14px",
                color : "primary.main",
                fontWeight: 700,
                cursor: "pointer",
                mr: "15px",
              }}
            >
              Pages
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: {

              xs: 'none', lg: 'flex', xl: 'flex' 

            },
     

            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mr: "30px",
            }}
          >
            <Image src={avatarIcon} alt="avatar" />

            <Typography
              sx={{
                textDecoration: "none",
                color: "#23A6F0",
                fontWeight: 700,
                fontSize: "14px",
                ml: "5px",
                cursor: "pointer",
              }}
            >
              Login
            </Typography>
            <Typography
              sx={{
                textDecoration: "none",
                color: "#23A6F0",
                fontWeight: 700,
                fontSize: "14px",
              }}
            >
              /
            </Typography>

            <Typography
              sx={{
                textDecoration: "none",
                color: "#23A6F0",
                fontWeight: 700,
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              Register
            </Typography>
          </Box>

          <Box display={"flex"} alignItems={"center"}>
            <Box
              sx={{
                mr: "30px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image src={SearchIcon} alt="searh icon" />
            </Box>

            <Box
              sx={{
                mr: "30px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image src={StoreIcon} alt="searh icon" />

              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "#23A6F0",
                  ml: "5px",
                }}
              >
                1
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image src={WishtlistIcon} alt="searh icon" />

              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "#23A6F0",
                  ml: "5px",
                }}
              >
                {selectWishList.length}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
