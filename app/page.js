"use client";

import Link from "next/link";
import Image from "next/image";

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

const products = [
  {
    title: "LoitterMAP",
    description:
      "Monitoreo territorial en tiempo real con capas climáticas, infraestructura y alertas.",
  },
  {
    title: "Simulación territorial",
    description:
      "Modela escenarios y genera propuestas territoriales con análisis ISI.",
  },
  {
    title: "Dashboard GIS",
    description:
      "Monitoreo analítico territorial, métricas y distribución de riesgo.",
  },
  {
    title: "Proyectos",
    description:
      "Gestiona proyectos, prioriza y abre proyectos territoriales.",
  },
  {
    title: "Capas de datos",
    description:
      "Explora capas GIS, infraestructura y datos geoespaciales.",
  },
  {
    title: "Reportes",
    description:
      "Generación de reportes automáticos y ejecutivos con IA.",
  },
];

const faq = [
  {
    q: "¿Qué es Vortic?",
    a: "VORTIC es una plataforma de inteligencia territorial para monitoreo, simulación y análisis geoespacial.",
  },
  {
    q: "¿Qué tipo de datos puede visualizar?",
    a: "Capas GIS, clima, sensores, imágenes satelitales, riesgos territoriales e infraestructura.",
  },
  {
    q: "¿Vortic se puede integrar con otros sistemas?",
    a: "Sí. VORTIC puede integrarse mediante APIs y servicios territoriales externos.",
  },
  {
    q: "¿Es una plataforma gratuita?",
    a: "VORTIC opera mediante licencias, servicios y soluciones personalizadas.",
  },
  {
    q: "¿Puedo integrar mis propias capas de datos?",
    a: "Sí. Puedes cargar capas geoespaciales y datasets propios.",
  },
  {
    q: "¿Ofrecen soporte técnico?",
    a: "Sí. Incluye soporte técnico y asesoría especializada.",
  },
];

const aboutCards = [
  {
    category: "ARQUITECTURA ESPACIAL",
    title: "Habitabilidad para entornos extremos",
    description:
      "La exploración de soluciones para contextos hostiles abrió una pregunta mayor: cómo anticipar, simular y diseñar mejor en la Tierra.",
    image: "/about/space.jpeg",
  },
  {
    category: "TERRITORIO REAL",
    title: "Decisiones críticas en terreno",
    description:
      "La inteligencia territorial necesita operar donde las decisiones importan: emergencias, infraestructura, riesgo y planificación pública.",
    image: "/about/territory.jpeg",
  },
  {
    category: "VOZ PÚBLICA",
    title: "Difusión, liderazgo y transferencia",
    description:
      "La misión de VORTIC también es acercar el lenguaje geoespacial a instituciones, comunidades y equipos que deben decidir rápido.",
    image: "/about/public.png",
  },
];

