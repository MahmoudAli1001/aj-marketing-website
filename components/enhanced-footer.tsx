"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  Send,
  ExternalLink,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { useState } from "react"

export function EnhancedFooter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubscribed(true)
    setIsLoading(false)
    setEmail("")

    // Reset after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  const quickLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "من نحن", href: "/about" },
    { name: "الخدمات", href: "/services" },
    { name: "أعمالنا", href: "/work" },
    { name: "شركاء النجاح", href: "/partners" },
    { name: "تواصل معنا", href: "/contact" },
  ]

  const services = [
    { name: "تصميم وبرمجة المواقع", href: "/services#web-development" },
    { name: "التسويق الإلكتروني", href: "/services#digital-marketing" },
    { name: "التصاميم والإنفوجرافيك", href: "/services#design" },
    { name: "التصوير والمونتاج", href: "/services#photography" },
    { name: "إدارة المحتوى", href: "/services#content-management" },
    { name: "التحليل والإحصائيات", href: "/services#analytics" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", color: "#1877F2", name: "Facebook" },
    { icon: Twitter, href: "#", color: "#1DA1F2", name: "Twitter" },
    { icon: Instagram, href: "#", color: "#E4405F", name: "Instagram" },
    { icon: Linkedin, href: "#", color: "#0A66C2", name: "LinkedIn" },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Clean background - no patterns */}
      <div className="container px-4 sm:px-6 py-16 sm:py-20 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Company Info - Takes 4 columns on large screens */}
          <div className="lg:col-span-4 space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/logo-aj.png"
                alt="AJ Marketing Solutions"
                width={240}
                height={85}
                className="h-16 sm:h-20 w-auto mb-4 sm:mb-6 brightness-0 invert"
              />
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                نحول أحلام عملائنا إلى واقع مبهر ملموس من خلال خدماتنا المتميزة في التسويق الرقمي والتصوير والإبداع
              </p>
            </motion.div>

            {/* Enhanced Newsletter in Footer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-3 sm:space-y-4"
            >
              <h4 className="font-bold text-lg sm:text-xl text-white mb-3 sm:mb-4 flex items-center">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 ml-2 text-[#36a1d7]" />
                النشرة الإخبارية
              </h4>
              <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
                اشترك في نشرتنا الإخبارية لتصلك آخر الأخبار والعروض
              </p>

              {/* Success State */}
              {isSubscribed && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-900/30 border border-green-700/50 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-3 sm:mb-4"
                >
                  <div className="flex items-center space-x-2 text-green-400">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-semibold text-sm sm:text-base">تم الاشتراك بنجاح!</span>
                  </div>
                </motion.div>
              )}

              {/* Newsletter Form */}
              {!isSubscribed && (
                <form onSubmit={handleNewsletterSubmit} className="space-y-2 sm:space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <Input
                      type="email"
                      placeholder="أدخل بريدك الإلكتروني"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-white/10 border-gray-600 text-white placeholder:text-gray-400 focus:border-[#36a1d7] rounded-lg sm:rounded-xl py-2 sm:py-3 text-sm sm:text-base"
                      required
                    />
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full sm:w-auto bg-[#36a1d7] hover:bg-[#66b19e] px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 relative overflow-hidden group text-sm sm:text-base"
                      >
                        <span className="relative z-10 flex items-center">
                          {isLoading ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                              className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white border-t-transparent rounded-full ml-2"
                            />
                          ) : (
                            <Send className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300 scale-x-[-1]" />
                          )}
                          {isLoading ? "جاري..." : "اشتراك"}
                        </span>

                        {/* Shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                      </Button>
                    </motion.div>
                  </div>
                  <p className="text-xs text-gray-500">نحترم خصوصيتك ولن نشارك بياناتك</p>
                </form>
              )}
            </motion.div>
          </div>

          {/* Quick Links - Takes 2 columns */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-lg sm:text-xl text-white mb-6 sm:mb-8">روابط سريعة</h3>
              <nav className="space-y-3 sm:space-y-4">
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-[#36a1d7] transition-all duration-300 flex items-center group text-sm sm:text-base lg:text-lg"
                    >
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 sm:ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-x-[-1]" />
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </div>

          {/* Services - Takes 3 columns */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-lg sm:text-xl text-white mb-6 sm:mb-8">خدماتنا</h3>
              <nav className="space-y-3 sm:space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      href={service.href}
                      className="text-gray-300 hover:text-[#66b19e] transition-all duration-300 flex items-center group text-sm sm:text-base lg:text-lg"
                    >
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 sm:ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-x-[-1]" />
                      {service.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </div>

          {/* Contact Info - Takes 3 columns */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8"
            >
              <h3 className="font-bold text-lg sm:text-xl text-white mb-6 sm:mb-8">معلومات التواصل</h3>

              <div className="space-y-4 sm:space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white/5 rounded-lg sm:rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 ml-2 sm:h-12 bg-[#36a1d7]/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5  sm:h-6 sm:w-6 text-[#36a1d7]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1 text-sm sm:text-base">البريد الإلكتروني</p>
                    <a
                      href="mailto:Ajmarkting.s@gmail.com"
                      className="text-gray-300 hover:text-[#36a1d7] transition-colors duration-300 text-sm sm:text-base"
                    >
                      Ajmarkting.s@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start sm:space-x-4 p-3 sm:p-4 bg-white/5 rounded-lg sm:rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 ml-2 sm:h-12 bg-[#66b19e]/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-[#66b19e]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1 text-sm sm:text-base">رقم الهاتف</p>
                    <a
                      href="tel:+966502959253"
                      className="text-gray-300 hover:text-[#66b19e] transition-colors duration-300 text-sm sm:text-base"
                    >
                      +966502959253
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white/5 rounded-lg sm:rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 ml-2 sm:h-12 bg-[#8bbb4c]/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5  sm:h-6 sm:w-6 text-[#8bbb4c]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1 text-sm sm:text-base">العنوان</p>
                    <p className="text-gray-300 text-sm sm:text-base">تبوك، المملكة العربية السعودية</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Media */}
              <div className="space-y-3 sm:space-y-4">
                <h4 className="font-semibold text-white text-base sm:text-lg">تابعنا على</h4>
                <div className="flex justify-start items-center gap-3 sm:gap-4 flex-wrap">
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={social.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={social.href}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 group relative overflow-hidden"
                        style={{ backgroundColor: `${social.color}20` }}
                      >
                        <social.icon
                          className="h-5 w-5 sm:h-6 sm:w-6 transition-colors duration-300"
                          style={{ color: social.color }}
                        />
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg sm:rounded-xl"
                          style={{ backgroundColor: social.color }}
                        />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-6 sm:pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left text-sm sm:text-base">
              © {new Date().getFullYear()} AJ Marketing Solutions. جميع الحقوق محفوظة
            </p>
            
            <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
              >
                سياسة الخصوصية
                <ExternalLink className="w-2 h-2 sm:w-3 sm:h-3 ml-1" />
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
              >
                الشروط والأحكام
                <ExternalLink className="w-2 h-2 sm:w-3 sm:h-3 ml-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
