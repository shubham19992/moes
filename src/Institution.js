import React from "react";
import NIOT from "./assets/image3014.png";
import CMLRE from "./assets/Vector.png";
import IMD from "./assets/image3015.png";
import INCOIS from "./assets/image3020.png";
import NCMRWF from "./assets/image3019.png";
import NCS from "./assets/image3018.png";
import IITM from "./assets/image3016.png";
import NCESS from "./assets/image3017.png";

const institutes = [
  { name: "National Institute of Ocean Technology", logo: NIOT },
  { name: "Centre for Marine Living Resource & Ecology", logo: CMLRE },
  { name: "Indian Meteorological Department", logo: IMD },
  { name: "Indian National Centre for Ocean Information Services", logo: INCOIS },
  { name: "National Centre for Medium Range Weather Forecasting", logo: NCMRWF },
  { name: "National Centre for Seismology", logo: NCS },
  { name: "Indian Institute of Tropical Meterology", logo: IITM },
  { name: "National Centre for Earth Science Studies", logo: NCESS },
];

const InstitutesGrid = () => {
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    padding: "30px",
    backgroundColor: "#f5f8ff",
  };

  const cardStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    padding: "16px 20px",
    minHeight: "100px",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    cursor: "pointer",
  };

  const logoStyle = {
    width: "50px",
    height: "50px",
    marginRight: "16px",
    objectFit: "contain",
  };

  const nameStyle = {
    fontSize: "16px",
    fontWeight: 500,
    color: "#004a64",
    lineHeight: "1.4",
  };
  const titleStyles = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#08149c",
    marginBottom: "30px",
    textAlign: "center",
  };
  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "scale(1.03)";
    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
  };

  return (
    <>
      <h2 style={titleStyles}>Our Partners</h2>
    <div style={containerStyle}>
      {institutes.map((inst, index) => (
        <div
          key={index}
          style={cardStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={inst.logo} alt={inst.name} style={logoStyle} />
          <span style={nameStyle}>{inst.name}</span>
        </div>
      ))}
    </div>
    </>
  );
};

export default InstitutesGrid;
