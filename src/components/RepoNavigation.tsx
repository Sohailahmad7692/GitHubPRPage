import React from 'react';
import { GitPullRequest, MessageSquare, Play, Shield, BarChart2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { getThemeClasses } from '../utils/ThemeUtils';

const RepoNavigation: React.FC = () => {
  const { isDark } = useTheme();
  const theme = getThemeClasses(isDark);

  return (
    <div className={`border-b ${theme.border} p-4 pb-0 overflow-x-auto`}>
      <div className="flex space-x-6 min-w-max">
        <a href="#" className={`flex items-center ${theme.textSecondary}`}>
          <code className="mr-2">
            <svg className="w-4 h-4 inline" viewBox="0 0 16 16">
              <path fill="currentColor" d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"></path>
            </svg>
          </code>
          <span>Code</span>
        </a>
        <a href="#" className={`flex items-center ${theme.textSecondary}`}>
          <MessageSquare size={16} className="mr-2" />
          <span>Issues</span>
          <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${theme.bgSecondary}`}>912</span>
        </a>
        <a href="#" className={`flex items-center ${theme.textSecondary} border-b-2 ${theme.navTabActive}`}>
          <GitPullRequest size={16} className="mr-2" />
          <span>Pull requests</span>
          <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${theme.bgSecondary}`}>810</span>
        </a>
        <a href="#" className={`flex items-center ${theme.textSecondary}`}>
          <MessageSquare size={16} className="mr-2" />
          <span>Discussions</span>
        </a>
        <a href="#" className={`flex items-center ${theme.textSecondary}`}>
          <Play size={16} className="mr-2" />
          <span>Actions</span>
        </a>
        <a href="#" className={`flex items-center ${theme.textSecondary}`}>
          <Shield size={16} className="mr-2" />
          <span>Security</span>
        </a>
        <a href="#" className={`flex items-center ${theme.textSecondary}`}>
          <BarChart2 size={16} className="mr-2" />
          <span>Insights</span>
        </a>
      </div>
    </div>
  );
};

export default RepoNavigation;
