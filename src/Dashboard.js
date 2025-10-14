// MinistryHeader.jsx
import React, { useState } from 'react';
import './BlueEconomy.css';
import Logo from "./Vector.png";
import Vector from "./Vector (1).png";
import Group from "./Group 4.png";
import Hero from "./hero 1.png";
import HeroTwo from "./hero 2.png";
import GroupImage from "./Group 1321315070.png";
import Fluent from "./fluent-mdl2_navigate-external-inline.png";
import Image10 from "./image 3010.png";
import Image12 from "./image 3012.png";
import Map from "./Fishing Zone 2.png";
import LogoSvg from "./logo.png";
import LicenceUser from "./lineicons_user-4.png";

const MinistryHeader = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "720",
            subtext: "Port with maximum export quantity",
            isUser: false
        },
        {
            id: 2,
            text: "720",
            subtext: "Vizag port recorded export of 2,64,214 LT in 2022-23",
            isUser: false
        },
        {
            id: 3,
            text: "720",
            subtext: "Purpose of MoES?",
            isUser: false
        }
    ]);

    const [inputMessage, setInputMessage] = useState('');
const handleClick = () => {
  // Redirect to the dashboard URL
  window.location.href = "https://app.powerbi.com/view?r=eyJrIjoiMDQ4YWIzZmItNTg4NC00YzE0LTkxYTUtOWQxZDRjN2ZjOWQ1IiwidCI6IjkzMjE3NDM4LWFhMjUtNDkyNS1hMTVlLTg5OTA4NjI1MzM5ZSJ9";
};

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (inputMessage.trim()) {
            const newMessage = {
                id: messages.length + 1,
                text: inputMessage,
                isUser: true
            };
            setMessages([...messages, newMessage]);
            setInputMessage('');

            // Simulate bot response after 1 second
            setTimeout(() => {
                const botResponse = {
                    id: messages.length + 2,
                    text: "Thank you for your message",
                    subtext: "Our team will get back to you soon",
                    isUser: false
                };
                setMessages(prev => [...prev, botResponse]);
            }, 1000);
        }
    };
    const handleSearch = (e) => {
        e.preventDefault();
        // Handle search functionality here
        console.log('Search query:', searchQuery);
    };

    return (
        <>
            <header className="ministry-header">
                <div className="header-main">
                    <div className="container">
                        <div className="header-main-content">
                            <div className="logo-section">
                                {/* <div className="emblem">
                <div className="emblem-circle">
                  <div className="emblem-inner">
                    <div className="ashoka-chakra">
                      <div className="chakra-wheel">
                        <div className="spoke"></div>
                        <div className="spoke"></div>
                        <div className="spoke"></div>
                        <div className="spoke"></div>
                        <div className="spoke"></div>
                        <div className="spoke"></div>
                        <div className="spoke"></div>
                        <div className="spoke"></div>
                        <div className="spoke"></div>
                        <div className="spoke"></div>
                        <div className="spoke"></div>
                        <div className="spoke"></div>
                      </div>
                    </div>
                    <div className="emblem-lions">
                      <div className="lion"></div>
                      <div className="lion"></div>
                      <div className="lion"></div>
                      <div className="lion"></div>
                    </div>
                  </div>
                </div>
              </div> */}
                                <img src={Logo} alt="Ministry Logo" className="ministry-logo" />
                                <div className="ministry-info">
                                    <span className="ministry-name">Ministry of Earth Sciences</span>
                                    <span className="ministry-subtitle">Government of India</span>
                                </div>
                            </div>

                            <div className="search-section">
                                <form className="search-form" onSubmit={handleSearch}>
                                    <div className="search-input-container">
                                        <button type="submit" className="search-button">
                                            <span className="search-icon">Q</span>
                                        </button>
                                        <input
                                            type="text"
                                            className="search-input"
                                            placeholder="Search"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                        />

                                    </div>
                                </form>
                            </div>
                            <div className="header-container">
                                <span className="login-text">Login</span>
                                <div className="divider"></div>
                                <div className="language-switch">
                                    <img src={Vector} alt="Language Icon" className="language-icon" />
                                </div>
                                <div className="divider"></div>
                                <div className="accessibility-icon"><img src={Group} className='language-icon' /></div>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className="header-nav">
                    <div className="container">
                        <ul className="nav-menu">
                            <li className="nav-item">
                                <a href="#" className="nav-link active">Home</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link">About Us ▾</a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Our Mission</a></li>
                                    <li><a href="#">Team</a></li>
                                    <li><a href="#">History</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link">Services ▾</a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Consulting</a></li>
                                    <li><a href="#">Training</a></li>
                                </ul>
                            </li>

                            <li className="nav-item"><a href="#" className="nav-link">Publications</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Media</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Contact Us</a></li>
                        </ul>
                    </div>
                </nav>

            </header>

            <div className="hero-section" style={{
                background: `url('${Hero}')`,
                height: '500px',
                width: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                zIndex: "20",
                position: "relative"
            }}>
                <div className="hero-container">
                    <div className="hero-content">
                        <div className="hero-title">
                            Exploring India's Blue Economy
                        </div>
                        <div className="hero-subtitle">
                            Sustainable development of ocean resources for economic growth,
                            improved livelihoods, and ocean ecosystem health
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-section" style={{
                background: `url('${HeroTwo}')`,
                height: '500px',
                width: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                marginTop: '-78px'

            }}>
                <div className="containerddd">
                    <div className="content">
                        <p className="quote">
                            “I want to invite the world to come to India and be a part of our growth trajectory. India is very sincere about growing in the maritime sector and
                            <span style={{ fontWeight: "bold" }}> emerging as a leading blue economy in the world.</span>”
                        </p>
                        <p className="author">Prime Minister Shri Narendra Modi</p>
                        <button className="view-event"><img src={Fluent} />View Event</button>
                    </div>
                    <div className="image">
                        <img src={GroupImage} alt="Prime Minister Modi" />
                    </div>
                </div>
            </div>
            <div className="chat-widget-button" onClick={toggleChat}>
                <img src={LogoSvg} alt="Chat Icon" className="chat-icon" />
            </div>

            {/* Chat Window */}
            {isChatOpen && (
                <div className="chat-widget-container">
                    <div className="chat-header">
                        <div className="header-content">
                            <h2>MoES Bot</h2>
                            <button className="close-button" onClick={toggleChat}>
                                ×
                            </button>
                        </div>
                    </div>

                    <div className="chat-messages">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`message ${message.isUser ? 'user-message' : 'bot-message'}`}
                            >
                                <div className="message-bubble">
                                    <div className="message-subtext">{message.text}</div>
                                    {message.subtext && (
                                        <div className="message-subtext">{message.subtext}</div>
                                    )}
                                    <img
                                        src={message.isUser ? LicenceUser : LogoSvg}
                                        alt="Avatar"
                                        className="avatar"
                                        style={{
                                            height: '30px',
                                            position: 'absolute',
                                            top: !message.isUser ? '56px' : '40px',
                                            left: !message.isUser ? '-15px' : 'auto',
                                            right: !message.isUser ? 'auto' : '-19px',
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <form className="chat-input-form" onSubmit={handleSendMessage}>
                        <div className="input-container">
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                placeholder="Type your message here..."
                                className="chat-input"
                            />
                            <button type="submit" className="send-button">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            )}
            <div className="appDDAshboard">
                <div>
                    <h2 className="heading">
                        Ministry of
                    </h2>
                    <span className="highlight">Earth Sciences</span>
                    <p className="description">
                        MoES is the nodal body driving scientific research & policy for India’s Blue Economy.
                        It leads ocean observation, data forecasting, and resource mapping through missions like the Deep Ocean Mission.
                        <br /><br />
                        MoES supports marine innovation, sustainable resource use, and disaster warning systems.
                        It also anchors international collaborations on ocean science and governance.
                    </p>
                </div>
                <div className="minister-container">
                    <div className="minister-card">
                        <img src={Image10} alt="Dr. Jitendra Singh" className="minister-img" />
                        <div>
                            <strong style={{ color: "#00383E" }}>Dr. Jitendra Singh</strong>
                            <p>Minister of State (Independent Charge)</p>
                        </div>
                    </div>

                    <div className="minister-card">
                        <img src={Image12} alt="Dr. M. Ravichandran" className="minister-img" />
                        <div>
                            <strong style={{ color: "#00383E" }}>Dr. M. Ravichandran</strong>
                            <p>Secretary</p>
                        </div>
                    </div>
                </div>

                <div className="blue-economy">
                    <h3 className="blue-economy-title">
                        🌊 India’s <span className="highlight">Blue Economy</span>
                    </h3>
                    <p style={{ color: "#00A6ED" }}>
                        India’s blue economy is a subset of the national economy comprising the entire ecosystem
                        of ocean resources and man-made economic infrastructure in marine, maritime, and on-shore
                        coastal zones within India’s legal jurisdiction, aiding the production of goods & services
                        with clear linkages to economic growth, environmental sustainability, and national security.
                    </p>
                    <button className="view-event"  onClick={handleClick}><img src={Fluent} />View Dashboard</button>
                </div>

                <div className="map-section">

                    <img src={Map} alt="Fishing Zone Map" className="map-img" />
                </div>
            </div>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-left">
                        <span className="copyright">© MoES, Government of India</span>
                    </div>
                    <div className="footer-right">
                        <a href="/terms" className="footer-link">Terms & Conditions</a>
                        <span className="separatorss"> | </span>
                        <a href="/privacy" className="footer-link">Privacy Policy</a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default MinistryHeader;