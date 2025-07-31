"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-white border-t border-gray-200">
      <div className="container px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and About */}
          <div className="space-y-6 md:col-span-2">
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <Image
                src="/images/logo-aj.png"
                alt="AJ Marketing Solutions"
                width={280}
                height={100}
                className="h-20 w-auto"
              />
            </motion.div>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">{t("footer.description")}</p>

            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-gray-900">{t("footer.newsletter.title")}</h4>
              <p className="text-gray-600">{t("footer.newsletter.description")}</p>
              <div className="flex space-x-2 max-w-sm">
                <Input
                  placeholder={t("footer.newsletter.placeholder")}
                  className="flex-1 border-gray-300 focus:border-[#36a1d7]"
                />
                <Button className="bg-[#36a1d7] hover:bg-[#66b19e] px-6">{t("footer.newsletter.subscribe")}</Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg text-gray-900">{t("footer.quickLinks")}</h3>
            <nav className="flex flex-col space-y-3">
              {[
                { name: t("footer.home"), href: "/" },
                { name: t("footer.about"), href: "/about" },
                { name: t("footer.services"), href: "/services" },
                { name: t("footer.work"), href: "/work" },
                { name: t("footer.partners"), href: "/partners" },
                { name: t("footer.contact"), href: "/contact" },
              ].map((link) => (
                <motion.div key={link.name} whileHover={{ x: 5 }}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-[#36a1d7] transition-colors duration-300 flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg text-gray-900">{t("footer.contactInfo")}</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-[#36a1d7]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-[#36a1d7]" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Ajmarkting.s@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-[#66b19e]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-[#66b19e]" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">+966502959253</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-[#8bbb4c]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-[#8bbb4c]" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">تبوك، المملكة العربية السعودية</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">{t("footer.followUs")}</h4>
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, color: "#36a1d7" },
                  { icon: Twitter, color: "#66b19e" },
                  { icon: Instagram, color: "#8bbb4c" },
                  { icon: Linkedin, color: "#36a1d7" },
                ].map((social, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="#"
                      className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
                      style={{ backgroundColor: `${social.color}15` }}
                    >
                      <social.icon className="h-5 w-5" style={{ color: social.color }} />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} AJ Marketing Solutions. {t("footer.allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  )
}
