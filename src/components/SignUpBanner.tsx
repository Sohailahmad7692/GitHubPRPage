import React from "react";
import { useTheme } from "../context/ThemeContext";
import { getThemeClasses } from "../utils/ThemeUtils";

export const SignupBanner: React.FC = () => {
  const { isDark } = useTheme();
  const theme = getThemeClasses(isDark);

  return (
    <div
      className={`py-4 px-6 rounded-lg border bg-[#bb800926] border-[#bb800966]`}
    >
      <div className="flex flex-wrap items-center gap-3">
        <button
          className={`${theme.buttonPrimary} text-white font-medium py-2 px-4 rounded-md`}
        >
          Sign up for free
        </button>

        <span className={`${theme.textMain}`}>
          to join this conversation on GitHub.
        </span>

        <span className={`${theme.textSecondary}`}>
          Already have an account?
        </span>

        <button className={`${theme.textLink} font-medium hover:underline`}>
          Sign in to comment
        </button>
      </div>
    </div>
  );
};

export default SignupBanner;
