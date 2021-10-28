import { useState, Suspense, lazy } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { lightTheme, darkTheme } from "./theme";
import "./App.css";
import LazyLoad from "./helpers/LazyLoad";

const Header = lazy(() => import("./components/Header"));
const Home = lazy(() => import("./components/Home"));
const Footer = lazy(() => import("./components/Footer"));

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
    <ChakraProvider theme={isLightMode ? lightTheme : darkTheme}>
      <LazyLoad
        children={
          <Header
            isLightMode={isLightMode}
            toggleTheme={() => setIsLightMode(!isLightMode)}
          />
        }
      />
      <LazyLoad children={<Home />} />
      <LazyLoad children={<Footer />} />
    </ChakraProvider>
  );
}
