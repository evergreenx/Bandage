"use client";

/* Core */
import { Provider } from "react-redux";

/* Instruments */
import { reduxStore } from "@/lib/redux";
import { ThemeProvider, createTheme } from "@mui/material";

export const Providers = (props: React.PropsWithChildren) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#737373",
        dark : '#252B42'
      },
    },

    typography: {
      fontFamily: ["Montserrat Variable", "sans-serif"].join(","),
    },
  });
  return (
    <Provider store={reduxStore}>
      {/* mui provider */}
      
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </Provider>
  );
};
