"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PublicIcon from "@mui/icons-material/Public";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";

export default function LoginPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "61% 39%" },
        background: "#111111",
        color: "#ffffff",
        mt: "-72px",
      }}
    >
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          px: { xs: 3, md: 6 },
          py: { xs: 5, md: 5 },
          background:
            "radial-gradient(circle at 48% 56%, rgba(255,91,1,0.22), transparent 20%), linear-gradient(135deg,#071019 0%,#0a111c 55%,#111111 100%)",
          minHeight: { xs: "58vh", md: "100vh" },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {[160, 260, 370, 500, 650, 820].map((size) => (
          <Box
            key={size}
            sx={{
              position: "absolute",
              width: size,
              height: size,
              borderRadius: "50%",
              border: "1px solid rgba(0,224,192,0.45)",
              left: "48%",
              top: "56%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}

        <Box
          sx={{
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: "50%",
            border: "1px solid rgba(0,224,192,0.35)",
            right: 130,
            top: -130,
          }}
        />

        <Box sx={{ position: "relative", zIndex: 2 }}>
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Box
              sx={{
                width: 42,
                height: 42,
                border: "1px solid rgba(255,255,255,0.16)",
                display: "grid",
                placeItems: "center",
                backgroundColor: "#071017",
              }}
            >
              <Image
                src="/logoSmall.svg"
                alt="Logo VORTIC"
                width={32}
                height={32}
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
                  letterSpacing: "0.38em",
                  color: "#a8b3c2",
                  mt: 0.7,
                }}
              >
                INTELIGENCIA TERRITORIAL
              </Typography>
            </Box>
          </Stack>

          <Box
            sx={{
              mt: { xs: 10, md: 20 },
              maxWidth: 650,
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.8,
                borderRadius: "999px",
                background: "rgba(0,224,192,0.12)",
                border: "1px solid rgba(0,224,192,0.25)",
                color: "#00e0c0",
                fontSize: 13,
                fontWeight: 800,
              }}
            >
              ● PLATAFORMA ACTIVA · CHILE & LATAM
            </Box>

            <Typography
              sx={{
                mt: 4,
                fontSize: { xs: 42, md: 58 },
                fontWeight: 900,
                lineHeight: 1.05,
              }}
            >
              Monitoreo territorial
              <br />
              <span style={{ color: "#00e0c0" }}>en tiempo real</span>
            </Typography>

            <Typography
              sx={{
                mt: 3,
                color: "#b7c1d1",
                fontSize: { xs: 16, md: 20 },
                lineHeight: 1.6,
                maxWidth: 560,
              }}
            >
              Gestión de desastres, análisis geoespacial y planificación urbana
              integrados en una sola plataforma para Chile y América Latina.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mt: 6 }}
            >
              {[
                { icon: <PublicIcon />, title: "GIS Avanzado", text: "Capas vectoriales" },
                { icon: <BarChartIcon />, title: "Análisis IA", text: "Groq · Gemini" },
                { icon: <LayersIcon />, title: "Datos en vivo", text: "USGS · Copernicus" },
              ].map((item) => (
                <Box
                  key={item.title}
                  sx={{
                    width: { xs: "100%", sm: 150 },
                    p: 2,
                    borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.12)",
                    background: "rgba(255,255,255,0.035)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <Box sx={{ color: "#00e0c0", mb: 1 }}>{item.icon}</Box>
                  <Typography fontWeight={800} fontSize={14}>
                    {item.title}
                  </Typography>
                  <Typography color="#8d98aa" fontSize={12}>
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>

          <Typography
            sx={{
              position: "absolute",
              bottom: { xs: -80, md: -140 },
              left: 0,
              color: "#667184",
              fontSize: 13,
            }}
          >
            © 2026 Vortic · Todos los derechos reservados
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          minHeight: { xs: "42vh", md: "100vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 3, md: 8 },
          background:
            "radial-gradient(circle at 45% 20%, rgba(255,91,1,0.08), transparent 25%), #131313",
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 420 }}>
          <Link href="/">
            <Stack direction="row" spacing={1} alignItems="center" mb={5}>
              <ArrowBackIcon sx={{ fontSize: 18, color: "#8490a3" }} />
              <Typography sx={{ color: "#8490a3" }}>Volver al inicio</Typography>
            </Stack>
          </Link>

          <Typography sx={{ fontSize: 30, fontWeight: 900, mb: 1 }}>
            Bienvenido de vuelta
          </Typography>

          <Typography sx={{ color: "#9fb0c9", mb: 4 }}>
            Inicia sesión para acceder a la plataforma
          </Typography>

          <Stack spacing={3}>
            <TextField
              fullWidth
              label="Correo electrónico"
              defaultValue="admin@vortic.cl"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiInputBase-root": {
                  background: "#eaf1ff",
                  borderRadius: "12px",
                },
              }}
            />

            <TextField
              fullWidth
              label="Contraseña"
              type="password"
              defaultValue="123456789"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <VisibilityOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiInputBase-root": {
                  background: "#eaf1ff",
                  borderRadius: "12px",
                },
              }}
            />

            <Button
              sx={{
                background: "#12d7ba",
                color: "#ffffff",
                py: 1.7,
                borderRadius: "12px",
                fontWeight: 900,
                fontSize: 16,
                textTransform: "none",
                "&:hover": {
                  background: "#12d7ba",
                },
              }}
            >
              Iniciar sesión
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
