/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Script from "next/script";
import Head from "next/head";

import "@/assets/css/remote.css";
import "@/assets/lib/animate/animate.min.css";
import "@/assets/lib/owlcarousel/assets/owl.carousel.min.css";
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/style.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NicheAI",
  description:
    "empowering businesses with advanced data analysis and insights through a user-friendly and conversational interface.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* <!-- Google Web Fonts --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <body>
        {children}

        <Script
          src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"
          strategy="beforeInteractive"
        />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" />

        <Script src="js/wow/wow.min.js" />
        <Script src="js/easing/easing.min.js" />
        <Script src="js/waypoints/waypoints.min.js" />
        <Script src="js/counterup/counterup.min.js" />
        <Script src="js/owlcarousel/owl.carousel.min.js" />

        <Script strategy="lazyOnload" src="js/main.js" />
      </body>
    </html>
  );
}
