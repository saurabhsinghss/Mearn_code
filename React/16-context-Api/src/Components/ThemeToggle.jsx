import React, { useContext } from 'react'
import ThemeContext from '../store/ThemeContext'

const ThemeToggle = () => {

  const {theme,toggleTheme} = useContext(ThemeContext)
  return (
    <button className={`m-4 border-gray-500 ${theme === 'light' ? "bg-slate-200 text-gray-800" : "text-slate-200 bg-gray-800"} p-2 text-xl rounded `} onClick={toggleTheme}>Change Theme to {theme === 'light' ? 'dark' : 'light'}</button>
  )
}

export default ThemeToggle