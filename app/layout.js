import { Poppins, DM_Sans } from "next/font/google";
import "./globals.css";

const dm_sans_set = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-dm_sans",
});
const poppins_set = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dm_sans_set.variable} ${dm_sans_set.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}