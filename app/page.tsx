"use client"

import Head from "next/head"
import HeroSection from "@/components/hero-section"
import { EnhancedServicesSection } from "@/components/enhanced-services-section"
import { EnhancedStatisticsSection } from "@/components/enhanced-statistics-section"
import { PartnersSection } from "@/components/partners-section"
import { EnhancedNewsletterSection } from "@/components/enhanced-newsletter-section"
import { Navbar } from "@/components/navbar"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { EnhancedCTASection } from "@/components/enhanced-cta-section"

export default function HomePage() {
  // Homepage Structured Data
  const homepageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AJ Marketing - الصفحة الرئيسية",
    "description": "نحول أحلام عملائنا إلى واقع مبهر ملموس - شباب سعوديين متخصصون في التسويق الرقمي والتصوير وإدارة المحتوى الإبداعي",
    "url": "https://ajmarketing.sa",
    "mainEntity": {
      "@type": "Organization",
      "name": "AJ Marketing"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "الرئيسية",
          "item": "https://ajmarketing.sa"
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageSchema)
        }}
      />
      
      <div className="min-h-screen">
        <main>
          <section aria-label="قسم البطل الرئيسي">
            <HeroSection />
          </section>
          
          <section aria-label="قسم خدماتنا المتميزة" id="services">
            <h2 className="sr-only">خدماتنا المتميزة</h2>
            <EnhancedServicesSection />
          </section>
          
          <section aria-label="قسم الإحصائيات والإنجازات" id="stats">
            <h2 className="sr-only">إحصائياتنا وإنجازاتنا</h2>
            <EnhancedStatisticsSection />
          </section>
          
          <section aria-label="قسم شركائنا المميزين" id="partners">
            <h2 className="sr-only">شركاؤنا المميزون</h2>
            <PartnersSection />
          </section>
          
          <section aria-label="قسم دعوة للعمل" id="cta">
            <h2 className="sr-only">ابدأ مشروعك معنا</h2>
            <EnhancedCTASection />
          </section>
          
          <section aria-label="قسم النشرة البريدية" id="newsletter">
            <h2 className="sr-only">اشترك في نشرتنا البريدية</h2>
            <EnhancedNewsletterSection />
          </section>
        </main>
      </div>
    </>
  )
}
