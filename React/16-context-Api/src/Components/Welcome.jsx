import React, { useContext } from 'react'
import ThemeContext from '../store/ThemeContext';

const Welcome = () => {

  const { theme } = useContext(ThemeContext);
  console.log(theme);

  return (
        <h1 className= {` text-bold text-4xl ${theme == 'light' ? "text-gray-600 bg-slate-200" : "text-slate-200 bg-gray-800" }  p-2`}>Welcome to Theme Changing App. </h1>
  )
}

export default Welcome