# Adhya Mittal Portfolio

A personal portfolio showcasing my work at the intersection of **software development, UI/UX design, and creative experimentation**.

Built to bring together thoughtful visual design, interactive motion, and practical engineering.

## ✳ About the Portfolio

This portfolio is designed as an editorial-style digital experience, featuring bold typography, minimal layouts, carefully considered spacing, and scroll-based interactions.

Rather than treating animation as decoration, I use motion to guide attention, create visual continuity, and make the browsing experience feel more engaging.

## 🛠 Tech Stack

- **Next.js**: React framework for building the website
- **React**: Component-based UI development
- **TypeScript**: Type-safe application code
- **Tailwind CSS**: Responsive styling and layout
- **Motion for React (Framer Motion)**: Scroll-linked animations, transitions, interactive elements, and motion effects
- **Next.js Image**: Image rendering and optimization
- **Git & GitHub**: Version control and source code hosting

## ✦ Design & Interaction

Some of the key elements explored in this portfolio include:

- Oversized, editorial typography
- Dark, minimal visual direction
- Responsive layouts across screen sizes
- Scroll-linked project card animations
- Smooth transitions and reveal effects
- Interactive cursor-following elements
- Reduced-motion support for accessibility
- Reusable React components and structured content files

## 🚀 Featured Projects

### SENTINEL 2026
Research-oriented work exploring trust and security in Retrieval-Augmented Generation (RAG), including prompt injection, knowledge-base poisoning, and unsupported AI-generated answers.

**Focus:** AI Security · RAG · Research

### EnviroVista  2024
A national-level hackathon project exploring greenwashing by examining environmental claims against supporting evidence.

**Focus:** Sustainability · Greenwashing · Hackathon

### MIMI  2026
A personalized makeup assistant in development that connects user preferences and makeup collections with tailored product suggestions and step-by-step makeup routines.

**Focus:** UI/UX · Next.js · Supabase

### Bharat Voice  2023
A voice-to-text and text-to-voice project focused on regional Indian languages and more accessible interactions with technology.

**Focus:** Speech Technology · Accessibility · Indian Languages

## 💻 Run Locally

**1. Clone the repository**

```bash
git clone https://github.com/geekadhya/adhya-portfolio.git
cd adhya-portfolio
```

**2. Install dependencies**

```bash
npm install
```

**3. Start the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```text
app/          → Pages and routes
components/   → Reusable UI components
lib/content/  → Portfolio content and project data
public/       → Static assets and project images
```

## 🌱 Current Focus

Continuously exploring the relationship between design and engineering — building interfaces that are visually expressive, technically considered, and useful to the people who interact with them.

---

**Designed and developed by Adhya Mittal.**

[GitHub](https://github.com/geekadhya)

## Contact form

The form posts to a Formspree endpoint. Create a free form at formspree.io, then:

1. Copy `.env.example` to `.env.local` and paste your endpoint into `NEXT_PUBLIC_CONTACT_ENDPOINT`.
2. On your host (Vercel etc.) add the same variable under Environment Variables and redeploy.

Without it, the form falls back to opening the visitor's mail app if `mail` is set in `lib/content/site.ts`.
