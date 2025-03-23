import React, { useState, useEffect } from "react";
import { translations } from "./i18n";
import "./App.css";

const truncateLink = (link: string, maxLength = 50) => {
  return link.length > maxLength ? link.substring(0, maxLength) + "..." : link;
};

const App: React.FC = () => {
  const [keywords, setKeywords] = useState<string>("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [aggressiveMode, setAggressiveMode] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>("en");

  useEffect(() => {
    const handleRightClick = (event: MouseEvent) => {
      event.preventDefault();
      alert("Right-click is disabled to protect content.");
    };

    document.addEventListener("contextmenu", handleRightClick);
    return () => {
      document.removeEventListener("contextmenu", handleRightClick);
    };
  }, []);

  const handleSubmit = async () => {
    const keywordsArray = keywords.split(",").map((kw) => kw.trim());
    if (keywordsArray.length === 0) return;

    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:5000/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          keywords: keywordsArray,
          lang: language === "es" ? "es" : "en",
          aggressive_mode: aggressiveMode,
        }),
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error during fetch:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    setResult(null);
    setKeywords("");
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleAggressiveMode = () => {
    setAggressiveMode(!aggressiveMode);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  const t = translations[language];

  return (
    <div className={`App ${aggressiveMode ? "aggressive-mode" : ""}`}>
      <h1>{t.title}</h1>
      <h3 className="rainbow-text">
        {aggressiveMode ? t.aggressiveModeText : t.normalModeText}
      </h3>
      <input
        type="text"
        placeholder={t.placeholder}
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
      />
      <div className="toggle-container">
        <span>{aggressiveMode ? "Angry Parse (More links): ON" : "Angry Parse (More links): OFF"}</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={aggressiveMode}
            onChange={toggleAggressiveMode}
          />
          <span className="slider"></span>
        </label>
      </div>
      <hr />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? t.parseButton + "..." : t.parseButton}
      </button>

      {result && (
        <div className="result">
          <h3>{t.results}</h3>
          {result.map((item: any, index: number) => (
            <div key={index}>
              <h4>Keyword: {item.keyword}</h4>
              {item.links && item.links.length > 0 ? (
                <ul>
                  {item.links.map((link: string, idx: number) => (
                    <li key={idx}>
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={link}
                      >
                        {truncateLink(link)}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>{t.noLinks}</p>
              )}
            </div>
          ))}
          <button onClick={handleBack} className="back-button">
            {t.backButton}
          </button>
        </div>
      )}
      <hr />
      <button onClick={toggleModal} className="modal-toggle-button">
        {isModalOpen ? t.modalTitle : t.modalTitle}
      </button>

      <div className="footer">
        <div className="footer-left">v 1.2</div>
        <div className="footer-center">All rights reserved. Developer: Martin Daniels.</div>
      </div>

      <div className={`modal-overlay ${isModalOpen ? "open" : ""}`}>
        <div className="modal-content">
          <div className="modal-close-bar" onClick={closeModal}></div>
          <h3>{t.modalTitle}</h3>
          <p>{t.modalContent}</p>
          <h3>{t.supportTitle}</h3>
          <p>{t.supportContent}</p>
          <p>
            [Trust Wallet - TRC20 | Tron] - TCorTf3kgUsp8bmvVs1coVqsCfnmNgJEJK
            <hr />
            [BTC - COIN | Bitcoin] - bc1qaj7nhjsanmynp3zsk8amdfdfgwms3n9hzv0ezh
          </p>

          <h3>{t.connectTitle}</h3>
          <div className="social-icons">
            <a href="https://linkedin.com/in/martin-daniels-a6b2b7269" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://github.com/Martin13025" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="https://t.me/LuciusNumerius" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-telegram"></i> Telegram
            </a>
          </div>
        </div>
      </div>
      <hr />
      <button onClick={toggleLanguage}>
        {language === "en" ? "Es" : "Eng"}
      </button>
    </div>
  );
};

export default App;