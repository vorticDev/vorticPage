"use client";
import "./globals.css";
import {
  AppBar,
  Box,
  Container,
  Stack,
  Typography,
  Menu,
  MenuItem,
  useMediaQuery,
  IconButton,
  Drawer,
  ListItem,
  List,
} from "@mui/material";
import Image from "next/image";
import {
  createTheme,
  ThemeProvider,
  rgbToHex,
  useTheme,
} from "@mui/material/styles";
import {
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { esES } from "@mui/material/locale";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Html, Head, Main, NextScript } from 'next/document';

import { useState } from "react";
import { usePathname } from "next/navigation";

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

const theme = createTheme(
  {
    palette: {
      primary: { main: "#4caf50", contrastText: "#fff" },
      secondary: { main: "#9C639B", contrastText: "#fff" },
      error: { main: "#ef5350", contrastText: "#fff" },
      // warning: { main: '#ffca28', contrastText: '#fff' },
      // info: { main: '#2196f3', contrastText: '#fff' },
      success: { main: "#4caf50", contrastText: "#fff" },
      // background: { default: '#fff' },
      // text: { primary: '#212121', secondary: '#757575' },
      // divider: '#bdbdbd',
      // action: { active: '#212121', hover: '#bdbdbd', selected: '#eeeeee', disabled: '#bdbdbd', disabledBackground: '#e0e0e0' },
    },
  },
  esES
);

