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
    return pathname.startsWith(href.replace("/#", "/"));
  };

  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/logoIcon.ico" />
        <title>VORTIC | Inteligencia Territorial</title>
        <meta
          name="description"
          content="Plataforma de inteligencia territorial para simulación, monitoreo y planificación estratégica basada en datos."
        />
      </head>

      <body>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            height: 72,
            backgroundColor: "rgba(17,17,17,0.94)",
            backdropFilter: "blur(18px)",
            borderBottom: "1px solid rgba(255,255,255,0.16)",
            justifyContent: "center",
            zIndex: 1200,
          }}
        >
          <Box
            sx={{
              width: "100%",
              px: { xs: 2, md: 3 },
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link href="/">
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    border: "1px solid rgba(255,255,255,0.16)",
                    display: "grid",
                    placeItems: "center",
                    backgroundColor: "#071017",
                  }}
                >
                  <Image
                    src="/logoSmall.svg"
                    alt="Logo VORTIC"
                    width={34}
                    height={34}
                  />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: 25,
                      fontWeight: 800,
                      letterSpacing: "0.04em",
                      lineHeight: 1,
                    }}
                  >
                    VOR<span style={{ color: "#00e0c0" }}>TIC</span>
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 10,
                      letterSpacing: "0.42em",
                      color: "#a8b3c2",
                      mt: 0.7,
                    }}
                  >
                    INTELIGENCIA TERRITORIAL
                  </Typography>
                </Box>
              </Stack>
            </Link>

            <Stack
              direction="row"
              spacing={2}
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
                        fontSize: 13,
                        letterSpacing: "0.16em",
                        pb: 2.3,
                        borderBottom: isActive(item.href)
                          ? "2px solid #00e0c0"
                          : "2px solid transparent",
                        transition: "0.2s ease",
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
                        height: 20,
                        backgroundColor: "rgba(255,255,255,0.16)",
                        ml: 2,
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
                  gap: 1,
                  border: "1px solid #00e0c0",
                  color: "#00e0c0",
                  px: 2.3,
                  py: 1.1,
                  borderRadius: "8px",
                  fontWeight: 800,
                  fontSize: 14,
                  transition: "0.2s ease",
                  "&:hover": {
                    backgroundColor: "rgba(0,224,192,0.1)",
                  },
                }}
              >
                <LoginIcon sx={{ fontSize: 19 }} />
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
              width: 280,
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

        <Box component="main" sx={{ pt: "72px" }}>
          {children}
        </Box>
      </body>
    </html>
  );
}
