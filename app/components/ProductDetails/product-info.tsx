import { Product, ProductInterface } from "@/types";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function ProductInfo({ product } : {product: Product}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent : 'space-between'
      }}
    >
      <Box>
        <Image
          src={product.thumbnail}
          alt="thumbnail"
          className="w-[506px]"
          width={506}
          height={450}
        />
      </Box>

      <Box
        sx={{
          px: "24px",
          py: "11px",
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 400,
            color: "primary.dark",
          }}
        >
          {product.title}
        </Typography>

        <Box></Box>

        <Typography
          sx={{
            fontSize: "24px",
            mt: "21px",
            mb: "5px",
            fontWeight: 700,
            color: "primary.dark",
          }}
        >
          ${product.price}
        </Typography>

        <Typography
          sx={{
            fontSize: "14px",

            fontWeight: 700,
            color: "primary.main",
          }}
        >
          Availability :
          <Typography
            component={"span"}
            sx={{
              color: "#23A6F0",
              fontWeight: 700,
              ml: "5px",
            }}
          >
            {product.stock > 0 ? "In Stock" : "out of stock"}
          </Typography>
        </Typography>


{/* select color */}
        <Box
          sx={{
            display: "flex",

            borderTop: "1px solid #BDBDBD",
            mt: "119px",
            pt: "29px",
          }}
        >
          <Box
            sx={{
              width: "30px",
              height: "30px",
              background: "#23A6F0",
              mr: "10px",
              borderRadius: "100px",
              cursor : 'pointer'
            }}
          ></Box>

          
<Box
            sx={{
              width: "30px",
              height: "30px",
              background: "#2DC071",
              mr: "10px",
              borderRadius: "100px",
              cursor : 'pointer'

            }}
          ></Box>

<Box
            sx={{
              width: "30px",
              height: "30px",
              background: "#E77C40",
              mr: "10px",
              borderRadius: "100px",
              cursor : 'pointer'

            }}
          ></Box>

<Box
            sx={{
              width: "30px",
              height: "30px",
              background: "#252B42",
              mr: "10px",
              borderRadius: "100px",
              cursor : 'pointer'

            }}
          ></Box>
        </Box>


        <Box>


<Box>

    <Button sx={{
    
    bgcolor : '#23A6F0',
    py: '10px',
    px: '20px',
    color : '#fff',
    fontSize : '14px',
    fontWeight : 700,
    borderRadius : '5px',
    mt: '67px',

    ":hover" : {
      bgcolor : '#23A6F0'
    }
    }}>
Select Options
        
    </Button>
</Box>

        </Box>
      </Box>
    </Box>
  );
}
