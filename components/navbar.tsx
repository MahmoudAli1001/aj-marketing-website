"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ArrowRight, Sparkles, X } from "lucide-react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const navigation = [
    { name: "الرئيسية", href: "/" },
    { name: "من نحن", href: "/about" },
    { name: "خدماتنا", href: "/services" },
    { name: "أعمالنا", href: "/work" },
    { name: "شركاء النجاح", href: "/partners" },
  ]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-lg"
          : "bg-white/90 backdrop-blur-sm border-b border-gray-100/30",
      )}
    >
      <div className="container flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6">
        {/* Enhanced Logo */}
        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }} className="flex-shrink-0 relative">
          <Link href="/" className="flex items-center">
            <div className="relative">
              <Image
                src="/images/logo-aj.png"
                alt="AJ Marketing Solutions"
                width={200}
                height={65}
                className="h-12 sm:h-16 w-auto"
                priority
              />
            </div>
          </Link>
        </motion.div>

        {/* Enhanced Desktop Navigation */}
        <nav className="hidden lg:flex items-center">
          <div className="flex items-center space-x-1 bg-white/80 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-gray-200/50 shadow-lg">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className="relative px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base font-medium text-gray-700 hover:text-[#36a1d7] transition-all duration-300 rounded-full hover:bg-[#36a1d7]/10 group"
                >
                  {item.name}
                  <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#36a1d7] to-[#66b19e] transition-all duration-300 group-hover:w-6 sm:group-hover:w-8 group-hover:left-1/2 group-hover:-translate-x-1/2 rounded-full"></span>
                </Link>
              </motion.div>
            ))}
          </div>
        </nav>

        {/* Enhanced CTA Button */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="hidden sm:block">
            <Button
              asChild
              className="bg-gradient-to-r from-[#36a1d7] to-[#66b19e] hover:from-[#66b19e] hover:to-[#8bbb4c] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group text-sm sm:text-base"
            >
              <Link href="/contact">
                <span className="relative z-10 flex items-center">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                  تواصل معنا
                  <ArrowRight className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-300 scale-x-[-1]" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#66b19e] to-[#8bbb4c] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </Button>
          </motion.div>

          {/* Enhanced Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden relative p-2 rounded-full hover:bg-[#36a1d7]/10 transition-colors duration-300"
              >
                <motion.div
                  animate={isOpen ? "open" : "closed"}
                  variants={{
                    open: { rotate: 180 },
                    closed: { rotate: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? (
                    <X className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
                  ) : (
                    <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
                  )}
                </motion.div>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 sm:w-80 bg-white/95 backdrop-blur-md">
              <div className="flex flex-col space-y-6 sm:space-y-8 mt-6 sm:mt-8">
                {/* Mobile Logo */}
                <div className="text-center pb-4 sm:pb-6 border-b border-gray-200">
                  <Image
                    src="/images/logo-aj.png"
                    alt="AJ Marketing Solutions"
                    width={180}
                    height={55}
                    className="h-10 sm:h-12 w-auto mx-auto"
                  />
                </div>

                {/* Mobile Navigation */}
                <div className="space-y-3 sm:space-y-4">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="block text-base sm:text-lg font-medium text-gray-700 hover:text-[#36a1d7] transition-colors p-3 sm:p-4 rounded-xl hover:bg-[#36a1d7]/5 group"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="flex items-center">
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 sm:ml-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 scale-x-[-1]" />
                          {item.name}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-[#36a1d7] to-[#66b19e] hover:from-[#66b19e] hover:to-[#8bbb4c] text-white rounded-full py-3 sm:py-4 shadow-lg text-base sm:text-lg"
                  >
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      <Sparkles className="w-4 h-4 ml-2" />
                      تواصل معنا
                      <ArrowRight className="mr-2 h-4 w-4 scale-x-[-1]" />
                    </Link>
                  </Button>
                </motion.div>

                {/* Contact Info */}
                <div className="pt-4 sm:pt-6 border-t border-gray-200 space-y-2 sm:space-y-3">
                  <p className="text-xs sm:text-sm text-gray-600 text-center">تواصل معنا مباشرة</p>
                  <div className="text-center space-y-1 sm:space-y-2">
                    <p className="text-xs sm:text-sm font-medium text-[#36a1d7]">+966502959253</p>
                    <p className="text-xs sm:text-sm font-medium text-[#66b19e]">Ajmarkting.s@gmail.com</p>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#36a1d7] via-[#66b19e] to-[#8bbb4c] origin-left"
        style={{
          scaleX: isScrolled ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.header>
  )
}
