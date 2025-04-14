import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import GitHubPRPage from "./components/GitHubPRPage";

function App() {
  return (
    <ThemeProvider>
      <GitHubPRPage />
    </ThemeProvider>
  );
}

export default App;
