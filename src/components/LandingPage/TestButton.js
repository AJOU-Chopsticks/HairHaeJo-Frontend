import React, { useEffect, useState } from "react";

function TestButton() {
  const [dark, setDark] = useState("기본모드");

  const toggleDarkMode = () => {
    if (localStorage.getItem("theme") === "dark") {
      localStorage.removeItem("theme");
      document.documentElement.classList.remove("dark");
      setDark("기본모드");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark("다크모드");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setDark("다크모드");
    }
  }, []);

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      onClick={toggleDarkMode}
    >
      {dark}
    </button>
  );
}

export default TestButton;
