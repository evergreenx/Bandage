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
import { ReduxState, removeFromWishlist } from "@/lib/redux";
import {
  removeFromCart,
  updateCartItemQuantity,
} from "@/lib/redux/slices/cartSlice";
import { selectedCart } from "@/lib/redux/slices/cartSlice/selector";
import { selectWishListCount } from "@/lib/redux/slices/wishlistSlice/selector";
import { Product } from "@/types";

import { Instagram } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Link,
  Popper,
  Typography,
} from "@mui/material";
import Image from "next/image";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const selectWishList = useSelector(selectWishListCount);

  const selectCartList = useSelector(selectedCart);
  const [anchorEl, setAnchorEl] = React.useState<null>(null);

  const [anchorElCart, setAnchorElCart] = React.useState<null>(null);

  const openWishListPopover = Boolean(anchorEl);

  const openCartPopover = Boolean(anchorElCart);

  const idCart = openCartPopover ? "simplecart-popper" : undefined;

  const id = openWishListPopover ? "simple-popper" : undefined;

  const handleClick = (event: any) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClickCart = (event: any) => {
    setAnchorElCart(anchorElCart ? null : event.currentTarget);
  };

  const dispatch = useDispatch();

  // wishpopup
  function WishlistPopup({ open }: { open: boolean }) {
    return (
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box
          sx={{
            p: 3,
            bgcolor: "background.paper",
            boxShadow: 3,
            height: "500px",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 600,
              my: "1px",
              mb: "15px",
            }}
          >
            My wishlist
          </Typography>

          {selectWishList.length === 0 && (
            <Typography>No product , try adding</Typography>
          )}
          {selectWishList.map((i) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: "10px",
                }}
              >
                <Image
                  src={i.thumbnail}
                  alt="product"
                  width={100}
                  height={50}
                />

                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 600,
                    ml: "8px",
                  }}
                >
                  {i.title.slice(0, 10)}.....
                </Typography>

                <Box
                  sx={{
                    ml: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => dispatch(removeFromWishlist(i.id))}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 4.109375 5 L 5.8925781 20.255859 L 5.8925781 20.263672 C 6.023602 21.250335 6.8803207 22 7.875 22 L 16.123047 22 C 17.117726 22 17.974445 21.250322 18.105469 20.263672 L 18.107422 20.255859 L 19.890625 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 6.125 5 L 17.875 5 L 16.123047 20 L 7.875 20 L 6.125 5 z"></path>
                  </svg>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Popper>
    );
  }

  function CartPopup({ open }: { open: boolean }) {
    const calculateCartTotal = (): number => {
      return selectCartList.reduce((total, item) => {
        const product = item.product;
        const itemTotal = product.price * item.quantity;
        return total + itemTotal;
      }, 0);
    };

    const cartTotal = calculateCartTotal();

    const handleIncrement = (product: Product, quantity: number) => {
      const currentQuantity =
        selectCartList.find((item) => item.product.id === product.id)
          ?.quantity || 0;

      if (currentQuantity) {
        const updatedQuantity = quantity + 1;
        dispatch(
          updateCartItemQuantity({ product, currentQuantity: updatedQuantity })
        );
      }
    };

    const handleDecrement = (product: Product, quantity: number) => {
      const currentQuantity =
        selectCartList.find((item) => item.product.id === product.id)
          ?.quantity || 0;

      if (currentQuantity > 0) {
        const updatedQuantity = currentQuantity - 1;
        dispatch(
          updateCartItemQuantity({ product, currentQuantity: updatedQuantity })
        );
      }
    };

    return (
      <Popper id={idCart} open={open} anchorEl={anchorElCart}>
        <Box
          sx={{
            p: 3,
            bgcolor: "background.paper",

            boxShadow: 3,
            height: "500px",
            width: "500px",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 600,
              my: "1px",
              mb: "15px",
            }}
          >
            My cart
          </Typography>

          {selectCartList.length === 0 && (
            <Typography>No product , try adding</Typography>
          )}
          {selectCartList.map((i) => {
            return (
              <>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: "10px",
                  }}
                >
                  <Image
                    src={i.product.thumbnail}
                    alt="product"
                    width={100}
                    height={50}
                  />

                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                      ml: "8px",
                    }}
                  >
                    {i.product.title.slice(0, 10)}.....
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      sx={{
                        fontSize: "18px",
                        fontWeight: 700,
                      }}
                      onClick={() => handleIncrement(i.product, i.quantity)}
                    >
                      +
                    </Button>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 600,
                        mx: "8px",
                      }}
                    >
                      {i.quantity}
                    </Typography>

                    <Button
                      sx={{
                        fontSize: "18px",
                        fontWeight: 700,
                      }}
                      onClick={() => handleDecrement(i.product, i.quantity)}
                    >
                      -
                    </Button>
                  </Box>

                  <Box
                    sx={{
                      ml: "10px",
                      cursor: "pointer",
                    }}
                    onClick={() => dispatch(removeFromCart(i.product.id))}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 4.109375 5 L 5.8925781 20.255859 L 5.8925781 20.263672 C 6.023602 21.250335 6.8803207 22 7.875 22 L 16.123047 22 C 17.117726 22 17.974445 21.250322 18.105469 20.263672 L 18.107422 20.255859 L 19.890625 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 6.125 5 L 17.875 5 L 16.123047 20 L 7.875 20 L 6.125 5 z"></path>
                    </svg>
                  </Box>
                </Box>
              </>
            );
          })}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              alignSelf: "flex-end",
              justifySelf: "flex-end",

              mt: "70px",
            }}
          >
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: 700,
              }}
            >
              Total
            </Typography>

            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: 700,
              }}
            >
              ${cartTotal}
            </Typography>
          </Box>
        </Box>
      </Popper>
    );
  }

  return (
    <>
      {/* wishlist popover */}
      <WishlistPopup open={openWishListPopover} />

      {/* cartpopup popover */}
      <CartPopup open={openCartPopover} />

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
                ml: "119px",
                display: {
                  xs: "none",
                  lg: "flex",
                  xl: "flex",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "primary.main",
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
                  color: "primary.main",
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
                  color: "primary.main",
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
                  color: "primary.main",
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
                  color: "primary.main",
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
                  color: "primary.main",
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
                xs: "none",
                lg: "flex",
                xl: "flex",
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

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
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
                onClick={handleClickCart}
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
                  {selectCartList.length}
                </Typography>
              </Box>

              <Box
                onClick={handleClick}
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
    </>
  );
}
