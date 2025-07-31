"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Mail, CheckCircle, Sparkles, Bell } from "lucide-react"
import { useState } from "react"

export function EnhancedNewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubscribed(true)
    setIsLoading(false)
    setEmail("")
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-br from-[#36a1d7]/5 via-white to-[#66b19e]/5">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Newsletter Card */}
          <div className="relative bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl border border-gray-200/60 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#36a1d7]/20 via-[#66b19e]/20 to-[#8bbb4c]/20 rounded-xl sm:rounded-2xl lg:rounded-3xl blur-xl opacity-75" />

            <div className="relative bg-white/98 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl m-1 p-6 sm:p-8 md:p-12 lg:p-16">
              <div className="relative z-10 text-center space-y-4 sm:space-y-6 lg:space-y-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#36a1d7]/10 via-[#66b19e]/10 to-[#8bbb4c]/10 rounded-full border border-gray-200/50 shadow-lg"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Bell className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#36a1d7] ml-2" />
                  </motion.div>
                  <span className="text-gray-800 font-semibold text-xs sm:text-sm md:text-base">
                    ابق على اطلاع دائم
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-2 sm:space-y-3 lg:space-y-4"
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    اشترك في
                    <span className="block bg-gradient-to-r from-[#36a1d7] via-[#66b19e] to-[#8bbb4c] bg-clip-text text-transparent mt-2">
                      نشرتنا الإخبارية
                    </span>
                  </h2>

                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
                    لتصلك آخر الأخبار والعروض المميزة والنصائح الحصرية في عالم التسويق الرقمي
                  </p>
                </motion.div>

                {isSubscribed && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 max-w-md mx-auto"
                  >
                    <div className="flex items-center justify-center space-x-3 text-green-700">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                      <span className="font-semibold text-sm sm:text-base lg:text-lg">تم الاشتراك بنجاح!</span>
                    </div>
                    <p className="text-green-600 mt-2 text-xs sm:text-sm lg:text-base">شكراً لك، ستصلك النشرة قريباً</p>
                  </motion.div>
                )}

                {!isSubscribed && (
                  <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    onSubmit={handleSubmit}
                    className="max-w-lg mx-auto"
                  >
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 p-1.5 sm:p-2 bg-gray-50/80 rounded-lg sm:rounded-xl lg:rounded-2xl border border-gray-200/60 shadow-inner">
                      <div className="flex-1 relative">
                        <Mail className="absolute right-2 sm:right-3 lg:right-4 top-1/2 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gray-400" />
                        <Input
                          type="email"
                          placeholder="أدخل بريدك الإلكتروني"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pr-8 sm:pr-10 lg:pr-12 pl-2 sm:pl-3 lg:pl-4 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg border-0 bg-transparent focus:ring-0 focus:outline-none placeholder:text-gray-500"
                          required
                        />
                      </div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          type="submit"
                          disabled={isLoading}
                          className="w-full sm:w-auto bg-[#36a1d7] hover:bg-[#66b19e] text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-md sm:rounded-lg lg:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                        >
                          <span className="relative z-10 flex items-center">
                            {isLoading ? (
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 border-2 border-white border-t-transparent rounded-full ml-2"
                              />
                            ) : (
                              <Send className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300 scale-x-[-1]" />
                            )}
                            {isLoading ? "جاري الاشتراك..." : "اشتراك"}
                          </span>

                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.8 }}
                          />
                        </Button>
                      </motion.div>
                    </div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-3 lg:mt-4 flex items-center justify-center"
                    >
                      <Sparkles className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 ml-2" />
                      نحترم خصوصيتك ولن نشارك بياناتك مع أي طرف ثالث
                    </motion.p>
                  </motion.form>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mt-6 sm:mt-8 lg:mt-12"
                >
                  {[
                    {
                      icon: Mail,
                      title: "محتوى حصري",
                      description: "نصائح ومقالات متخصصة",
                      color: "#36a1d7",
                    },
                    {
                      icon: Bell,
                      title: "عروض مميزة",
                      description: "خصومات وعروض خاصة",
                      color: "#66b19e",
                    },
                    {
                      icon: Sparkles,
                      title: "آخر الأخبار",
                      description: "تحديثات الخدمات والمشاريع",
                      color: "#8bbb4c",
                    },
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      <div
                        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-2 sm:mb-3 lg:mb-4 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: `${benefit.color}15` }}
                      >
                        <benefit.icon
                          className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                          style={{ color: benefit.color }}
                        />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm">{benefit.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
