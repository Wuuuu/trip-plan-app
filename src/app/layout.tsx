import { Nunito } from "@next/font/google";
import ClinetOnly from "./compoments/ClientOnly";
import Navbar from "./compoments/navbar/Navbar";
import Modal from "./compoments/modals/Modal";
import "./globals.css";

export const metadata = {
  title: "Trip Plan",
  description: "this is Trip Plan page",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClinetOnly>
          <Modal
            actionLabel="Submit"
            isOpen
            title="hello nextjs"
          />
          <Navbar />
        </ClinetOnly>
        {children}
      </body>
    </html>
  );
}
