import GlobalStyle from "./styles/globalStyles";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Preahvihear } from "next/font/google";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  variable: "--font-poppins",
});

const preahvihear = Preahvihear({
  subsets: ["latin"],
  weight: "400"
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});




export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} ${preahvihear.variable} ${jakarta.variable}`}
    >
      <body suppressHydrationWarning>
        <GlobalStyle />
        {children}
      </body>
    </html>
  );
}