export default function HomePage() {
  return (
    <Box
      sx={{
        background: "#030712",
        color: "#ffffff",
        minHeight: "100vh",
      }}
    >
      {/* NAVBAR */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          backdropFilter: "blur(14px)",
          background: "rgba(3,7,18,0.92)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <Box
          sx={{
            maxWidth: "1400px",
            margin: "0 auto",
            px: 4,
            py: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Image
              src="/logo.png"
              alt="VORTIC"
              width={200}
              height={55}
            />
          </Stack>

          <Stack direction="row" spacing={5}>
            <a href="#inicio" style={navStyle}>
              INICIO
            </a>

            <a href="#nosotros" style={navStyle}>
              NOSOTROS
            </a>

            <a href="#contacto" style={navStyle}>
              CONTACTO
            </a>

            <a href="#faq" style={navStyle}>
              FAQ
            </a>
          </Stack>

          <Link href="/login" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#00f5d4",
                color: "#00f5d4",
                borderRadius: "14px",
                px: 3,
                py: 1,
                fontWeight: 700,
                textTransform: "none",
                fontSize: "0.95rem",
              }}
            >
              Iniciar sesión
            </Button>
          </Link>
        </Box>
      </Box>

      {/* HERO */}
      <Box
        id="inicio"
        sx={{
          maxWidth: "1400px",
          margin: "0 auto",
          px: 4,
          pt: 10,
          pb: 14,
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "2.5rem",
              md: "4rem",
            },
            fontWeight: 800,
            lineHeight: 1.1,
            maxWidth: "900px",
          }}
        >
          Inteligencia territorial
          <Box component="span" sx={{ color: "#00f5d4" }}>
            {" "}
            en tiempo real
          </Box>
        </Typography>

        <Typography
          sx={{
            color: "#94a3b8",
            fontSize: "1.05rem",
            mt: 3,
            maxWidth: "700px",
            lineHeight: 1.8,
          }}
        >
          Monitoreo, simulación y análisis territorial avanzado para
          instituciones, ciudades y organizaciones críticas.
        </Typography>

        <Button
          href="#contacto"
          sx={{
            mt: 5,
            background: "#00f5d4",
            color: "#000",
            px: 4,
            py: 1.5,
            borderRadius: "14px",
            fontWeight: 700,
            textTransform: "none",
            fontSize: "1rem",
          }}
        >
          Solicitar demo
        </Button>
      </Box>

      {/* PRODUCTOS */}
      <Box
        sx={{
          maxWidth: "1400px",
          margin: "0 auto",
          px: 4,
          pb: 14,
        }}
      >
        <Typography
          sx={{
            fontSize: "3rem",
            fontWeight: 800,
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
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "24px",
                  p: 4,
                  background:
                    "linear-gradient(180deg, rgba(10,15,30,0.95), rgba(4,8,20,0.95))",
                  height: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    mb: 2,
                  }}
                >
                  {product.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#94a3b8",
                    lineHeight: 1.8,
                    fontSize: "1rem",
                  }}
                >
                  {product.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* NOSOTROS */}
      <Box
        id="nosotros"
        sx={{
          maxWidth: "1400px",
          margin: "0 auto",
          px: 4,
          pb: 14,
        }}
      >
        <Typography
          sx={{
            color: "#00f5d4",
            fontWeight: 700,
            letterSpacing: "4px",
            mb: 2,
          }}
        >
          DE LA VISIÓN A LA APLICACIÓN
        </Typography>

        <Grid container spacing={4}>
          {aboutCards.map((card, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                sx={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background:
                    "linear-gradient(180deg, rgba(10,15,30,0.95), rgba(4,8,20,0.95))",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "300px",
                  }}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </Box>

                <Box sx={{ p: 4 }}>
                  <Typography
                    sx={{
                      color: "#00f5d4",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      letterSpacing: "2px",
                      mb: 2,
                    }}
                  >
                    {card.category}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "2rem",
                      fontWeight: 700,
                      lineHeight: 1.2,
                      mb: 3,
                    }}
                  >
                    {card.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#94a3b8",
                      lineHeight: 1.8,
                      fontSize: "1rem",
                    }}
                  >
                    {card.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Stack
          direction="row"
          spacing={3}
          sx={{
            mt: 6,
            flexWrap: "wrap",
          }}
        >
          <Button
            component="a"
            href="https://sports.revistafactordeexito.com/a/30827/explorando-los-limites-del-espacio-y-la-sostenibilidad-la-vision-de-lia-seguel-alvarado"
            target="_blank"
            sx={pressButton}
          >
            Factor de Éxito
          </Button>

          <Button
            component="a"
            href="https://www.youtube.com/watch?v=n5sZiuv-2TE"
            target="_blank"
            sx={pressButton}
          >
            DW Español
          </Button>
        </Stack>
      </Box>

      {/* CONTACTO */}
      <Box
        id="contacto"
        sx={{
          maxWidth: "1400px",
          margin: "0 auto",
          px: 4,
          pb: 14,
        }}
      >
        <Typography
          sx={{
            fontSize: "3rem",
            fontWeight: 800,
            textAlign: "center",
          }}
        >
          Solicita una demo
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "#94a3b8",
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
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "24px",
                p: 5,
                background:
                  "linear-gradient(180deg, rgba(10,15,30,0.95), rgba(4,8,20,0.95))",
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
                  placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                  multiline
                  rows={5}
                  fullWidth
                />

                <Button
                  type="submit"
                  sx={{
                    background: "#00f5d4",
                    color: "#000",
                    borderRadius: "14px",
                    py: 1.8,
                    fontWeight: 700,
                    textTransform: "none",
                    fontSize: "1rem",
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
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "24px",
                  p: 5,
                  background:
                    "linear-gradient(180deg, rgba(10,15,30,0.95), rgba(4,8,20,0.95))",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "2rem",
                    fontWeight: 700,
                    mb: 4,
                  }}
                >
                  ¿Por qué Vortic?
                </Typography>

                <Stack spacing={3}>
                  <Typography sx={featureStyle}>
                    • Datos en tiempo real
                  </Typography>

                  <Typography sx={featureStyle}>
                    • Simulación avanzada
                  </Typography>

                  <Typography sx={featureStyle}>
                    • Cobertura territorial
                  </Typography>
                </Stack>
              </Box>

              <Box
                sx={{
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "24px",
                  p: 5,
                  background:
                    "linear-gradient(180deg, rgba(10,15,30,0.95), rgba(4,8,20,0.95))",
                }}
              >
                <Typography
                  sx={{
                    color: "#94a3b8",
                    lineHeight: 1.8,
                    fontSize: "1.1rem",
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

      {/* FAQ */}
      <Box
        id="faq"
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          px: 4,
          pb: 14,
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            color: "#00f5d4",
            fontWeight: 700,
            mb: 2,
          }}
        >
          FAQ
        </Typography>

        <Typography
          sx={{
            fontSize: "3rem",
            fontWeight: 800,
            textAlign: "center",
            mb: 6,
          }}
        >
          Preguntas frecuentes
        </Typography>

        <Stack spacing={2}>
          {faq.map((item, index) => (
            <Accordion
              key={index}
              sx={{
                background: "#08101f",
                color: "#fff",
                borderRadius: "16px !important",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ fontWeight: 700 }}>
                  {item.q}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography
                  sx={{
                    color: "#94a3b8",
                    lineHeight: 1.8,
                  }}
                >
                  {item.a}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Box>

      {/* FOOTER */}
      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          py: 6,
        }}
      >
        <Box
          sx={{
            maxWidth: "1400px",
            margin: "0 auto",
            px: 4,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 3,
          }}
        >
          <Stack spacing={1}>
            <Typography sx={{ fontWeight: 700 }}>
              VORTIC SPA
            </Typography>

            <Typography sx={{ color: "#94a3b8" }}>
              Inteligencia territorial para decisiones críticas.
            </Typography>
          </Stack>

          <Stack direction="row" spacing={3} alignItems="center">
            <a
              href="mailto:vorticspa@gmail.com"
              style={footerLink}
            >
              vorticspa@gmail.com
            </a>

            <Typography sx={{ color: "#94a3b8" }}>
              +56 9 7896 9866
            </Typography>

            <a
              href="https://www.instagram.com/vortic.tech/"
              target="_blank"
              style={{ color: "#ffffff" }}
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
  color: "#ffffff",
  textDecoration: "none",
  fontWeight: 600,
  letterSpacing: "1px",
};

const footerLink = {
  color: "#94a3b8",
  textDecoration: "none",
};

const pressButton = {
  border: "1px solid rgba(255,255,255,0.1)",
  color: "#ffffff",
  borderRadius: "14px",
  px: 3,
  py: 1.2,
  textTransform: "none",
};

const featureStyle = {
  color: "#ffffff",
  fontWeight: 600,
};
