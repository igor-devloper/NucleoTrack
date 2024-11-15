import type { Metadata } from "next";
import { Mulish }  from "next/font/google";
import "./globals.css";

const mulish = Mulish({
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "NucleoTrack - Monitoramento",
  description: "Site de Monitoramento de usinas da Nucleo energy",
};
// console.log("Payload: ", payload);
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mulish.className} antialiased dark`}
      >
        {children}
        
      </body>
    </html>
  );
}
