import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import theme from "./theme";
import './App.css';


export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Home />
      <Footer />
    </ChakraProvider>
  );
}
