
<div align="center">
  <h1>🚀 Deep Researcher</h1>
  <p><strong>Lightning-Fast Deep Research Reports Powered by Google Gemini</strong></p>
  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Gemini](https://img.shields.io/badge/Gemini-8E75B2?style=flat&logo=googlegemini&logoColor=white)](https://ai.google.dev/)
[![Next.js](https://img.shields.io/badge/Next.js-111111?style=flat&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-111111?style=flat&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)

</div>

---

Deep Researcher is a cutting-edge research tool built with **Next.js 15** and powered by **Google Gemini models**. It generates in-depth research reports in under 2 minutes, leveraging advanced AI models like "Thinking" and "Flash" for rapid and insightful analysis. Designed with privacy in mind, all data is processed and stored locally.

---

## ✨ Features

- **⚡ Rapid Research**: Generate comprehensive reports in ~2 minutes, saving time and effort.
- **🌐 Multi-Platform Support**: Deploy seamlessly to Vercel, Cloudflare, or other platforms.
- **🤖 Powered by Google Gemini**: Leverages advanced AI models for accurate and insightful analysis.
- **🧠 Thinking & Flash Models**: Combines depth and speed for high-quality results.
- **🔒 Privacy-Focused**: All data is processed and stored locally, ensuring your privacy.
- **🌍 Multi-Language Support**: Supports English and Simplified Chinese.
- **💻 Modern Tech Stack**: Built with Next.js 15, Tailwind CSS, and Shadcn UI for a sleek and performant experience.
- **📜 Open Source**: Licensed under MIT for personal and commercial use.

---

## 🎯 Roadmap

- [X] <strong>Preserve research history.</strong>
- [ ] Enable editing of final reports and search results.
- [ ] Add support for file uploads and local knowledge bases.
- [ ] Expand support for other LLM models.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.18.0 or later recommended)
- [pnpm](https://pnpm.io/), [npm](https://www.npmjs.com/), or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/RohanSai22/deep-researcher.git
   cd deep-researcher
   ```

2. **Install dependencies**:

   ```bash
   pnpm install  # or npm install or yarn install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and configure the following:
   ```env
   
    # (Optional) Server-side Gemini API Key (Required for server API calls)
    
    GOOGLE_GENERATIVE_AI_API_KEY=
    
    # (Optional) Server API Proxy URL
    
    API_PROXY_BASE_URL=
    
    # (Optional) Server API Access Password for enhanced security
    
    ACCESS_PASSWORD=
    
    # (Optional) Injected script code can be used for statistics or error tracking.
    
    HEAD_SCRIPTS=
   ```

**Important Notes on Environment Variables:**

- `GOOGLE_GENERATIVE_AI_API_KEY`: **Optional but required for using the server-side API.** You need to obtain a Google Generative AI API key from [Google AI Studio](https://aistudio.google.com/). This key should be kept secret and **never committed to your public repository.**
- `API_PROXY_BASE_URL`: **Optional.** If you need to use a proxy server for API requests, configure this variable with your proxy server's base URL. This is relevant for server-side API calls.
- `ACCESS_PASSWORD`: **Optional but highly recommended for server-side deployments.** Set a strong password to protect your server-side API endpoints. This password will be required to access server-side API functionalities.
- `HEAD_SCRIPTS`: **Optional** Injected script code can be used for statistics or error tracking.

**Privacy Reminder:** These environment variables are primarily used for **server-side API calls**. When using the **local API mode**, no API keys or server-side configurations are needed, further enhancing your privacy.

4. **Run the development server**:
```bash
pnpm dev  # or npm run dev or yarn dev
````

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚢 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/)

### Deploy to Cloudflare

Follow the [Cloudflare Pages Deployment Guide](./docs/How-to-deploy-to-Cloudflare-Pages.md).

### Static Deployment

Build a static version of the app:

```bash
pnpm build:export
```

Upload the contents of the `out` directory to any static hosting service (e.g., GitHub Pages, Cloudflare, Vercel).

---

## ⚙️ Configuration

Environment variables for server-side API configurations:

- `GOOGLE_GENERATIVE_AI_API_KEY`: Required for server-side API calls.
- `API_PROXY_BASE_URL`: Optional proxy server URL.
- `ACCESS_PASSWORD`: Optional password for securing server-side endpoints.

---

## 🛡️ Privacy

Your privacy is our priority. All research data and generated reports are stored locally on your machine. No data is transmitted to external servers unless explicitly using server-side API calls.

---

## 📝 License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute it for personal and commercial purposes.

---

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/) - React framework for building performant web apps.
- [Shadcn UI](https://ui.shadcn.com/) - Beautifully designed UI components.
- [Google Gemini](https://ai.google.dev/gemini-api) - Powering intelligent research capabilities.
- [Deep Research](https://github.com/u14app/deep-research) - Thanks to the project `u14app/deep-research` for inspiration.
---

## 🤝 Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes.
4. Submit a pull request.

For major changes, please open an issue first to discuss your ideas.

---

## ✉️ Contact

For questions, suggestions, or feedback, please create a new issue.
