"use client";

import Link from "next/link";
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";

const products = [
  {
    title: "LoitterMAP",
    text: "Monitoreo territorial en tiempo real con capas climáticas, infraestructura y alertas.",
    icon: "◈",
    live: true,
  },
  {
    title: "Simulación territorial",
    text: "Modela escenarios y genera propuestas territoriales con análisis ISI.",
    icon: "▱",
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
  ["¿Qué es Vortic?", "Vortic es una plataforma de inteligencia territorial para monitoreo, simulación y análisis geoespacial."],
  ["¿Qué tipo de datos puede visualizar?", "Capas GIS, clima, sensores, imágenes satelitales, riesgos territoriales e infraestructura."],
  ["¿Vortic se puede integrar con otros sistemas?", "Sí. Vortic puede integrarse mediante APIs, PostGIS y capas geoespaciales propias."],
  ["¿Es una plataforma gratuita?", "Vortic opera mediante demos, pilotos, licencias y soluciones personalizadas."],
  ["¿Puedo integrar mis propias capas de datos?", "Sí. Puedes cargar capas geoespaciales y datasets propios."],
  ["¿Ofrecen soporte técnico?", "Sí. Incluye soporte técnico y asesoría especializada."],
];

export default function Home() {
  return (
    <Box sx={{ background: "#030712", color: "#fff", minHeight: "100vh" }}>
      <Box
        id="inicio"
        sx={{
          minHeight: "88vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 3,
          background:
            "radial-gradient(circle at center, rgba(0,224,192,0.08), transparent 55%)",
        }}
      >
        <Box sx={{ maxWidth: 850 }}>
          <Typography sx={{ color: "#00e0c0", fontSize: 12, fontWeight: 800, mb: 3 }}>
            ● PLATAFORMA ACTIVA
          </Typography>

          <Typography sx={{ color: "#8d97a5", letterSpacing: 2, fontSize: 13, mb: 3 }}>
            INTELIGENCIA TERRITORIAL PARA DECISIONES CRÍTICAS
          </Typography>

          <Typography sx={{ fontSize: { xs: 46, md: 76 }, fontWeight: 900, lineHeight: 1 }}>
            Planifica.
          </Typography>
          <Typography sx={{ fontSize: { xs: 46, md: 76 }, fontWeight: 900, lineHeight: 1, color: "#00e0c0" }}>
            Simula.
          </Typography>
          <Typography sx={{ fontSize: { xs: 46, md: 76 }, fontWeight: 900, lineHeight: 1 }}>
            Actúa.
          </Typography>

          <Typography sx={{ color: "#a8b1bc", fontSize: { xs: 16, md: 19 }, lineHeight: 1.8, mt: 4, mb: 5 }}>
            Plataforma geoespacial para simulación territorial, evaluación de riesgo,
            análisis GIS y planificación estratégica basada en datos.
          </Typography>

          <Button
            component="a"
            href="#contacto"
            sx={{
              background: "#12d7ba",
              color: "#fff",
              px: 4,
              py: 1.6,
              borderRadius: 3,
              fontWeight: 800,
              textTransform: "none",
              "&:hover": { background: "#0fc4aa" },
            }}
          >
            Solicitar DEMO →
          </Button>
        </Box>
      </Box>

      <Box sx={{ py: 9 }}>
        <Box sx={{ width: "min(1200px, calc(100% - 48px))", mx: "auto" }}>
          <Typography sx={{ fontSize: { xs: 32, md: 46 }, fontWeight: 900, mb: 5 }}>
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
                        color: "#fff",
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

                  <Typography sx={{ color: "#00e0c0", fontSize: 34, mb: 3 }}>
                    {item.icon}
                  </Typography>
                  <Typography sx={{ fontSize: 21, fontWeight: 900, mb: 2 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: "#9aa4b2", lineHeight: 1.7, mb: 4 }}>
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

      <Box id="contacto" sx={{ py: 9, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <Box sx={{ width: "min(1200px, calc(100% - 48px))", mx: "auto" }}>
          <Typography sx={{ fontSize: { xs: 34, md: 52 }, fontWeight: 900, textAlign: "center", mb: 2 }}>
            Solicita una demo
          </Typography>
          <Typography sx={{ color: "#9aa4b2", textAlign: "center", mb: 7, fontSize: 17 }}>
            Descubre cómo Vortic puede potenciar tu territorio.
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box
                component="form"
                action="https://formsubmit.co/vorticspa@gmail.com"
                method="POST"
                sx={{
                  background: "#0b1018",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 4,
                  p: 4,
                }}
              >
                <Stack spacing={3}>
                  <TextField name="nombre" fullWidth label="Nombre" />
                  <TextField name="email" fullWidth label="Email" />
                  <TextField name="telefono" fullWidth label="Teléfono" />
                  <TextField name="organizacion" fullWidth label="Organización" />
                  <TextField name="mensaje" fullWidth multiline rows={5} label="Mensaje" />
                  <input type="hidden" name="_subject" value="Nueva solicitud de demo VORTIC" />
                  <input type="hidden" name="_captcha" value="false" />

                  <Button
                    type="submit"
                    fullWidth
                    sx={{
                      background: "#12d7ba",
                      color: "#fff",
                      py: 1.8,
                      borderRadius: 3,
                      fontWeight: 800,
                      textTransform: "none",
                      "&:hover": { background: "#0fc4aa" },
                    }}
                  >
                    Enviar solicitud
                  </Button>
                </Stack>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Stack spacing={4}>
                <Box sx={{ background: "#0b1018", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 4, p: 4 }}>
                  <Typography sx={{ fontSize: 28, fontWeight: 900, mb: 4 }}>
                    ¿Por qué Vortic?
                  </Typography>
                  <Stack spacing={3}>
                    <Typography>◆ Datos en tiempo real</Typography>
                    <Typography>◆ Simulación avanzada</Typography>
                    <Typography>◆ Cobertura territorial</Typography>
                  </Stack>
                </Box>

                <Box sx={{ background: "#0b1018", border: "1px solid rgba(255,91,1,0.22)", borderRadius: 4, p: 4 }}>
                  <Typography sx={{ color: "#d8dce5", lineHeight: 1.8, fontSize: 18 }}>
                    "Las ciudades y territorios que mejor responden a las crisis son aquellos que disponen de inteligencia territorial en tiempo real."
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box id="faq" sx={{ py: 9, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <Box sx={{ width: "min(980px, calc(100% - 48px))", mx: "auto" }}>
          <Typography sx={{ color: "#00e0c0", fontWeight: 800, textAlign: "center", mb: 1 }}>
            FAQ
          </Typography>
          <Typography sx={{ fontSize: { xs: 32, md: 46 }, fontWeight: 900, textAlign: "center", mb: 5 }}>
            Preguntas frecuentes
          </Typography>

          <Stack spacing={1.5}>
            {faqItems.map(([q, a]) => (
              <Box
                key={q}
                sx={{
                  background: "#0b1018",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 3,
                  p: 3,
                }}
              >
                <Typography sx={{ fontWeight: 900, mb: 1 }}>{q}</Typography>
                <Typography sx={{ color: "#9aa4b2", lineHeight: 1.7 }}>{a}</Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>

      <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.08)", py: 6 }}>
        <Box sx={{ width: "min(1200px, calc(100% - 48px))", mx: "auto" }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography sx={{ fontSize: 26, fontWeight: 900, mb: 2 }}>Vortic</Typography>
              <Typography sx={{ color: "#9aa4b2", lineHeight: 1.8 }}>
                Inteligencia Territorial para decisiones críticas. Monitoreo, simulación y análisis GIS.
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography sx={{ fontWeight: 800, mb: 2 }}>Contacto</Typography>
              <Typography sx={{ color: "#9aa4b2", mb: 1 }}>vorticspa@gmail.com</Typography>
              <Typography sx={{ color: "#9aa4b2", mb: 1 }}>Santiago, Chile</Typography>
              <Typography sx={{ color: "#9aa4b2" }}>+56 9 7896 9866</Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography sx={{ fontWeight: 800, mb: 2 }}>Redes</Typography>
              <Link
                href="https://www.instagram.com/vortic.tech/"
                target="_blank"
                style={{ color: "#00e0c0", textDecoration: "none" }}
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
            <Typography sx={{ color: "#6f7a88" }}>© 2026 VORTIC SPA</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
