"use client";

import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  TextField,
} from "@mui/material";

import Image from "next/image";

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
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at center, rgba(0,224,192,0.12), transparent 32%)",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            bottom: -180,
            left: "50%",
            transform: "translateX(-50%)",
            width: "1400px",
            height: "700px",
            borderRadius: "50%",
            border: "1px solid rgba(0,224,192,0.12)",
          }}
        />

        <Box className="vortic-shell" sx={{ position: "relative", zIndex: 2 }}>
          <Stack alignItems="center" textAlign="center">
            <Box
              sx={{
                border: "1px solid rgba(255,91,1,0.3)",
                color: "#00e0c0",
                px: 2,
                py: 0.8,
                borderRadius: "999px",
                mb: 4,
                fontSize: 14,
                fontWeight: 700,
                background: "rgba(255,91,1,0.08)",
              }}
            >
              • PLATAFORMA ACTIVA
            </Box>

            <Typography
              sx={{
                color: "#8c96a8",
                letterSpacing: "0.2em",
                fontSize: { xs: 12, md: 16 },
                mb: 2,
              }}
            >
              INTELIGENCIA TERRITORIAL PARA DECISIONES CRÍTICAS
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 56, md: 112 },
                fontWeight: 900,
                lineHeight: 0.95,
              }}
            >
              Planifica.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 56, md: 112 },
                fontWeight: 900,
                lineHeight: 0.95,
                color: "#00e0c0",
              }}
            >
              Simula.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 56, md: 112 },
                fontWeight: 900,
                lineHeight: 0.95,
              }}
            >
              Actúa.
            </Typography>

            <Typography
              sx={{
                mt: 5,
                maxWidth: 820,
                color: "#aab3c2",
                fontSize: { xs: 18, md: 28 },
                lineHeight: 1.6,
              }}
            >
              Plataforma geoespacial para simulación territorial,
              evaluación de riesgo, análisis GIS y planificación estratégica
              basada en datos.
            </Typography>

            <Button
              sx={{
                mt: 6,
                background: "#12d7ba",
                color: "#ffffff",
                px: 5,
                py: 2,
                borderRadius: "16px",
                fontWeight: 800,
                fontSize: 18,
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
          py: 12,
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <Box className="vortic-shell">
          <Grid container spacing={5}>
            <Grid item xs={12} md={7}>
              <Typography
                sx={{
                  color: "#00e0c0",
                  fontWeight: 800,
                  mb: 3,
                  fontSize: 30,
                }}
              >
                Nuestra misión
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 28, md: 46 },
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
                      <Typography fontWeight={800} fontSize={24}>
                        {item}
                      </Typography>

                      <Typography
                        sx={{
                          mt: 1,
                          color: "#7f8b9c",
                          fontSize: 14,
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

      <Box sx={{ py: 12 }}>
        <Box className="vortic-shell">
          <Grid container spacing={4}>
            {products.map((item) => (
              <Grid item xs={12} md={6} lg={4} key={item.title}>
                <Box
                  sx={{
                    background:
                      "linear-gradient(180deg,#0d131c 0%, #101722 100%)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "28px",
                    p: 4,
                    minHeight: 280,
                    transition: "0.25s ease",
                    "&:hover": {
                      border: "1px solid rgba(0,224,192,0.4)",
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: "18px",
                      border: "1px solid rgba(0,224,192,0.25)",
                      background: "rgba(0,224,192,0.05)",
                      mb: 4,
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: 36,
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
                      fontSize: 18,
                    }}
                  >
                    {item.desc}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 5,
                      color: "#00e0c0",
                      fontWeight: 800,
                      fontSize: 18,
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
          py: 12,
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <Box className="vortic-shell">
          <Typography
            sx={{
              color: "#00e0c0",
              fontWeight: 800,
              letterSpacing: "0.12em",
              mb: 2,
            }}
          >
            FUENTES DE DATOS
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 44, md: 72 },
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
              fontSize: 22,
              lineHeight: 1.7,
              mb: 8,
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
                    borderRadius: "24px",
                    border: "1px solid rgba(0,224,192,0.15)",
                    p: 4,
                    minHeight: 250,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#00e0c0",
                      fontWeight: 800,
                      mb: 4,
                    }}
                  >
                    ● LIVE
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 34,
                      fontWeight: 800,
                      mb: 3,
                    }}
                  >
                    {item}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#8f9bad",
                      lineHeight: 1.7,
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

      {/* CONTACTO */}

      <Box id="contacto" sx={{ py: 14 }}>
        <Box className="vortic-shell">
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { xs: 44, md: 76 },
              fontWeight: 900,
            }}
          >
            Solicita una demo
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: "#95a0b2",
              mt: 2,
              mb: 8,
              fontSize: 22,
            }}
          >
            Descubre cómo VORTIC puede potenciar tu territorio.
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  background: "#0e141d",
                  borderRadius: "28px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  p: 5,
                }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Nombre"
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Teléfono"
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Organización"
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={5}
                      label="Mensaje"
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      sx={{
                        background: "#12d7ba",
                        color: "#ffffff",
                        py: 2,
                        borderRadius: "16px",
                        fontWeight: 800,
                        fontSize: 18,
                        textTransform: "none",
                        "&:hover": {
                          background: "#12d7ba",
                        },
                      }}
                    >
                      Enviar solicitud
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            <Grid item xs={12} md={5}>
              <Stack spacing={4}>
                <Box
                  sx={{
                    background: "#0e141d",
                    borderRadius: "28px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    p: 5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 40,
                      fontWeight: 900,
                      mb: 4,
                    }}
                  >
                    ¿Por qué VORTIC?
                  </Typography>

                  <Stack spacing={3}>
                    <Typography color="#c8d0dc">
                      ◆ Datos en tiempo real
                    </Typography>

                    <Typography color="#c8d0dc">
                      ◆ Simulación avanzada
                    </Typography>

                    <Typography color="#c8d0dc">
                      ◆ Cobertura territorial
                    </Typography>
                  </Stack>
                </Box>

                <Box
                  sx={{
                    background: "#0e141d",
                    borderRadius: "28px",
                    border: "1px solid rgba(255,91,1,0.25)",
                    p: 5,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#d7dce5",
                      fontSize: 28,
                      lineHeight: 1.7,
                    }}
                  >
                    "Las ciudades y territorios que mejor responden a las
                    crisis son aquellos que disponen de inteligencia territorial
                    en tiempo real."
                  </Typography>

                  <Typography
                    sx={{
                      mt: 4,
                      color: "#00e0c0",
                      letterSpacing: "0.16em",
                    }}
                  >
                    • VORTIC · 2026
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* FOOTER */}

      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          py: 8,
        }}
      >
        <Box className="vortic-shell">
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Typography fontSize={34} fontWeight={900}>
                Vortic
              </Typography>

              <Typography
                sx={{
                  color: "#8d97a8",
                  mt: 3,
                  lineHeight: 1.8,
                }}
              >
                Inteligencia territorial para decisiones críticas.
                Monitoreo, simulación y análisis GIS.
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography
                sx={{
                  color: "#ffffff",
                  fontWeight: 800,
                  mb: 2,
                }}
              >
                PRODUCTOS
              </Typography>

              <Stack spacing={1.5} color="#8d97a8">
                <Typography>LoitterMAP</Typography>
                <Typography>Dashboard</Typography>
                <Typography>Simulaciones</Typography>
                <Typography>Reportes</Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography
                sx={{
                  color: "#ffffff",
                  fontWeight: 800,
                  mb: 2,
                }}
              >
                CONTACTO
              </Typography>

              <Stack spacing={1.5} color="#8d97a8">
                <Typography>vorticspa@gmail.com</Typography>
                <Typography>Santiago, Chile</Typography>
                <Typography>+56 9 7896 9866</Typography>
              </Stack>
            </Grid>
          </Grid>

          <Box
            sx={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              mt: 6,
              pt: 4,
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Typography color="#7f8b9c">
              Tecnología al servicio de las personas para construir territorios
              más seguros.
            </Typography>

            <Typography color="#7f8b9c">
              © 2026 VORTIC SPA
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
