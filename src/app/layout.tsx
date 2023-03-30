import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import PromptInput from "@/components/PromptInput";
import ToastWrapper from "@/components/ToastWrapper";
const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});
export const metadata: Metadata = {
  title: "OpenAI Image Generator",
  description:
    "OpenAI prompt and Image Generator built with Next.js and Azure Functions",
  icons: {
    icon: "/openAi.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-montserrat `}>
        <ToastWrapper>
          <Header />
          <PromptInput />
          {children}
        </ToastWrapper>
      </body>
    </html>
  );
}
