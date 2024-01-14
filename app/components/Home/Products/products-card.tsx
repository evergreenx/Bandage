import { useGetProductsQuery } from "@/services/products";
import { Product } from "@/types";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function ProductsCard({data } : { data : Product}) {
  return (
    <Box
      sx={{
        width: "183px",
        height : '400px'
      }}
    >
      <Image src={data.thumbnail} alt="prodct" width={183} height={238} />
    

      <Box
      
      sx={{

        px : '25px',
        pt: '25px',
        pb: '35px'

      }}
      >
      <Typography
      
      sx={{
        color: 'primary.dark',
        fontsize : '16px' ,
        fontWeight : 700,
        textAlign  :'center'


      }}
      
      >{data.title}</Typography>

      <Typography
      
        
      sx={{
        color: 'primary.main',
        textTransform : 'capitalize',
        fontsize : '14px' ,
        fontWeight : 700,
        textAlign  :'center',
        mt : '10px'


      }}
      
      >{data.category}</Typography>

      <Box
      
      sx={{

        display : 'flex',
        justifyContent: 'center',
        mt : '10px'
      }}
      >
      <Typography
      
      sx={{
        mr :'5px',
        fontSize : '16px',
        fontWeight : 700,
        color : '#BDBDBD',
        textAlign : 'center'
        
      }}
      
      >${data.price}</Typography>

<Typography

sx={{

    mr :'5px',
    fontSize : '16px',
    fontWeight : 700,
    color : '#23856D',
    textAlign : 'center'
}}
>${data.discountPercentage}</Typography>
      </Box>
 

      </Box>

    </Box>
  );
}
