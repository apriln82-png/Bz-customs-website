export default function BZCustomsHomepage() {
  return (
    <main style={{ minHeight: "100vh", background: "#050505", color: "white", fontFamily: "Arial, sans-serif" }}>
      <section style={{ padding: "70px 20px", textAlign: "center", borderBottom: "1px solid #27272a" }}>
        <img
          src="/logo.jpg"
          alt="BZ Customs Logo"
          style={{ width: "260px", maxWidth: "90%", height: "auto", display: "block", margin: "0 auto 28px" }}
        />

        <h1 style={{ fontSize: "52px", margin: "0 0 12px", fontWeight: "900" }}>BZ Customs</h1>

        <p style={{ fontSize: "22px", color: "#d4d4d8", marginBottom: "24px" }}>
          Precision Welding • Custom Fabrication • Metal Repairs
        </p>

        <p style={{ maxWidth: "850px", margin: "0 auto 34px", fontSize: "18px", lineHeight: "1.7", color: "#a1a1aa" }}>
          Serving Oklahoma City with expert welding repairs, machinery repair, trailer welding, custom gates, railings,
          wood + metal furniture, artistic metalwork, and dependable handyman services.
        </p>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="tel:4056288880" style={buttonPrimary}>
            Call Now: 405-628-8880
          </a>
          <a href="https://instagram.com/bzwelds" target="_blank" rel="noopener noreferrer" style={buttonSecondary}>
            View Instagram
          </a>
        </div>
      </section>

      <section style={{ padding: "60px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "38px", textAlign: "center", marginBottom: "36px" }}>Our Services</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "18px" }}>
          {[
            "Machinery Repairs",
            "Trailer Repairs",
            "Car Welding Repairs",
            "Gates + Railings",
            "Wood + Metal Furniture",
            "Custom Art Pieces",
            "Mobile Welding",
            "Handyman Services",
            "Custom Fabrication",
          ].map((service) => (
            <div key={service} style={card}>
              <h3 style={{ margin: 0, fontSize: "20px" }}>{service}</h3>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "60px 20px", background: "#111113", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "18px" }}>Get a Free Quote</h2>
        <p style={{ color: "#d4d4d8", fontSize: "18px", marginBottom: "26px" }}>
          Strong welds. Clean work. Built right the first time.
        </p>
        <a href="tel:4056288880" style={buttonPrimary}>
          Call or Text BZ Customs
        </a>
      </section>
    </main>
  );
}

const buttonPrimary = {
  display: "inline-block",
  background: "#9333ea",
  color: "white",
  padding: "14px 24px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "800",
  boxShadow: "0 10px 30px rgba(147, 51, 234, 0.35)",
};

const buttonSecondary = {
  display: "inline-block",
  border: "1px solid #a855f7",
  color: "white",
  padding: "14px 24px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "700",
};

const card = {
  background: "#18181b",
  border: "1px solid #27272a",
  borderRadius: "18px",
  padding: "24px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
};
