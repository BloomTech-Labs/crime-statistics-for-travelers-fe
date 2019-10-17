import React from 'react'
import useDarkMode from './useDarkMode.hook'

const DarkModeSwitch = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
    </div>
  )
}

export default DarkModeSwitch
