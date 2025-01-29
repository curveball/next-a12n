
import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import './styles/globals.css';
import { ThemeProviders } from "./styles/theme-providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="#fff"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="#000"
      />
      <body className="bg-white text-black antialiased font-[family-name:var(--font-geist-sans)] min-h-screen">
        <ThemeProviders>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProviders>
      </body>
    </html>
  )
}
