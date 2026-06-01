"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        background: "#050816",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* NAVBAR */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "82px",
          background: "rgba(5,8,22,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            maxWidth: "1600px",
            margin: "0 auto",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 28px",
          }}
        >
          {/* LOGO */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              textDecoration: "none",
            }}
          >
            <img
              src="/vortic-logo.png"
              alt="VORTIC"
              style={{
                width: "54px",
                height: "54px",
                objectFit: "contain",
              }}
            />

            <div>
              <div
                style={{
                  fontSize: "28px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  color: "white",
                }}
              >
                VOR<span style={{ color: "#18e0c7" }}>TIC</span>
              </div>

              <div
                style={{
                  fontSize: "11px",
                  letterSpacing: "4px",
                  color: "#b8c2d8",
                  marginTop: "2px",
                }}
              >
                INTELIGENCIA TERRITORIAL
              </div>
            </div>
          </Link>

          {/* MENU */}
          <nav
            style={{
              display: "flex",
              gap: "42px",
              alignItems: "center",
            }}
          >
            <a
              href="#inicio"
              style={{
                color: "#18e0c7",
                textDecoration: "none",
                fontSize: "15px",
                letterSpacing: "2px",
              }}
            >
              INICIO
            </a>

            <a
              href="#nosotros"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "15px",
                letterSpacing: "2px",
              }}
            >
              NOSOTROS
            </a>

            <a
              href="#contacto"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "15px",
                letterSpacing: "2px",
              }}
            >
              CONTACTO
            </a>

            <a
              href="#faq"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "15px",
                letterSpacing: "2px",
              }}
            >
              FAQ
            </a>
          </nav>

          {/* LOGIN */}
          <Link
            href="/login"
            style={{
              border: "1px solid #18e0c7",
              borderRadius: "14px",
              padding: "14px 28px",
              color: "#18e0c7",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "16px",
            }}
          >
            Iniciar sesión
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        style={{
          paddingTop: "150px",
          paddingBottom: "120px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at center, rgba(24,224,199,0.08), transparent 60%)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 20px",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 24px",
              borderRadius: "999px",
              background: "rgba(24,224,199,0.08)",
              border: "1px solid rgba(24,224,199,0.18)",
              color: "#18e0c7",
              fontWeight: 700,
              letterSpacing: "2px",
              marginBottom: "30px",
            }}
          >
            ● PLATAFORMA ACTIVA
          </div>

          <div
            style={{
              fontSize: "22px",
              letterSpacing: "5px",
              color: "#a8b1c7",
              marginBottom: "22px",
            }}
          >
            INTELIGENCIA TERRITORIAL PARA DECISIONES CRÍTICAS
          </div>

          <h1
            style={{
              fontSize: "110px",
              lineHeight: 0.95,
              fontWeight: 800,
              margin: 0,
            }}
          >
            Planifica.
            <br />
            <span style={{ color: "#18e0c7" }}>Simula.</span>
            <br />
            Actúa.
          </h1>

          <p
            style={{
              maxWidth: "900px",
              margin: "40px auto",
              fontSize: "28px",
              lineHeight: 1.6,
              color: "#d0d7e6",
            }}
          >
            Plataforma geoespacial para simulación territorial,
            evaluación de riesgo, análisis GIS y planificación
            estratégica basada en datos.
          </p>

          <a
            href="#contacto"
            style={{
              display: "inline-block",
              marginTop: "10px",
              background: "#18e0c7",
              color: "#041018",
              padding: "22px 42px",
              borderRadius: "18px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "20px",
            }}
          >
            Solicitar DEMO
          </a>
        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        style={{
          padding: "100px 20px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <h2
            style={{
              fontSize: "72px",
              marginBottom: "14px",
            }}
          >
            Solicita una demo
          </h2>

          <p
            style={{
              fontSize: "22px",
              color: "#b7c1d5",
            }}
          >
            Descubre cómo VORTIC puede potenciar tu territorio.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "36px",
          }}
        >
          {/* FORMULARIO */}
          <div
            style={{
              background: "#0a1020",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "28px",
              padding: "42px",
            }}
          >
            <form
              action="https://formsubmit.co/vorticspa@gmail.com"
              method="POST"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <input
                type="hidden"
                name="_subject"
                value="Nueva solicitud desde VORTIC"
              />

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              <input
                type="hidden"
                name="_template"
                value="table"
              />

              <input
                type="hidden"
                name="_next"
                value="https://vortic.tech"
              />

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                }}
              >
                <input
                  type="text"
                  name="Nombre"
                  placeholder="Tu nombre"
                  required
                  style={inputStyle}
                />

                <input
                  type="email"
                  name="Email"
                  placeholder="tu@email.com"
                  required
                  style={inputStyle}
                />
              </div>

              <input
                type="text"
                name="Telefono"
                placeholder="+56 9 1234 5678"
                style={inputStyle}
              />

              <input
                type="text"
                name="Organizacion"
                placeholder="Nombre de tu organización"
                style={inputStyle}
              />

              <textarea
                name="Mensaje"
                placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                rows={6}
                required
                style={{
                  ...inputStyle,
                  resize: "none",
                }}
              />

              <button
                type="submit"
                style={{
                  background: "#18e0c7",
                  color: "#041018",
                  border: "none",
                  borderRadius: "16px",
                  padding: "20px",
                  fontSize: "18px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Enviar solicitud
              </button>
            </form>
          </div>

          {/* INFO */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "26px",
            }}
          >
            <div
              style={{
                background: "#0a1020",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "28px",
                padding: "40px",
              }}
            >
              <h3
                style={{
                  fontSize: "38px",
                  marginBottom: "30px",
                }}
              >
                ¿Por qué VORTIC?
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                  color: "#d8dfec",
                  fontSize: "20px",
                  lineHeight: 1.5,
                }}
              >
                <div>
                  <strong style={{ color: "#18e0c7" }}>
                    Datos en tiempo real
                  </strong>
                  <br />
                  Satélites, sensores y fuentes oficiales integradas.
                </div>

                <div>
                  <strong style={{ color: "#18e0c7" }}>
                    Simulación avanzada
                  </strong>
                  <br />
                  Modelación territorial y análisis de riesgo.
                </div>

                <div>
                  <strong style={{ color: "#18e0c7" }}>
                    Cobertura territorial
                  </strong>
                  <br />
                  Desde monitoreo comunal hasta análisis regional.
                </div>
              </div>
            </div>

            <div
              style={{
                background: "#0a1020",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "28px",
                padding: "40px",
                fontSize: "24px",
                lineHeight: 1.7,
                color: "#d8dfec",
              }}
            >
              “Las ciudades y territorios que mejor responden
              a las crisis son aquellas que disponen de
              inteligencia territorial en tiempo real.”
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const inputStyle = {
  background: "#071018",
  border: "1px solid rgba(255,255,255,0.12)",
  color: "white",
  borderRadius: "12px",
  padding: "16px",
  fontSize: "16px",
  outline: "none",
};
