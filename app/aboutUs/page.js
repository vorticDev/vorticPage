"use client";

import { Box, Button, Grid, Stack, Typography } from "@mui/material";

const cards = [
  {
    image: "/about/space.jpeg",
    tag: "ARQUITECTURA ESPACIAL",
    title: "Habitabilidad para entornos extremos",
    text: "La exploración de soluciones para contextos hostiles abrió una pregunta mayor: cómo anticipar, simular y diseñar mejor en la Tierra.",
  },
  {
    image: "/about/territory.jpeg",
    tag: "TERRITORIO REAL",
    title: "Decisiones críticas en terreno",
    text: "La inteligencia territorial necesita operar donde las decisiones importan: emergencias, infraestructura, riesgo y planificación pública.",
  },
  {
    image: "/about/public.png",
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
    url: "https://sports.revistafactordeexito.com/a/30827/explorando-los-limites-del-espacio-y-la-sostenibilidad-la-vision-de-lia-seguel-alvarado",
  },
  {
    title: "DW",
    text: "Emprendedoras latinas que inspiran desde la innovación.",
    tag: "Medio internacional",
    url: "https://www.youtube.com/watch?v=n5sZiuv-2TE",
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
    text: "Simulación de emplazamientos, riesgo y capacidad operativa para decisiones críticas.",
  },
  {
    tag: "PLANIFICACIÓN URBANA",
    title: "Escenarios antes de intervenir",
    text: "Capas de datos, modelación y evidencia para priorizar dónde y cómo actuar.",
  },
  {
    tag: "SOSTENIBILIDAD",
    title: "Diseño adaptado al contexto",
    text: "Soluciones territoriales y habitacionales sensibles al clima, la geografía y las personas.",
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
          py: { xs: 5, md: 7 },
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: 30, md: 44 },
            fontWeight: 900,
            lineHeight: 1.15,
            maxWidth: 760,
            mx: "auto",
            mb: 6,
          }}
        >
          Una trayectoria que conecta espacio, territorio e impacto social.
        </Typography>

        <Typography
          sx={{
            color: "#00e0c0",
            fontWeight: 800,
            letterSpacing: "0.16em",
            fontSize: 12,
            mb: 2,
          }}
        >
          DE LA VISIÓN A LA APLICACIÓN
        </Typography>

        <Grid container spacing={3}>
          {cards.map((card) => (
            <Grid item xs={12} md={4} key={card.title}>
              <Box
                sx={{
                  background: "#11161f",
                  border: "1px solid rgba(255,255,255,0.09)",
                  borderRadius: 3,
                  overflow: "hidden",
                  height: "100%",
                }}
              >
                <Box
                  component="img"
                  src={card.image}
                  alt={card.title}
                  sx={{
                    width: "100%",
                    height: 250,
                    objectFit: "cover",
                    display: "block",
                    filter: "grayscale(100%) brightness(0.72)",
                  }}
                />

                <Box sx={{ p: 3 }}>
                  <Typography
                    sx={{
                      color: "#00e0c0",
                      fontWeight: 800,
                      fontSize: 12,
                      mb: 1.5,
                    }}
                  >
                    {card.tag}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 21,
                      fontWeight: 900,
                      mb: 1.5,
                      lineHeight: 1.25,
                    }}
                  >
                    {card.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#9aa4b2",
                      lineHeight: 1.7,
                      fontSize: 15,
                    }}
                  >
                    {card.text}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={3} sx={{ mt: 3 }}>
          {principles.map((item, index) => (
            <Grid item xs={12} md={4} key={item}>
              <Box
                sx={{
                  background: "#11161f",
                  border: "1px solid rgba(255,255,255,0.09)",
                  borderRadius: 3,
                  p: 3,
                  height: "100%",
                }}
              >
                <Typography
                  sx={{
                    color: "#00e0c0",
                    fontWeight: 900,
                    mb: 1,
                    fontSize: 16,
                  }}
                >
                  0{index + 1}
                </Typography>

                <Typography sx={{ color: "#d7dce5", fontSize: 16 }}>
                  {item}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={3} sx={{ mt: 7 }}>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                background: "linear-gradient(135deg,#151a22,#10251f)",
                border: "1px solid rgba(255,255,255,0.09)",
                borderRadius: 3,
                p: { xs: 3, md: 5 },
                height: "100%",
              }}
            >
              <Typography
                sx={{
                  color: "#00e0c0",
                  fontWeight: 800,
                  letterSpacing: "0.16em",
                  fontSize: 12,
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
                VORTIC se construye desde evidencia, colaboración y presencia
                en espacios donde la tecnología debe demostrar valor.
              </Typography>

              <Typography
                sx={{
                  color: "#9aa4b2",
                  fontSize: 16,
                  lineHeight: 1.8,
                  maxWidth: 650,
                }}
              >
                La misión no es solo desarrollar software: es transformar la
                manera en que instituciones, equipos técnicos y comunidades
                entienden el territorio, anticipan escenarios y toman
                decisiones.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Stack spacing={3}>
              {[
                "Ecosistema de innovación",
                "Tecnología y defensa",
                "Observación territorial",
              ].map((title) => (
                <Box
                  key={title}
                  sx={{
                    background: "#11161f",
                    border: "1px solid rgba(255,255,255,0.09)",
                    borderRadius: 3,
                    p: 3,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 20,
                      fontWeight: 900,
                      mb: 1,
                    }}
                  >
                    {title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#9aa4b2",
                      fontSize: 15,
                      lineHeight: 1.7,
                    }}
                  >
                    Datos, capas e inteligencia territorial aplicada para
                    decisiones de alto impacto.
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: 28, md: 40 },
            fontWeight: 900,
            lineHeight: 1.2,
            maxWidth: 760,
            mx: "auto",
            mt: 9,
            mb: 5,
          }}
        >
          Medios, eventos y ecosistemas que respaldan esta visión.
        </Typography>

        <Typography
          sx={{
            color: "#00e0c0",
            fontWeight: 800,
            letterSpacing: "0.16em",
            fontSize: 12,
            mb: 2,
          }}
        >
          RECONOCIMIENTO
        </Typography>

        <Grid container spacing={3}>
          {media.map((item) => (
            <Grid item xs={12} sm={6} md={2.4} key={item.title}>
              <Box
                component={item.url ? "a" : "div"}
                href={item.url || undefined}
                target={item.url ? "_blank" : undefined}
                rel={item.url ? "noopener noreferrer" : undefined}
                sx={{
                  display: "block",
                  textDecoration: "none",
                  color: "inherit",
                  background: "#11161f",
                  border: "1px solid rgba(255,255,255,0.09)",
                  borderRadius: 3,
                  p: 3,
                  minHeight: 190,
                  height: "100%",
                  transition: "0.2s ease",
                  "&:hover": {
                    borderColor: item.url
                      ? "rgba(0,224,192,0.45)"
                      : "rgba(255,255,255,0.09)",
                    transform: item.url ? "translateY(-3px)" : "none",
                  },
                }}
              >
                <Typography sx={{ fontSize: 18, fontWeight: 900, mb: 1.5 }}>
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#9aa4b2",
                    lineHeight: 1.55,
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

        <Grid container spacing={3} sx={{ mt: 6 }}>
          {impact.map((item) => (
            <Grid item xs={12} md={4} key={item.title}>
              <Box
                sx={{
                  background: "#11161f",
                  border: "1px solid rgba(255,255,255,0.09)",
                  borderRadius: 3,
                  p: 3,
                  minHeight: 180,
                  height: "100%",
                }}
              >
                <Typography
                  sx={{
                    color: "#00e0c0",
                    fontWeight: 800,
                    fontSize: 12,
                    mb: 2,
                  }}
                >
                  {item.tag}
                </Typography>

                <Typography sx={{ fontSize: 22, fontWeight: 900, mb: 1.5 }}>
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#9aa4b2",
                    lineHeight: 1.7,
                    fontSize: 15,
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 7, textAlign: "center" }}>
          <Button
            href="/"
            sx={{
              color: "#00e0c0",
              border: "1px solid rgba(0,224,192,0.35)",
              borderRadius: 2,
              px: 3,
              py: 1.2,
              fontWeight: 800,
              textTransform: "none",
              "&:hover": {
                borderColor: "#00e0c0",
                background: "rgba(0,224,192,0.06)",
              },
            }}
          >
            Volver al inicio
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
