import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { getThemeClasses } from "../utils/ThemeUtils";

export const PullRequestTabs: React.FC = () => {
  const { isDark } = useTheme();
  const theme = getThemeClasses(isDark);

  const tabs = [
    {
      id: "conversation",
      label: "Conversation",
      icon: (
        <svg className="w-4 h-4 mr-1" viewBox="0 0 16 16" fill="currentColor">
          <path d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z" />
        </svg>
      ),
      count: 3,
    },
    {
      id: "commits",
      label: "Commits",
      icon: (
        <svg className="w-4 h-4 mr-1" viewBox="0 0 16 16" fill="currentColor">
          <path d="M11.93 8.5a4.002 4.002 0 0 1-7.86 0H.75a.75.75 0 0 1 0-1.5h3.32a4.002 4.002 0 0 1 7.86 0h3.32a.75.75 0 0 1 0 1.5Zm-1.43-.75a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z" />
        </svg>
      ),
      count: 1,
    },
    {
      id: "checks",
      label: "Checks",
      icon: (
        <svg className="w-4 h-4 mr-1" viewBox="0 0 16 16" fill="currentColor">
          <path d="M2.5 1.75v11.5c0 .138.112.25.25.25h3.17a.75.75 0 0 1 0 1.5H2.75A1.75 1.75 0 0 1 1 13.25V1.75C1 .784 1.784 0 2.75 0h8.5C12.216 0 13 .784 13 1.75v7.736a.75.75 0 0 1-1.5 0V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13.274 9.537v-.001l-4.557 4.45a.75.75 0 0 1-1.055-.008l-1.943-1.95a.75.75 0 0 1 1.062-1.058l1.419 1.425 4.026-3.932a.75.75 0 1 1 1.048 1.074ZM4.75 4h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM4 7.75A.75.75 0 0 1 4.75 7h2a.75.75 0 0 1 0 1.5h-2A.75.75 0 0 1 4 7.75Z" />
        </svg>
      ),
      count: 5,
    },
    {
      id: "files",
      label: "Files changed",
      icon: (
        <svg className="w-4 h-4 mr-1" viewBox="0 0 16 16" fill="currentColor">
          <path d="M1 1.75C1 .784 1.784 0 2.75 0h7.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16H2.75A1.75 1.75 0 0 1 1 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25V4.664a.25.25 0 0 0-.073-.177l-2.914-2.914a.25.25 0 0 0-.177-.073ZM8 3.25a.75.75 0 0 1 .75.75v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0V7h-1.5a.75.75 0 0 1 0-1.5h1.5V4A.75.75 0 0 1 8 3.25Zm-3 8a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z" />
        </svg>
      ),
      count: 1,
    },
  ];

  return (
    <div className={`border-b ${theme.border} ${theme.bgMain}`}>
      <div className="px-4 flex justify-between items-center overflow-x-auto">
        <div className="flex-grow overflow-x-auto">
          <nav className="flex" aria-label="Pull request tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`
                  flex items-center py-3 px-4 text-sm font-medium relative
                  ${
                    tab.id === "conversation"
                      ? `${theme.textMain} aria-current="page"`
                      : `${theme.textSecondary} hover:${theme.textMain}`
                  }
                `}
              >
                <div className="flex items-center">
                  {tab.icon}
                  <span>{tab.label}</span>
                  {tab.count > 0 && (
                    <span
                      className={`ml-2 rounded-full ${theme.bgTertiary} px-2 py-0.5 text-xs`}
                    >
                      {tab.count}
                    </span>
                  )}
                </div>
                {tab.id === "conversation" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500" />
                )}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-2 text-sm">
          <span className="text-green-500">+{1}</span>
          <span className="text-red-500">−{1}</span>
          <div className="flex">
            <span
              className={`block w-2 h-4 ${
                1 > 0 ? "bg-green-500" : theme.bgTertiary
              }`}
            ></span>
            <span
              className={`block w-2 h-4 ${
                1 > 0 ? "bg-red-500" : theme.bgTertiary
              }`}
            ></span>
            <span className={`block w-2 h-4 ${theme.bgTertiary}`}></span>
            <span className={`block w-2 h-4 ${theme.bgTertiary}`}></span>
            <span className={`block w-2 h-4 ${theme.bgTertiary}`}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PullRequestTabs;
