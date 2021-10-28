import { extendTheme } from "@chakra-ui/react";

export const lightTheme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "#F0F0F0",
      },
      fonts: {
        heading: "Open Sans",
        body: "Open Sans",
      },
    },
  },
});

export const darkTheme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "#222222",
        color: "#F0F0F0",
      },
      fonts: {
        heading: "Open Sans",
        body: "Open Sans",
      },
    },
  },
});

export default lightTheme;
