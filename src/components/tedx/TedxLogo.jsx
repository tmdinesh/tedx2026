export default function TEDxPSGTechLogo() {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "baseline",
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        background: "#fff",
        padding: "24px 32px",
      }}
    >
      {/* TED */}
      <span
        style={{
          fontSize: "96px",
          fontWeight: 900,
          color: "#E62B1E",
          letterSpacing: "-3px",
          lineHeight: 1,
        }}
      >
        TED
      </span>

      {/* x — raised superscript */}
      <span
        style={{
          fontSize: "52px",
          fontWeight: 900,
          color: "#E62B1E",
          position: "relative",
          top: "-26px",
          marginLeft: "2px",
          marginRight: "10px",
          lineHeight: 1,
        }}
      >
        x
      </span>

      {/* PSGTech — light weight, black, rounded */}
      <span
        style={{
          fontSize: "96px",
          fontWeight: 300,
          color: "#ffffff",
          letterSpacing: "-1px",
          lineHeight: 1,
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        }}
      >
        PSGTech
      </span>
    </div>
  );
}
