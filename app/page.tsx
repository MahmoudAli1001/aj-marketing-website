"use client"

import HeroSection from "@/components/hero-section"
import { EnhancedServicesSection } from "@/components/enhanced-services-section"
import { EnhancedStatisticsSection } from "@/components/enhanced-statistics-section"
import { PartnersSection } from "@/components/partners-section"
import { EnhancedNewsletterSection } from "@/components/enhanced-newsletter-section"
import { Navbar } from "@/components/navbar"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { EnhancedCTASection } from "@/components/enhanced-cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <EnhancedServicesSection />
        <EnhancedStatisticsSection />
        <PartnersSection />
        <EnhancedCTASection />
        <EnhancedNewsletterSection />
      </main>
      <EnhancedFooter />
    </div>
  )
}
