import React, { useState } from 'react'

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false)

  const handleClick = () => {
    setDarkMode(!darkMode)

    document.body.style.backgroundColor = !darkMode ? '#121212' : 'white'
    document.body.style.color = !darkMode ? 'white' : 'black'
  }

  return (
    <button onClick={handleClick}>
      Toggle {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}

export default DarkModeToggle