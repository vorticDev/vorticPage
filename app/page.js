"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InstagramIcon from "@mui/icons-material/Instagram";

const faqItems = [
  {
    question: "¿Qué es Vortic?",
    answer:
      "Vortic es una plataforma de inteligencia territorial que integra datos satelitales, sísmicos, climáticos y geoespaciales en tiempo real para simulación, monitoreo y planificación estratégica del territorio.",
  },
  {
    question: "¿Qué tipo de datos puede visualizar?",
    answer:
      "Datos de incendios activos (FIRMS NASA), sismos (USGS), eventos naturales (NASA EONET), clima (Open-Meteo), infraestructura (Overpass/OSM), imágenes satelitales (Copernicus Sentinel) y terreno 3D (Mapbox).",
  },
  {
    question: "¿Vortic se puede integrar con otros sistemas?",
    answer:
      "Sí, Vortic puede conectarse con APIs, bases GIS, sistemas municipales y plataformas externas mediante servicios REST y bases PostGIS.",
  },
  {
    question: "¿Es una plataforma gratuita?",
    answer:
      "Actualmente operamos mediante acceso por solicitud de demo y pilotos institucionales.",
  },
  {
    question: "¿Puedo integrar mis propias capas de datos?",
    answer:
      "Sí. Vortic soporta capas GIS personalizadas vía GeoJSON, ShapeFile y conexiones PostGIS.",
  },
  {
    question: "¿Ofrecen soporte técnico?",
    answer:
      "Sí. Incluimos soporte técnico y acompañamiento para instituciones, municipios y organizaciones.",
  },
];

