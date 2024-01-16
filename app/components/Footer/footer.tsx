"use client";
import {
  FacebookBlueIcon,
  InstagramBlueIcon,
  Logo,
  TwitterBlueIcon,
} from "@/app/assets";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Footer() {
  const companyInfo = ["About Us", "Carrier", "We are hiring", "Blog"];

  const legal = ["About Us", "Carrier", "We are hiring", "Blog"];

  const features = [
    "Business Marketing",
    "User Analytic",
    "Live Chat",
    "Unlimited Support",
  ];

  const resources = ["IOS & Android", "Watch a Demo", "Customers", "API"];

  return (
    <>
      <Box
        sx={{
          height: "138px",
          py: "40px",
          bgcolor: "#FAFAFA",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container
          sx={{
            display: "flex",


            flexDirection: {

              xs: 'column', lg: 'row', xl: 'row' 

            },
     
            justifyContent: "space-between",
            alignItems: {


              
              xs: 'left', lg: 'center', xl: 'center' 
            }
          }}
        >
          <Image src={Logo} alt="logo" />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",

              mt: {
                
              xs: '11px', lg: '0', xl: '0' 
              }
            }}
          >
            <Box>
              <Image src={FacebookBlueIcon} alt="facebook icon" />
            </Box>

            <Box
              sx={{
                ml: "20px",
              }}
            >
              <Image src={InstagramBlueIcon} alt="instagram icon" />
            </Box>

            <Box
              sx={{
                ml: "20px",
              }}
            >
              <Image src={TwitterBlueIcon} alt="twitter icon" />
            </Box>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box
          sx={{
            flexDirection: {
              xs: "column",
              lg: "row",
            },

            display: "flex",
            justifyContent: "space-between",
            pt: "50px",
          }}
        >
          <Box
            sx={{
              width: "148px",
              mr: "30px",
              mb : {

                
              xs: '30px', lg: '0', xl: '0' 
              }
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                color: "primary,dark",
                mb: "20px",
              }}
            >
              Company Info
            </Typography>

            {companyInfo.map((i) => {
              return (
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "primary.main",
                    mb: "10px",
                  }}
                >
                  {i}
                </Typography>
              );
            })}
          </Box>

          <Box
            sx={{
              width: "148px",
              mr: "30px",
              mb : {

                
                xs: '30px', lg: '0', xl: '0' 
                }
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                color: "primary,dark",
                mb: "20px",
              }}
            >
              Legal
            </Typography>

            {companyInfo.map((i) => {
              return (
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "primary.main",
                    mb: "10px",
                  }}
                >
                  {i}
                </Typography>
              );
            })}
          </Box>

          <Box
            sx={{
              width: "148px",
              mr: "30px",
              mb : {

                
                xs: '30px', lg: '0', xl: '0' 
                }
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                color: "primary,dark",
                mb: "20px",
              }}
            >
              Features
            </Typography>

            {features.map((i) => {
              return (
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "primary.main",
                    mb: "10px",
                  }}
                >
                  {i}
                </Typography>
              );
            })}
          </Box>

          <Box
            sx={{
              width: "148px",
              mr: "30px",
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                color: "primary,dark",
                mb: "20px",
              }}
            >
              Resources
            </Typography>

            {resources.map((i) => {
              return (
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "primary.main",
                    mb: "10px",
                  }}
                >
                  {i}
                </Typography>
              );
            })}
          </Box>

          <Box sx={{}}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                color: "primary,dark",
                mb: "20px",
              }}
            >
              Get In Touch
            </Typography>

            <Box
              sx={{
                width: "321px",
                display: "flex",
                bgcolor: "#F9F9F9",

                alignItems: "center",
              }}
            >
              <TextField
                label="Your Email"
                InputLabelProps={{
                  style: {
                    fontSize: "14px",

                    color: "primary.main",
                    fontWeight: "400",
                  },
                }}
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "primary.main",
                  borderRadius: "50px",
                  border: "0px",

                  "& .MuiOutlinedInput-root": {
                    borderRadius: "5px",
                    height: "58px",
                    border: "1px solid #E6E6E6",
                    borderRight: "none",

                    ":hover": {
                      border: "0.5px solid #E6E6E6 !important",
                    },
                    ":focus-within": { border: "none !important" },
                  },
                  "& .MuiOutlinedInput-root.Mui-disabled": {
                    ":hover": {
                      border: "1px solid #909090 !important",
                      boxShadow: "none",
                    },
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "0.5px solid #E6E6E6 !important",
                    bgcolor: "none",
                  },
                }}
                variant="outlined"
              />

              <Button
                sx={{
                  width: "117px",
                  borderRadius: "5px",
                  height: "58px",
                  bgcolor: "#23A6F0",
                  fontSize: "14px",
                  fontWeight: 400,
                  textTransform: "capitalize",
                  color: "#fff",

                  ":hover": {
                    bgcolor: "#23A6F0",
                  },
                }}
              >
                Subscribe
              </Button>
            </Box>

            <Typography
              sx={{
                fontSize: "12px",
                mt: "15px",

                fontWeight: 400,

                color: "primary.main",
              }}
            >
              Lore imp sum dolor Amit
            </Typography>
          </Box>
        </Box>

        <Typography
          sx={{
            fontSize: "14px",
          textAlign : {

            xs: 'center' , lg: 'left'

          } , 
            mt: "77px",
            mx : {

              xs: 'auto'  , lg: '0' , 
              xl: '0'
            },
            width : {

                
              xs: '313px', lg: '100%', xl: '100%' 
              },
            fontWeight: 700,

            color: "primary.main",
            
          }}
        >
          Made With Love By Finland All Right Reserved
        </Typography>
      </Container>
    </>
  );
}
