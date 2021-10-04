import { ChakraProvider } from "@chakra-ui/react";
import Home from "./components/Home";
import theme from "./theme";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
}
