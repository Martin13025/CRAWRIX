import React, { useState, useEffect } from "react";
import "./App.css";

const App: React.FC = () => {
  const [keywords, setKeywords] = useState<string>("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);


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
        body: JSON.stringify({ keywords: keywordsArray, lang: "ru" }),
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

  return (
    <div className="App">
      <h1>
        <span>C</span>rawl<span>L</span>ab
      </h1>
      <h3 className="rainbow-text">Look for everything you need</h3>
      <input
        type="text"
        placeholder="Enter keywords (separated by commas)"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
      />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Parsing..." : "Parse"}
      </button>

      {result && (
        <div className="result">
          <h3>Results:</h3>
          {result.map((item: any, index: number) => (
            <div key={index}>
              <h4>Keyword: {item.keyword}</h4>
              {item.links && item.links.length > 0 ? (
                <ul>
                  {item.links.map((link: string, idx: number) => (
                    <li key={idx}>
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No links found</p>
              )}
            </div>
          ))}
          <button onClick={handleBack} className="back-button">
            Back to Search
          </button>
        </div>
      )}


      <button onClick={toggleModal} className="modal-toggle-button">
        {isModalOpen ? "Close Description" : "About this service"}
      </button>


      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>About this service</h3>
            <p>
              CrawlLab is a tool designed to simplify your SEO
              analysis and improve your online visibility. It helps you discover
              relevant links based on keywords you provide, making it an
              essential tool for SEO specialists, content creators, and digital
              marketers. With CrawlLab, you can quickly gather links and analyze
              search results to optimize your content and drive more traffic to
              your website.
            </p>
            <p>
              This tool is useful for SEO purposes, helping users track and
              improve their ranking in search engines. It's also a great resource
              for market analysis, discovering relevant content, and identifying
              opportunities for growth in online visibility.
            </p>
            <h3>Support the developer</h3>
            <p>
              If you find CrawlLab useful and want to support the development
              of this tool, you can make a donation. Your support helps improve
              and expand this project, allowing us to add more features and keep
              it running smoothly.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;













