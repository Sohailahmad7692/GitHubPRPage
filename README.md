# GitHub PR Page Clone with Theme Switching

This project is a clone of a GitHub Pull Request page, featuring light and dark theme switching functionality. It's built with React, TypeScript, and Tailwind CSS.

## Features

- Light and dark theme switching (with system preference detection)
- Responsive design that works on mobile and desktop
- Component-based architecture for maintainability
- Realistic GitHub PR page UI

## Project Structure

```
src/
├── components/          # UI components
│   ├── Footer.tsx
│   ├── GitHubPRPage.tsx # Main page component
│   ├── Header.tsx
│   ├── PRContent.tsx
│   ├── PRSidebar.tsx
│   ├── PRTimeline.tsx
│   ├── PullRequestSideBar.tsx
│   ├── PullRequestTab.tsx
│   ├── RepoHeader.tsx
│   ├── RepoNavigation.tsx
│   └── SignUpBanner.tsx
├── context/
│   └── ThemeContext.tsx # Theme management
├── utils/
│   └── ThemeUtils.ts    # Theme-related utilities
├── App.tsx              # App entry point
└── index.tsx            # React entry point
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Lucide React (for icons)

## License

MIT
