import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import { Product } from "@/types";

const CarouselComponent = ({ images }: { images: Product["images"] }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,

    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box
      sx={{
        height: 506,
      
        width: 450,
        maxHeight: { xs: 233, md: 450 },
        maxWidth: { xs: 350, md: 506 },
      }}
    >
      <Slider 
      
      autoplay
      {...settings}>
        {images.map((imageUrl, index) => (
          <div key={index}>
            <Box
              component={"img"}
              src={imageUrl}
            
              sx={{
                height: 506,
                width: 450,
                maxHeight: { xs: 233, md: 450 },
                maxWidth: { xs: 350, md: 506 },
              }}
              width={506}
              height={450}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
      <div style={{ marginTop: "21px" }}>
        {images.map((thumbnailUrl, index) => (
          <img
            key={index}
            src={thumbnailUrl}
            alt={`Thumbnail ${index + 1}`}
            style={{
              width: "100px",
              height: "75px",
              marginRight: "5px",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </Box>
  );
};

export default CarouselComponent;
