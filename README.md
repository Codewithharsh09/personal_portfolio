# Harshwardhan Singh - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Dark Mode First Design** - Beautiful dark theme with light mode toggle
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Powered by Framer Motion for engaging user experience
- **Contact Form** - EmailJS integration ready for configuration
- **SEO Optimized** - Meta tags and OpenGraph tags included
- **Modern UI/UX** - Clean, professional design with interactive elements

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Navigation
- **EmailJS** - Contact form integration
- **React Icons** - Icon library

## 📦 Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🔧 Configuration

### EmailJS Setup (Contact Form)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Get your Service ID, Template ID, and Public Key
4. Update the contact form in `src/components/Contact.tsx`:
   ```typescript
   const serviceId = 'YOUR_SERVICE_ID';
   const templateId = 'YOUR_TEMPLATE_ID';
   const publicKey = 'YOUR_PUBLIC_KEY';
   ```
5. Uncomment the EmailJS send code in the `handleSubmit` function

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## 🚀 Deployment on Vercel

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts** to configure your project

### Option 2: Deploy via GitHub

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel:**
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite and configure the build settings
   - Click "Deploy"

3. **Build Settings (if needed):**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Option 3: Deploy via Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Import your Git repository or upload the project folder
4. Vercel will automatically configure the project
5. Click "Deploy"

## 📝 Customization

### Update Personal Information

Edit the following files to update your information:

- **Hero Section:** `src/components/Hero.tsx`
- **About Section:** `src/components/About.tsx`
- **Skills:** `src/components/Skills.tsx`
- **Projects:** `src/components/Projects.tsx`
- **Experience:** `src/components/Experience.tsx`
- **Contact:** `src/components/Contact.tsx`
- **SEO Meta Tags:** `index.html`

### Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  dark: {
    bg: '#0f172a',      // Background color
    surface: '#1e293b', // Card/surface color
    accent: '#6366f1',  // Accent color (indigo)
  },
}
```

### Add Resume Download

1. Place your resume PDF in `public/resume.pdf`
2. Update the download button in `src/components/About.tsx`:
   ```typescript
   const handleDownloadResume = () => {
     const link = document.createElement('a');
     link.href = '/resume.pdf';
     link.download = 'Harshwardhan_Singh_Resume.pdf';
     link.click();
   };
   ```

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── contexts/
│   │   └── ThemeContext.tsx
│   ├── pages/
│   │   └── Home.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Design Features

- **Smooth Scroll Animations** - Sections fade in as you scroll
- **Hover Effects** - Interactive cards and buttons
- **Particle Background** - Animated particles in hero section
- **Typography** - Inter and Poppins fonts
- **Gradient Text** - Eye-catching gradient text effects
- **Timeline Design** - Beautiful experience timeline

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 🐛 Troubleshooting

### Build Errors

If you encounter build errors:

1. Clear node_modules and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. Check TypeScript errors:
   ```bash
   npm run build
   ```

### Dark Mode Not Working

Ensure `ThemeProvider` wraps your app in `src/main.tsx` and `src/App.tsx`.

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Harshwardhan Singh**

- Email: wardhanh886@gmail.com
- LinkedIn: [Harshwardhan Singh](https://www.linkedin.com/in/harshwardhan-singh-96a443301/?originalSubdomain=in)

---

Made with using React, TypeScript, and Tailwind CSS

