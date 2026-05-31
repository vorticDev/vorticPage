"use client";

import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { label: "INICIO", href: "/" },
    { label: "NOSOTROS", href: "/aboutUs" },
    { label: "CONTACTO", href: "/#contacto" },
    { label: "FAQ", href: "/#faq" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    if (href.includes("#")) return false;
    return pathname.startsWith(href);
  };

  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/logoIcon.ico" />
        <title>VORTIC | Inteligencia Territorial</title>
      </head>

      <body>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            height: 56,
            backgroundColor: "rgba(17,17,17,0.96)",
            backdropFilter: "blur(16px)",
            borderBottom: "1px solid rgba(255,255,255,0.12)",
            justifyContent: "center",
            zIndex: 1200,
          }}
        >
          <Box
            sx={{
              width: "100%",
              px: { xs: 2, md: 2.5 },
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link href="/">
              <Stack direction="row" spacing={1.2} alignItems="center">
                <Box
                  sx={{
                    width: 34,
                    height: 34,
                    border: "1px solid rgba(255,255,255,0.16)",
                    display: "grid",
                    placeItems: "center",
                    backgroundColor: "#071017",
                  }}
                >
                  <Image
                    src="/logoSmall.svg"
                    alt="Logo VORTIC"
                    width={26}
                    height={26}
                  />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: 20,
                      fontWeight: 800,
                      letterSpacing: "0.04em",
                      lineHeight: 1,
                    }}
                  >
                    VOR<span style={{ color: "#00e0c0" }}>TIC</span>
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 8,
                      letterSpacing: "0.34em",
                      color: "#a8b3c2",
                      mt: 0.5,
                    }}
                  >
                    INTELIGENCIA TERRITORIAL
                  </Typography>
                </Box>
              </Stack>
            </Link>

            <Stack
              direction="row"
              spacing={1.6}
              sx={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                display: { xs: "none", md: "flex" },
              }}
            >
              {navItems.map((item, index) => (
                <Stack key={item.label} direction="row" alignItems="center">
                  <Link href={item.href}>
                    <Typography
                      sx={{
                        color: isActive(item.href) ? "#00e0c0" : "#b8c2d2",
                        fontSize: 11,
                        letterSpacing: "0.15em",
                        pb: 1.8,
                        borderBottom: isActive(item.href)
                          ? "2px solid #00e0c0"
                          : "2px solid transparent",
                        "&:hover": { color: "#00e0c0" },
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Link>

                  {index < navItems.length - 1 && (
                    <Box
                      sx={{
                        width: "1px",
                        height: 16,
                        backgroundColor: "rgba(255,255,255,0.14)",
                        ml: 1.6,
                      }}
                    />
                  )}
                </Stack>
              ))}
            </Stack>

            <Box sx={{ flexGrow: 1 }} />

            <Link href="/login">
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  gap: 0.8,
                  border: "1px solid #00e0c0",
                  color: "#00e0c0",
                  px: 1.8,
                  py: 0.85,
                  borderRadius: "7px",
                  fontWeight: 800,
                  fontSize: 12,
                  "&:hover": {
                    backgroundColor: "rgba(0,224,192,0.1)",
                  },
                }}
              >
                <LoginIcon sx={{ fontSize: 17 }} />
                Iniciar sesión
              </Box>
            </Link>

            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { xs: "flex", md: "none" }, color: "#ffffff" }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </AppBar>

        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{
            sx: {
              width: 260,
              backgroundColor: "#080c12",
              color: "#ffffff",
              borderLeft: "1px solid rgba(255,255,255,0.12)",
              p: 3,
            },
          }}
        >
          <Stack spacing={3} mt={4}>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setDrawerOpen(false)}
              >
                <Typography
                  sx={{
                    color: isActive(item.href) ? "#00e0c0" : "#ffffff",
                    letterSpacing: "0.12em",
                    fontWeight: 700,
                  }}
                >
                  {item.label}
                </Typography>
              </Link>
            ))}

            <Link href="/login" onClick={() => setDrawerOpen(false)}>
              <Box
                sx={{
                  border: "1px solid #00e0c0",
                  color: "#00e0c0",
                  px: 2,
                  py: 1.2,
                  borderRadius: "8px",
                  textAlign: "center",
                  fontWeight: 800,
                }}
              >
                Iniciar sesión
              </Box>
            </Link>
          </Stack>
        </Drawer>

        <Box component="main" sx={{ pt: "56px" }}>
          {children}
        </Box>
      </body>
    </html>
  );
}
