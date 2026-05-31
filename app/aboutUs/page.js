"use client";

import { Box, Grid, Stack, Typography } from "@mui/material";

const cards = [
  {
    tag: "ARQUITECTURA ESPACIAL",
    title: "Habitabilidad para entornos extremos",
    text: "La exploración de soluciones para contextos hostiles abrió una pregunta mayor: cómo anticipar, simular y diseñar mejor en la Tierra.",
  },
  {
    tag: "TERRITORIO REAL",
    title: "Decisiones críticas en terreno",
    text: "La inteligencia territorial necesita operar donde las decisiones importan: emergencias, infraestructura, riesgo y planificación pública.",
  },
  {
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
    text: "Explorando los límites del espacio y la sostenibilidad: la visión de Lía Seguel Alvarado",
    tag: "Reportaje",
  },
  {
    title: "DW",
    text: "Emprendedoras latinas que inspiran y construyen futuro desde la innovación",
    tag: "Medio internacional",
  },
  {
    title: "IncubaUdeC",
    text: "VORTIC, startup chilena liderada por mujeres que acerca la inteligencia geoespacial a las personas",
    tag: "Innovación",
  },
  {
    title: "La Quinta Emprende",
    text: "Planificación urbana y gestión de recursos con geolocalización estratégica",
    tag: "Emprendimiento",
  },
  {
    title: "Descubre VC",
    text: "VORTIC revoluciona la inteligencia geoespacial",
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
    <Box sx={{ background: "#05080e", color: "#ffffff", minHeight: "100vh" }}>
      <Box sx={{ width: "min(1120px, calc(100% - 48px))", mx: "auto", py: 8 }}>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: 36, md: 56 },
            fontWeight: 900,
            lineHeight: 1.15,
            maxWidth: 760,
            mx: "auto",
            mb: 7,
          }}
        >
          Una trayectoria que conecta espacio, territorio e impacto social.
        </Typography>

        <Typography sx={{ color: "#00e0c0", fontWeight: 800, letterSpacing: "0.18em", mb: 3 }}>
          DE LA VISIÓN A LA APLICACIÓN
        </Typography>

        <Grid container spacing={3}>
          {cards.map((card) => (
            <Grid item xs={12} md={4} key={card.title}>
              <Box sx={{ background: "#11161f", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 3, p: 3, minHeight: 230 }}>
                <Typography sx={{ color: "#00e0c0", fontWeight: 800, fontSize: 12, mb: 2 }}>
                  {card.tag}
                </Typography>
                <Typography sx={{ fontSize: 22, fontWeight: 900, mb: 2 }}>{card.title}</Typography>
                <Typography sx={{ color: "#9aa4b2", lineHeight: 1.7 }}>{card.text}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={3} sx={{ mt: 3 }}>
          {principles.map((item, index) => (
            <Grid item xs={12} md={4} key={item}>
              <Box sx={{ background: "#11161f", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 3, p: 3 }}>
                <Typography sx={{ color: "#00e0c0", fontWeight: 900, mb: 2 }}>
                  0{index + 1}
                </Typography>
                <Typography sx={{ color: "#d7dce5", fontSize: 18 }}>{item}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={4} sx={{ mt: 8, alignItems: "stretch" }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ background: "linear-gradient(135deg,#151a22,#10251f)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 3, p: 5, height: "100%" }}>
              <Typography sx={{ color: "#00e0c0", fontWeight: 800, letterSpacing: "0.16em", mb: 3 }}>
                VALIDACIÓN Y TERRITORIO
              </Typography>
              <Typography sx={{ fontSize: { xs: 30, md: 42 }, fontWeight: 900, lineHeight: 1.15, mb: 4 }}>
                VORTIC se construye desde evidencia, colaboración y presencia en espacios donde la tecnología debe demostrar valor.
              </Typography>
              <Typography sx={{ color: "#9aa4b2", fontSize: 18, lineHeight: 1.7 }}>
                La misión no es solo desarrollar software: es transformar la manera en que instituciones, equipos técnicos y comunidades entienden el territorio, anticipan escenarios y toman decisiones.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {["Ecosistema de innovación", "Tecnología y defensa", "Observación territorial"].map((title) => (
                <Grid item xs={12} key={title}>
                  <Box sx={{ background: "#11161f", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 3, p: 3 }}>
                    <Typography sx={{ fontSize: 20, fontWeight: 900 }}>{title}</Typography>
                    <Typography sx={{ color: "#9aa4b2", mt: 1 }}>
                      Datos, colaboración estratégica y aplicación territorial para decisiones de alto impacto.
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: 30, md: 44 },
            fontWeight: 900,
            lineHeight: 1.2,
            maxWidth: 760,
            mx: "auto",
            mt: 10,
            mb: 6,
          }}
        >
          Medios, eventos y ecosistemas que respaldan esta visión.
        </Typography>

        <Typography sx={{ color: "#00e0c0", fontWeight: 800, letterSpacing: "0.18em", mb: 3 }}>
          RECONOCIMIENTO
        </Typography>

        <Grid container spacing={3}>
          {media.map((item) => (
            <Grid item xs={12} sm={6} md={2.4} key={item.title}>
              <Box sx={{ background: "#11161f", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 3, p: 3, minHeight: 210 }}>
                <Typography sx={{ fontSize: 20, fontWeight: 900, mb: 2 }}>{item.title}</Typography>
                <Typography sx={{ color: "#9aa4b2", lineHeight: 1.5, mb: 3 }}>{item.text}</Typography>
                <Typography sx={{ color: "#00e0c0", fontWeight: 800 }}>{item.tag}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={3} sx={{ mt: 6 }}>
          {impact.map((item) => (
            <Grid item xs={12} md={4} key={item.title}>
              <Box sx={{ background: "#11161f", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 3, p: 4, minHeight: 190 }}>
                <Typography sx={{ color: "#00e0c0", fontWeight: 800, mb: 2 }}>{item.tag}</Typography>
                <Typography sx={{ fontSize: 24, fontWeight: 900, mb: 2 }}>{item.title}</Typography>
                <Typography sx={{ color: "#9aa4b2", lineHeight: 1.6 }}>{item.text}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
