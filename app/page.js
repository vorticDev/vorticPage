"use client";

import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  TextField,
} from "@mui/material";

const products = [
  {
    title: "LoitterMAP",
    desc: "Monitoreo territorial en tiempo real con capas climáticas, infraestructura y alertas.",
  },
  {
    title: "Simulación territorial",
    desc: "Modela escenarios y genera propuestas territoriales con análisis ISI.",
  },
  {
    title: "Dashboard GIS",
    desc: "Monitoreo analítico territorial, métricas y distribución de riesgo.",
  },
  {
    title: "Proyectos",
    desc: "Gestiona proyectos, prioriza y abre proyectos territoriales.",
  },
  {
    title: "Capas de datos",
    desc: "Explora capas GIS, infraestructura y datos geoespaciales.",
  },
  {
    title: "Reportes",
    desc: "Genera reportes automáticos y ejecutivos.",
  },
];

const integrations = [
  "FIRMS NASA",
  "Copernicus",
  "USGS",
  "Open-Meteo",
  "NASA EONET",
  "Mapbox",
  "Overpass/OSM",
  "OpenStreetMap",
];

export default function Home() {
  return (
    <Box className="vortic-page">
      {/* HERO */}

      <Box
        sx={{
          position: "relative",
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at center, rgba(0,224,192,0.08), transparent 32%)",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            bottom: -160,
            left: "50%",
            transform: "translateX(-50%)",
            width: "1200px",
            height: "600px",
            borderRadius: "50%",
            border: "1px solid rgba(0,224,192,0.08)",
          }}
        />

        <Box className="vortic-shell" sx={{ position: "relative", zIndex: 2 }}>
          <Stack alignItems="center" textAlign="center">
            <Box
              sx={{
                border: "1px solid rgba(255,91,1,0.3)",
                color: "#00e0c0",
                px: 2,
                py: 0.7,
                borderRadius: "999px",
                mb: 3,
                fontSize: 12,
                fontWeight: 700,
                background: "rgba(255,91,1,0.08)",
              }}
            >
              • PLATAFORMA ACTIVA
            </Box>

            <Typography
              sx={{
                color: "#8c96a8",
                letterSpacing: "0.16em",
                fontSize: { xs: 11, md: 14 },
                mb: 2,
              }}
            >
              INTELIGENCIA TERRITORIAL PARA DECISIONES CRÍTICAS
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 44, md: 82 },
                fontWeight: 900,
                lineHeight: 0.95,
              }}
            >
              Planifica.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 44, md: 82 },
                fontWeight: 900,
                lineHeight: 0.95,
                color: "#00e0c0",
              }}
            >
              Simula.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 44, md: 82 },
                fontWeight: 900,
                lineHeight: 0.95,
              }}
            >
              Actúa.
            </Typography>

            <Typography
              sx={{
                mt: 4,
                maxWidth: 760,
                color: "#aab3c2",
                fontSize: { xs: 16, md: 22 },
                lineHeight: 1.7,
              }}
            >
              Plataforma geoespacial para simulación territorial,
              evaluación de riesgo, análisis GIS y planificación estratégica
              basada en datos.
            </Typography>

            <Button
              sx={{
                mt: 5,
                background: "#12d7ba",
                color: "#ffffff",
                px: 4,
                py: 1.7,
                borderRadius: "14px",
                fontWeight: 800,
                fontSize: 16,
                textTransform: "none",
                "&:hover": {
                  background: "#12d7ba",
                },
              }}
            >
              Solicitar DEMO
            </Button>
          </Stack>
        </Box>
      </Box>

      {/* MISION */}

      <Box
        sx={{
          py: { xs: 8, md: 10 },
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <Box className="vortic-shell">
          <Grid container spacing={4}>
            <Grid item xs={12} md={7}>
              <Typography
                sx={{
                  color: "#00e0c0",
                  fontWeight: 800,
                  mb: 3,
                  fontSize: 22,
                }}
              >
                Nuestra misión
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 24, md: 40 },
                  lineHeight: 1.35,
                  color: "#d7dbe3",
                }}
              >
                Entregar herramientas inteligentes para construir territorios
                más seguros, resilientes y preparados frente a emergencias y
                riesgos territoriales.
              </Typography>
            </Grid>

            <Grid item xs={12} md={5}>
              <Grid container spacing={2}>
                {["Groq", "Gemini", "PostGIS"].map((item) => (
                  <Grid item xs={12} sm={4} key={item}>
                    <Box
                      sx={{
                        background: "#10151d",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "18px",
                        p: 3,
                        textAlign: "center",
                        height: "100%",
                      }}
                    >
                      <Typography fontWeight={800} fontSize={20}>
                        {item}
                      </Typography>

                      <Typography
                        sx={{
                          mt: 1,
                          color: "#7f8b9c",
                          fontSize: 13,
                        }}
                      >
                        Tecnología integrada
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* PRODUCTOS */}

      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <Box className="vortic-shell">
          <Grid container spacing={3}>
            {products.map((item) => (
              <Grid item xs={12} md={6} lg={4} key={item.title}>
                <Box
                  sx={{
                    background:
                      "linear-gradient(180deg,#0d131c 0%, #101722 100%)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "24px",
                    p: 4,
                    minHeight: 240,
                    transition: "0.25s ease",
                    "&:hover": {
                      border: "1px solid rgba(0,224,192,0.35)",
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 58,
                      height: 58,
                      borderRadius: "16px",
                      border: "1px solid rgba(0,224,192,0.25)",
                      background: "rgba(0,224,192,0.05)",
                      mb: 4,
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: 26,
                      fontWeight: 800,
                      mb: 2,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#8f9bad",
                      lineHeight: 1.7,
                      fontSize: 16,
                    }}
                  >
                    {item.desc}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 4,
                      color: "#00e0c0",
                      fontWeight: 800,
                      fontSize: 16,
                    }}
                  >
                    IR AHORA →
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* INTEGRACIONES */}

      <Box
        sx={{
          py: { xs: 8, md: 10 },
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <Box className="vortic-shell">
          <Typography
            sx={{
              color: "#00e0c0",
              fontWeight: 800,
              letterSpacing: "0.12em",
              mb: 2,
              fontSize: 14,
            }}
          >
            FUENTES DE DATOS
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 34, md: 58 },
              fontWeight: 900,
              mb: 3,
            }}
          >
            Integraciones en tiempo real
          </Typography>

          <Typography
            sx={{
              color: "#97a2b3",
              maxWidth: 720,
              fontSize: { xs: 16, md: 20 },
              lineHeight: 1.7,
              mb: 6,
            }}
          >
            Satélites, sensores sísmicos y modelos climáticos actualizados
            constantemente.
          </Typography>

          <Grid container spacing={3}>
            {integrations.map((item) => (
              <Grid item xs={12} md={6} lg={3} key={item}>
                <Box
                  sx={{
                    background: "#0d121a",
                    borderRadius: "22px",
                    border: "1px solid rgba(0,224,192,0.12)",
                    p: 4,
                    minHeight: 210,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#00e0c0",
                      fontWeight: 800,
                      mb: 4,
                      fontSize: 13,
                    }}
                  >
                    ● LIVE
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 26,
                      fontWeight: 800,
                      mb: 2,
                    }}
                  >
                    {item}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#8f9bad",
                      lineHeight: 1.7,
                      fontSize: 15,
                    }}
                  >
                    Integración territorial y geoespacial en tiempo real.
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
