// import React from "react";
// import MarineImg from "./assets/card.png";
// import ShippingImg from "./assets/card2.png";
// import WindImg from "./assets/card3.png";
// import fnone from "./assets/foneN.png";
// import ftwo from "./assets/ftwo.png";

// const cards = [
//   {
//     title: "Marine Living Resources",
//     description:
//       "Refers to all ocean-based biological resources like fish, crustaceans, seaweed, and marine plants, that support food security, livelihoods...",
//     image: MarineImg,
//   },
//   {
//     title: "Shipping & Transport",
//     description:
//       "Backbone of India’s blue economy, driving ocean-based trade, port-led development, and coastal connectivity...",
//     image: ShippingImg,
//   },
//   {
//     title: "Offshore Renewables",
//     description:
//       "Offshore wind energy is expected to fast-track India’s low-carbon transition thanks to its higher capacity utilisation than on-shore wind and solar...",
//     image: WindImg,
//   },
//     {
//       image:
//         fnone,
//       title: "Marine Non-Living Resources",
//       description:
//         "India’s Exclusive Economic Zone of over 2 million km² holds vast non-living resources such as hydrocarbons...",
//     },
//     {
//       image:
//         ftwo,
//       title: "Coastal Tourism & Heritage Conservation",
//       description:
//         "Initiatives like lighthouse tourism and heritage waterfronts are boosting local economies while...",
//     },
// ];

// const OceanCards = () => {
//   const containerStyle = {
//     display: "flex",
//     flexWrap: "wrap",
//     // justifyContent: "space-between",
//     gap: "24px",
//     padding: "30px",
//     backgroundColor: "#f5f8ff",
//   };

//   const cardStyle = {
//     backgroundColor: "#fff",
//     borderRadius: "12px",
//     boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//     width: "250px",
//     overflow: "hidden",
//     display: "flex",
//     flexDirection: "column",
//     transition: "transform 0.3s ease, box-shadow 0.3s ease",
//     cursor: "pointer",
//   };

//   const imageStyle = {
//     width: "100%",
//     height: "160px",
//     objectFit: "cover",
//   };

//   const contentStyle = {
//     padding: "16px",
//     flexGrow: 1,
//   };

//   const titleStyle = {
//     fontSize: "16px",
//     fontWeight: "bold",
//     color: "#1b1b1b",
//     marginBottom: "8px",
//   };

//   const descStyle = {
//     fontSize: "14px",
//     color: "#555",
//     lineHeight: "1.5",
//     marginBottom: "20px",
//   };

//   const buttonStyle = {
//     backgroundColor: "#5c5cff",
//     color: "#fff",
//     border: "none",
//     borderRadius: "6px",
//     padding: "10px 0",
//     fontWeight: "600",
//     fontSize: "15px",
//     cursor: "pointer",
//     width: "90%",
//     alignSelf: "center",
//     marginBottom: "16px",
//   };
// const titleStyles = {
//     fontSize: "24px",
//     fontWeight: "bold",
//     color: "#08149c",
//     marginBottom: "30px",
//     textAlign: "center",
//   };
//   const handleMouseEnter = (e) => {
//     e.currentTarget.style.transform = "translateY(-5px)";
//     e.currentTarget.style.boxShadow = "0 8px 18px rgba(0, 0, 0, 0.2)";
//   };

//   const handleMouseLeave = (e) => {
//     e.currentTarget.style.transform = "translateY(0)";
//     e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
//   };

//   return (
//     <>
//      <h2 style={titleStyles}>Blue Economy Sectors</h2>
//     <div style={containerStyle}>
        
//       {cards.map((card, index) => (
//         <div
//           key={index}
//           style={cardStyle}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <img src={card.image} alt={card.title} style={imageStyle} />
//           <div style={contentStyle}>
//             <h3 style={titleStyle}>{card.title}</h3>
//             <p style={descStyle}>{card.description}</p>
//           </div>
//           <button style={buttonStyle}>Learn More</button>
//         </div>
//       ))}
//     </div>
//     </>
//   );
// };

// export default OceanCards;

import React from "react";
import Slider from "react-slick";
import MarineImg from "./assets/card.png";
import ShippingImg from "./assets/card2.png";
import WindImg from "./assets/card3.png";
import fnone from "./assets/foneN.png";
import ftwo from "./assets/ftwo.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <div
    style={{
      position: "absolute",
      right: "-35px",
      top: "40%",
      transform: "translateY(-50%)",
      backgroundColor: "#08149c",
      color: "#fff",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      zIndex: 2,
    }}
    onClick={onClick}
  >
    ❯
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    style={{
      position: "absolute",
      left: "-35px",
      top: "40%",
      transform: "translateY(-50%)",
      backgroundColor: "#08149c",
      color: "#fff",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      zIndex: 2,
    }}
    onClick={onClick}
  >
    ❮
  </div>
);

const cards = [
  {
    link:"https://app.powerbi.com/view?r=eyJrIjoiMDQ4YWIzZmItNTg4NC00YzE0LTkxYTUtOWQxZDRjN2ZjOWQ1IiwidCI6IjkzMjE3NDM4LWFhMjUtNDkyNS1hMTVlLTg5OTA4NjI1MzM5ZSJ9",
    title: "Marine Living Resources",
    description:
      "Refers to all ocean-based biological resources like fish, crustaceans, seaweed, and marine plants, that support food security, livelihoods...",
    image: MarineImg,
  },
  {
    link:"",
    title: "Shipping & Transport",
    description:
      "Backbone of India’s blue economy, driving ocean-based trade, port-led development, and coastal connectivity...",
    image:  WindImg,
  },
  {
     link:"",
    title: "Offshore Renewables",
    description:
      "Offshore wind energy is expected to fast-track India’s low-carbon transition thanks to its higher capacity utilisation than on-shore wind and solar...",
    image: ShippingImg,
  },
  {
     link:"",
    image: fnone,
    title: "Marine Non-Living Resources",
    description:
      "India’s Exclusive Economic Zone of over 2 million km² holds vast non-living resources such as hydrocarbons...",
  },
  {
     link:"",
    image: ftwo,
    title: "Coastal Tourism & Heritage Conservation",
    description:
      "Initiatives like lighthouse tourism and heritage waterfronts are boosting local economies while...",
  },
];

const OceanCards = () => {
  const titleStyles = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#08149c",
    marginBottom: "30px",
    textAlign: "center",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    width: "260px",
    margin: "0 auto",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
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
    backgroundColor: "#4A6178",
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div style={{ backgroundColor: "#f5f8ff", padding: "40px 0", position: "relative" }}>
      <h2 style={titleStyles}>Blue Economy Sectors</h2>
      <div style={{ width: "90%", margin: "0 auto", position: "relative" }}>
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index}>
              <div
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 18px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 10px rgba(0,0,0,0.1)";
                }}
              >
                <img src={card.image} alt={card.title} style={imageStyle} />
                <div style={contentStyle}>
                  <h3 style={titleStyle}>{card.title}</h3>
                  <p style={descStyle}>{card.description}</p>
                </div>
                <button style={buttonStyle}><a style={{textDecoration:"none",color:"white"}} href={card.link} >View</a></button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OceanCards;
