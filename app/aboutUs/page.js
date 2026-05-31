"use client";

import { Box, Grid, Typography } from "@mui/material";

const cards = [
  {
    image: "/about/space.jpg",
    tag: "ARQUITECTURA ESPACIAL",
    title: "Habitabilidad para entornos extremos",
    text: "La exploración de soluciones para contextos hostiles abrió una pregunta mayor: cómo anticipar, simular y diseñar mejor en la Tierra.",
  },
  {
    image: "/about/territory.jpg",
    tag: "TERRITORIO REAL",
    title: "Decisiones críticas en terreno",
    text: "La inteligencia territorial necesita operar donde las decisiones importan: emergencias, infraestructura, riesgo y planificación pública.",
  },
  {
    image: "/about/public.jpg",
    tag: "VOZ PÚBLICA",
    title: "Difusión, liderazgo y transferencia",
    text: "La misión de VORTIC también es acercar el lenguaje geoespacial a instituciones, comunidades y equipos que deben decidir rápido.",
  },
];

const principles = [
  "Simular antes de actuar.",
  "Cruzar datos antes de construir.",
  "Priorizar vidas antes que respuestas improvisadas.",
];

const media = [
  {
    title: "Factor de Éxito",
    text: "Explorando los límites del espacio y la sostenibilidad.",
    tag: "Reportaje",
  },
  {
    title: "DW",
    text: "Emprendedoras latinas que inspiran desde la innovación.",
    tag: "Medio internacional",
  },
  {
    title: "IncubaUdeC",
    text: "Startup chilena liderada por mujeres.",
    tag: "Innovación",
  },
  {
    title: "La Quinta Emprende",
    text: "Planificación urbana y geolocalización estratégica.",
    tag: "Emprendimiento",
  },
  {
    title: "Descubre VC",
    text: "VORTIC revoluciona la inteligencia geoespacial.",
    tag: "Startup",
  },
];

const impact = [
  {
    tag: "EMERGENCIAS",
    title: "Respuesta territorial anticipada",
    text: "Simulación de emplazamientos y capacidad operativa.",
  },
  {
    tag: "PLANIFICACIÓN URBANA",
    title: "Escenarios antes de intervenir",
    text: "Capas de datos y evidencia territorial.",
  },
  {
    tag: "SOSTENIBILIDAD",
    title: "Diseño adaptado al contexto",
    text: "Soluciones sensibles al clima y territorio.",
  },
];

