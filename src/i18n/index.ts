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
  attentionwindow: string;
  changelogContent: string;
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
    modalTitle: "changelog 🗃",
    modalContent:
      "Crawrix is a tool designed to simplify your SEO analysis and improve your online visibility. It helps you discover relevant links based on keywords you provide, making it an essential tool for SEO specialists, content creators, and digital marketers.",
    supportTitle: "Support the developer",
    supportContent:
      "If you find Crawrix useful and want to support the development of this tool, you can make a donation. Your support helps improve and expand this project, allowing us to add more features.",
    connectTitle: "Connect with the developer",
    aggressiveModeText: "Look for everything MORE you need",
    normalModeText: "Look for everything you need",
    attentionwindow:
      "Notice: This service is currently running on a temporary host. Please before starting work refresh the page and wait a few seconds while the server starts. I'm working on a permanent solution — thank you for your patience!",
    changelogContent: `
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
    modalTitle: "changelog 🗃",
    modalContent:
      "Crawrix es una herramienta diseñada para simplificar tu análisis SEO y mejorar tu visibilidad en línea. Te ayuda a descubrir enlaces relevantes según las palabras clave que proporcionas, siendo una herramienta esencial para especialistas SEO, creadores de contenido y comercializadores digitales.",
    supportTitle: "Apoya al desarrollador",
    supportContent:
      "Si encuentras útil Crawrix y deseas apoyar el desarrollo de esta herramienta, puedes hacer una donación. Tu apoyo ayuda a mejorar y expandir este proyecto, permitiéndonos agregar más funciones.",
    connectTitle: "Conéctate con el desarrollador",
    aggressiveModeText: "Busca todo lo que MÁS necesitas",
    normalModeText: "Busca todo lo que necesitas",
    attentionwindow:
      "Aviso: Este servicio se está ejecutando actualmente en un host temporal. Por favor antes de empezar a trabajar actualice la página y espere unos segundos mientras se inicia el servidor. Estoy buscando una solución permanente. ¡Gracias por su paciencia!",
    changelogContent: `
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
  },
};
