"use client";

import Link from "next/link";
import {
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const integrations = [
  {
    title: "FIRMS NASA",
    category: "INCENDIOS",
    description: "Incendios activos globales",
    status: "Cada 3h",
  },
  {
    title: "Copernicus",
    category: "SATELITAL",
    description: "Imágenes Sentinel-2",
    status: "Cada 5 días",
  },
  {
    title: "USGS",
    category: "SISMOLOGÍA",
    description: "Sismología global",
    status: "Tiempo real",
  },
  {
    title: "Open-Meteo",
    category: "CLIMA",
    description: "Clima y atmósfera",
    status: "Cada hora",
  },
  {
    title: "NASA EONET",
    category: "EVENTOS",
    description: "Eventos naturales extremos",
    status: "Diario",
  },
  {
    title: "Mapbox",
    category: "TERRENO",
    description: "Terreno 3D y cartografía base",
    status: "Estático",
  },
  {
    title: "Overpass/OSM",
    category: "INFRAESTRUCTURA",
    description: "Infraestructura y servicios",
    status: "Semanal",
  },
  {
    title: "OpenStreetMap",
    category: "GIS",
    description: "Datos geográficos abiertos",
    status: "Continuo",
  },
];

export default function HomePage() {
  return (
    <Box
      sx={{
        background: "#050816",
        color: "white",
        overflow: "hidden",
      }}
    >
      {/* HERO */}
      <Box
        sx={{
          minHeight: "92vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 3,
          background:
            "radial-gradient(circle at center, rgba(0,224,192,0.08), transparent 40%)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            opacity: 0.25,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            bottom: "-5%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "1400px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.08), transparent 70%)",
            filter: "blur(60px)",
            opacity: 0.35,
          }}
        />

        <Box
          sx={{
            width: "100%",
            maxWidth: "980px",
            textAlign: "center",
            zIndex: 2,
          }}
        >
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 3,
              py: 1.1,
              borderRadius: "999px",
              background: "rgba(255,140,0,0.12)",
              border: "1px solid rgba(255,140,0,0.18)",
              mb: 4,
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#18f0d1",
              }}
            />
            <Typography
              sx={{
                color: "#18f0d1",
                fontWeight: 700,
                letterSpacing: "0.14em",
                fontSize: 13,
              }}
            >
              PLATAFORMA ACTIVA
            </Typography>
          </Box>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.6)",
              letterSpacing: "0.16em",
              fontWeight: 700,
              fontSize: 14,
              mb: 3,
            }}
          >
            INTELIGENCIA TERRITORIAL PARA DECISIONES CRÍTICAS
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 72, md: 112 },
              fontWeight: 900,
              lineHeight: 0.95,
            }}
          >
            Planifica.
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 72, md: 112 },
              fontWeight: 900,
              lineHeight: 0.95,
              color: "#18f0d1",
            }}
          >
            Simula.
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 72, md: 112 },
              fontWeight: 900,
              lineHeight: 0.95,
              mb: 5,
            }}
          >
            Actúa.
          </Typography>

          <Typography
            sx={{
              maxWidth: "760px",
              mx: "auto",
              color: "rgba(255,255,255,0.72)",
              fontSize: 26,
              lineHeight: 1.6,
              mb: 5,
            }}
          >
            Plataforma geoespacial para simulación territorial,
            evaluación de riesgo, análisis GIS y planificación
            estratégica basada en datos.
          </Typography>

          <Button
            href="#demo"
            sx={{
              background: "#18f0d1",
              color: "#051015",
              px: 5,
              height: 68,
              borderRadius: "18px",
              fontWeight: 800,
              fontSize: 22,
              textTransform: "none",
              boxShadow: "0 0 40px rgba(24,240,209,0.28)",
              "&:hover": {
                background: "#18f0d1",
              },
            }}
          >
            Solicitar DEMO
          </Button>
        </Box>
      </Box>

      {/* INTEGRACIONES */}
      <Box
        sx={{
          width: "min(1500px, calc(100% - 64px))",
          mx: "auto",
          py: 12,
        }}
      >
        <Typography
          sx={{
            color: "#18f0d1",
            fontWeight: 800,
            fontSize: 14,
            letterSpacing: "0.14em",
            mb: 2,
          }}
        >
          FUENTES DE DATOS
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: 44, md: 64 },
            fontWeight: 900,
            lineHeight: 1.05,
            mb: 3,
          }}
        >
          Integraciones en tiempo real
        </Typography>

        <Typography
          sx={{
            color: "rgba(255,255,255,0.6)",
            fontSize: 24,
            lineHeight: 1.6,
            mb: 8,
            maxWidth: 700,
          }}
        >
          Satélites, sensores sísmicos y modelos climáticos actualizados constantemente
        </Typography>

        <Grid container spacing={3}>
          {integrations.map((item) => (
            <Grid item xs={12} md={3} key={item.title}>
              <Box
                sx={{
                  background: "#0b1020",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 4,
                  p: 4,
                  minHeight: 300,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 5,
                  }}
                >
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: 2,
                      border: "1px solid rgba(255,140,0,0.18)",
                      background: "rgba(255,140,0,0.08)",
                    }}
                  />

                  <Typography
                    sx={{
                      color: "#18f0d1",
                      fontSize: 13,
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                    }}
                  >
                    LIVE
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    fontSize: 34,
                    fontWeight: 800,
                    mb: 2,
                  }}
                >
                  {item.title}
                </Typography>

                <Box
                  sx={{
                    display: "inline-flex",
                    px: 2,
                    py: 0.7,
                    borderRadius: 2,
                    background: "rgba(255,140,0,0.08)",
                    border: "1px solid rgba(255,140,0,0.16)",
                    mb: 3,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#18f0d1",
                      fontSize: 12,
                      fontWeight: 700,
                    }}
                  >
                    {item.category}
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.62)",
                    fontSize: 20,
                    lineHeight: 1.7,
                    mb: 5,
                  }}
                >
                  {item.description}
                </Typography>

                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.38)",
                    fontSize: 14,
                  }}
                >
                  • {item.status}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* DEMO */}
      <Box
        id="demo"
        sx={{
          width: "min(1400px, calc(100% - 64px))",
          mx: "auto",
          py: 12,
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: 54, md: 78 },
            fontWeight: 900,
            mb: 2,
          }}
        >
          Solicita una demo
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "rgba(255,255,255,0.62)",
            fontSize: 22,
            mb: 8,
          }}
        >
          Descubre cómo Vortic puede potenciar tu territorio.
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Box
              component="form"
              action="https://formsubmit.co/vorticspa@gmail.com"
              method="POST"
              sx={{
                background: "#0b1020",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 5,
                p: 5,
              }}
            >
              <Stack spacing={3}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      placeholder="Tu nombre"
                      variant="outlined"
                      InputProps={{
                        sx: {
                          height: 68,
                          borderRadius: 3,
                          color: "white",
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      placeholder="tu@email.com"
                      variant="outlined"
                      InputProps={{
                        sx: {
                          height: 68,
                          borderRadius: 3,
                          color: "white",
                        },
                      }}
                    />
                  </Grid>
                </Grid>

                <TextField
                  fullWidth
                  placeholder="+56 9 1234 5678"
                  variant="outlined"
                  InputProps={{
                    sx: {
                      height: 68,
                      borderRadius: 3,
                      color: "white",
                    },
                  }}
                />

                <TextField
                  fullWidth
                  placeholder="Nombre de tu organización"
                  variant="outlined"
                  InputProps={{
                    sx: {
                      height: 68,
                      borderRadius: 3,
                      color: "white",
                    },
                  }}
                />

                <TextField
                  fullWidth
                  multiline
                  rows={6}
                  placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                  variant="outlined"
                  InputProps={{
                    sx: {
                      borderRadius: 3,
                      color: "white",
                    },
                  }}
                />

                <Button
                  type="submit"
                  sx={{
                    background: "#18f0d1",
                    color: "#051015",
                    height: 72,
                    borderRadius: 3,
                    fontWeight: 800,
                    fontSize: 22,
                    textTransform: "none",
                    "&:hover": {
                      background: "#18f0d1",
                    },
                  }}
                >
                  Enviar solicitud
                </Button>
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Stack spacing={4}>
              <Box
                sx={{
                  background: "#0b1020",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 5,
                  p: 5,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 42,
                    fontWeight: 900,
                    mb: 4,
                  }}
                >
                  ¿Por qué Vortic?
                </Typography>

                <Stack spacing={3}>
                  {[
                    "Datos en tiempo real",
                    "Simulación avanzada",
                    "Cobertura territorial",
                  ].map((item) => (
                    <Typography
                      key={item}
                      sx={{
                        fontSize: 24,
                        color: "rgba(255,255,255,0.82)",
                      }}
                    >
                      • {item}
                    </Typography>
                  ))}
                </Stack>
              </Box>

              <Box
                sx={{
                  background: "#0b1020",
                  border: "1px solid rgba(255,140,0,0.18)",
                  borderRadius: 5,
                  p: 5,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 26,
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.82)",
                  }}
                >
                  "Las ciudades y territorios que mejor responden a las crisis son aquellos que disponen de inteligencia territorial en tiempo real."
                </Typography>

                <Typography
                  sx={{
                    mt: 4,
                    color: "rgba(255,255,255,0.38)",
                    letterSpacing: "0.14em",
                    fontSize: 14,
                  }}
                >
                  VORTIC · 2026
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