export default function Home() {
  const [expanded, setExpanded] = useState(false);

  const handleAccordion = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        background: "#05080e",
        color: "#ffffff",
      }}
    >
      {/* HERO */}

      <Box
        sx={{
          minHeight: "88vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 3,
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at center, rgba(0,224,192,0.10), transparent 35%)",
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
              px: 2,
              py: 0.8,
              borderRadius: "999px",
              border: "1px solid rgba(255,91,1,0.25)",
              background: "rgba(255,91,1,0.08)",
              color: "#00e0c0",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.08em",
              mb: 4,
            }}
          >
            • PLATAFORMA ACTIVA
          </Box>

          <Typography
            sx={{
              color: "#8c96a8",
              fontSize: 13,
              letterSpacing: "0.18em",
              mb: 3,
            }}
          >
            INTELIGENCIA TERRITORIAL PARA DECISIONES CRÍTICAS
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 46, md: 74 },
              fontWeight: 900,
              lineHeight: 1,
            }}
          >
            Planifica.
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 46, md: 74 },
              fontWeight: 900,
              lineHeight: 1,
              color: "#00e0c0",
            }}
          >
            Simula.
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 46, md: 74 },
              fontWeight: 900,
              lineHeight: 1,
            }}
          >
            Actúa.
          </Typography>

          <Typography
            sx={{
              mt: 4,
              color: "#9ea9bb",
              fontSize: { xs: 16, md: 19 },
              lineHeight: 1.8,
              maxWidth: 760,
              mx: "auto",
            }}
          >
            Plataforma geoespacial para simulación territorial, evaluación de
            riesgo, análisis GIS y planificación estratégica basada en datos.
          </Typography>

          <Button
            sx={{
              mt: 5,
              background: "#12d7ba",
              color: "#ffffff",
              px: 4,
              py: 1.5,
              borderRadius: "14px",
              fontWeight: 800,
              fontSize: 15,
              textTransform: "none",
              "&:hover": {
                background: "#12d7ba",
              },
            }}
          >
            Solicitar DEMO
          </Button>
        </Box>
      </Box>

      {/* CONTACTO / DEMO */}

      <Box
        id="contact"
        sx={{
          py: { xs: 8, md: 12 },
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <Box
          sx={{
            width: "min(1180px, calc(100% - 48px))",
            mx: "auto",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { xs: 38, md: 62 },
              fontWeight: 900,
              mb: 2,
            }}
          >
            Solicita una demo
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: "#9aa4b2",
              fontSize: 18,
              mb: 8,
            }}
          >
            Descubre cómo Vortic puede potenciar tu territorio.
          </Typography>

          <Grid container spacing={4}>
            {/* FORM */}

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  background: "#0b1018",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 4,
                  p: { xs: 3, md: 5 },
                }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Typography
                      sx={{
                        color: "#8d97a8",
                        fontSize: 12,
                        fontWeight: 800,
                        letterSpacing: "0.12em",
                        mb: 1,
                      }}
                    >
                      NOMBRE
                    </Typography>

                    <TextField
                      fullWidth
                      placeholder="Tu nombre"
                      variant="outlined"
                      InputProps={{
                        sx: {
                          borderRadius: 3,
                          background: "#05080e",
                          color: "#ffffff",
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Typography
                      sx={{
                        color: "#8d97a8",
                        fontSize: 12,
                        fontWeight: 800,
                        letterSpacing: "0.12em",
                        mb: 1,
                      }}
                    >
                      EMAIL
                    </Typography>

                    <TextField
                      fullWidth
                      placeholder="tu@email.com"
                      variant="outlined"
                      InputProps={{
                        sx: {
                          borderRadius: 3,
                          background: "#05080e",
                          color: "#ffffff",
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography
                      sx={{
                        color: "#8d97a8",
                        fontSize: 12,
                        fontWeight: 800,
                        letterSpacing: "0.12em",
                        mb: 1,
                      }}
                    >
                      TELÉFONO
                    </Typography>

                    <TextField
                      fullWidth
                      placeholder="+56 9 7896 9866"
                      variant="outlined"
                      InputProps={{
                        sx: {
                          borderRadius: 3,
                          background: "#05080e",
                          color: "#ffffff",
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography
                      sx={{
                        color: "#8d97a8",
                        fontSize: 12,
                        fontWeight: 800,
                        letterSpacing: "0.12em",
                        mb: 1,
                      }}
                    >
                      ORGANIZACIÓN
                    </Typography>

                    <TextField
                      fullWidth
                      placeholder="Nombre de tu organización"
                      variant="outlined"
                      InputProps={{
                        sx: {
                          borderRadius: 3,
                          background: "#05080e",
                          color: "#ffffff",
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography
                      sx={{
                        color: "#8d97a8",
                        fontSize: 12,
                        fontWeight: 800,
                        letterSpacing: "0.12em",
                        mb: 1,
                      }}
                    >
                      MENSAJE
                    </Typography>

                    <TextField
                      fullWidth
                      multiline
                      rows={5}
                      placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                      variant="outlined"
                      InputProps={{
                        sx: {
                          borderRadius: 3,
                          background: "#05080e",
                          color: "#ffffff",
                        },
                      }}
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

            {/* INFO */}

            <Grid item xs={12} md={6}>
              <Stack spacing={4}>
                <Box
                  sx={{
                    background: "#0b1018",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 4,
                    p: 5,
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

                  <Stack spacing={3}>
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 800,
                          fontSize: 22,
                        }}
                      >
                        Datos en tiempo real
                      </Typography>

                      <Typography
                        sx={{
                          color: "#9aa4b2",
                          mt: 1,
                          lineHeight: 1.7,
                        }}
                      >
                        Satélites, sensores y fuentes oficiales integradas en un solo panel.
                      </Typography>
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 800,
                          fontSize: 22,
                        }}
                      >
                        Simulación avanzada
                      </Typography>

                      <Typography
                        sx={{
                          color: "#9aa4b2",
                          mt: 1,
                          lineHeight: 1.7,
                        }}
                      >
                        Modela incendios, inundaciones y riesgo territorial con IA.
                      </Typography>
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 800,
                          fontSize: 22,
                        }}
                      >
                        Cobertura total
                      </Typography>

                      <Typography
                        sx={{
                          color: "#9aa4b2",
                          mt: 1,
                          lineHeight: 1.7,
                        }}
                      >
                        Desde análisis comunal hasta monitoreo nacional con PostGIS.
                      </Typography>
                    </Box>
                  </Stack>
                </Box>

                <Box
                  sx={{
                    background: "#0b1018",
                    border: "1px solid rgba(255,91,1,0.25)",
                    borderRadius: 4,
                    p: 5,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#d8dce5",
                      fontSize: 28,
                      lineHeight: 1.7,
                    }}
                  >
                    "Las ciudades y territorios que mejor responden a las crisis son aquellos que disponen de inteligencia territorial en tiempo real."
                  </Typography>

                  <Typography
                    sx={{
                      color: "#7f8ba0",
                      mt: 4,
                      letterSpacing: "0.14em",
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

      {/* FAQ */}

      <Box
        id="faq"
        sx={{
          py: { xs: 8, md: 12 },
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <Box
          sx={{
            width: "min(1100px, calc(100% - 48px))",
            mx: "auto",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              color: "#00e0c0",
              fontWeight: 800,
              letterSpacing: "0.12em",
              fontSize: 12,
              mb: 2,
            }}
          >
            FAQ
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              fontSize: { xs: 38, md: 62 },
              fontWeight: 900,
              mb: 6,
            }}
          >
            Preguntas frecuentes
          </Typography>

          <Stack spacing={2}>
            {faqItems.map((item, index) => (
              <Accordion
                key={index}
                expanded={expanded === index}
                onChange={handleAccordion(index)}
                disableGutters
                elevation={0}
                sx={{
                  background: "#0b1018",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "18px !important",
                  color: "#ffffff",
                  overflow: "hidden",
                  "&:before": {
                    display: "none",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon sx={{ color: "#7f8ba0" }} />
                  }
                  sx={{
                    px: 3,
                    py: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: 18,
                    }}
                  >
                    {item.question}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails
                  sx={{
                    px: 3,
                    pb: 3,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#9ea9bb",
                      lineHeight: 1.8,
                      fontSize: 16,
                    }}
                  >
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>
        </Box>
      </Box>

      {/* FOOTER */}

      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          background: "#070b11",
          pt: 8,
          pb: 4,
        }}
      >
        <Box
          sx={{
            width: "min(1200px, calc(100% - 48px))",
            mx: "auto",
          }}
        >
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
              <Typography
                sx={{
                  fontSize: 36,
                  fontWeight: 900,
                  mb: 2,
                }}
              >
                Vortic
              </Typography>

              <Typography
                sx={{
                  color: "#9aa4b2",
                  lineHeight: 1.9,
                  fontSize: 16,
                  maxWidth: 320,
                }}
              >
                Inteligencia Territorial para decisiones críticas. Monitoreo,
                simulación y análisis GIS.
              </Typography>
            </Grid>

            <Grid item xs={12} md={2}>
              <Typography
                sx={{
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  fontSize: 13,
                  mb: 2,
                }}
              >
                PRODUCTO
              </Typography>

              <Stack spacing={1.5}>
                <Typography color="#9aa4b2">LoitterMAP</Typography>
                <Typography color="#9aa4b2">Dashboard</Typography>
                <Typography color="#9aa4b2">Simulaciones</Typography>
                <Typography color="#9aa4b2">Reportes</Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} md={2}>
              <Typography
                sx={{
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  fontSize: 13,
                  mb: 2,
                }}
              >
                RECURSOS
              </Typography>

              <Stack spacing={1.5}>
                <Typography color="#9aa4b2">Documentación</Typography>
                <Typography color="#9aa4b2">API</Typography>
                <Typography color="#9aa4b2">Estado</Typography>
                <Typography color="#9aa4b2">Blog</Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography
                sx={{
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  fontSize: 13,
                  mb: 2,
                }}
              >
                CONTACTO
              </Typography>

              <Stack spacing={1.5}>
                <Typography color="#9aa4b2">
                  vorticspa@gmail.com
                </Typography>

                <Typography color="#9aa4b2">
                  Santiago, Chile
                </Typography>

                <Typography color="#9aa4b2">
                  +56 9 7896 9866
                </Typography>

                <Box sx={{ pt: 1 }}>
                  <a
                    href="https://www.instagram.com/vortic.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon
                      sx={{
                        color: "#9aa4b2",
                        fontSize: 28,
                        transition: "0.2s",
                        "&:hover": {
                          color: "#00e0c0",
                        },
                      }}
                    />
                  </a>
                </Box>
              </Stack>
            </Grid>
          </Grid>

          <Box
            sx={{
              mt: 8,
              pt: 3,
              borderTop: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Typography color="#7f8ba0">
              Tecnología al servicio de las personas para construir territorios
              más seguros.
            </Typography>

            <Typography color="#7f8ba0">
              © 2026 VORTIC SPA
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
