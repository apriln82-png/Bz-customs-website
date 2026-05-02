export default function BZCustomsHomepage() {
  return (
    <main style={{ background: "#050505", color: "white", fontFamily: "Arial, sans-serif" }}>

      {/* HERO */}
      <section style={{
        padding: "80px 20px",
        textAlign: "center",
        background: "radial-gradient(circle at top, #1a0033, #050505)"
      }}>
        <img
          src="/logo.jpg"
          alt="BZ Customs Logo"
          style={{ width: "240px", marginBottom: "30px" }}
        />

        <h1 style={{ fontSize: "56px", margin: 0 }}>BZ Customs</h1>

        <p style={{ fontSize: "20px", color: "#d4d4d8", marginTop: "12px" }}>
          Precision Welding • Custom Fabrication • Metal Repairs
        </p>

        <p style={{
          maxWidth: "800px",
          margin: "25px auto",
          color: "#a1a1aa",
          lineHeight: "1.6"
        }}>
          Serving Oklahoma City with expert welding repairs, machinery repair,
          trailer welding, custom gates, railings, wood + metal furniture,
          artistic metalwork, and dependable handyman services.
        </p>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="tel:4056288880" style={primaryBtn}>
            Call Now: 405-628-8880
          </a>
          <a href="https://instagram.com/bzwelds" target="_blank" rel="noopener noreferrer" style={secondaryBtn}>
            View Instagram
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "70px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "40px", textAlign: "center", marginBottom: "40px" }}>
          Our Services
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px"
        }}>
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
          ].map((item) => (
            <div key={item} style={card}>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: "60px 20px",
        background: "#0f0f12",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "36px", marginBottom: "15px" }}>
          Need Work Done Right?
        </h2>

        <p style={{ color: "#d4d4d8", marginBottom: "25px" }}>
          Call or text us today for fast, reliable service.
        </p>

        <a href="tel:4056288880" style={primaryBtn}>
          Call BZ Customs
        </a>
      </section>

    </main>
  );
}

const primaryBtn = {
  background: "linear-gradient(90deg, #9333ea, #7e22ce)",
  padding: "14px 26px",
  borderRadius: "12px",
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
  boxShadow: "0 0 20px rgba(147,51,234,0.4)"
};

const secondaryBtn = {
  border: "1px solid #a855f7",
  padding: "14px 26px",
  borderRadius: "12px",
  color: "white",
  textDecoration: "none"
};

const card = {
  background: "#18181b",
  padding: "24px",
  borderRadius: "16px",
  textAlign: "center",
  border: "1px solid #27272a",
  fontWeight: "600"
};
