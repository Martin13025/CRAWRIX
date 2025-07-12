type Translation = {
  title: string;
  subheading: string;
  placeholder: string;
  placetext: string;
  parseButton: string;
  results: string;
  noLinks: string;
  backButton: string;
  modalTitle: string;
  modalContent: string;
  supportTitle: string;
  supportContent: string;
  connectTitle: string;
  aggressiveModeText: string;
  normalModeText: string;
  changelogContent: string;
  changelogButton: string;
};

type Translations = {
  en: Translation;
  es: Translation;
};

export const translations: Translations = {
  en: {
    title: "Crawrix",
    subheading: "Look for everything you need",
    placeholder: "Enter keywords (separated by commas)",
    placetext: "Enter keywords",
    parseButton: "Parse",
    results: "Results:",
    noLinks: "No links found",
    backButton: "Back to Search",
    modalTitle: "About the service",
    modalContent:
      "Crawrix is a tool designed to simplify your SEO analysis and improve your online visibility. It helps you discover relevant links based on keywords you provide, making it an essential tool for SEO specialists, content creators, and digital marketers.",
    supportTitle: "Support the developer",
    supportContent:
      "If you find Crawrix useful and want to support the development of this tool, you can make a donation. Your support helps improve and expand this project, allowing us to add more features.",
    connectTitle: "Connect with the developer",
    aggressiveModeText: "Look for everything MORE you need",
    normalModeText: "Look for everything you need",
    changelogContent: `
v1.5.2 📦 – SEO & Analytics Enhancements
Updated robots.txt:
- User-agent: *
  Allow: /
  Sitemap: https://crawrix.com/sitemap.xml
- Filled and activated sitemap.xml
- Connected Google Search Console
- Integrated Google Tag Manager and Google Analytics
- Implemented 301 redirect logic
- Added SEOManager.tsx component
- Updated <head> with proper meta tags (title, description, OG, Twitter, etc.)
- Added SEO-optimized favicons and social icons
- Introduced a changelog modal in the interface
- Removed the temporary hosting warning message

v1.4.2 💥 - Patch
- Fixed and updated robots.txt.
- Added attention window.
- Updated web app icon.

v1.4.1 🔄 - Patch
- Project renamed to Crawrix.

v1.4.0 🌎
- Deployed full-stack app on Render (React frontend + Flask backend).
- Improved mobile responsiveness.
- Used Git for version control and commit management.

v1.3.0 ✨
- Refactored into microservices for better maintainability and performance.
- Improved text styling.

v1.2.0 🌍
- Added English and Spanish language support.
- Fixed translation bugs and optimized API calls.

v1.1.0 🛠
- New UI enhancements: modal with project details, hints, and navigation.
- Display of parsing results.
- Updated button and modal styles.

GitHub Updates 🏗
- Initialized and pushed project to GitHub with proper setup.
- Used feature branches and Pull Requests for development workflow.
    `,
    changelogButton: "changelog 📦", 
  },
  es: {
    title: "Crawrix",
    subheading: "Busca todo lo que necesitas",
    placeholder: "Ingresa palabras clave (separadas por comas)",
    placetext: "Ingresa palabras",
    parseButton: "Parsear",
    results: "Resultados:",
    noLinks: "No se encontraron enlaces",
    backButton: "Volver a la búsqueda",
    modalTitle: "Sobre el servicio",
    modalContent:
      "Crawrix es una herramienta diseñada para simplificar tu análisis SEO y mejorar tu visibilidad en línea. Te ayuda a descubrir enlaces relevantes según las palabras clave que proporcionas, siendo una herramienta esencial para especialistas SEO, creadores de contenido y comercializadores digitales.",
    supportTitle: "Apoya al desarrollador",
    supportContent:
      "Si encuentras útil Crawrix y deseas apoyar el desarrollo de esta herramienta, puedes hacer una donación. Tu apoyo ayuda a mejorar y expandir este proyecto, permitiéndonos agregar más funciones.",
    connectTitle: "Conéctate con el desarrollador",
    aggressiveModeText: "Busca todo lo que MÁS necesitas",
    normalModeText: "Busca todo lo que necesitas",
    changelogContent: `
v1.5.2 📦 – Mejoras de SEO y análisis
Actualizados robots.txt:
- Agente de usuario: *
  Permitir: /
  Mapa del sitio: https://crawrix.com/sitemap.xml
- Mapa del sitio rellenado y activado.xml
- Consola de Búsqueda de Google Conectada
- Administrador integrado de Etiquetas de Google y Google Analytics
- Implementó lógica de redireccionamiento 301
- Añadido SEOManager.componente tsx
- Actualizado < head > con metaetiquetas adecuadas (título, descripción, OG, Twitter, etc.)
- Se agregaron favicons e íconos sociales optimizados para SEO
- Introdujo un modal de registro de cambios en la interfaz
- Eliminado el mensaje de advertencia de alojamiento temporal

v1.4.2 💥 - Patch
- Se corrigió y actualizó robots.txt.
- Se agregó ventana de atención.
- Se actualizó el ícono de la aplicación web.

v1.4.1 🔄 - Patch
- El proyecto fue renombrado a Crawrix.

v1.4.0 🌎
- Aplicación full-stack desplegada en Render (frontend React + backend Flask).
- Mejorada la capacidad de respuesta móvil.
- Uso de Git para control de versiones y gestión de commits.

v1.3.0 ✨
- Refactorizado en microservicios para mejor mantenibilidad y rendimiento.
- Mejorado el estilo del texto.

v1.2.0 🌍
- Añadido soporte para inglés y español.
- Corregidos errores de traducción y optimizadas llamadas API.

v1.1.0 🛠
- Nuevas mejoras UI: modal con detalles del proyecto, pistas y navegación.
- Visualización de resultados del parsing.
- Actualizados estilos de botones y modales.

GitHub Updates 🏗
- Proyecto inicializado y subido a GitHub con configuración adecuada.
- Uso de ramas y Pull Requests para flujo de desarrollo.
    `,
    changelogButton: "registro de cambios 📦",
  },
};
