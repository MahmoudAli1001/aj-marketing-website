"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden clean-bg">
      <motion.div style={{ y, opacity }} className="section-container relative z-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, staggerChildren: 0.3, delayChildren: 0.2 }}
          className="max-w-7xl mx-auto text-center space-y-8 sm:space-y-12 lg:space-y-16"
        >
          {/* Enhanced Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 bg-white/95 backdrop-blur-md border border-gray-200/60 rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 group">
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#36a1d7] ml-2 sm:ml-3" />
              </motion.div>
              <span className="text-gray-800 font-bold text-xs sm:text-sm md:text-base lg:text-lg">
                نحول أحلامكم إلى واقع رقمي مبهر
              </span>
              <motion.div
                className="mr-2 sm:mr-3 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-[#66b19e] to-[#8bbb4c] rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>
          </motion.div>

          {/* Main Headline - Enhanced with better line spacing */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-6 sm:space-y-8 lg:space-y-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tight px-4">
              <motion.span
                className="block bg-gradient-to-r from-[#36a1d7] via-[#66b19e] to-[#8bbb4c] bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-6"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "200% 50%" }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                style={{ backgroundSize: "200% 200%" }}
              >
                نحن شباب طموح
              </motion.span>
              <span className="text-gray-900 block mb-3 sm:mb-4 md:mb-6">متخصصون في</span>
              <motion.span
                className="block bg-gradient-to-r from-[#8bbb4c] via-[#66b19e] to-[#36a1d7] bg-clip-text text-transparent"
                initial={{ backgroundPosition: "200% 50%" }}
                animate={{ backgroundPosition: "0% 50%" }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                style={{ backgroundSize: "200% 200%" }}
              >
                التسويق الرقمي
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto font-medium px-4"
            >
              مؤسسة رائدة في مجال التسويق الرقمي والتصوير والمونتاج، نقدم حلولاً مبتكرة وإبداعية متفردة
            </motion.p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center items-center px-4"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="relative group w-full sm:w-auto"
            >
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-[#36a1d7] hover:bg-[#66b19e] text-white text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-12 lg:px-16 py-3 sm:py-4 md:py-6 lg:py-8 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden border-0"
              >
                <Link href="/contact">
                  <span className="relative z-10 flex items-center font-bold">
                    ابدأ مشروعك
                    <motion.div
                      className="mr-2 sm:mr-3 md:mr-4 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-white/20 rounded-full flex items-center justify-center"
                      whileHover={{ rotate: 45 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 scale-x-[-1]" />
                    </motion.div>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="relative group w-full sm:w-auto"
            >
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-12 lg:px-16 py-3 sm:py-4 md:py-6 lg:py-8 rounded-full border-2 border-gray-400 text-gray-700 hover:bg-gray-50 hover:border-[#36a1d7] hover:text-[#36a1d7] transition-all duration-500 bg-white/95 backdrop-blur-sm shadow-xl hover:shadow-2xl font-bold"
              >
                <motion.div
                  className="ml-2 sm:ml-3 md:ml-4 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gray-200 group-hover:bg-[#36a1d7]/10 rounded-full flex items-center justify-center transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                >
                  <Play className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 group-hover:text-[#36a1d7] transition-colors duration-300" />
                </motion.div>
                شاهد أعمالنا
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 4 }}
        className="absolute bottom-6 sm:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="w-5 h-8 sm:w-6 sm:h-10 md:w-8 md:h-14 border-2 border-[#36a1d7]/40 rounded-full flex justify-center bg-white/80 backdrop-blur-sm shadow-lg"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="w-1 h-3 sm:w-1.5 sm:h-4 md:w-2 md:h-6 bg-gradient-to-b from-[#36a1d7] to-[#66b19e] rounded-full mt-1.5 sm:mt-2 md:mt-3"
          />
        </motion.div>
        <p className="text-xs sm:text-sm text-gray-600 mt-2 sm:mt-3 md:mt-4 font-medium">اكتشف المزيد</p>
      </motion.div>
    </section>
  )
}
