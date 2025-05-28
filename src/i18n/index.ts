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
  };
  
  type Translations = {
    en: Translation;
    es: Translation;
  };
  
  export const translations: Translations = {
    en: {
      title: "Crawrix",
      subheading: "Look for everything MORE you need",
      placeholder: "Enter keywords (separated by commas)",
      placetext: "Enter keywords",
      parseButton: "Parse",
      results: "Results:",
      noLinks: "No links found",
      backButton: "Back to Search",
      modalTitle: "About this service",
      modalContent:
        "Crawrix is a tool designed to simplify your SEO analysis and improve your online visibility. It helps you discover relevant links based on keywords you provide, making it an essential tool for SEO specialists, content creators, and digital marketers.",
      supportTitle: "Support the developer",
      supportContent:
        "If you find Crawrix useful and want to support the development of this tool, you can make a donation. Your support helps improve and expand this project, allowing us to add more features.",
      connectTitle: "Connect with the developer",
      aggressiveModeText: "Look for everything MORE you need",
      normalModeText: "Look for everything you need",
      attentionwindow: "Notice: This service is currently running on a temporary host. Please refresh the page and wait a few seconds while the server starts. I'm working on a permanent solution — thank you for your patience!",
    },
    es: {
      title: "Crawrix",
      subheading: "Busca todo lo que MÁS necesitas",
      placeholder: "Ingresa palabras clave (separadas por comas)",
      placetext: "Ingresa palabras",
      parseButton: "Parsear",
      results: "Resultados:",
      noLinks: "No se encontraron enlaces",
      backButton: "Volver a la búsqueda",
      modalTitle: "Sobre este servicio",
      modalContent:
        "Crawrix es una herramienta diseñada para simplificar tu análisis SEO y mejorar tu visibilidad en línea. Te ayuda a descubrir enlaces relevantes según las palabras clave que proporcionas, siendo una herramienta esencial para especialistas SEO, creadores de contenido y comercializadores digitales.",
      supportTitle: "Apoya al desarrollador",
      supportContent:
        "Si encuentras útil Crawrix y deseas apoyar el desarrollo de esta herramienta, puedes hacer una donación. Tu apoyo ayuda a mejorar y expandir este proyecto, permitiéndonos agregar más funciones.",
      connectTitle: "Conéctate con el desarrollador",
      aggressiveModeText: "Busca todo lo que MÁS necesitas",
      normalModeText: "Busca todo lo que necesitas",
      attentionwindow: "Aviso: Este servicio se está ejecutando actualmente en un host temporal. Actualice la página y espere unos segundos mientras se inicia el servidor. Estoy buscando una solución permanente. ¡Gracias por su paciencia!",
    },
  };
