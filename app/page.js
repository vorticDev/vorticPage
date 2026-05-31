"use client";

import Link from "next/link";
import {
  Box,
  Typography,
  Button,
  Grid,
  TextField,
} from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        background:
          "radial-gradient(circle at top, #08111f 0%, #04070d 50%, #02050a 100%)",
        color: "#ffffff",
        overflow: "hidden",
      }}
    >
      {/* HERO */}

      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          px: 3,
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at center, rgba(0,224,192,0.08) 0%, transparent 60%)",
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            maxWidth: 900,
          }}
        >
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 2,
              py: 1,
              borderRadius: "999px",
              border: "1px solid rgba(0,224,192,0.2)",
              background: "rgba(0,224,192,0.08)",
              mb: 4,
            }}
          >
            <Typography
              sx={{
                color: "#00e0c0",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 1,
              }}
            >
              ● PLATAFORMA ACTIVA
            </Typography>
          </Box>

          <Typography
            sx={{
              color: "#8d97a5",
              letterSpacing: 2,
              fontSize: 14,
              mb: 3,
            }}
          >
            INTELIGENCIA TERRITORIAL PARA DECISIONES CRÍTICAS
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 58, md: 92 },
              fontWeight: 900,
              lineHeight: 1,
              mb: 2,
            }}
          >
            Planifica.
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 58, md: 92 },
              fontWeight: 900,
              lineHeight: 1,
              color: "#00e0c0",
              mb: 2,
            }}
          >
            Simula.
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 58, md: 92 },
              fontWeight: 900,
              lineHeight: 1,
              mb: 5,
            }}
          >
            Actúa.
          </Typography>

          <Typography
            sx={{
              color: "#a8b1bc",
              fontSize: { xs: 18, md: 22 },
              lineHeight: 1.8,
              maxWidth: 760,
              mx: "auto",
              mb: 5,
            }}
          >
            Plataforma geoespacial para simulación territorial,
            evaluación de riesgo, análisis GIS y planificación estratégica
            basada en datos.
          </Typography>

          <Button
            sx={{
              background: "#12d7ba",
              color: "#ffffff",
              px: 5,
              py: 2,
              borderRadius: 3,
              fontWeight: 800,
              fontSize: 18,
              "&:hover": {
                background: "#0fc4aa",
              },
            }}
          >
            Solicitar DEMO →
          </Button>
        </Box>
      </Box>

      {/* PRODUCTOS */}

      <Box
        sx={{
          py: { xs: 8, md: 10 },
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <Box
          sx={{
            width: "min(1200px, calc(100% - 48px))",
            mx: "auto",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 38, md: 58 },
              fontWeight: 900,
              mb: 6,
            }}
          >
            ¿Qué puedes hacer con Vortic?
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  background: "#0b1018",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 4,
                  p: 4,
                  minHeight: 260,
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    background: "#12d7ba",
                    color: "#ffffff",
                    px: 1.5,
                    py: 0.4,
                    borderRadius: "999px",
                    fontSize: 11,
                    fontWeight: 800,
                  }}
                >
                  LIVE
                </Box>

                <Typography sx={{ fontSize: 36, mb: 3 }}>
                  🛰
                </Typography>

                <Typography
                  sx={{
                    fontSize: 22,
                    fontWeight: 900,
                    mb: 2,
                  }}
                >
                  LoitterMAP
                </Typography>

                <Typography
                  sx={{
                    color: "#9aa4b2",
                    lineHeight: 1.8,
                    mb: 5,
                  }}
                >
                  Monitoreo territorial en tiempo real con capas climáticas,
                  infraestructura y alertas.
                </Typography>

                <Typography
                  sx={{
                    color: "#00e0c0",
                    fontWeight: 800,
                  }}
                >
                  IR AHORA →
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  background: "#0b1018",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 4,
                  p: 4,
                  minHeight: 260,
                }}
              >
                <Typography sx={{ fontSize: 36, mb: 3 }}>
                  🗺
                </Typography>

                <Typography
                  sx={{
                    fontSize: 22,
                    fontWeight: 900,
                    mb: 2,
                  }}
                >
                  Simulación territorial
                </Typography>

                <Typography
                  sx={{
                    color: "#9aa4b2",
                    lineHeight: 1.8,
                    mb: 5,
                  }}
                >
                  Modela escenarios y genera propuestas territoriales con
                  análisis ISI.
                </Typography>

                <Typography
                  sx={{
                    color: "#00e0c0",
                    fontWeight: 800,
                  }}
                >
                  IR AHORA →
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  background: "#0b1018",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 4,
                  p: 4,
                  minHeight: 260,
                }}
              >
                <Typography sx={{ fontSize: 36, mb: 3 }}>
                  ⬚
                </Typography>

                <Typography
                  sx={{
                    fontSize: 22,
                    fontWeight: 900,
                    mb: 2,
                  }}
                >
                  Dashboard GIS
                </Typography>

                <Typography
                  sx={{
                    color: "#9aa4b2",
                    lineHeight: 1.8,
                    mb: 5,
                  }}
                >
                  Monitoreo analítico territorial, métricas y distribución
                  de riesgo.
                </Typography>

                <Typography
                  sx={{
                    color: "#00e0c0",
                    fontWeight: 800,
                  }}
                >
                  IR AHORA →
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  background: "#0b1018",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 4,
                  p: 4,
                  minHeight: 240,
                }}
              >
                <Typography sx={{ fontSize: 36, mb: 3 }}>
                  ◫
                </Typography>

                <Typography
                  sx={{
                    fontSize: 22,
                    fontWeight: 900,
                    mb: 2,
                  }}
                >
                  Proyectos
                </Typography>

                <Typography
                  sx={{
                    color: "#9aa4b2",
                    lineHeight: 1.8,
                    mb: 5,
                  }}
                >
                  Gestiona proyectos, prioriza y abre proyectos territoriales.
                </Typography>

                <Typography
                  sx={{
                    color: "#00e0c0",
                    fontWeight: 800,
                  }}
                >
                  IR AHORA →
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  background: "#0b1018",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 4,
                  p: 4,
                  minHeight: 240,
                }}
              >
                <Typography sx={{ fontSize: 36, mb: 3 }}>
                  🌐
                </Typography>

                <Typography
                  sx={{
                    fontSize: 22,
                    fontWeight: 900,
                    mb: 2,
                  }}
                >
                  Capas de datos
                </Typography>

                <Typography
                  sx={{
                    color: "#9aa4b2",
                    lineHeight: 1.8,
                    mb: 5,
                  }}
                >
                  Explora capas GIS, infraestructura y datos geoespaciales.
                </Typography>

                <Typography
                  sx={{
                    color: "#00e0c0",
                    fontWeight: 800,
                  }}
                >
                  IR AHORA →
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box
                sx={{
                  background: "#0b1018",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 4,
                  p: 4,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 3,
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: 22,
                      fontWeight: 900,
                      mb: 1,
                    }}
                  >
                    Reportes
                  </Typography>

                  <Typography
                    sx={{
                      color: "#9aa4b2",
                    }}
                  >
                    Genera reportes automáticos y ejecutivos.
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#00e0c0",
                    fontWeight: 800,
                  }}
                >
                  IR AHORA →
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* CONTACTO */}

      <Box
        sx={{
          py: { xs: 8, md: 10 },
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <Box
          sx={{
            width: "min(1200px, calc(100% - 48px))",
            mx: "auto",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 42, md: 72 },
              fontWeight: 900,
              textAlign: "center",
              mb: 2,
            }}
          >
            Solicita una demo
          </Typography>

          <Typography
            sx={{
              color: "#9aa4b2",
              textAlign: "center",
              mb: 8,
              fontSize: 18,
            }}
          >
            Descubre cómo Vortic puede potenciar tu territorio.
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  background: "#0b1018",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 4,
                  p: 4,
                }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField fullWidth label="Nombre" />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField fullWidth label="Email" />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField fullWidth label="Teléfono" />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField fullWidth label="Organización" />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={5}
                      label="Mensaje"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      sx={{
                        background: "#12d7ba",
                        color: "#ffffff",
                        py: 2,
                        borderRadius: 3,
                        fontWeight: 800,
                      }}
                    >
                      Enviar solicitud
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  background: "#0b1018",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 4,
                  p: 4,
                  mb: 4,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 34,
                    fontWeight: 900,
                    mb: 4,
                  }}
                >
                  ¿Por qué Vortic?
                </Typography>

                <Typography sx={{ mb: 3 }}>
                  ◆ Datos en tiempo real
                </Typography>

                <Typography sx={{ mb: 3 }}>
                  ◆ Simulación avanzada
                </Typography>

                <Typography sx={{ mb: 3 }}>
                  ◆ Cobertura territorial
                </Typography>
              </Box>

              <Box
                sx={{
                  background: "#0b1018",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 4,
                  p: 4,
                }}
              >
                <Typography
                  sx={{
                    color: "#9aa4b2",
                    lineHeight: 1.8,
                    fontSize: 18,
                  }}
                >
                  "Las ciudades y territorios que mejor responden a las crisis
                  son aquellos que disponen de inteligencia territorial en
                  tiempo real."
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* FOOTER */}

      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          py: 6,
          mt: 10,
        }}
      >
        <Box
          sx={{
            width: "min(1200px, calc(100% - 48px))",
            mx: "auto",
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography
                sx={{
                  fontSize: 28,
                  fontWeight: 900,
                  mb: 2,
                }}
              >
                Vortic
              </Typography>

              <Typography
                sx={{
                  color: "#9aa4b2",
                  lineHeight: 1.8,
                }}
              >
                Inteligencia Territorial para decisiones críticas.
                Monitoreo, simulación y análisis GIS.
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography
                sx={{
                  fontWeight: 800,
                  mb: 2,
                }}
              >
                Contacto
              </Typography>

              <Typography sx={{ color: "#9aa4b2", mb: 1 }}>
                vorticspa@gmail.com
              </Typography>

              <Typography sx={{ color: "#9aa4b2", mb: 1 }}>
                Santiago, Chile
              </Typography>

              <Typography sx={{ color: "#9aa4b2" }}>
                +56 9 7896 9866
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography
                sx={{
                  fontWeight: 800,
                  mb: 2,
                }}
              >
                Redes
              </Typography>

              <Link
                href="https://www.instagram.com/vortic.tech/"
                target="_blank"
                style={{
                  color: "#00e0c0",
                  textDecoration: "none",
                }}
              >
                Instagram @vortic.tech
              </Link>
            </Grid>
          </Grid>

          <Box
            sx={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              mt: 5,
              pt: 3,
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Typography sx={{ color: "#6f7a88" }}>
              Tecnología al servicio de territorios más seguros.
            </Typography>

            <Typography sx={{ color: "#6f7a88" }}>
              © 2026 VORTIC SPA
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
