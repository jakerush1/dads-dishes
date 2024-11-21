import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ThemeProvider } from "~/components/theme-provider";
import { Footer } from "~/components/footer";
import { Nav } from "~/components/nav";
import { Domine } from "next/font/google";

const domine = Domine({
  subsets: ["latin"],
  variable: "--font-domine",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://recipesfromdad.com"),
  title: {
    default: "Dad's Dishes",
    template: "%s | Dad's Dishes",
  },
  description: "A collection of recipes and random thoughts from Mark Rush.",
  openGraph: {
    title: "Dad's Dishes",
    description: "A collection of recipes and random thoughts from Mark Rush.",
    type: "website",
    images: [
      {
        url: "https://utfs.io/f/4OOzxA6pSlL7eMlWItNu7s3DGkZJPnoW6dT1R5NMSVOfAywX",
        width: 2496,
        height: 1664,
        alt: "Dad's Dishes - Home Cooking and Random Thoughts",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${domine.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Nav />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
