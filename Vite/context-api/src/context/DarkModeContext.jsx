import { createContext, useState } from "react";

const DarkModeContext = createContext();

const DarkModeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  return (
    <div>
      <DarkModeContext.Provider>{props.children}</DarkModeContext.Provider>
    </div>
  );
};

export { DarkModeContext, DarkModeProvider };
