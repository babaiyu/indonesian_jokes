import { useState } from "react";
import { ChakraProvider, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import {lightTheme, darkTheme} from "./theme";
import './App.css';


export default function App() {

  const [isLightMode, setIsLightMode] = useState(true);

  return (
    <ChakraProvider theme={isLightMode ? lightTheme : darkTheme} >
      <Header isLightMode={isLightMode} toggleTheme={() => setIsLightMode(!isLightMode)}/>
      <Home />
      <Footer />
    </ChakraProvider>
  );
}
