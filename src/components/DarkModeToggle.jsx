import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`text-xl ${darkMode ? "text-white" : "text-black"}`}
    >
      {darkMode ? <Sun /> : <Moon />}
    </button>
  );
};

export default DarkModeToggle;
