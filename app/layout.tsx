/* Components */
import { Providers } from "@/lib/providers";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import "@fontsource-variable/montserrat";


import "./styles/globals.css";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <main className="">
            <AppRouterCacheProvider>{props.children}</AppRouterCacheProvider>
          </main>
        </body>
      </html>
    </Providers>
  );
}
