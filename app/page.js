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

const products = [
  {
    title: "LoitterMAP",
    text: "Monitoreo territorial en tiempo real con capas climáticas, infraestructura y alertas.",
    icon: "🛰",
    live: true,
  },
  {
    title: "Simulación territorial",
    text: "Modela escenarios y genera propuestas territoriales con análisis ISI.",
    icon: "🗺",
  },
  {
    title: "Dashboard GIS",
    text: "Monitoreo analítico territorial, métricas y distribución de riesgo.",
    icon: "▦",
  },
  {
    title: "Proyectos",
    text: "Gestiona proyectos, prioriza y abre proyectos territoriales.",
    icon: "▤",
  },
  {
    title: "Capas de datos",
    text: "Explora capas GIS, infraestructura y datos geoespaciales.",
    icon: "◎",
  },
];

const faqItems = [
  {
    q: "¿Qué es Vortic?",
    a: "Vortic es una plataforma de inteligencia territorial que integra datos geoespaciales, climáticos, sísmicos y satelitales para apoyar decisiones críticas.",
  },
  {
    q: "¿Qué tipo de datos puede visualizar?",
    a: "Incendios activos, sismos, clima, infraestructura, imágenes satelitales, capas GIS y datos territoriales personalizados.",
  },
  {
    q: "¿Vortic se puede integrar con otros sistemas?",
    a: "Sí. Puede conectarse a APIs, bases PostGIS, capas GeoJSON, Shapefile y sistemas institucionales.",
  },
  {
    q: "¿Es una plataforma gratuita?",
    a: "Actualmente funciona mediante solicitud de demo, pilotos institucionales y planes de implementación.",
  },
  {
    q: "¿Puedo integrar mis propias capas de datos?",
    a: "Sí. Vortic permite integrar capas GIS propias para análisis territorial y simulación.",
  },
  {
    q: "¿Ofrecen soporte técnico?",
    a: "Sí. Incluimos acompañamiento técnico y soporte según el tipo de implementación.",
  },
];

