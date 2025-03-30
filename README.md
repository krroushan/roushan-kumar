# Roushan Kumar - Developer Portfolio

![Portfolio Preview](public/preview.png)

A modern, interactive developer portfolio built with Next.js and Tailwind CSS. This portfolio showcases my projects, skills, and professional experience with dynamic animations and a sleek user interface.

## Features

- 🎨 **Modern UI/UX**: Built with a dark theme and neon accents for a developer-friendly aesthetic
- 🔄 **Interactive Elements**: Smooth animations, 3D card effects, and hover interactions
- 📱 **Fully Responsive**: Optimized for all devices from mobile to desktop
- 🌓 **Dark/Light Mode**: Toggle between different themes
- 🔧 **Project Showcase**: Filterable projects section with detailed project information
- 📈 **Skills & Stats**: Visual representation of technical skills and achievements
- 📄 **Interactive Resume**: PDF viewer with zoom functionality and download option
- 📝 **Contact Form**: Dynamic contact form with real-time input display
- 🎵 **Spotify Integration**: Current playing track widget (coming soon)
- 💬 **Testimonials**: Client and colleague testimonials section
- 📊 **SEO Optimized**: Meta tags and optimized structure for better search visibility

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons (Fi set)
- **Form Handling**: React Hook Form (planned)
- **State Management**: React Hooks
- **PDF Rendering**: Native iframe implementation
- **Deployment**: Vercel

## Project Structure

```
mydeveloperportfolio/
├── public/
│   ├── icons/           # SVG icons for skills section
│   ├── projects/        # Project images and screenshots
│   ├── spotify/         # Assets for Spotify integration
│   ├── testimonials/    # User avatars for testimonials
│   ├── resume.pdf       # Downloadable resume file
│   └── *.svg            # Various SVG assets used throughout the site
├── src/
│   ├── app/             # Next.js App Router
│   │   ├── resume/      # Resume page
│   │   ├── globals.css  # Global styles
│   │   ├── layout.js    # Root layout component
│   │   ├── not-found.js # Custom 404 page
│   │   └── page.js      # Homepage component
│   └── components/      # Reusable React components
│       ├── About.js             # About me section
│       ├── BackgroundEffect.js  # Animated background effects
│       ├── Blog.js              # Blog posts section
│       ├── Contact.js           # Contact form with dynamic display
│       ├── EasterEgg.js         # Hidden interactive feature
│       ├── FeaturedProject.js   # Highlighted project with auto-scroll
│       ├── Footer.js            # Site footer with social links
│       ├── Hero.js              # Landing/intro section
│       ├── Navbar.js            # Navigation with theme toggle
│       ├── Projects.js          # Filterable project grid with 3D cards
│       ├── Resume.js            # PDF resume viewer component
│       ├── Skills.js            # Skills showcase with icons
│       ├── SpotifyWidget.js     # Current playing track widget
│       ├── Stats.js             # Animated statistics display
│       ├── Testimonials.js      # Client/colleague testimonials
│       └── ThemeProvider.js     # Dark/light theme context
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
├── jsconfig.json       # JavaScript configuration for path aliases
├── next.config.mjs     # Next.js configuration
└── package.json        # Project dependencies and scripts
```

The project follows a modular component-based architecture where each section of the portfolio is encapsulated in its own component. This makes the codebase easier to maintain, update, and extend with new features.

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mydeveloperportfolio.git
cd mydeveloperportfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the portfolio in your browser.

## Customization

### Personal Information
Edit the content in each component to reflect your personal information, projects, and skills.

### Theme Colors
The portfolio uses a custom color scheme defined in `tailwind.config.js`. You can modify these colors to match your personal brand:

```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      'neon-blue': '#38bdf8',
      'neon-purple': '#a855f7',
      // Add or modify colors here
    }
  }
}
```

### Adding Projects
Add your projects to the projects array in `src/components/Projects.js`:

```javascript
const projects = [
  {
    title: 'Project Name',
    description: 'Project description...',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/project',
    demo: 'https://project-demo.com',
    image: '/projects/project-image.jpg',
    category: 'web', // or 'mobile', 'backend', etc.
  },
  // Add more projects...
];
```

### Resume
Replace the placeholder PDF in `public/resume.pdf` with your actual resume.

## Deployment

This portfolio is optimized for deployment on Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and deploy with the optimal settings

You can also deploy to other platforms that support Next.js.

## Performance Optimization

- All images should be optimized using Next.js Image component
- Animations are triggered based on viewport visibility to improve performance
- Code splitting is automatically handled by Next.js

## Future Enhancements

- [ ] Blog section integration
- [ ] More interactive project demos
- [ ] Analytics integration
- [ ] Internationalization support
- [ ] Advanced form validation and submission

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from modern developer portfolios
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animation effects powered by [Framer Motion](https://www.framer.com/motion/)

---

Designed & Developed with ❤️ by Roushan Kumar

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
