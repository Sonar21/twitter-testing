import type { Metadata } from "next"
import { Providers } from "./components/providers";
import {ClerkProvider} from "@clerk/nextjs";

import "./globals.css"
import SideMenu from "@/components/SideMenu";

export const metadata: Metadata = {
  title: "JStack App",
  description: "Created using JStack",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
    <html lang="en">

      <body className="antialiased">
        <div className="flex min-h-screen">
          <main className="flex-1 transition-all duration-300">
        <SideMenu/>
        <Providers>{children}</Providers>
        </main>
        </div>
      </body>
    </html>
   </ClerkProvider>
  );
}
