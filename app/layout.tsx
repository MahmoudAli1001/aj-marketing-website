import type React from "react"
import { Tajawal } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { EnhancedFooter } from "@/components/enhanced-footer"

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--font-tajawal",
})

export const metadata = {
  title: {
    default: "AJ Marketing | حلول التسويق الرقمي والتصميم الإبداعي في السعودية",
    template: "%s | AJ Marketing"
  },
  description: "نحول أحلام عملائنا إلى واقع مبهر ملموس - شباب سعوديين متخصصون في التسويق الرقمي، تصميم المواقع، تطوير التطبيقات، والتصوير الاحترافي. خدمات رقمية شاملة تواكب أحدث التطورات التقنية.",
  keywords: [
    "AJ Marketing",
    "تسويق رقمي السعودية",
    "تصميم مواقع",
    "تطوير تطبيقات",
    "تصوير احترافي",
    "موشن جرافيك",
    "انفوجرافيك",
    "إدارة محتوى",
    "تعليق صوتي",
    "SEO",
    "إعلانات مدفوعة",
    "تحليل بيانات",
    "شركة تسويق سعودية",
    "حلول رقمية",
    "تصميم جرافيك"
  ].join(", "),
  authors: [{ name: "AJ Marketing Team" }],
  creator: "AJ Marketing",
  publisher: "AJ Marketing",
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
    locale: "ar_SA",
    url: "https://ajmarketing.sa",
    siteName: "AJ Marketing",
    title: "AJ Marketing | حلول التسويق الرقمي والتصميم الإبداعي",
    description: "شباب سعوديين متخصصون في التسويق الرقمي والتصوير وإدارة المحتوى الإبداعي",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AJ Marketing - حلول التسويق الرقمي",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AJ Marketing | حلول التسويق الرقمي",
    description: "نحول أحلام عملائنا إلى واقع مبهر ملموس",
    images: ["/images/twitter-image.jpg"],
    creator: "@ajmarketing_sa",
    site: "@ajmarketing_sa",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://ajmarketing.sa",
    languages: {
      "ar-SA": "https://ajmarketing.sa/ar",
      "en-US": "https://ajmarketing.sa/en",
    },
  },
  category: "Technology",
  classification: "Digital Marketing Agency",
  other: {
    "theme-color": "#36a1d7",
    "color-scheme": "light",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "AJ Marketing",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#36a1d7",
    "msapplication-config": "/browserconfig.xml",
  },
  generator: "Next.js",
  applicationName: "AJ Marketing Website",
  referrer: "origin-when-cross-origin",
  manifest: "/site.webmanifest",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Organization Schema for the whole site
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AJ Marketing",
    "alternateName": "AJ Marketing Solutions",
    "description": "شركة متخصصة في التسويق الرقمي والحلول التقنية المبتكرة",
    "url": "https://ajmarketing.sa",
    "logo": "https://ajmarketing.sa/logo.png",
    "foundingDate": "2019",
    "founders": [
      {
        "@type": "Person",
        "name": "AJ Marketing Team"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "SA",
      "addressRegion": "Riyadh Province",
      "addressLocality": "Riyadh"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+966-XX-XXX-XXXX",
        "contactType": "customer service",
        "areaServed": "SA",
        "availableLanguage": ["Arabic", "English"]
      }
    ],
    "sameAs": [
      "https://twitter.com/ajmarketing_sa",
      "https://linkedin.com/company/ajmarketing",
      "https://instagram.com/ajmarketing_sa",
      "https://facebook.com/ajmarketing.sa"
    ],
    "knowsAbout": [
      "Digital Marketing",
      "Web Design",
      "Mobile App Development", 
      "Graphic Design",
      "Photography",
      "Video Production",
      "SEO",
      "Social Media Marketing"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Saudi Arabia"
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AJ Marketing",
    "url": "https://ajmarketing.sa",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ajmarketing.sa/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema)
          }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" sizes="32x32" href="/favicon.ico" />
        {/* <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */}
        <link rel="manifest" href="/site.webmanifest" />
        {/* <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#36a1d7" /> */}
        <meta name="msapplication-TileColor" content="#36a1d7" />
        <meta name="theme-color" content="#36a1d7" />
      </head>
      <body className={`${tajawal.variable} font-tajawal`}>
        <Navbar />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <EnhancedFooter />
      </body>
    </html>
  )
}
