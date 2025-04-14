import React from 'react';
import { GitMerge } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { getThemeClasses } from '../utils/ThemeUtils';
import PRTimeline from './PRTimeline';
import PRSidebar from './PRSidebar';
import SignupBanner from './SignUpBanner';
import PullRequestTabs from './PullRequestTab';

const PRContent: React.FC = () => {
  const { isDark } = useTheme();
  const theme = getThemeClasses(isDark);

  return (
    <div className="pr-10 pl-20 py-6">
      <div className="flex flex-wrap items-baseline justify-between">
        <h1 className="text-2xl font-semibold mb-2 md:mb-0">
          docs: fix typo in CSS selector{" "}
          <span className={theme.textSecondary}>#6928</span>
        </h1>
        <button
          className={`${theme.buttonPrimary} text-white rounded-md px-3 py-1`}
        >
          New issue
        </button>
      </div>
      <div
        className={`flex flex-wrap items-center mt-2 pb-2 ${theme.border}`}
      >
        <div className="flex items-center mr-2 mb-2">
          <span
            className={`inline-flex items-center justify-center rounded-full ${theme.mergedBadge} px-2 py-1 text-sm`}
          >
            <GitMerge size={14} className="mr-1" />
            Merged
          </span>
        </div>
        <div className="flex-grow text-sm">
          <a
            href="#"
            className={`${theme.textLink} font-semibold hover:underline`}
          >
            kodiakhq
          </a>
          <span className={theme.textSecondary}> merged 1 commit into </span>
          <span className={theme.textMain}>
            <a href="#" className={`${theme.textMain} hover:underline`}>
              shadcn-ui:main
            </a>
          </span>
          <span className={theme.textSecondary}> from </span>
          <span className={theme.textMain}>
            <a href="#" className={`${theme.textMain} hover:underline`}>
              YordanIliev2002:main
            </a>
          </span>
          <span className={`${theme.textSecondary} ml-2`}>Mar 17, 2025</span>
        </div>
      </div>
      <PullRequestTabs/>
      {/* PR Content Grid */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        <PRTimeline />
        <PRSidebar />
      </div>
    </div>
  );
};

export default PRContent;
