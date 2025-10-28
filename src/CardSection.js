import React from "react";
import MarineImg from "./assets/card.png";
import ShippingImg from "./assets/card2.png";
import WindImg from "./assets/card3.png";

const cards = [
  {
    title: "Marine Living Resources",
    description:
      "Refers to all ocean-based biological resources like fish, crustaceans, seaweed, and marine plants, that support food security, livelihoods...",
    image: MarineImg,
  },
  {
    title: "Shipping & Transport",
    description:
      "Backbone of India’s blue economy, driving ocean-based trade, port-led development, and coastal connectivity...",
    image: ShippingImg,
  },
  {
    title: "Offshore Renewables",
    description:
      "Offshore wind energy is expected to fast-track India’s low-carbon transition thanks to its higher capacity utilisation than on-shore wind and solar...",
    image: WindImg,
  },
];

const OceanCards = () => {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "24px",
    padding: "30px",
    backgroundColor: "#f5f8ff",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    width: "280px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  };

  const imageStyle = {
    width: "100%",
    height: "160px",
    objectFit: "cover",
  };

  const contentStyle = {
    padding: "16px",
    flexGrow: 1,
  };

  const titleStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#1b1b1b",
    marginBottom: "8px",
  };

  const descStyle = {
    fontSize: "14px",
    color: "#555",
    lineHeight: "1.5",
    marginBottom: "20px",
  };

  const buttonStyle = {
    backgroundColor: "#5c5cff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    padding: "10px 0",
    fontWeight: "600",
    fontSize: "15px",
    cursor: "pointer",
    width: "90%",
    alignSelf: "center",
    marginBottom: "16px",
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "translateY(-5px)";
    e.currentTarget.style.boxShadow = "0 8px 18px rgba(0, 0, 0, 0.2)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
  };

  return (
    <div style={containerStyle}>
      {cards.map((card, index) => (
        <div
          key={index}
          style={cardStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={card.image} alt={card.title} style={imageStyle} />
          <div style={contentStyle}>
            <h3 style={titleStyle}>{card.title}</h3>
            <p style={descStyle}>{card.description}</p>
          </div>
          <button style={buttonStyle}>Learn More</button>
        </div>
      ))}
    </div>
  );
};

export default OceanCards;
