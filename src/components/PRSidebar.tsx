import React from 'react';
import { Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { getThemeClasses } from '../utils/ThemeUtils';

const PRSidebar: React.FC = () => {
  const { isDark } = useTheme();
  const theme = getThemeClasses(isDark);

  return (
    <div className="col-span-1">
      {/* Reviewers */}
      <div className="mb-6">
        <h3 className={`text-sm font-semibold ${theme.textSecondary} mb-2`}>Reviewers</h3>
        <div className="flex items-center mb-2">
          <img src="https://avatars.githubusercontent.com/u/124599?s=40&v=4" alt="shadcn" className="w-5 h-5 rounded-full mr-2" />
          <a href="#" className={`${theme.textLink} hover:underline mr-2`}>shadcn</a>
          <Check size={14} className="text-green-500" />
        </div>
        <div className="flex items-center mb-2">
          <img src="https://avatars.githubusercontent.com/u/19780885?s=40&v=4" alt="Jacksonmills" className="w-5 h-5 rounded-full mr-2" />
          <a href="#" className={`${theme.textLink} hover:underline mr-2`}>Jacksonmills</a>
          <Check size={14} className={theme.textSecondary} />
        </div>
        <div className="flex items-center">
          <img src="https://avatars.githubusercontent.com/u/30011773?s=40&v=4" alt="matevegh" className="w-5 h-5 rounded-full mr-2" />
          <a href="#" className={`${theme.textLink} hover:underline mr-2`}>matevegh</a>
          <Check size={14} className={theme.textSecondary} />
        </div>
      </div>

      {/* Assignees */}
      <div className="mb-6">
        <h3 className={`text-sm font-semibold ${theme.textSecondary} mb-2`}>Assignees</h3>
        <p className={`${theme.textSecondary} text-sm`}>No one assigned</p>
      </div>

      {/* Labels */}
      <div className="mb-6">
        <h3 className={`text-sm font-semibold ${theme.textSecondary} mb-2`}>Labels</h3>
        <span className="inline-block px-2 py-0.5 rounded-full bg-green-800 text-green-200 text-xs">automerge</span>
      </div>

      {/* Projects */}
      <div className="mb-6">
        <h3 className={`text-sm font-semibold ${theme.textSecondary} mb-2`}>Projects</h3>
        <p className={`${theme.textSecondary} text-sm`}>None yet</p>
      </div>

      {/* Milestone */}
      <div className="mb-6">
        <h3 className={`text-sm font-semibold ${theme.textSecondary} mb-2`}>Milestone</h3>
        <p className={`${theme.textSecondary} text-sm`}>No milestone</p>
      </div>

      {/* Development */}
      <div className="mb-6">
        <h3 className={`text-sm font-semibold ${theme.textSecondary} mb-2`}>Development</h3>
        <p className={`${theme.textSecondary} text-sm mb-2`}>Successfully merging this pull request may close these issues.</p>
        <p className={`${theme.textSecondary} text-sm`}>None yet</p>
      </div>

      {/* Participants */}
      <div>
        <h3 className={`text-sm font-semibold ${theme.textSecondary} mb-2`}>4 participants</h3>
        <div className="flex space-x-1">
          <img src="https://avatars.githubusercontent.com/u/15782156?s=52&v=4" alt="YordanIliev2002" className="w-6 h-6 rounded-full" />
          <img src="https://avatars.githubusercontent.com/u/124599?s=52&v=4" alt="shadcn" className="w-6 h-6 rounded-full" />
          <img src="https://avatars.githubusercontent.com/u/19780885?s=52&v=4" alt="Jacksonmills" className="w-6 h-6 rounded-full" />
          <img src="https://avatars.githubusercontent.com/u/30011773?s=52&v=4" alt="matevegh" className="w-6 h-6 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default PRSidebar;
