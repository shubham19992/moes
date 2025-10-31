import React from "react";

const StatsAtAGlance = () => {
  const stats = [
    {
      title: "Total Fish Production",
      value: "175.45 Lakh Tonnes",
      subtitle: "Year 2022-23",
      bgColor: "#68b762",
    },
    {
      title: "Marine Production",
      value: "44.32 Lakh Tonnes",
      subtitle: "Year 2022-23",
      bgColor: "#6374fe",
    },
    {
      title: "Average Overall Production",
      value: "7.44% Per Year",
      subtitle: "2017-18 to 2022-23",
      bgColor: "#32a8a8",
    },
    {
      title: "Average Marine Production Growth",
      value: "3.73% Per Year",
      subtitle: "2017-18 to 2022-23",
      bgColor: "#ffa08a",
    },
    {
      title: "Overall Marine Exports",
      value: "14% (USD)",
      subtitle: "In 5 Years",
      bgColor: "#51362a",
    },
    {
      title: "Dominant Export Product",
      value: "65% of Export Value",
      subtitle: "Frozen Shrimp",
      bgColor: "#6d7198",
    },
  ];

  const containerStyle = {
    backgroundColor: "#f4f6fb",
    padding: "40px 20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#08149c",
    marginBottom: "30px",
  };

  const cardContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  };

  const cardStyle = (bgColor) => ({
    backgroundColor: bgColor,
    borderRadius: "12px",
    padding: "12px 17px",
    color: "#fff",
    width: "150px",
    minHeight: "100px",
    textAlign: "left",
    boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  });

  const cardTitle = {
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: "6px",
  };

  const cardValue = {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "4px",
  };

  const cardSubtitle = {
    fontSize: "12px",
    opacity: "0.9",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Stats at a Glance</h2>
      <div style={cardContainerStyle}>
        {stats.map((item, index) => (
          <div key={index} style={cardStyle(item.bgColor)}>
            <div style={cardTitle}>{item.title}</div>
            <div style={cardValue}>{item.value}</div>
            <div style={cardSubtitle}>{item.subtitle}</div>
          </div>
        ))}
      </div>
      <div className="updateColor">Last Updated: October 29, 2025</div>
    </div>
  );
};

export default StatsAtAGlance;
