import { Hero1, Hero2, Hero3, Hero4 } from "@/app/assets";
import { Box, Grid, Typography } from "@mui/material";
import { url } from "inspector";
import React from "react";

export default function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        my : '80px',

        flexDirection: {
          xs: "column",
          xl: "row",
        },
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${Hero1.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: {
            xs: "300px",
            xl: "616px",
            lg: "616px",
          },

          mb: {
            xs: "15px",
            lg: "0",
            xl: "0",
          },

          width: {
            xs: "331px",

            lg: "451px",

            xl: "451px",
          },
        }}
      >
        <Box
          sx={{
            p: "24px",
          }}
        >
          <Typography
            sx={{
              color: "#2DC071",
              fontSize: "14px",
              fontWeight: 700,
              mb: "5px",
            }}
          >
            5 items
          </Typography>

          <Typography
            sx={{
              color: "primary.main",
              fontSize: "40px",
              fontWeight: 700,
              mb: "5px",
            }}
          >
            FURNITURE
          </Typography>

          <Typography
            sx={{
              color: "primary.main",
              fontSize: "14px",
              fontWeight: 700,
              mb: "5px",
            }}
          >
            Read More
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          ml: {
            xs: "0",
            lg: "16px",
            xl: "16px",
          },
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${Hero2.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: {
              xs: "300px",
              xl: "300px",
              lg: "300px",
            },

            mb: {
              xs: "15px",
              lg: "0",
              xl: "0",
            },

            width: {
              xs: "331px",

              lg: "678px",

              xl: "678px",
            },
          }}
        >
          <Box
            sx={{
              p: "24px",
            }}
          >
            <Typography
              sx={{
                color: "#2DC071",
                fontSize: "14px",
                fontWeight: 700,
                mb: "5px",
              }}
            >
              5 items
            </Typography>

            <Typography
              sx={{
                color: "primary.main",
                fontSize: "24px",
                fontWeight: 700,
                mb: "5px",
              }}
            >
              FURNITURE
            </Typography>

            <Typography
              sx={{
                color: "primary.main",
                fontSize: "14px",
                fontWeight: 700,
                mb: "5px",
              }}
            >
              Read More
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            mt: {
              xs: "0",
              lg: "16px",
              xl: "16px",
            },

            flexDirection: {
              xs: "column",
              xl: "row",
            },
          }}
        >
          <Box
            sx={{
              width: "331px",
              height: "300px",

              backgroundImage: `url(${Hero3.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              mr: {
                xs: "0",
                lg: "16px",
                xl: "16px",
              },
            }}
          >
            <Box
              sx={{
                p: "24px",
              }}
            >
              <Typography
                sx={{
                  color: "#2DC071",
                  fontSize: "14px",
                  fontWeight: 700,
                  mb: "5px",
                }}
              >
                5 items
              </Typography>

              <Typography
                sx={{
                  color: "primary.main",
                  fontSize: "24px",
                  fontWeight: 700,
                  mb: "5px",
                }}
              >
                FURNITURE
              </Typography>

              <Typography
                sx={{
                  color: "primary.main",
                  fontSize: "14px",
                  fontWeight: 700,
                  mb: "5px",
                }}
              >
                Read More
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              mt: {
                xs: "15px",
                lg: "0",
              },
              width: {
                lg: "331px",
                xs: "331px",
              },
              height: "300px",

              backgroundImage: `url(${Hero4.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <Box
              sx={{
                p: "24px",
              }}
            >
              <Typography
                sx={{
                  color: "#2DC071",
                  fontSize: "14px",
                  fontWeight: 700,
                  mb: "5px",
                }}
              >
                5 items
              </Typography>

              <Typography
                sx={{
                  color: "primary.main",
                  fontSize: "24px",
                  fontWeight: 700,
                  mb: "5px",
                }}
              >
                FURNITURE
              </Typography>

              <Typography
                sx={{
                  color: "primary.main",
                  fontSize: "14px",
                  fontWeight: 700,
                  mb: "5px",
                }}
              >
                Read More
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