export default function Home() {
  return (
    <Box
      sx={{
        background:
          "radial-gradient(circle at top, #08111f 0%, #04070d 48%, #02050a 100%)",
        color: "#ffffff",
        overflow: "hidden",
      }}
    >
      {/* HERO */}
      <Box
        sx={{
          minHeight: "88vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          px: 3,
          textAlign: "center",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at center, rgba(0,224,192,0.08), transparent 58%)",
          }}
        />

        <Box sx={{ position: "relative", zIndex: 2, maxWidth: 820 }}>
          <Box
            sx={{
              display: "inline-flex",
              px: 2,
              py: 0.8,
              borderRadius: "999px",
              border: "1px solid rgba(0,224,192,0.2)",
              background: "rgba(0,224,192,0.08)",
              mb: 3,
            }}
          >
            <Typography
              sx={{
                color: "#00e0c0",
                fontSize: 12,
                fontWeight: 800,
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
              fontSize: 13,
              mb: 3,
            }}
          >
            INTELIGENCIA TERRITORIAL PARA DECISIONES CRÍTICAS
          </Typography>

          {["Planifica.", "Simula.", "Actúa."].map((word) => (
            <Typography
              key={word}
              sx={{
                fontSize: { xs: 46, md: 76 },
                fontWeight: 900,
                lineHeight: 1,
                color: word === "Simula." ? "#00e0c0" : "#ffffff",
              }}
            >
              {word}
            </Typography>
          ))}

          <Typography
            sx={{
              color: "#a8b1bc",
              fontSize: { xs: 16, md: 19 },
              lineHeight: 1.8,
              maxWidth: 720,
              mx: "auto",
              mt: 4,
              mb: 5,
            }}
          >
            Plataforma geoespacial para simulación territorial, evaluación de
            riesgo, análisis GIS y planificación estratégica basada en datos.
          </Typography>

          <Button
            component="a"
            href="#contacto"
            sx={{
              background: "#12d7ba",
              color: "#ffffff",
              px: 4,
              py: 1.6,
              borderRadius: 3,
              fontWeight: 800,
              fontSize: 16,
              textTransform: "none",
              "&:hover": { background: "#0fc4aa" },
            }}
          >
            Solicitar DEMO →
          </Button>
        </Box>
      </Box>

      {/* PRODUCTOS */}
      <Box sx={{ py: { xs: 7, md: 9 } }}>
        <Box sx={{ width: "min(1200px, calc(100% - 48px))", mx: "auto" }}>
          <Typography
            sx={{
              fontSize: { xs: 32, md: 46 },
              fontWeight: 900,
              mb: 5,
            }}
          >
            ¿Qué puedes hacer con Vortic?
          </Typography>

          <Grid container spacing={3}>
            {products.map((item, index) => (
              <Grid item xs={12} md={index < 3 ? 4 : 6} key={item.title}>
                <Box
                  sx={{
                    background: "#0b1018",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 4,
                    p: 4,
                    minHeight: 245,
                    position: "relative",
                    height: "100%",
                  }}
                >
                  {item.live && (
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
                  )}

                  <Typography sx={{ fontSize: 34, mb: 3 }}>
                    {item.icon}
                  </Typography>

                  <Typography sx={{ fontSize: 21, fontWeight: 900, mb: 2 }}>
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#9aa4b2",
                      lineHeight: 1.7,
                      mb: 4,
                      maxWidth: 420,
                    }}
                  >
                    {item.text}
                  </Typography>

                  <Typography sx={{ color: "#00e0c0", fontWeight: 800 }}>
                    IR AHORA →
                  </Typography>
                </Box>
              </Grid>
            ))}

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
                  <Typography sx={{ fontSize: 21, fontWeight: 900, mb: 1 }}>
                    Reportes
                  </Typography>
                  <Typography sx={{ color: "#9aa4b2" }}>
                    Genera reportes automáticos y ejecutivos.
                  </Typography>
                </Box>

                <Typography sx={{ color: "#00e0c0", fontWeight: 800 }}>
                  IR AHORA →
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* CONTACTO */}
      <Box
        id="contacto"
        sx={{
          py: { xs: 7, md: 9 },
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <Box sx={{ width: "min(1200px, calc(100% - 48px))", mx: "auto" }}>
          <Typography
            sx={{
              fontSize: { xs: 34, md: 52 },
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
              mb: 7,
              fontSize: 17,
            }}
          >
            Descubre cómo Vortic puede potenciar tu territorio.
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box
                component="form"
                action="mailto:vorticspa@gmail.com"
                method="POST"
                encType="text/plain"
                sx={{
                  background: "#0b1018",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 4,
                  p: 4,
                }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField fullWidth name="Nombre" label="Nombre" />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField fullWidth name="Email" label="Email" />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField fullWidth name="Teléfono" label="Teléfono" />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="Organización"
                      label="Organización"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={5}
                      name="Mensaje"
                      label="Mensaje"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      fullWidth
                      sx={{
                        background: "#12d7ba",
                        color: "#ffffff",
                        py: 1.8,
                        borderRadius: 3,
                        fontWeight: 800,
                        textTransform: "none",
                        "&:hover": { background: "#0fc4aa" },
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
                <Typography sx={{ fontSize: 28, fontWeight: 900, mb: 4 }}>
                  ¿Por qué Vortic?
                </Typography>

                <Stack spacing={3}>
                  <Box>
                    <Typography sx={{ fontWeight: 900 }}>
                      ◆ Datos en tiempo real
                    </Typography>
                    <Typography sx={{ color: "#9aa4b2", mt: 0.6 }}>
                      Satélites, sensores y fuentes oficiales integradas en un
                      solo panel.
                    </Typography>
                  </Box>

                  <Box>
                    <Typography sx={{ fontWeight: 900 }}>
                      ◆ Simulación avanzada
                    </Typography>
                    <Typography sx={{ color: "#9aa4b2", mt: 0.6 }}>
                      Modela incendios, inundaciones y riesgo territorial con
                      IA.
                    </Typography>
                  </Box>

                  <Box>
                    <Typography sx={{ fontWeight: 900 }}>
                      ◆ Cobertura total
                    </Typography>
                    <Typography sx={{ color: "#9aa4b2", mt: 0.6 }}>
                      Desde análisis comunal hasta monitoreo nacional con
                      PostGIS.
                    </Typography>
                  </Box>
                </Stack>
              </Box>

              <Box
                sx={{
                  background: "#0b1018",
                  border: "1px solid rgba(255,91,1,0.22)",
                  borderRadius: 4,
                  p: 4,
                }}
              >
                <Typography
                  sx={{
                    color: "#d8dce5",
                    lineHeight: 1.8,
                    fontSize: 18,
                  }}
                >
                  "Las ciudades y territorios que mejor responden a las crisis
                  son aquellos que disponen de inteligencia territorial en tiempo
                  real."
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* FAQ */}
      <Box
        id="faq"
        sx={{
          py: { xs: 7, md: 9 },
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <Box sx={{ width: "min(980px, calc(100% - 48px))", mx: "auto" }}>
          <Typography
            sx={{
              color: "#00e0c0",
              fontWeight: 800,
              textAlign: "center",
              mb: 1,
            }}
          >
            FAQ
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 32, md: 46 },
              fontWeight: 900,
              textAlign: "center",
              mb: 5,
            }}
          >
            Preguntas frecuentes
          </Typography>

          <Stack spacing={1.5}>
            {faqItems.map((item, index) => (
              <Accordion
                key={item.q}
                disableGutters
                elevation={0}
                sx={{
                  background: "#0b1018",
                  color: "#ffffff",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "14px !important",
                  "&:before": { display: "none" },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#9aa4b2" }} />}
                >
                  <Typography sx={{ fontWeight: 800 }}>{item.q}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ color: "#9aa4b2", lineHeight: 1.7 }}>
                    {item.a}
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
          borderTop: "1px solid rgba(255,255,255,0.08)",
          py: 6,
        }}
      >
        <Box sx={{ width: "min(1200px, calc(100% - 48px))", mx: "auto" }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography sx={{ fontSize: 26, fontWeight: 900, mb: 2 }}>
                Vortic
              </Typography>
              <Typography sx={{ color: "#9aa4b2", lineHeight: 1.8 }}>
                Inteligencia Territorial para decisiones críticas. Monitoreo,
                simulación y análisis GIS.
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography sx={{ fontWeight: 800, mb: 2 }}>Contacto</Typography>
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
              <Typography sx={{ fontWeight: 800, mb: 2 }}>Redes</Typography>
              <Link
                href="https://www.instagram.com/vortic.tech/"
                target="_blank"
                style={{ color: "#00e0c0", textDecoration: "none" }}
              >
                <InstagramIcon sx={{ verticalAlign: "middle", mr: 1 }} />
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
