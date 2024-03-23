import { Inter } from "next/font/google";
import "./globals.css";
import './assets/css/animate.css';
import './assets/css/LineIcons.css';
import './assets/css/tiny-slider.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "نوفاتك",
  description: "منصة نوفاتك التقنية",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
