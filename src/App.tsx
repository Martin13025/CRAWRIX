import React, { useState } from "react";
import { translations } from "./i18n";
import "./App.css";
import AggressiveModeToggle from "./components/AggressiveModeToggle";
import RightClickHandler from "./components/RightClickHandler";
import ResultList from "./components/ResultList";
import LanguageToggle from "./components/LanguageToggle";
import SEOManager from "./components/SEOManager";
import KeywordInput from "./components/KeywordInput";
import SubmitButton from "./components/SubmitButton";
import Modal from "./components/Modal";

type Language = keyof typeof translations;

const truncateLink = (link: string, maxLength = 50) => {
  return link.length > maxLength ? link.substring(0, maxLength) + "..." : link;
};

const API_URL = "https://crawllab.onrender.com/parse";

const App: React.FC = () => {
  const [keywords, setKeywords] = useState<string>("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [aggressiveMode, setAggressiveMode] = useState<boolean>(false);
  const [language, setLanguage] = useState<Language>("en");

  const handleSubmit = async () => {
    const keywordsArray = keywords.split(",").map((kw) => kw.trim());
    if (keywordsArray.length === 0) return;

    setLoading(true);
    try {
      const response = await fetch(API_URL, {
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
      <div className="attention-window">
        {t.attentionwindow}
      </div>
      <h1>{t.title}</h1>
      <h2 className="rainbow-text">
        {aggressiveMode ? t.aggressiveModeText : t.normalModeText}
      </h2>

      <label htmlFor="keywordsInput" className="visually-hidden">
        {t.placetext}
      </label>

      <KeywordInput
        keywords={keywords}
        setKeywords={setKeywords}
        placeholder={t.placeholder}
      />

      <AggressiveModeToggle
        aggressiveMode={aggressiveMode}
        toggleAggressiveMode={toggleAggressiveMode}
      />

      <RightClickHandler />

      <hr />

      <SubmitButton
        handleSubmit={handleSubmit}
        loading={loading}
        text={t.parseButton}
      />

      {result && (
        <ResultList
          result={result}
          truncateLink={truncateLink}
          handleBack={handleBack}
          backButtonText={t.backButton}
          noLinksText={t.noLinks}
        />
      )}

      <hr />
      
      <button onClick={toggleModal} className="modal-toggle-button">
        {isModalOpen ? t.modalTitle : t.modalTitle}
      </button>
      {/* ---------------------- */}
      <section className="seo-description">
        <h3>{t.modalTitle}</h3>
        <p>{t.modalContent}</p>

        <h4>{t.supportTitle}</h4>
        <p>{t.supportContent}</p>
      </section>
      
      {/* ---------------------- */}
      <div className="footer">
        <div className="footer-left">v 1.4.2</div>
        <div className="footer-center">
          All rights reserved. Developer: Martin Daniels.
        </div>
      </div>

      <div className={`modal-overlay ${isModalOpen ? "open" : ""}`}>
        <Modal
          isOpen={isModalOpen}
          closeModal={closeModal}
          title={t.modalTitle}
          content={
            <>
              <p>{t.modalContent}</p>
              <h3>{t.supportTitle}</h3>
              <p>{t.supportContent}</p>

              <div className="crypto-box">
                <p>
                  [USDT - TRC20 | Tron] - TCorTf3kgUsp8bmvVs1coVqsCfnmNgJEJK
                </p>
                <hr />
                <p>
                  [BTC - COIN | Bitcoin] - bc1qaj7nhjsanmynp3zsk8amdfdfgwms3n9hzv0ezh
                </p>
              </div>

              <h3>{t.connectTitle}</h3>
              <div className="social-icons">
                <a
                  href="https://linkedin.com/in/martin-daniels-a6b2b7269"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
                <a
                  href="https://github.com/Martin13025"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> GitHub
                </a>
                <a
                  href="https://t.me/M2rR4b4t"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-telegram"></i> Telegram
                </a>
              </div>
            </>
          }
        />
      </div>

      <hr />
      {!result && (
        <LanguageToggle language={language} toggleLanguage={toggleLanguage} />
      )}
    </div>
  );
};

export default App;

