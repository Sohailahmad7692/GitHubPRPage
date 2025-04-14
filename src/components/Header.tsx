import React, { useState } from 'react';
import { 
  ChevronDown, 
  Search, 
  Moon, 
  Sun, 
  Menu, 
  X
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { getThemeClasses } from '../utils/ThemeUtils';

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const theme = getThemeClasses(isDark);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`${theme.bgMain} border-b ${theme.border} py-4 px-6`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="mr-4">
            <svg className={`w-8 h-8 ${isDark ? 'text-white' : 'text-black'}`} viewBox="0 0 16 16">
              <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center">
              <span className="font-medium">Product</span>
              <ChevronDown size={16} className="ml-1" />
            </div>
            <div className="flex items-center">
              <span className="font-medium">Solutions</span>
              <ChevronDown size={16} className="ml-1" />
            </div>
            <div className="flex items-center">
              <span className="font-medium">Resources</span>
              <ChevronDown size={16} className="ml-1" />
            </div>
            <div className="flex items-center">
              <span className="font-medium">Open Source</span>
              <ChevronDown size={16} className="ml-1" />
            </div>
            <div className="flex items-center">
              <span className="font-medium">Enterprise</span>
              <ChevronDown size={16} className="ml-1" />
            </div>
            <span className="font-medium">Pricing</span>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative hidden sm:block">
            <div className={`flex items-center ${theme.bgSecondary} rounded px-3 py-1`}>
              <Search size={16} className={`${theme.textSecondary} mr-2`} />
              <span className={`${theme.textSecondary} text-sm`}>Search or jump to...</span>
              <div className={`border ${theme.border} rounded text-xs px-1 ml-2 ${theme.textSecondary}`}>/</div>
            </div>
          </div>
          
          {/* Theme toggle */}
          <button 
            onClick={toggleTheme}
            className={`${theme.textSecondary} p-1 rounded-full`}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <div className="flex items-center space-x-3">
            <button className={theme.textSecondary}>Sign in</button>
            <button className={`${theme.bgSecondary} ${theme.textMain} rounded-md px-3 py-1 border ${theme.border}`}>Sign up</button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden mt-4 py-4 border-t ${theme.border}`}>
          <div className="flex flex-col space-y-4">
            <a href="#" className="flex items-center">
              <span className="font-medium">Product</span>
              <ChevronDown size={16} className="ml-1" />
            </a>
            <a href="#" className="flex items-center">
              <span className="font-medium">Solutions</span>
              <ChevronDown size={16} className="ml-1" />
            </a>
            <a href="#" className="flex items-center">
              <span className="font-medium">Resources</span>
              <ChevronDown size={16} className="ml-1" />
            </a>
            <a href="#" className="flex items-center">
              <span className="font-medium">Open Source</span>
              <ChevronDown size={16} className="ml-1" />
            </a>
            <a href="#" className="flex items-center">
              <span className="font-medium">Enterprise</span>
              <ChevronDown size={16} className="ml-1" />
            </a>
            <a href="#" className="font-medium">Pricing</a>
            <div className={`flex items-center ${theme.bgSecondary} rounded px-3 py-1 mt-2`}>
              <Search size={16} className={`${theme.textSecondary} mr-2`} />
              <span className={`${theme.textSecondary} text-sm`}>Search or jump to...</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
