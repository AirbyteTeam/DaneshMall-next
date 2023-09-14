import "../styles/globals.css";
import "../styles/main.css";
import "animate.css/animate.min.css";
export const metadata = {
  title: "دانش مال",
  description: "نخستین و بزرگترین نمایشگاه و بازار محصولات دانش بنیان",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
