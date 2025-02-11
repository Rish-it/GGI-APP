"use client";

import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch"; 

export function DarkModeToggle() {
  // Manage theme state
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Load theme preference from localStorage on page load
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  // Handle theme toggle
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      // Store theme preference in localStorage
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  // Apply dark mode to the root
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="flex items-center justify-center mt-4">
      <label htmlFor="theme-toggle" className="flex items-center cursor-pointer">
        <span className="mr-2">Light</span>
        <Switch
          id="theme-toggle"
          checked={isDarkMode}
          onCheckedChange={toggleTheme}
        />
        <span className="ml-2">Dark</span>
      </label>
    </div>
  );
}
