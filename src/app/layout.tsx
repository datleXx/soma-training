import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { TRPCReactProvider } from "~/trpc/react";
import VerticalSideBar from "./_components/dashboard/vertical-side-bar";
import Header from "./_components/home/header";
import ClientWrapper from "./_components/utils/ClientWrapper";
import { NextUIProvider } from "@nextui-org/react";

export const metadata: Metadata = {
  title: "Soma Capital",
  description: "Generated by XuanDatLe using t3",
  icons: [{ rel: "icon", url: "https://www.somaportal.com/gray-logo.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <ClientWrapper>
            <div className="flex">
              <VerticalSideBar />
              <div className="">
                <Header />
                <main className="ml-28 mt-[65px]">
                  <NextUIProvider>{children}</NextUIProvider>
                </main>
              </div>
            </div>
          </ClientWrapper>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
