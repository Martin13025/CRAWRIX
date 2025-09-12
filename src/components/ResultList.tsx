import React from "react";

interface ResultListProps {
  result: any[];
  truncateLink: (link: string) => string;
  handleBack: () => void;
  backButtonText: string;
  noLinksText: string;
}

const ResultList: React.FC<ResultListProps> = ({
  result,
  truncateLink,
  handleBack,
  backButtonText,
  noLinksText,
}) => {
  return (
    <div className="result">
      <h3>Results</h3>
      {result.map((item, index) => (
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
            <p>{noLinksText}</p>
          )}
        </div>
      ))}
      <button onClick={handleBack} className="back-button">
        {backButtonText}
      </button>
    </div>
  );
};

export default ResultList;