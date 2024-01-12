"use client";
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  TwitterIcon,
  YoutubeIcon,
  phoneIcon,
} from "@/app/assets";
import { Instagram } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function TopHeader() {
  return (
    <Box
      sx={{
        bgcolor: "#23856D",
        height: "58px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          color: "#fff",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* phone */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image src={phoneIcon} alt="phone icon" />
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "400",
                ml: "5px",
              }}
            >
              (225) 555-0118
            </Typography>
          </Box>

          {/* mail */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image src={MailIcon} alt="phone icon" />
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "400",
                ml: "5px",
              }}
            >
              michelle.rivera@example.com
            </Typography>
          </Box>

          {/* follow us */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "14px",
                mr: "50px",
              }}
            >
              Follow Us and get a chance to win 80% off
            </Typography>

            {/* social icons */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  mr: "15px",
                  fontSize : '14px',
                  fontWeight : 700
                }}
              >
                Follow us :
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    mr: "15px",
                    cursor : 'pointer'

                  }}
                >
                  <Image src={InstagramIcon} alt="instagram" />
                </Box>
                <Box
                  sx={{
                    mr: "15px",
                    cursor : 'pointer'

                  }}
                >
                  <Image src={YoutubeIcon} alt="instagram" />
                </Box>
                <Box
                  sx={{
                    mr: "15px",
                    cursor : 'pointer'

                  }}
                >
                  <Image src={FacebookIcon} alt="instagram" />
                </Box>

                <Box
                  sx={{
                    mr: "15px",
                    cursor : 'pointer'
                  }}
                >
                  <Image src={TwitterIcon} alt="instagram" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
