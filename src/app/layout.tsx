import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Dharmatej Mallampati | Software Engineer",
  description:
    "Portfolio of Dharmatej Mallampati, a Computer Science graduate focused on building production-oriented software across backend engineering, Generative AI, retrieval systems, and data engineering.",
  metadataBase: new URL("https://dharmatejmallampati.dev"),
  keywords: [
    "Dharmatej Mallampati",
    "Software Engineer",
    "Backend Engineering",
    "AI Applications",
    "Generative AI",
    "RAG Systems",
    "Data Engineering",
    "Databricks",
    "FastAPI",
    "Python",
    "HashedIn by Deloitte",
    "SRM University",
  ],
  authors: [{ name: "Dharmatej Mallampati", url: "https://dharmatejmallampati.dev" }],
  creator: "Dharmatej Mallampati",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dharmatejmallampati.dev",
    title: "Dharmatej Mallampati | Software Engineer",
    description:
      "Backend systems, AI applications, and data platforms. Computer Science graduate from SRM University.",
    siteName: "Dharmatej Mallampati Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dharmatej Mallampati | Software Engineer",
    description:
      "Backend systems, AI applications, and data platforms.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const saved = localStorage.getItem('portfolio-theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--ca-surface)] text-[var(--ca-ink)] antialiased selection:bg-[var(--ca-yellow)] selection:text-[var(--ca-ink)]">
        {children}
      </body>
    </html>
  );
}
