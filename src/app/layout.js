import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import SmoothScroll from "@/components/animation/smoothScroll";
import CircularCursor from "@/components/cursor/circularCursor";

export const metadata = {
  title: "Matang Mehra",
  description:
    "CloudTrains is a global AI, SaaS, and app development company building scalable digital products for startups and enterprises. We develop custom AI solutions, mobile apps, D2C and ecommerce platforms, and cloud-powered systems across USA, UK, India, Dubai, MENA, and Australia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="relative min-h-full flex flex-col min-w-full items-center">
        <SmoothScroll>
          <CircularCursor />
          <div
            id="gradientBackground"
            className="fixed top-0 left-0 min-w-full min-h-full blur-lg bg-[url('/img/gradient-background.jpeg')] brightness-50 -z-50 bg-cover bg-center bg-no-repeat"
          ></div>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
