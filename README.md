# Fahid Hasan AI Portfolio

Next.js + Tailwind CSS v4 personal portfolio based on the provided HTML mockup.

## Features
- Same dark/light visual style as the mockup
- Fully responsive layout
- Hero, About, Skills, Education, Projects, AI, Contact sections
- Separate project details pages: `/projects/[slug]`
- AI Portfolio Assistant
- AI Project Finder
- AI Resume Summary
- AI Contact Message Helper
- Profile image ready at `public/images/profile.jpg`
- Resume placeholder ready: add your CV as `public/resume.pdf`

## Run locally
```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to Vercel
1. Push this folder to GitHub.
2. Import the repository in Vercel.
3. Framework preset: Next.js.
4. Deploy.

## Edit your data
- Profile: `src/data/profile.js`
- Projects: `src/data/projects.js`
- Photo: replace `public/images/profile.jpg`
- Resume: add `public/resume.pdf`