export default function RootLayout({ children }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const pathname = usePathname();
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.up("md"));
  const isProductRoute = pathname.startsWith("/products");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(pathname);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (

    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/logoIcon.ico" />
      <title>Vortic</title>
    </head>
      



      <body>
   
        <ThemeProvider theme={theme}>

          <AppBar
            position="fixed"
            sx={{
              backgroundColor: "#000000",
              height: 50,
              borderBottom: "1px solid #979797",
            }}
          >
            <Box display={"flex"} alignItems={"center"} pt={1} pl={4} pr={4}>
              <Box>
                <Image src="/logoSmall.svg" alt="logo" width={35} height={35} />
              </Box>

              <Box flexGrow={1} ml={1}>
                <Typography sx={{ color: "#ffffff" }} fontWeight={"bold"}>
                  VORTIC
                </Typography>
              </Box>

              <Box display={{ xs: "block", md: "none" }}>
                <IconButton onClick={() => setDrawerOpen(!drawerOpen)}>
                  <MenuIcon sx={{ color: "#ffffff" }} />
                </IconButton>
                <Drawer
                  open={drawerOpen}
                  onClose={() => {
                    setDrawerOpen(!drawerOpen);
                  }}
                  sx={{
                    "& .MuiDrawer-paper": {
                      backgroundColor: "rgba(0,0,0,0.5)",
                      color: "#ffffff",
                    },
                  }}
                >
                  <Box display="flex" justifyContent="flex-end" p={5} />
                  <MenuItem
                    onClick={() => {
                      setDrawerOpen(!drawerOpen);
                    }}
                    sx={{
                      color: pathname == "/technology" ? "#FF5B01" : "#ffffff",
                      "&:hover": {
                        color: "#FF5B01",
                      },
                    }}
                  >
                    <Link href="/technology" passHref>
                      <Typography>Tecnología</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem
                    sx={{
                      color: isProductRoute ? "#FF5B01" : "#ffffff",
                      "&:hover": {
                        color: "#FF5B01",
                      },
                    }}
                  >
                    <Typography>Productos</Typography>
                  </MenuItem>
                  <Stack direction={"column"} spacing={2}>
                    <List>
                      <ListItem>
                        <MenuItem
                          onClick={() => {
                            setDrawerOpen(!drawerOpen);
                          }}
                          sx={{
                            color:
                              pathname == "/products/bussines"
                                ? "#FF5B01"
                                : "#ffffff",
                            "&:hover": {
                              color: "#FF5B01",
                            },
                          }}
                        >
                          <Link href="/products/bussines" passHref>
                            <Typography>VorticApp Empresarial</Typography>
                          </Link>
                        </MenuItem>
                      </ListItem>
                      <ListItem>
                        <MenuItem
                          onClick={() => {
                            setDrawerOpen(!drawerOpen);
                          }}
                          sx={{
                            color:
                              pathname == "/products/monitoring"
                                ? "#FF5B01"
                                : "#ffffff",
                            "&:hover": {
                              color: "#FF5B01",
                            },
                          }}
                        >
                          <Link href="/products/monitoring" passHref>
                            <Typography>Monitoreo Automatizado</Typography>
                          </Link>
                        </MenuItem>
                      </ListItem>

                      <ListItem>
                        <MenuItem
                          onClick={() => {
                            setDrawerOpen(!drawerOpen);
                          }}
                          sx={{
                            color:
                              pathname == "/products/consulting"
                                ? "#FF5B01"
                                : "#ffffff",
                            "&:hover": {
                              color: "#FF5B01",
                            },
                          }}
                        >
                          <Link href="/products/consulting" passHref>
                            <Typography>Consultoria</Typography>
                          </Link>
                        </MenuItem>
                      </ListItem>
                      <ListItem>
                        <MenuItem
                          onClick={() => {
                            setDrawerOpen(!drawerOpen);
                          }}
                          sx={{
                            color:
                              pathname == "/products/onLine"
                                ? "#FF5B01"
                                : "#ffffff",
                            "&:hover": {
                              color: "#FF5B01",
                            },
                          }}
                        >
                          <Link href="/products/onLine" passHref>
                            <Typography>VorticApp Online</Typography>
                          </Link>
                        </MenuItem>
                      </ListItem>
                    </List>
                  </Stack>

                  <MenuItem
                    onClick={() => {
                      setDrawerOpen(!drawerOpen);
                    }}
                    sx={{
                      color:
                        pathname == "/sustainability" ? "#FF5B01" : "#ffffff",
                      "&:hover": {
                        color: "#FF5B01",
                      },
                    }}
                  >
                    <Link href="/sustainability" passHref>
                      <Typography>Sustentabilidad</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setDrawerOpen(!drawerOpen);
                    }}
                    sx={{
                      color: pathname == "/aboutUs" ? "#FF5B01" : "#ffffff",
                      "&:hover": {
                        color: "#FF5B01",
                      },
                    }}
                  >
                    <Link href="/aboutUs" passHref>
                      <Typography>Nosotros</Typography>
                    </Link>
                  </MenuItem>
                </Drawer>
              </Box>

              <Stack
                direction="row"
                spacing={2}
                flexGrow={1}
                justifyContent="flex-end"
                display={{ xs: "none", md: "flex" }}
              >
                <Link href="/technology">
                  <Typography
                    sx={{
                      color: pathname == "/technology" ? "#FF5B01" : "#ffffff",
                      "&:hover": {
                        color: "#FF5B01",
                      },
                      cursor: "pointer",
                      textDecoration: "none",
                    }}
                  >
                    Tecnología
                  </Typography>
                </Link>
                <Typography
                  sx={{
                    color: isProductRoute ? "#FF5B01" : "#ffffff",
                    "&:hover": {
                      color: "#FF5B01",
                    },
                    cursor: "pointer",
                  }}
                  onClick={handleMenuOpen}
                >
                  Productos
                </Typography>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleMenuClose}
                  sx={{
                    "& .MuiPaper-root": {
                      backgroundColor: "rgba(0,0,0,0.5)",
                      color: "#ffffff",
                    },
                    marginTop: 3,
                  }}
                >
                  <MenuItem onClick={handleMenuClose}>
                    <Link href="/products/bussines" passHref>
                      <Typography>VorticApp Empresarial</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <Link href="/products/monitoring" passHref>
                      <Typography>Monitoreo Automatizado</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <Link href="/products/consulting" passHref>
                      <Typography>Consultoria</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <Link href="/products/onLine" passHref>
                      <Typography>VorticApp Online</Typography>
                    </Link>
                  </MenuItem>
                </Menu>
                <Link href="/sustainability" passHref>
                  <Typography
                    sx={{
                      color:
                        pathname == "/sustainability" ? "#FF5B01" : "#ffffff",
                      "&:hover": {
                        color: "#FF5B01",
                      },
                      cursor: "pointer",
                    }}
                  >
                    Sustentabilidad
                  </Typography>
                </Link>
                <Link href="/aboutUs" passHref>
                  <Typography
                    sx={{
                      color: pathname == "/aboutUs" ? "#FF5B01" : "#ffffff",
                      "&:hover": {
                        color: "#FF5B01",
                      },
                      cursor: "pointer",
                    }}
                  >
                    Nosotros
                  </Typography>
                </Link>
                {/* <Link href="/contact" passHref>
                  <Typography
                    sx={{
                      color: "#ffffff",
                      "&:hover": {
                        color: "#FF5B01",
                      },
                      cursor: "pointer",
                    }}
                  >
                    Contacto
                  </Typography>
                </Link> */}
              </Stack>
            </Box>
          </AppBar>
          <Box
            sx={{
              mb: 30,
            }}
          >
            {children}
          </Box>
          <Box
            sx={{
              position: "fixed",
              bottom: 0,
              width: "100%",
              zIndex: 1000,
              backgroundColor: "#000000",
              borderTop: "1px solid #979797",
              height: "70px",
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            <Stack direction="row" justifyContent="center" spacing={2} mt={1} color={"white"}>
              <IconButton
                onClick={() => {
                  window.open(
                    "https://www.instagram.com/vortic.tech/",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                sx={{
                  fontSize: "2rem",
                  color: "white",
                 
                }}
        
              >
                <FontAwesomeIcon icon={faInstagram}  />
              </IconButton>
              <IconButton
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/company/vortic-tech/",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                sx={{
                  fontSize: "2rem",
                  color: "white",
                 
                }}
        
              >
                  <FontAwesomeIcon icon={faLinkedin} />
              </IconButton>
              <IconButton
                onClick={() => {
                  window.open(
                    "https://wa.me/56978969866",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                sx={{
                  fontSize: "2rem",
                  color: "white",
                 
                }}
        
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </IconButton>
              

            
            
            </Stack>
            <Typography fontSize={8}>
              © 2024 Vortic. Todos los derechos reservados.
            </Typography>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
