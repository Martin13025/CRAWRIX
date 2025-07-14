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
🌀 GRAND UPDATE v2.0.0
- 🔍 What’s Changed?
  Security: Added URL validation blocking private IPs, localhost, reserved, loopback, multicast, and non-http(s) schemes.
  Input Validation: Keywords must be a list of max 10 items, each max 50 chars.
  Error Handling: Wrapped HTTP requests with try-except to prevent crashes on connection or parsing issues.
  Rate Limiting: Global 10 req/min, /parse endpoint limited to 5 req/min.
- 🧰 Tech Stack:
  ipaddress, urllib — SSRF protection
  Flask-Limiter — rate limiting
  BeautifulSoup — HTML parsing
  requests — HTTP requests
  flask_cors — CORS management
- 🧪 Testing:
  Verified SSRF protection on various URLs
  Simulated page structure changes for robustness
  Confirmed rate limiting works
  Validated input constraints and error messages
- 💬 Notes:
  Focus on URL validation, rate limits, input checks, and consistent error responses.
    `,
    changelogButton: "latest update 📦", 
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
🌀 GRAN ACTUALIZACIÓN v2.0.0
- 🔍 ¿Qué ha cambiado?
  Seguridad: Se ha añadido validación de URL que bloquea IP privadas, localhost, reservadas, loopback, multicast y esquemas que no sean HTTP.
  Validación de entrada: Las palabras clave deben ser una lista de un máximo de 10 elementos, cada uno con un máximo de 50 caracteres.
  Gestión de errores: Se han encapsulado las solicitudes HTTP con try-except para evitar fallos de conexión o problemas de análisis.
  Límite de velocidad: Global: 10 solicitudes/min; punto final /parse: limitado a 5 solicitudes/min. 
- 🧰 Pila tecnológica:
  ipaddress, urllib — Protección SSRF
  Flask-Limiter — Limitación de velocidad
  BeautifulSoup — Análisis de HTML
  requests — Solicitudes HTTP
  flask_cors — Gestión de CORS
- 🧪 Pruebas:
  Protección SSRF verificada en varias URL
  Simulación de cambios en la estructura de la página para mayor robustez
  Funcionamiento de la limitación de velocidad confirmado
  Restricciones de entrada y mensajes de error validados
- 💬 Notas:
  Enfoque en la validación de URL, límites de velocidad, comprobaciones de entrada y respuestas de error consistentes.
    `,
    changelogButton: "última actualización 📦",
  },
};
