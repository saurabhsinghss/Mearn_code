import Welcome from "./Components/Welcome";

import ThemeToggle from "./Components/ThemeToggle";
import { ThemeProvider } from "./store/ThemeContext";



function App() {



  return (
    
    <ThemeProvider>
      <Welcome />
      <ThemeToggle />

    </ThemeProvider>
    
  );
}

export default App;
