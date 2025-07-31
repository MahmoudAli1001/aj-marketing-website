import type React from "react"
import { Tajawal } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--font-tajawal",
})

export const metadata = {
  title: "AJ Marketing Solutions | حلول التسويق الرقمي",
  description:
    "نحول أحلام عملائنا إلى واقع مبهر ملموس - نحن شباب سعوديين متخصصون في التسويق الرقمي والتصوير وإدارة المحتوى الإبداعي",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${tajawal.variable} font-tajawal`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
