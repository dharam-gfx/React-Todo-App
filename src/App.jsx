import React, { useEffect, useState } from 'react'
import TODO from './Pages/TODO'
import { ThemeProvider } from './context/theme'
import { ThemeButton } from './Components/ThemeButton';

const App = () => {
  const [themeMode, setThemeMode] = useState( localStorage.getItem( "themeMode" ) || "light" );
  const darkTheme = () => {
    setThemeMode( "dark" );
  }
  const lightTheme = () => {
    setThemeMode( "light" );
  }

  useEffect( () => {
    const root = document.querySelector( "html" );
    root.classList.remove( "dark", "light" );
    root.classList.add( themeMode );
    localStorage.setItem( "themeMode", themeMode )
  }, [themeMode] )

  return (
    <div >
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <ThemeButton />
      </ThemeProvider>
      <TODO />
    </div>
  )
}


export default App
