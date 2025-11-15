import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ChatBot from "@/components/ChatBot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  title: "AI 바이브코딩 무료 비밀특강 - 단 하루 만에 나만의 파이썬 프로그램 완성",
  description: "1인 지식창업자와 소상공인을 위한 AI 바이브코딩 무료 특강. 코딩 지식 없이도 자동화 시스템을 구축하고 실질적인 매출로 연결하세요.",
  keywords: ["AI", "바이브코딩", "파이썬", "자동화", "1인창업", "지식창업", "무료특강", "AI 코딩", "프로그래밍 교육", "온라인 강의"],
  authors: [{ name: "BSD - Business System Development" }],
  creator: "BSD",
  publisher: "BSD",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://ai-vibecoding.vercel.app",
    siteName: "AI 바이브코딩",
    title: "AI 바이브코딩 무료 비밀특강 - 단 하루 만에 나만의 파이썬 프로그램",
    description: "코딩 지식 없이도 AI와 함께라면 가능합니다. 1인 지식창업자와 소상공인을 위한 실전 자동화 프로그램 구축 특강",
    images: [
      {
        url: "/test.png",
        width: 1200,
        height: 630,
        alt: "AI 바이브코딩 무료 비밀특강 - BSD",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI 바이브코딩 무료 비밀특강 - 단 하루 만에 나만의 파이썬 프로그램",
    description: "코딩 지식 없이도 AI와 함께라면 가능합니다. 1인 지식창업자를 위한 실전 자동화 프로그램 구축",
    images: ["/test.png"],
    creator: "@BSD_Dev",
  },
  verification: {
    google: "your-google-verification-code",
    other: {
      "naver-site-verification": "your-naver-verification-code",
    },
  },
  alternates: {
    canonical: "https://ai-vibecoding.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'AI 바이브코딩',
    description: '1인 지식창업자와 소상공인을 위한 AI 바이브코딩 무료 특강',
    url: 'https://ai-vibecoding.vercel.app',
    logo: 'https://ai-vibecoding.vercel.app/test.png',
    image: 'https://ai-vibecoding.vercel.app/test.png',
    founder: {
      '@type': 'Organization',
      name: 'BSD - Business System Development',
    },
    offers: {
      '@type': 'Offer',
      name: 'AI 바이브코딩 무료 비밀특강',
      description: '단 하루 만에 나만의 파이썬 프로그램 완성',
      price: '0',
      priceCurrency: 'KRW',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <html lang="ko" className="dark" suppressHydrationWarning>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${inter.variable} antialiased font-sans`} suppressHydrationWarning>
        {GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
        {children}
        <ChatBot />
      </body>
    </html>
  );
}
