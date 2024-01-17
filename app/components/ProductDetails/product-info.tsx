import { addToWishlist, useSelector } from "@/lib/redux";
import { addToCart } from "@/lib/redux/slices/cartSlice";
import { selectedCart } from "@/lib/redux/slices/cartSlice/selector";
import { selectWishListCount } from "@/lib/redux/slices/wishlistSlice/selector";
import { Product, ProductInterface } from "@/types";
import {
  Alert,
  Box,
  Button,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

export default function ProductInfo({ product }: { product: Product }) {
  const dispatch = useDispatch();
  const [openWishlistSnack, setOpenWishlistSnack] = React.useState(false);
  const [openCartSnack, setOpenCartSnack] = React.useState(false);

  const wishlistItems = useSelector(selectWishListCount);
  const selectCartList = useSelector(selectedCart);

  const isProductInWishlist = wishlistItems.some(
    (item) => item.id === product.id
  );

  const isProductInCart = selectCartList.some(
    (item) => item.product.id === product.id
  );
  const handleAddToWishlist = (product: Product) => {
    if (!isProductInWishlist) {
      dispatch(addToWishlist(product));
      setOpenWishlistSnack(true);
    }
  };

  const handleAddToCart = (product: Product) => {
    if (!isProductInCart) dispatch(addToCart(product));
    setOpenCartSnack(true);
  };

  const WishListMessage = () => {
    return (
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
            }}
          >
            Successfully added to wishlist
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: "24px",
          }}
        >
          <Image
            src={product.thumbnail}
            alt="thumbnail "
            width={64}
            height={64}
          />

          <Box
            sx={{
              ml: "8px",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              {product.title}
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                mt: "16px",
              }}
            >
              ${product.price}
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  };

  const CartListMessage = () => {
    return (
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
            }}
          >
            Successfully added to basket
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: "24px",
          }}
        >
          <Image
            src={product.thumbnail}
            alt="thumbnail "
            width={64}
            height={64}
          />

          <Box
            sx={{
              ml: "8px",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              {product.title}
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                mt: "16px",
              }}
            >
              ${product.price}
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: {
          xs: "column",
          lg: "row",
          xl: "row",
        },
      }}
    >
      {/* wishlist snackbar */}
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        onClose={() => setOpenWishlistSnack(false)}
        open={openWishlistSnack}
        autoHideDuration={4000}
        message={WishListMessage()}
      ></Snackbar>

      {/* cart snackbar */}

      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        onClose={() => setOpenCartSnack(false)}
        open={openCartSnack}
        autoHideDuration={4000}
        message={CartListMessage()}
      ></Snackbar>
      <Box>
        <Box

        component={'img'}
          src={product.thumbnail}

          alt="thumbnail"
          sx={{
            height: 506,
            width: 450,
            maxHeight: { xs: 233, md: 450 },
            maxWidth: { xs: 350, md: 506 },
          }}
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
              cursor: "pointer",
            }}
          ></Box>

          <Box
            sx={{
              width: "30px",
              height: "30px",
              background: "#2DC071",
              mr: "10px",
              borderRadius: "100px",
              cursor: "pointer",
            }}
          ></Box>

          <Box
            sx={{
              width: "30px",
              height: "30px",
              background: "#E77C40",
              mr: "10px",
              borderRadius: "100px",
              cursor: "pointer",
            }}
          ></Box>

          <Box
            sx={{
              width: "30px",
              height: "30px",
              background: "#252B42",
              mr: "10px",
              borderRadius: "100px",
              cursor: "pointer",
            }}
          ></Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",

            flexDirection: {
              xs: "column",
              xl: "row",
              lg: "row",
            },

            mt: "67px",
          }}
        >
          <Box>
            <Button
              sx={{
                bgcolor: "#23A6F0",
                py: "10px",
                px: "20px",
                color: "#fff",
                fontSize: "14px",
                fontWeight: 700,
                borderRadius: "5px",
                mr: "10px",

                ":hover": {
                  bgcolor: "#23A6F0",
                },
              }}
            >
              Select Options
            </Button>
          </Box>

          <Box
            onClick={() => handleAddToWishlist(product)}
            sx={{
              height: "40px",
              width: "40px",
              padding: "10px",
              bgcolor: "#E8E8E8",
              borderRadius: "50px",
              mr: "10px",
              cursor: isProductInWishlist ? "not-allowed" : "pointer",
            }}
          >
            <svg
              fill="#252B42"
              height="20"
              width="20"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 455 455"
              xmlSpace="preserve"
              stroke="#252B42"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M326.632,10.346c-38.733,0-74.991,17.537-99.132,46.92c-24.141-29.384-60.398-46.92-99.132-46.92 C57.586,10.346,0,67.931,0,138.714c0,55.426,33.05,119.535,98.23,190.546c50.161,54.647,104.728,96.959,120.257,108.626l9.01,6.769 l9.01-6.768c15.529-11.667,70.098-53.978,120.26-108.625C421.949,258.251,455,194.141,455,138.714 C455,67.931,397.414,10.346,326.632,10.346z M334.666,308.974c-41.259,44.948-85.648,81.283-107.169,98.029 c-21.52-16.746-65.907-53.082-107.166-98.03C61.236,244.592,30,185.717,30,138.714c0-54.24,44.128-98.368,98.368-98.368 c35.694,0,68.652,19.454,86.013,50.771l13.119,23.666l13.119-23.666c17.36-31.316,50.318-50.771,86.013-50.771 c54.24,0,98.368,44.127,98.368,98.368C425,185.719,393.763,244.594,334.666,308.974z"></path>{" "}
              </g>
            </svg>
          </Box>

          <Box
            onClick={() => handleAddToCart(product)}
            sx={{
              height: "40px",
              width: "40px",
              padding: "10px",
              bgcolor: "#E8E8E8",
              borderRadius: "100px",
              mr: "10px",
              cursor: isProductInCart ? "not-allowed" : "pointer",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 1.63333C0 1.46536 0.0667281 1.30427 0.185505 1.1855C0.304281 1.06673 0.465377 1 0.633353 1H2.53341C2.67469 1.00004 2.8119 1.04731 2.92322 1.1343C3.03454 1.22129 3.11357 1.34299 3.14776 1.48007L3.66078 3.53333H18.3672C18.4602 3.53342 18.5521 3.55398 18.6362 3.59356C18.7204 3.63315 18.7948 3.69077 18.8541 3.76235C18.9135 3.83393 18.9564 3.9177 18.9797 4.00772C19.0031 4.09774 19.0063 4.19179 18.9892 4.2832L17.0891 14.4165C17.062 14.5617 16.9849 14.6927 16.8714 14.7871C16.7578 14.8815 16.6148 14.9332 16.4672 14.9333H5.06682C4.91917 14.9332 4.7762 14.8815 4.66263 14.7871C4.54906 14.6927 4.47204 14.5617 4.44487 14.4165L2.54608 4.3022L2.0394 2.26667H0.633353C0.465377 2.26667 0.304281 2.19994 0.185505 2.08117C0.0667281 1.96239 0 1.8013 0 1.63333ZM3.92932 4.8L5.59251 13.6667H15.9415L17.6047 4.8H3.92932ZM6.33353 14.9333C5.66163 14.9333 5.01724 15.2002 4.54214 15.6753C4.06703 16.1504 3.80012 16.7948 3.80012 17.4667C3.80012 18.1385 4.06703 18.7829 4.54214 19.258C5.01724 19.7331 5.66163 20 6.33353 20C7.00543 20 7.64981 19.7331 8.12492 19.258C8.60003 18.7829 8.86694 18.1385 8.86694 17.4667C8.86694 16.7948 8.60003 16.1504 8.12492 15.6753C7.64981 15.2002 7.00543 14.9333 6.33353 14.9333ZM15.2005 14.9333C14.5286 14.9333 13.8842 15.2002 13.4091 15.6753C12.934 16.1504 12.6671 16.7948 12.6671 17.4667C12.6671 18.1385 12.934 18.7829 13.4091 19.258C13.8842 19.7331 14.5286 20 15.2005 20C15.8724 20 16.5168 19.7331 16.9919 19.258C17.467 18.7829 17.7339 18.1385 17.7339 17.4667C17.7339 16.7948 17.467 16.1504 16.9919 15.6753C16.5168 15.2002 15.8724 14.9333 15.2005 14.9333ZM6.33353 16.2C6.66948 16.2 6.99167 16.3335 7.22922 16.571C7.46678 16.8085 7.60023 17.1307 7.60023 17.4667C7.60023 17.8026 7.46678 18.1248 7.22922 18.3623C6.99167 18.5999 6.66948 18.7333 6.33353 18.7333C5.99758 18.7333 5.67539 18.5999 5.43783 18.3623C5.20028 18.1248 5.06682 17.8026 5.06682 17.4667C5.06682 17.1307 5.20028 16.8085 5.43783 16.571C5.67539 16.3335 5.99758 16.2 6.33353 16.2ZM15.2005 16.2C15.5364 16.2 15.8586 16.3335 16.0962 16.571C16.3337 16.8085 16.4672 17.1307 16.4672 17.4667C16.4672 17.8026 16.3337 18.1248 16.0962 18.3623C15.8586 18.5999 15.5364 18.7333 15.2005 18.7333C14.8645 18.7333 14.5423 18.5999 14.3048 18.3623C14.0672 18.1248 13.9338 17.8026 13.9338 17.4667C13.9338 17.1307 14.0672 16.8085 14.3048 16.571C14.5423 16.3335 14.8645 16.2 15.2005 16.2Z"
                fill="#252B42"
              />
            </svg>
          </Box>

          <Box
            sx={{
              height: "40px",
              width: "40px",
              padding: "10px",
              bgcolor: "#E8E8E8",
              borderRadius: "100px",
              mr: "10px",
              cursor: "pointer",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 10C12.5 10.663 12.2366 11.2989 11.7678 11.7678C11.2989 12.2366 10.663 12.5 10 12.5C9.33696 12.5 8.70107 12.2366 8.23223 11.7678C7.76339 11.2989 7.5 10.663 7.5 10C7.5 9.33696 7.76339 8.70107 8.23223 8.23223C8.70107 7.76339 9.33696 7.5 10 7.5C10.663 7.5 11.2989 7.76339 11.7678 8.23223C12.2366 8.70107 12.5 9.33696 12.5 10Z"
                fill="black"
              />
              <path
                d="M2 10C2 10 5 4.5 10 4.5C15 4.5 18 10 18 10C18 10 15 15.5 10 15.5C5 15.5 2 10 2 10ZM10 13.5C10.9283 13.5 11.8185 13.1313 12.4749 12.4749C13.1313 11.8185 13.5 10.9283 13.5 10C13.5 9.07174 13.1313 8.1815 12.4749 7.52513C11.8185 6.86875 10.9283 6.5 10 6.5C9.07174 6.5 8.1815 6.86875 7.52513 7.52513C6.86875 8.1815 6.5 9.07174 6.5 10C6.5 10.9283 6.86875 11.8185 7.52513 12.4749C8.1815 13.1313 9.07174 13.5 10 13.5Z"
                fill="black"
              />
            </svg>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