export default function AboutUsPage() {
  return (
    <Box
      sx={{
        background: "#05080e",
        color: "#ffffff",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          width: "min(1180px, calc(100% - 48px))",
          mx: "auto",
          py: 5,
        }}
      >
        {/* TITULO */}

        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: 28, md: 44 },
            fontWeight: 900,
            lineHeight: 1.15,
            maxWidth: 720,
            mx: "auto",
            mb: 5,
          }}
        >
          Una trayectoria que conecta espacio, territorio e impacto social.
        </Typography>

        {/* CARDS */}

        <Typography
          sx={{
            color: "#00e0c0",
            fontWeight: 800,
            letterSpacing: "0.14em",
            fontSize: 11,
            mb: 2,
          }}
        >
          DE LA VISIÓN A LA APLICACIÓN
        </Typography>

        <Grid container spacing={2.5}>
          {cards.map((card) => (
            <Grid item xs={12} md={4} key={card.title}>
              <Box
                sx={{
                  background: "#11161f",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 3,
                  overflow: "hidden",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    height: 240,
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "grayscale(100%)",
                  }}
                />

                <Box sx={{ p: 2.5 }}>
                  <Typography
                    sx={{
                      color: "#00e0c0",
                      fontWeight: 800,
                      fontSize: 11,
                      mb: 1.5,
                    }}
                  >
                    {card.tag}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 18,
                      fontWeight: 800,
                      mb: 1.5,
                      lineHeight: 1.3,
                    }}
                  >
                    {card.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#97a2b3",
                      lineHeight: 1.7,
                      fontSize: 14,
                    }}
                  >
                    {card.text}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* PRINCIPIOS */}

        <Grid container spacing={2.5} sx={{ mt: 2 }}>
          {principles.map((item, index) => (
            <Grid item xs={12} md={4} key={item}>
              <Box
                sx={{
                  background: "#11161f",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 3,
                  p: 2.5,
                }}
              >
                <Typography
                  sx={{
                    color: "#00e0c0",
                    fontWeight: 900,
                    mb: 1,
                    fontSize: 18,
                  }}
                >
                  0{index + 1}
                </Typography>

                <Typography
                  sx={{
                    color: "#d7dce5",
                    fontSize: 15,
                  }}
                >
                  {item}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* VALIDACION */}

        <Grid container spacing={2.5} sx={{ mt: 5 }}>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                background:
                  "linear-gradient(135deg,#151a22,#10251f)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 3,
                p: 4,
                height: "100%",
              }}
            >
              <Typography
                sx={{
                  color: "#00e0c0",
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  fontSize: 11,
                  mb: 2,
                }}
              >
                VALIDACIÓN Y TERRITORIO
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 28, md: 40 },
                  fontWeight: 900,
                  lineHeight: 1.12,
                  mb: 3,
                  maxWidth: 680,
                }}
              >
                VORTIC se construye desde evidencia, colaboración y presencia en espacios donde la tecnología debe demostrar valor.
              </Typography>

              <Typography
                sx={{
                  color: "#9aa4b2",
                  fontSize: 15,
                  lineHeight: 1.8,
                  maxWidth: 620,
                }}
              >
                La misión no es solo desarrollar software: es transformar la manera en que instituciones, equipos técnicos y comunidades entienden el territorio.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Grid container spacing={2.5}>
              {[
                "Ecosistema de innovación",
                "Tecnología y defensa",
                "Observación territorial",
              ].map((title) => (
                <Grid item xs={12} key={title}>
                  <Box
                    sx={{
                      background: "#11161f",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 3,
                      p: 2.5,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 18,
                        fontWeight: 800,
                        mb: 1,
                      }}
                    >
                      {title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#97a2b3",
                        fontSize: 14,
                        lineHeight: 1.7,
                      }}
                    >
                      Datos, capas e inteligencia territorial aplicada.
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* RECONOCIMIENTO */}

        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: 26, md: 38 },
            fontWeight: 900,
            lineHeight: 1.2,
            maxWidth: 760,
            mx: "auto",
            mt: 8,
            mb: 5,
          }}
        >
          Medios, eventos y ecosistemas que respaldan esta visión.
        </Typography>

        <Typography
          sx={{
            color: "#00e0c0",
            fontWeight: 800,
            letterSpacing: "0.14em",
            fontSize: 11,
            mb: 2,
          }}
        >
          RECONOCIMIENTO
        </Typography>

        <Grid container spacing={2.5}>
          {media.map((item) => (
            <Grid item xs={12} sm={6} md={2.4} key={item.title}>
              <Box
                sx={{
                  background: "#11161f",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 3,
                  p: 2.5,
                  minHeight: 180,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 17,
                    fontWeight: 800,
                    mb: 1.5,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#97a2b3",
                    lineHeight: 1.6,
                    fontSize: 13,
                    mb: 2,
                  }}
                >
                  {item.text}
                </Typography>

                <Typography
                  sx={{
                    color: "#00e0c0",
                    fontWeight: 800,
                    fontSize: 13,
                  }}
                >
                  {item.tag}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* IMPACTO */}

        <Grid container spacing={2.5} sx={{ mt: 5 }}>
          {impact.map((item) => (
            <Grid item xs={12} md={4} key={item.title}>
              <Box
                sx={{
                  background: "#11161f",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 3,
                  p: 3,
                  minHeight: 180,
                }}
              >
                <Typography
                  sx={{
                    color: "#00e0c0",
                    fontWeight: 800,
                    fontSize: 11,
                    mb: 2,
                  }}
                >
                  {item.tag}
                </Typography>

                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 800,
                    mb: 1.5,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#97a2b3",
                    lineHeight: 1.7,
                    fontSize: 14,
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
