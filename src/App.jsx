import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import {lightTheme, darkTheme} from "./theme";
import './App.css';


export default function App() {

  // initial colorscheme detection
  const [isLightMode, setIsLightMode] = useState(
    !(
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    )
  );

  // watching for colorscheme change detection
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      setIsLightMode(e.matches ? false : true);
    });

  return (
    <ChakraProvider theme={isLightMode ? lightTheme : darkTheme} >
      <Header isLightMode={isLightMode} toggleTheme={() => setIsLightMode(!isLightMode)}/>
      <Home />
      <Footer />
    </ChakraProvider>
  );
}
