"use client"

import { motion, useInView } from "framer-motion"
import { Target, Users, Award, Zap, TrendingUp, Star, CheckCircle, Clock } from "lucide-react"
import { useRef, useEffect, useState } from "react"

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}

function AnimatedCounter({ end, duration = 2, suffix = "", prefix = "" }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      let animationFrame: number

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        setCount(Math.floor(easeOutQuart * end))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isInView, end, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

export function EnhancedStatisticsSection() {
  const statistics = [
    {
      icon: Target,
      number: 150,
      suffix: "+",
      label: "مشروع مكتمل",
      description: "بنجاح وجودة عالية",
      color: "#36a1d7",
    },
    {
      icon: Users,
      number: 60,
      suffix: "+",
      label: "عميل سعيد",
      description: "يثق في خدماتنا",
      color: "#66b19e",
    },
    {
      icon: Award,
      number: 5,
      suffix: "+",
      label: "سنوات خبرة",
      description: "في السوق السعودي",
      color: "#8bbb4c",
    },
    {
      icon: Zap,
      number: 24,
      suffix: "/7",
      label: "دعم مستمر",
      description: "خدمة عملاء متميزة",
      color: "#36a1d7",
    },
    {
      icon: TrendingUp,
      number: 98,
      suffix: "%",
      label: "معدل الرضا",
      description: "من عملائنا المميزين",
      color: "#66b19e",
    },
    {
      icon: Star,
      number: 12,
      suffix: "+",
      label: "جائزة تميز",
      description: "في مجال التسويق",
      color: "#8bbb4c",
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-br from-gray-50/50 via-white to-[#36a1d7]/5 relative overflow-hidden">
      <div className="section-container relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-6 sm:space-y-8 lg:space-y-12 mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 bg-white/90 backdrop-blur-md border border-gray-200/60 rounded-full shadow-xl">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#8bbb4c] ml-2 sm:ml-3" />
            <span className="text-gray-800 font-bold text-xs sm:text-sm md:text-base lg:text-lg">
              إنجازاتنا بالأرقام
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 leading-tight px-4">
            نفتخر بما
            <span className="block bg-gradient-to-r from-[#36a1d7] via-[#66b19e] to-[#8bbb4c] bg-clip-text text-transparent mt-2 sm:mt-4">
              حققناه معاً
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium px-4">
            أرقام تتحدث عن التزامنا بالتميز والجودة في كل مشروع نعمل عليه
          </p>
        </motion.div>

        {/* Enhanced Statistics Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              <div className="bg-white/95 backdrop-blur-md border border-gray-200/60 rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                <div className="relative z-10 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4 sm:mb-6 lg:mb-8 rounded-xl sm:rounded-2xl lg:rounded-3xl flex items-center justify-center group-hover:shadow-xl transition-all duration-500 relative overflow-hidden"
                    style={{ backgroundColor: `${stat.color}15` }}
                  >
                    <stat.icon
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 relative z-10"
                      style={{ color: stat.color }}
                    />
                  </motion.div>

                  <motion.div
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 sm:mb-3 lg:mb-4 bg-gradient-to-r bg-clip-text text-transparent"
                    style={{ backgroundImage: `linear-gradient(135deg, ${stat.color}, ${stat.color}cc)` }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.5 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    viewport={{ once: true }}
                  >
                    <AnimatedCounter end={stat.number} duration={2.5} suffix={stat.suffix} />
                  </motion.div>

                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                      {stat.label}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300">
                      {stat.description}
                    </p>
                  </div>

                  <motion.div
                    className="mt-3 sm:mt-4 lg:mt-6 h-1 sm:h-1.5 lg:h-2 bg-gray-200 rounded-full overflow-hidden"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: stat.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.5, delay: 1.2 + index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 lg:mt-20"
        >
          <div className="bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 border border-gray-200/60 shadow-xl relative overflow-hidden max-w-4xl mx-auto">
            <div className="relative z-10 space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4 lg:mb-6">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#36a1d7]" />
                <span className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800">الوقت المناسب للبدء</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                هل أنت مستعد لتكون جزءاً من هذه الأرقام؟
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
                انضم إلى عملائنا الناجحين واجعل مشروعك جزءاً من قصص نجاحنا القادمة
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
