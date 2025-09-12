import { useEffect } from "react";

interface SEOManagerProps {
  language: "en" | "es";
}

const SEOManager: React.FC<SEOManagerProps> = ({ language }) => {
  useEffect(() => {
    if (language === "en") {
      document.title = "Crawrix — SEO Tool for Keyword Parsing & Analysis";
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute(
          "content",
          "Crawrix is a tool for SEO analysis and keyword parsing to improve your website's visibility."
        );
    } else if (language === "es") {
      document.title = "Crawrix — Herramienta para SEO y Análisis de Palabras Clave";
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute(
          "content",
          "Crawrix es una herramienta para análisis SEO y parsing de palabras clave que mejora la visibilidad de tu sitio web."
        );
    }
  }, [language]);
  
  return null;
};

export default SEOManager;