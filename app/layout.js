"use client";

import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AppBar, Box, Stack, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const navItems = [
    { label: "INICIO", href: "/" },
    { label: "NOSOTROS", href: "/aboutUs" },
    { label: "CONTACTO", href: "/#demo" },
    { label: "FAQ", href: "/#faq" },
  ];

  return (
    <html lang="es">
      <head>
        <title>VORTIC | Inteligencia Territorial</title>
      </head>

      <body
        style={{
          margin: 0,
          background: "#020817",
          overflowX: "hidden",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            height: 72,
            background: "rgba(10,10,10,0.94)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)",
            justifyContent: "center",
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
            {/* LOGO */}
            <Link
              href="/"
              style={{
                textDecoration: "none",
              }}
            >
              <Stack
                direction="row"
                spacing={1.5}
                alignItems="center"
              >
                <Box
                  sx={{
                    width: 54,
                    height: 54,
                    border: "1px solid rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#0a0f18",
                  }}
                >
                  <Image
                    src="/logoSmall.svg"
                    alt="VORTIC"
                    width={34}
                    height={34}
                  />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: "2.2rem",
                      fontWeight: 900,
                      lineHeight: 1,
                      letterSpacing: "-0.04em",
                      color: "#ffffff",
                    }}
                  >
                    VOR
                    <Box
                      component="span"
                      sx={{
                        color: "#19f5d1",
                      }}
                    >
                      TIC
                    </Box>
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "0.62rem",
                      letterSpacing: "0.42em",
                      color: "rgba(255,255,255,0.72)",
                      mt: 0.3,
                    }}
                  >
                    INTELIGENCIA TERRITORIAL
                  </Typography>
                </Box>
              </Stack>
            </Link>

            {/* MENU */}
            <Stack
              direction="row"
              spacing={4}
              sx={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                display: { xs: "none", md: "flex" },
              }}
            >
              {navItems.map((item) => {
                const active =
                  pathname === item.href ||
                  (item.href !== "/" &&
                    pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Typography
                      sx={{
                        color: active
                          ? "#19f5d1"
                          : "rgba(255,255,255,0.82)",
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        letterSpacing: "0.16em",
                        transition: "0.25s",
                        "&:hover": {
                          color: "#19f5d1",
                        },
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Link>
                );
              })}
            </Stack>

            <Box sx={{ flexGrow: 1 }} />

            {/* BOTON LOGIN */}
            <Link
              href="/login"
              style={{
                textDecoration: "none",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  px: 2.8,
                  py: 1.2,
                  borderRadius: "14px",
                  border: "1px solid #19f5d1",
                  color: "#ffffff",
                  transition: "0.25s",
                  "&:hover": {
                    background: "rgba(25,245,209,0.08)",
                  },
                }}
              >
                <LoginIcon
                  sx={{
                    fontSize: 18,
                    color: "#19f5d1",
                  }}
                />

                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "0.95rem",
                  }}
                >
                  Iniciar sesión
                </Typography>
              </Box>
            </Link>
          </Box>
        </AppBar>

        <Box
          component="main"
          sx={{
            pt: "72px",
          }}
        >
          {children}
        </Box>
      </body>
    </html>
  );
}
