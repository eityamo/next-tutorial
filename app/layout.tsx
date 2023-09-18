import Link from "next/link";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head />
      <body>
        <ChakraProvider>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
