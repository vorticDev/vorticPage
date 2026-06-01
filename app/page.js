"use client";

import Link from "next/link";
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
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PublicIcon from "@mui/icons-material/Public";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LayersIcon from "@mui/icons-material/Layers";
import AssessmentIcon from "@mui/icons-material/Assessment";
import HubIcon from "@mui/icons-material/Hub";
import MapIcon from "@mui/icons-material/Map";

const products = [
  {
    title: "LoitterMAP",
    description:
      "Monitoreo territorial en tiempo real con capas climáticas, infraestructura y alertas.",
    icon: <PublicIcon />,
  },
  {
    title: "Simulación territorial",
    description:
      "Modela escenarios y genera propuestas territoriales con análisis ISI.",
    icon: <MapIcon />,
  },
  {
    title: "Dashboard GIS",
    description:
      "Monitoreo analítico territorial, métricas y distribución de riesgo.",
    icon: <DashboardIcon />,
  },
  {
    title: "Proyectos",
    description:
      "Gestiona proyectos, prioriza y abre proyectos territoriales.",
    icon: <HubIcon />,
  },
  {
    title: "Capas de datos",
    description:
      "Explora capas GIS, infraestructura y datos geoespaciales.",
    icon: <LayersIcon />,
  },
  {
    title: "Reportes",
    description:
      "Generación automática de reportes ejecutivos y territoriales.",
    icon: <AssessmentIcon />,
  },
];

const faqItems = [
  {
    question: "¿Qué es Vortic?",
    answer:
      "VORTIC es una plataforma de inteligencia territorial enfocada en monitoreo, simulación y análisis geoespacial.",
  },
  {
    question: "¿Qué tipo de datos puede visualizar?",
    answer:
      "Capas GIS, infraestructura crítica, clima, sensores, riesgo, imágenes satelitales y datos urbanos.",
  },
  {
    question: "¿Vortic se puede integrar con otros sistemas?",
    answer:
      "Sí. VORTIC puede integrarse con APIs, plataformas GIS y sistemas institucionales.",
  },
  {
    question: "¿Es una plataforma gratuita?",
    answer:
      "VORTIC trabaja bajo modalidades SaaS y soluciones institucionales.",
  },
  {
    question: "¿Puedo integrar mis propias capas de datos?",
    answer:
      "Sí. Puedes subir y administrar capas territoriales propias.",
  },
  {
    question: "¿Ofrecen soporte técnico?",
    answer:
      "Sí. Incluye soporte técnico y acompañamiento estratégico.",
  },
];

