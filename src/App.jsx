import { lazy } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { lightTheme, darkTheme } from "./theme";
import "./App.css";
import LazyLoad from "./helpers/LazyLoad";
import useDarkMode from "./hooks/useDarkMode";

const Header = lazy(() => import("./components/Header"));
const Home = lazy(() => import("./components/Home"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  const { isLightMode, onChangeTheme } = useDarkMode();

  return (
    <ChakraProvider theme={isLightMode ? lightTheme : darkTheme}>
      <LazyLoad
        children={
          <Header isLightMode={isLightMode} toggleTheme={onChangeTheme} />
        }
      />
      <LazyLoad children={<Home />} />
      <LazyLoad children={<Footer />} />
    </ChakraProvider>
  );
}
