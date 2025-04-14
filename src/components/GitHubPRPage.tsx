import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { getThemeClasses } from '../utils/ThemeUtils';
import Header from './Header';
import RepoHeader from './RepoHeader';
import RepoNavigation from './RepoNavigation';
import PRContent from './PRContent';
import Footer from './Footer';

const GitHubPRPage: React.FC = () => {
  const { isDark } = useTheme();
  const theme = getThemeClasses(isDark);
  
  return (
    <div className={`${theme.bgMain} ${theme.textMain} min-h-screen`}>
      <Header />
      <RepoHeader />
      <RepoNavigation />
      <PRContent />
      <Footer />
    </div>
  );
};

export default GitHubPRPage;
