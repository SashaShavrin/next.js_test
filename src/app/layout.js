import "./globals.css";
import style from "./style/style.module.css";

export const metadata = {
  title: "FOOD SHOP 🍕",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
