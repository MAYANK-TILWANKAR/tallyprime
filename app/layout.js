import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TallyPrime Course | Learn Accounting Software | ICA Global Academy",
  description:
    "Master TallyPrime with GST in 3 months. 100% job placement support. Comprehensive accounting software course by ICA Global Academy. Enroll now!",
  keywords:
    "TallyPrime, GST, accounting software, ICA Global Academy, job placement, accounting course",
  author: "ICA Global Academy",
  openGraph: {
    title: "TallyPrime Course | Learn Accounting Software | ICA Global Academy",
    description:
      "Master TallyPrime with GST in 3 months. 100% job placement support. Comprehensive accounting software course by ICA Global Academy. Enroll now!",
    type: "website",
    url: "https://www.icaglobalacademy.com/tallyprime-course",
    image: "/images/tallyprime-course-og.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "TallyPrime Course | Learn Accounting Software | ICA Global Academy",
    description:
      "Master TallyPrime with GST in 3 months. 100% job placement support. Comprehensive accounting software course by ICA Global Academy. Enroll now!",
    image: "/images/tallyprime-course-twitter.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>
          TallyPrime Course | Learn Accounting Software | ICA Global Academy
        </title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://www.icaglobalacademy.com/tallyprime-course"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "TallyPrime Course",
              "description": "Master TallyPrime with GST in 3 months. 100% job placement support.",
              "provider": {
                "@type": "Organization",
                "name": "ICA Global Academy",
                "sameAs": "https://www.icaglobalacademy.com"
              }
            }
          `}
        </script>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
