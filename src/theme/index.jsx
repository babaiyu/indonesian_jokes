import { extendTheme } from "@chakra-ui/react";


export const lightTheme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "white",
      },
      fonts: {
        heading: "Open Sans",
        body: "Open Sans",
      },
    },
  }
})

export const darkTheme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "black",
        color:"#EDF3CB"
      },
      fonts: {
        heading: "Open Sans",
        body: "Open Sans",
      },
    },
  }
})

export default lightTheme