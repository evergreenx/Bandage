/* Components */
import { Providers } from "@/lib/providers";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import "@fontsource-variable/montserrat";

import "./styles/globals.css";
import TopHeader from "./components/Nav/top-header";
import Header from "./components/Nav/header";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <AppRouterCacheProvider>
            <main className="">
              <TopHeader />
              <Header />
              {props.children}
            </main>
          </AppRouterCacheProvider>
        </body>
      </html>
    </Providers>
  );
}
