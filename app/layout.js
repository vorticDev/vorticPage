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

      <body>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            height: 68,
            background: "#111111",
            borderBottom: "1px solid rgba(255,255,255,0.12)",
            justifyContent: "center",
            zIndex: 1200,
          }}
        >
          <Box
            sx={{
              width: "100%",
              px: 2,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link href="/" style={{ textDecoration: "none" }}>
              <Stack direction="row" spacing={1.2} alignItems="center">
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    border: "1px solid rgba(255,255,255,0.2)",
                    display: "grid",
                    placeItems: "center",
                    background: "#070b11",
                  }}
                >
                  <Image
                    src="/logoSmall.svg"
                    alt="VORTIC"
                    width={32}
                    height={32}
                  />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: 25,
                      fontWeight: 900,
                      letterSpacing: "0.04em",
                      lineHeight: 1,
                      color: "#ffffff",
                    }}
                  >
                    VOR<span style={{ color: "#ff2db2" }}>TIC</span>
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 9,
                      letterSpacing: "0.42em",
                      color: "rgba(255,255,255,0.78)",
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
              spacing={2.2}
              sx={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                display: { xs: "none", md: "flex" },
              }}
            >
              {navItems.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href.replace("/#", "/"));

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    style={{
                      textDecoration: "none",
                      color: active ? "#ff2db2" : "#c8ced8",
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </Stack>

            <Box sx={{ flexGrow: 1 }} />

            <Link href="/login" style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  border: "1px solid #ff2db2",
                  color: "#ffffff",
                  px: 2.2,
                  py: 1,
                  borderRadius: "8px",
                  fontWeight: 800,
                  fontSize: 13,
                }}
              >
                <LoginIcon sx={{ fontSize: 18, color: "#ff2db2" }} />
                Iniciar sesión
              </Box>
            </Link>
          </Box>
        </AppBar>

        <Box component="main" sx={{ pt: "68px" }}>
          {children}
        </Box>
      </body>
    </html>
  );
}
