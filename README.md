# Commercial Use ⚠

⚠️ This project is provided under Apache 2.0 + Commons Clause.
Commercial use is strictly prohibited without written permission from the author.

📧 Email: danpain800@gmail.com

<p align="center">
  <img src="https://github.com/user-attachments/assets/1aab9d36-e3e9-4559-9fe8-101546436a82" alt="1" width="473" height="129" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/21d36fe3-e882-4f41-abd1-330c693b464d" alt="2" width="701" height="150" />
</p>
<hr />

# Changelog 🚀

## 🪐GRAND UPDATE v3.0.1 – Changes Overview

### Removed
- Aggressive mode from both frontend and backend.
- OpenLibrary API (no longer used for link fetching).
- Any UI components related to aggressive mode (e.g., `AggressiveModeToggle` in React).
- Yahoo search included only as a basic fallback; aggressive combined queries were removed.

### Added
- Integration with **Qwant API** (free search engine) for keyword-specific searches.
- Integration with **Hacker News API** to fetch relevant posts.
- Integration with **StackExchange API** to search questions and answers exactly matching keywords.
- **DuckDuckGo, Bing, Wikipedia, Reddit** remain as search sources.
- Frontend automatically sends keywords and language to backend without any aggressive mode parameters.
- Exact keyword search for all APIs where possible to improve relevance.

### Modified / Improved
- Refactored backend to synchronous requests (removed async) to simplify fetching from multiple APIs.
- Simplified frontend UI: removed aggressive mode toggle and related labels.
- Improved URL safety checks:
  - Validate scheme (`http/https`)
  - Block private, reserved, loopback, multicast IPs
  - Block localhost domains
- Standardized maximum links per keyword to 15 across all sources.
- Backend enforces keywords list ≤10 and keyword length ≤50 characters.
- Added safer `requests.Session()` usage for all API calls.
- Improved error handling for fetch failures (returns empty list instead of crashing).
- Limiting API calls: 10 requests per minute per client IP via Flask-Limiter.
- Frontend now sends only safe parameters (`keywords`, `lang`) and uses `Suspense` for lazy-loaded components.
- Reduced dependency on IP for safety (more focus on URL validity and safe parsing).
- All previous aggressive mode CSS / UI classes removed.

## 🌀 GRAND UPDATE v2.0.0 – Changes Overview

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
