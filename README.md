<div align="center">

# 🎭 Meme Generator App

**A modern, fast, and responsive meme creation platform powered by the Imgflip API**

[![Next.js](https://img.shields.io/badge/Next.js-16.2.11-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/)

[**Live Demo**](https://meme-generator-ruby-two.vercel.app/) · [Report Bug](#) · [Request Feature](#)

</div>

---

## 📖 About The Project

**Meme Generator App** is a full-stack web application that lets users browse popular meme templates and generate custom memes in real time. Built on the Next.js App Router with a fully typed TypeScript codebase, the app integrates directly with the **Imgflip API** to fetch templates and render finished memes on the fly — no design software required.

The project emphasizes clean architecture (dynamic routing for individual templates, reusable components, and a modern Tailwind-based UI) and is deployed on Vercel with continuous deployment from the `master` branch.

🔗 **Live URL:** [https://meme-generator-ruby-two.vercel.app/](https://meme-generator-ruby-two.vercel.app/)

---

## ✨ Features

- 🖼️ **Browse Meme Templates** — Explore a curated library of popular meme templates fetched live from the Imgflip API
- ⚡ **Instant Meme Generation** — Add custom top/bottom (or multi-box) text and generate a shareable meme in seconds
- 🔗 **Dynamic Template Pages** — Each meme template has its own dedicated page (`/memes/[id]`) for a focused editing experience
- 📱 **Fully Responsive UI** — Optimized layout and components that work seamlessly across mobile, tablet, and desktop
- 🎨 **Modern Styling** — Built with Tailwind CSS 4 for a clean, professional, and consistent design system
- 🧭 **Simple Navigation** — Intuitive navbar and component structure for smooth browsing between templates
- 🔒 **Secure API Handling** — Imgflip credentials are kept server-side via environment variables, never exposed to the client

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **UI Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) |
| **API** | [Imgflip API](https://imgflip.com/api) |
| **Linting** | ESLint 9 (`eslint-config-next`) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📂 Project Structure

```
meme-generator-app/
├── app/
│   ├── components/
│   │   ├── MemeBtn.tsx        # Reusable meme action button component
│   │   └── Navbar.tsx         # Site navigation bar
│   ├── memes/
│   │   ├── [id]/
│   │   │   └── page.tsx       # Dynamic route — individual meme template page
│   │   └── page.tsx           # Meme templates listing page
│   ├── globals.css            # Global styles (Tailwind entry point)
│   ├── layout.tsx             # Root layout
│   └── page.tsx                # Home page
├── public/                    # Static assets
├── .env                       # Environment variables (not committed)
├── .gitignore
├── next.config.ts             # Next.js configuration (remote image patterns)
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.18 or later recommended)
- npm / yarn / pnpm / bun
- An [Imgflip](https://imgflip.com/) account (username & password) for API access

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/muhammadikram23/meme-generator-app.git
   cd meme-generator-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```env
   IMGFLIP_USERNAME=your_imgflip_username
   IMGFLIP_PASSWORD=your_imgflip_password
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open the app**

   Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Environment Variables

| Variable | Description | Required |
|---|---|---|
| `IMGFLIP_USERNAME` | Your Imgflip account username, used to authenticate meme creation requests | ✅ |
| `IMGFLIP_PASSWORD` | Your Imgflip account password, used to authenticate meme creation requests | ✅ |

> ⚠️ Never commit your `.env` file. It is already excluded via `.gitignore`. When deploying, add these variables through your hosting provider's dashboard (e.g., Vercel → Project Settings → Environment Variables).

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the app for production |
| `npm run start` | Runs the production build |
| `npm run lint` | Lints the codebase using ESLint |

---

## 🌍 Deployment

This project is deployed on **Vercel** with automatic deployments enabled — every push to the `master` branch triggers a new production build.

**Live Application:** [https://meme-generator-ruby-two.vercel.app/](https://meme-generator-ruby-two.vercel.app/)

To deploy your own instance:
1. Push the repository to GitHub
2. Import the project into [Vercel](https://vercel.com/new)
3. Add the required environment variables (`IMGFLIP_USERNAME`, `IMGFLIP_PASSWORD`)
4. Click **Deploy**

---

## 🗺️ Roadmap

- [ ] Add meme download/share functionality
- [ ] Support for custom image uploads
- [ ] Search and filter meme templates
- [ ] Save favorite memes (with authentication)
- [ ] Dark mode support

---

## 🤝 Contributing

Contributions are welcome and appreciated!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available for personal and educational use.

---

## 👤 Author

**Muhammad Ikram**

- GitHub: [@muhammadikram23](https://github.com/muhammadikram23)

---

<div align="center">

Made with ❤️ using Next.js

</div>