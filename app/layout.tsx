/* Components */
import { Providers } from "@/lib/providers";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import "@fontsource-variable/montserrat";

import "./styles/globals.css";
import TopHeader from "./components/Nav/top-header";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
         
            <AppRouterCacheProvider>
            <main className="">
              <TopHeader />
              {props.children}
              </main>
            </AppRouterCacheProvider>

        </body>
      </html>
    </Providers>
  );
}
