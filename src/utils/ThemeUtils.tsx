/**
 * Generate theme-specific classes based on the current theme
 */
export const getThemeClasses = (isDark: boolean) => {
  return {
    bgMain: isDark ? 'bg-gray-900' : 'bg-white',
    bgSecondary: isDark ? 'bg-gray-800' : 'bg-gray-50',
    bgTertiary: isDark ? 'bg-gray-700' : 'bg-gray-100',
    textMain: isDark ? 'text-gray-100' : 'text-gray-900',
    textSecondary: isDark ? 'text-gray-400' : 'text-gray-600',
    textLink: isDark ? 'text-blue-400' : 'text-blue-600',
    border: isDark ? 'border-gray-700' : 'border-gray-200',
    buttonPrimary: isDark ? 'bg-green-600 hover:bg-green-700' : 'bg-green-600 hover:bg-green-700',
    buttonSecondary: isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300',
    mergedBadge: isDark ? 'bg-purple-700 text-white' : 'bg-purple-100 text-purple-800',
    navTabActive: isDark ? 'border-orange-500 text-white' : 'border-orange-500 text-black'
  };
};

export type ThemeClasses = ReturnType<typeof getThemeClasses>;
