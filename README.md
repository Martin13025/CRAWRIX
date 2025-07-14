# Commercial Use ⚠

This project is licensed under the Apache License Version 2.0.

If you intend to use this software (or its significant parts) in a commercial context — including SaaS platforms, reselling, or integrating into a paid product — please contact the author.

📧 Email: danpain800@gmail.com

# Changelog 🚀

## 🌀 GRAND UPDATE v2.0.0

## 🔍 What’s Changed?

### Security Improvements:

* **Implemented URL safety validation**:

  * Blocked private IP ranges (`192.168.x.x`, `10.x.x.x`, `172.16.x.x`).
  * Blocked localhost addresses (`127.0.0.1`, `localhost`, `::1`).
  * Blocked reserved, loopback, and multicast IPs.
  * Allowed only `http` and `https` URL schemes.

* **Added Input Validation**:

  * `keywords` must be a list.
  * Limited to **10 keywords per request**.
  * Each keyword must be a **string** and **no longer than 50 characters**.

* **Added Error Handling**:

  * All HTTP requests are wrapped with `try-except` to catch connection and parsing issues.
  * Prevented unexpected crashes if DuckDuckGo or Yahoo changes their page structure.

* **Added Request Rate Limiting**:

  * **Global** limit: **10 requests per minute**.
  * **/parse endpoint**: **5 requests per minute**.

### Technical Stack Used:

| Feature         | Library               | Purpose                               |
| --------------- | --------------------- | ------------------------------------- |
| SSRF Protection | `ipaddress`, `urllib` | Block unsafe network targets          |
| Rate Limiting   | `Flask-Limiter 3.12`  | Prevent DoS / abuse attacks           |
| HTML Parsing    | `BeautifulSoup`       | Safe scraping of search results       |
| HTTP Requests   | `requests`            | External requests with error handling |
| CORS Handling   | `flask_cors`          | Control allowed client origins        |

## 🧪 Testing

* Verified SSRF protection with safe and unsafe URLs (e.g., private IPs, localhost).
* Simulated search engine structure changes to ensure graceful failure.
* Tested rate limiting behavior by sending rapid requests.
* Validated keyword input constraints and error messages.

## 💬 Additional Notes

Reviewers should focus on:

* URL safety logic correctness.
* Rate limiting thresholds.
* Keyword validation constraints.
* Error message consistency for client-side handling.

## v1.5.2 📦 – SEO & Analytics Enhancements

### 🛠 Infrastructure
* 📄 Updated `robots.txt`:
  ```txt
  User-agent: *
  Allow: /
  Sitemap: https://crawrix.com/sitemap.xml
  ```
* 🗺️ Filled and activated `sitemap.xml`
* 🔍 Connected **Google Search Console**
* 🧠 Integrated **Google Tag Manager** and **Google Analytics**
* 🔁 Implemented **301 redirect** logic

### 🔧 SEO Optimization
* 🧩 Added `SEOManager.tsx` component
* 🧠 Updated `<head>` with proper meta tags (title, description, OG, Twitter, etc.)
* 🖼️ Added SEO-optimized favicons and social icons

### 💬 UI / UX
* 🗒️ Introduced a **changelog modal** in the interface
* 🚫 Removed the temporary hosting warning message

## v1.4.2 💥- Patch
### 🐛 Fixed
- Checked and updated `robots.txt`.

### ✨ Added
- Added attention window.
![1](https://github.com/user-attachments/assets/fcc30eb1-54cd-4483-a77c-09a60f3609bd)

### 🎨 Changed
- Updated web app icon.

## v1.4.1 🔄 - Patch

- **The project has been renamed to something more recognizable - Crawrix**

## v1.4.0 🌎 - Full Stack Launch & Mobile Readiness

- **✅ Deployed the full-stack application to Render:**
  - Frontend (React) and backend (Python on Flask) are now live and publicly accessible.
  - Configuration adjusted for seamless client-server communication.

- **📱 Improved mobile experience:**
  - Enhanced responsive design across key pages.
  - Layout and UI elements now adapt better to small screen devices.

- **<img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" alt="Git logo" width="20" style="vertical-align:middle; margin-right: 5px;"> Git version control:**
  - Utilized Git for local version control and commit management.
  - Maintained structured commit history throughout development.
  - Project managed via a local Git repository.

## v1.3.0 ✨– Component Refactor & UI Polish
- **Refactored the application into microservices (components)** for better maintainability and performance.
- **Improved text styling** for enhanced readability and appearance. 🎨

## v1.2.0 🌍 - Multilingual Support & Logic Cleanup
- **Implemented translations**:
  - Added support for **English & Spanish** via `src/i18n/index.ts`.
  - Adjusted text dynamically based on the selected language.
- **Fixed aggressive mode translation:**
  - **EN**: "Look for everything MORE you need"
  - **ES**: "Busca TODO lo que necesitas MÁS"
- **Code improvements:**
  - Fixed bugs in `App.tsx`.
  - Improved state management for language selection and aggressive mode.
  - Optimized API calls to prevent redundant requests.

## v1.1.0 🛠 – UI Enhancements & Parsing Features
- **New UI Enhancements**:
  - Added a **button to toggle a modal window** with project details.
  - Improved user interface with **hints and navigation options**.
- **Parsing functionality:**
  - Now displays results after processing data.
- **Styling improvements:**
  - New styles for buttons and modal windows.
  - Adjusted text, background, and button styling for a polished look.

## GitHub Updates 🏗

- **Initialized and pushed the project to GitHub:**
  - Added the complete full-stack project structure (React frontend + Flask backend).
  - Ensured proper `.gitignore` and environment configuration for clean versioning.

- **Feature branch workflow:**
  - Uploaded modified files and committed changes locally.
  - Pushed changes to a separate feature branch.
  - Created a Pull Request (PR) to merge into `main`.
  - Prepared for final merging and deployment.
---
📌 *Stay tuned for more updates!* 🚀
