"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Users, Target, Zap, TrendingUp, Star } from "lucide-react"
import Link from "next/link"

export function EnhancedCTASection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden clean-bg">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Enhanced CTA Card */}
          <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-gray-200/60 shadow-2xl overflow-hidden">
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#36a1d7]/20 via-[#66b19e]/20 to-[#8bbb4c]/20 rounded-2xl sm:rounded-3xl blur-xl opacity-75" />

            {/* Inner Content Container */}
            <div className="relative bg-white/98 backdrop-blur-sm rounded-2xl sm:rounded-3xl m-1 p-8 sm:p-12 md:p-16 lg:p-20">
              <div className="relative z-10 text-center space-y-8 sm:space-y-10 md:space-y-12">
                {/* Enhanced Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#36a1d7]/10 via-[#66b19e]/10 to-[#8bbb4c]/10 rounded-full border border-gray-200/50 shadow-lg"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#36a1d7] ml-2 sm:ml-3" />
                  </motion.div>
                  <span className="text-gray-800 font-bold text-sm sm:text-base md:text-lg">انضم إلى عائلة النجاح</span>
                  <motion.div
                    className="mr-2 sm:mr-3 flex space-x-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                      >
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-[#8bbb4c] fill-current" />
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Enhanced Main Heading with better line spacing */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="space-y-6 sm:space-y-8"
                >
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900">
                    <span className="block mb-4 sm:mb-6">هل تريد أن تكون</span>
                    <span className="block bg-gradient-to-r from-[#36a1d7] via-[#66b19e] to-[#8bbb4c] bg-clip-text text-transparent">
                      شريكنا القادم؟
                    </span>
                  </h2>

                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-4xl mx-auto font-medium px-4">
                    انضم إلى قائمة شركائنا المتميزين واحصل على خدمات استثنائية تحقق أهدافك التجارية وتضعك في المقدمة
                  </p>
                </motion.div>

                {/* Enhanced Features Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 my-12 sm:my-16"
                >
                  {[
                    {
                      icon: Target,
                      title: "استراتيجية مخصصة",
                      description: "حلول مصممة خصيصاً لأهدافك",
                      color: "#36a1d7",
                    },
                    {
                      icon: Zap,
                      title: "تنفيذ سريع",
                      description: "نتائج ملموسة في وقت قياسي",
                      color: "#66b19e",
                    },
                    {
                      icon: TrendingUp,
                      title: "نمو مستدام",
                      description: "نجاح طويل المدى ومتواصل",
                      color: "#8bbb4c",
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      <div
                        className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: `${feature.color}15` }}
                      >
                        <feature.icon className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: feature.color }} />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
                      <p className="text-sm sm:text-base text-gray-600 font-medium">{feature.description}</p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Enhanced CTA Button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  viewport={{ once: true }}
                  className="pt-4 sm:pt-8"
                >
                  <motion.div whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.95 }} className="inline-block">
                    <Button
                      asChild
                      size="lg"
                      className="bg-[#36a1d7] hover:bg-[#66b19e] text-white text-lg sm:text-xl md:text-2xl px-8 sm:px-12 md:px-16 py-4 sm:py-6 md:py-8 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden group border-0"
                    >
                      <Link href="/contact">
                        <span className="relative z-10 flex items-center font-bold">
                          ابدأ الشراكة الآن
                          <motion.div
                            className="mr-3 sm:mr-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center"
                            whileHover={{ rotate: 45, scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 scale-x-[-1]" />
                          </motion.div>
                        </span>

                        {/* Enhanced Shine Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.8 }}
                        />

                        {/* Pulse Effect */}
                        <motion.div
                          className="absolute inset-0 bg-white/10 rounded-full"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        />
                      </Link>
                    </Button>
                  </motion.div>

                  {/* Trust Indicators */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    viewport={{ once: true }}
                    className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 md:space-x-8 text-gray-600 text-sm sm:text-base"
                  >
                    <div className="flex items-center">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#36a1d7] ml-2" />
                      <span className="font-medium">60+ شريك موثوق</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#8bbb4c] ml-2 fill-current" />
                      <span className="font-medium">98% معدل الرضا</span>
                    </div>
                    <div className="flex items-center">
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#66b19e] ml-2" />
                      <span className="font-medium">دعم 24/7</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
