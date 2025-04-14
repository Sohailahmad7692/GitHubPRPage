import React from 'react';
import { Book, Bookmark, Bell, Star, Heart, GitFork } from "lucide-react";
import { useTheme } from '../context/ThemeContext';
import { getThemeClasses } from '../utils/ThemeUtils';

const RepoHeader: React.FC = () => {
  const { isDark } = useTheme();
  const theme = getThemeClasses(isDark);

  return (
    <div className={`${theme.border} py-4 px-6`}>
      <div className="flex flex-wrap items-center">
        <Book size={16} className={`${theme.textSecondary} mr-2`} />
        <a href="#" className={`${theme.textLink} hover:underline`}>
          shadcn-ui
        </a>
        <span className={`mx-1 ${theme.textSecondary}`}>/</span>
        <a href="#" className={`${theme.textLink} hover:underline`}>
          ui
        </a>
        <span
          className={`ml-2 px-2 py-0.5 text-xs rounded-full ${theme.bgSecondary} ${theme.textSecondary}`}
        >
          Public
        </span>
        <div className=" ml-auto flex flex-wrap items-center gap-4 mt-2 sm:mt-0 flex items-center gap-2 md:gap-3">
          <button
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md ${theme.bgSecondary} hover:${theme.bgTertiary} ${theme.textSecondary}`}
          >
            <Heart size={16} className="text-pink-500" />
            <span>Sponsor</span>
          </button>

          <button
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md ${theme.bgSecondary} hover:${theme.bgTertiary} ${theme.textSecondary}`}
          >
            <Bell size={16} />
            <span>Notifications</span>
          </button>

          <button
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md ${theme.bgSecondary} hover:${theme.bgTertiary} ${theme.textSecondary}`}
          >
            <GitFork size={16} />
            <span>Fork</span>
            <span className="ml-1 font-medium">5.8k</span>
          </button>

          <button
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md ${theme.bgSecondary} hover:${theme.bgTertiary} ${theme.textSecondary}`}
          >
            <Star size={16} />
            <span>Star</span>
            <span className="ml-1 font-medium">85.3k</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RepoHeader;
