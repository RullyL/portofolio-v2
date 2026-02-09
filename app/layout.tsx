import "antd/dist/reset.css";
import "../styles/globals.css";

import React from "react";
import { ConfigProvider, theme as antdTheme } from "antd";
import { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "../theme/ThemeProvider";
import LocaleProvider from "../i18n/LocaleProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RL — Portfolio",
  description: "Frontend Web Developer — clean, fast, delightful web experiences.",
  metadataBase: new URL("https://rl.dev"),
  icons: {
    icon: "/icon/rl-logo.png",
    apple: "/icon/rl-logo.png",
  },
  openGraph: {
    images: ["/icon/rl-logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${poppins.variable}`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme-preference');if(t==='dark'){document.documentElement.classList.add('dark');}else if(t==='light'){document.documentElement.classList.remove('dark');}else{document.documentElement.classList.add('dark');}}catch(e){} })()`,
          }}
        />
        <ThemeProvider>
          <LocaleProvider>
            {/* Ant Design theme will be switched inside ThemeProvider using class on html */}
            <ConfigProvider
              theme={{
                token: { colorPrimary: "var(--color-primary)" },
              }}
            >
              <div className="min-h-screen flex flex-col bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
            </ConfigProvider>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
