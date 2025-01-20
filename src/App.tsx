import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [keywords, setKeywords] = useState<string>("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  
  const handleSubmit = async () => {
    const keywordsArray = keywords.split(",").map((kw) => kw.trim());

    if (keywordsArray.length === 0) return;

    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:5000/parse",
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

  return (
    <div className="App">
      <h1>SEO Parser</h1>
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
              <h4>Key word: {item.keyword}</h4>
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
                <p>Links not founded</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;