export default function HomePage() {
  return (
    <Box
      sx={{
        background: "#020817",
        minHeight: "100vh",
        color: "#fff",
        overflowX: "hidden",
      }}
    >
      {/* NAVBAR */}

      <Box
        sx={{
          height: "78px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(20px)",
          background:
            "linear-gradient(90deg, rgba(5,5,5,0.98), rgba(15,15,15,0.94))",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <Box
          sx={{
            maxWidth: "1500px",
            margin: "0 auto",
            px: 4,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                component="img"
                src="/logo.png"
                alt="logo"
                sx={{
                  width: 58,
                  height: 58,
                  objectFit: "contain",
                }}
              />

              <Box>
                <Typography
                  sx={{
                    fontSize: "2.2rem",
                    fontWeight: 900,
                    lineHeight: 1,
                    letterSpacing: "-1px",
                  }}
                >
                  VOR
                  <span style={{ color: "#12f7d6" }}>TIC</span>
                </Typography>

                <Typography
                  sx={{
                    fontSize: "0.78rem",
                    letterSpacing: "4px",
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  INTELIGENCIA TERRITORIAL
                </Typography>
              </Box>
            </Stack>
          </Link>

          <Stack direction="row" spacing={5}>
            <Link href="/" style={navStyle}>
              INICIO
            </Link>

            <Link href="/aboutUs" style={navStyle}>
              NOSOTROS
            </Link>

            <a href="#contacto" style={navStyle}>
              CONTACTO
            </a>

            <a href="#faq" style={navStyle}>
              FAQ
            </a>
          </Stack>

          <Link href="/login" style={{ textDecoration: "none" }}>
            <Button
              startIcon={<ArrowForwardIcon />}
              sx={{
                color: "#12f7d6",
                border: "1px solid #12f7d6",
                px: 3.5,
                py: 1.2,
                borderRadius: "14px",
                fontWeight: 700,
                fontSize: "1rem",
                textTransform: "none",
              }}
            >
              Iniciar sesión
            </Button>
          </Link>
        </Box>
      </Box>

      {/* HERO */}

      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          py: 12,
          px: 4,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/bg-vortic.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.12,
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1300px",
            margin: "0 auto",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "3rem",
                md: "5.5rem",
              },
              fontWeight: 900,
              lineHeight: 1,
              maxWidth: "900px",
              letterSpacing: "-3px",
            }}
          >
            Inteligencia territorial para decisiones críticas
          </Typography>

          <Typography
            sx={{
              mt: 4,
              maxWidth: "760px",
              color: "rgba(255,255,255,0.72)",
              fontSize: "1.35rem",
              lineHeight: 1.8,
            }}
          >
            Monitoreo geoespacial, simulación avanzada y análisis territorial
            en una sola plataforma.
          </Typography>

          <a href="#contacto" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                mt: 5,
                background: "#12f7d6",
                color: "#000",
                px: 4,
                py: 1.6,
                borderRadius: "16px",
                fontWeight: 800,
                textTransform: "none",
                fontSize: "1rem",
              }}
            >
              Solicitar demo
            </Button>
          </a>
        </Box>
      </Box>

      {/* PRODUCTOS */}

      <Box sx={{ px: 4, py: 10 }}>
        <Box sx={{ maxWidth: "1500px", margin: "0 auto" }}>
          <Typography
            sx={{
              fontSize: "3.5rem",
              fontWeight: 900,
              mb: 6,
            }}
          >
            ¿Qué puedes hacer con Vortic?
          </Typography>

          <Grid container spacing={4}>
            {products.map((product, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Box
                  sx={{
                    border:
                      "1px solid rgba(255,255,255,0.08)",
                    background:
                      "linear-gradient(180deg, rgba(10,14,30,0.96), rgba(5,8,18,0.98))",
                    borderRadius: "28px",
                    p: 4,
                    minHeight: "280px",
                  }}
                >
                  <Box
                    sx={{
                      width: 62,
                      height: 62,
                      borderRadius: "18px",
                      background:
                        "rgba(18,247,214,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#12f7d6",
                      mb: 4,
                    }}
                  >
                    {product.icon}
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "2rem",
                      fontWeight: 800,
                      mb: 2,
                    }}
                  >
                    {product.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.68)",
                      lineHeight: 1.8,
                      fontSize: "1.05rem",
                    }}
                  >
                    {product.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* CONTACTO */}

      <Box
        id="contacto"
        sx={{
          px: 4,
          py: 10,
        }}
      >
        <Box sx={{ maxWidth: "1300px", margin: "0 auto" }}>
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: 900,
              fontSize: "4rem",
            }}
          >
            Solicita una demo
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: "rgba(255,255,255,0.65)",
              mt: 2,
              mb: 8,
            }}
          >
            Descubre cómo Vortic puede potenciar tu territorio.
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box
                component="form"
                action="https://formsubmit.co/vorticspa@gmail.com"
                method="POST"
                sx={{
                  border:
                    "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "28px",
                  p: 5,
                }}
              >
                <Stack spacing={3}>
                  <TextField
                    name="nombre"
                    placeholder="Tu nombre"
                    fullWidth
                  />

                  <TextField
                    name="email"
                    placeholder="tu@email.com"
                    fullWidth
                  />

                  <TextField
                    name="telefono"
                    placeholder="+56 9 1234 5678"
                    fullWidth
                  />

                  <TextField
                    name="organizacion"
                    placeholder="Nombre de tu organización"
                    fullWidth
                  />

                  <TextField
                    name="mensaje"
                    placeholder="Cuéntanos sobre tu proyecto..."
                    multiline
                    rows={5}
                    fullWidth
                  />

                  <Button
                    type="submit"
                    sx={{
                      background: "#12f7d6",
                      color: "#000",
                      py: 2,
                      borderRadius: "18px",
                      fontWeight: 900,
                      fontSize: "1rem",
                      textTransform: "none",
                    }}
                  >
                    Enviar solicitud
                  </Button>
                </Stack>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Stack spacing={4}>
                <Box
                  sx={{
                    border:
                      "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "28px",
                    p: 5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "2rem",
                      fontWeight: 900,
                      mb: 3,
                    }}
                  >
                    ¿Por qué Vortic?
                  </Typography>

                  <Stack spacing={3}>
                    <Typography>
                      • Datos en tiempo real
                    </Typography>

                    <Typography>
                      • Simulación avanzada
                    </Typography>

                    <Typography>
                      • Cobertura territorial
                    </Typography>
                  </Stack>
                </Box>

                <Box
                  sx={{
                    border:
                      "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "28px",
                    p: 5,
                  }}
                >
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.72)",
                      lineHeight: 1.8,
                    }}
                  >
                    "Las ciudades y territorios que mejor responden a las crisis
                    son aquellos que disponen de inteligencia territorial en
                    tiempo real."
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
          px: 4,
          py: 10,
        }}
      >
        <Box sx={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "4rem",
              fontWeight: 900,
              mb: 6,
            }}
          >
            Preguntas frecuentes
          </Typography>

          {faqItems.map((item, index) => (
            <Accordion
              key={index}
              sx={{
                background: "#08111f",
                color: "#fff",
                mb: 2,
                borderRadius: "18px !important",
                border:
                  "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight={700}>
                  {item.question}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.8,
                  }}
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>

      {/* FOOTER */}

      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          mt: 8,
          py: 6,
          px: 4,
        }}
      >
        <Box
          sx={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 4,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "2rem",
                fontWeight: 900,
              }}
            >
              VORTIC
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.6)",
                mt: 2,
                maxWidth: "360px",
                lineHeight: 1.8,
              }}
            >
              Inteligencia territorial para decisiones críticas.
            </Typography>
          </Box>

          <Stack spacing={1}>
            <Typography fontWeight={800}>
              CONTACTO
            </Typography>

            <Typography color="rgba(255,255,255,0.6)">
              vorticspa@gmail.com
            </Typography>

            <Typography color="rgba(255,255,255,0.6)">
              +56 9 7896 9866
            </Typography>

            <a
              href="https://www.instagram.com/vortic.tech/"
              target="_blank"
              style={{
                color: "#12f7d6",
              }}
            >
              <InstagramIcon />
            </a>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

const navStyle = {
  color: "rgba(255,255,255,0.82)",
  textDecoration: "none",
  fontWeight: 600,
  letterSpacing: "2px",
};
