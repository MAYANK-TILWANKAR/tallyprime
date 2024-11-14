import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";
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
      <header>
        <Head>
          <title>
            TallyPrime Course | Learn Accounting Software | ICA Global Academy
          </title>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
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
        <Script>
          {`
              
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1609493679586075');
fbq('track', 'PageView');
              `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style="display:none"
            src="https://www.facebook.com/tr?id=1609493679586075&ev=PageView&noscript=1"
          />
        </noscript>
      </header>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
