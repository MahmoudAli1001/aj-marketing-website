"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Code, Palette, Megaphone, Camera, BarChart3, Users, ArrowRight, Sparkles, Mic } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function EnhancedServicesSection() {
  const services = [
    {
      icon: Code,
      title: "تصميم وبرمجة المواقع",
      description: "تصميم وتطوير مواقع ومتاجر إلكترونية احترافية وسريعة مع أحدث التقنيات",
      color: "#8bbb4c",
      features: ["تصميم متجاوب", "سرعة عالية", "أمان متقدم", "SEO محسن"],
    },
     {
      icon: Code,
      title: "تطوير تطبيقات الهواتف",
      description: "تطوير تطبيقات مخصصة للهواتف الذكية بأنظمة iOS وAndroid",
      color: "#36a1d7",
      features: ["تطبيقات مخصصة", "تصميم UX/UI", "تكامل مع الخدمات", "اختبار شامل"],
    },
    {
      icon: Palette,
      title: "التصاميم والإنفوجرافيك",
      description: "تصاميم إبداعية وانفوجرافيك وموشن جرافيك متميز يجذب الجمهور",
      color: "#66b19e",
      features: ["هوية بصرية", "انفوجرافيك", "موشن جرافيك", "تصاميم طباعة"],
    },
    {
      icon: Megaphone,
      title: "التسويق الإلكتروني",
      description: "حملات تسويقية مدروسة ومخططة لزيادة المبيعات والوصول للجمهور المستهدف.",
      color: "#8bbb4c",
      features: [
        "إعلانات مدفوعة",
        "SEO",
        "لنسوق على سناب شات، تيك توك، انستقرام، جوجل",
      ],
    },
    {
      icon: Camera,
      title: "التصوير والمونتاج",
      description: "تصوير احترافي ومونتاج متقن للفيديوهات والصور بأعلى جودة",
      color: "#36a1d7",
      features: ["تصوير منتجات", "فيديو ترويجي", "تصوير فعاليات", "مونتاج احترافي"],
    },
    {
      icon: BarChart3,
      title: "التحليل والإحصائيات",
      description: "تحليل البيانات وقياس الأداء لتحسين النتائج واتخاذ قرارات مدروسة",
      color: "#66b19e",
      features: ["تقارير مفصلة", "تحليل الجمهور", "قياس ROI", "توصيات تحسين"],
    },
    {
      icon: Users,
      title: "إدارة المحتوى",
      description: "إدارة شاملة ومتخصصة لمحتوى وسائل التواصل الاجتماعي",
      color: "#8bbb4c",
      features: ["استراتيجية محتوى", "جدولة منشورات", "تفاعل مع الجمهور", "تقارير أداء"],
    },
    {
      icon: Mic,
      title: "التعليق الصوتي",
      description: "خدمات التعليق الصوتي الاحترافي لمختلف المشاريع",
      color: "#36a1d7",
      features: [
        "تعليق صوتي احترافي (رجالي - نسائي - طفولي)",
        "تسجيل صوتي",
        "تحرير صوتي",
        "توفير مؤثرات صوتية"
      ],
    },
   
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 clean-bg-alt relative overflow-hidden">
      <div className="section-container relative z-10">
        {/* Enhanced Header with better line spacing */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-6 sm:space-y-8 lg:space-y-12 mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 bg-white/90 backdrop-blur-md border border-gray-200/60 rounded-full shadow-xl">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#36a1d7] ml-2 sm:ml-3" />
            <span className="text-gray-800 font-bold text-xs sm:text-sm md:text-base lg:text-lg">خدماتنا المتميزة</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 px-4">
            <span className="block mb-3 sm:mb-4 md:mb-6">نقدم خدمات</span>
            <span className="block bg-gradient-to-r p-1 from-[#36a1d7] via-[#66b19e] to-[#8bbb4c] bg-clip-text text-transparent">
              رقمية شاملة
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-4xl mx-auto font-medium px-4">
            مجموعة متكاملة من الخدمات الرقمية المتطورة لتحقيق أهدافك التجارية وبناء حضور قوي في السوق
          </p>
        </motion.div>

        {/* Enhanced Services Grid with blue inset hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          viewport={{ once: true }}
          className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16`}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
          className="h-full service-card bg-white/95 backdrop-blur-sm border border-gray-200/60 shadow-xl hover:shadow-2xl rounded-xl sm:rounded-2xl lg:rounded-3xl transition-all ease-in-out duration-800"
          style={{ transition: "background 0.8s" }}
          onMouseEnter={e => {
            e.currentTarget.style.background = `${service.color}12`;
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "rgba(255,255,255,0.95)";
          }}
              >
          <CardHeader className="pb-3 sm:pb-4 lg:pb-6 service-card-content">
            <motion.div
              // Removed scale up and rotate on hover
              transition={{ duration: 0.8 }}
              className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl lg:rounded-3xl flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 transition-all duration-500 relative overflow-hidden"
              style={{ backgroundColor: `${service.color}15` }}
            >
              <service.icon
                className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 relative z-10"
                style={{ color: service.color }}
              />
            </motion.div>

            <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 transition-colors duration-300">
              {service.title}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-3 sm:space-y-4 lg:space-y-6 service-card-content">
            <CardDescription className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed transition-colors duration-300">
              {service.description}
            </CardDescription>

            <div className="space-y-2 sm:space-y-3">
              {service.features.map((feature, idx) => (
                <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * idx }}
            viewport={{ once: true }}
            className="flex items-center  space-x-2 sm:space-x-3 group/feature"
                >
            <motion.div
              className="w-2 h-2  sm:w-2.5 sm:h-2.5  lg:w-3 lg:h-3 rounded-full flex-shrink-0 group-hover/feature:scale-125 transition-transform duration-300 m-2"
              style={{ backgroundColor: service.color }}
              // Removed scale on hover
            />
            <span className="text-xs sm:text-sm lg:text-base text-gray-700 font-medium transition-colors duration-300">
              {feature}
            </span>
                </motion.div>
              ))}
            </div>
            <motion.div className="pt-2 sm:pt-3 lg:pt-4" whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Button
                variant="ghost"
                className="w-full justify-between duration-700 text-white transition-all rounded-lg sm:rounded-xl lg:rounded-2xl py-3 sm:py-4 lg:py-6 group/btn relative overflow-hidden text-sm sm:text-base lg:text-lg font-semibold"
                style={{
                  position: "relative",
                  zIndex: 1,
                  background: `linear-gradient(90deg, ${service.color}, ${service.color}80, ${service.color}cc)`,
                  backgroundSize: "200% 200%",
                  animation: "gradientMove 2s linear infinite"
                }}
              >
                <style>{`
                  @keyframes gradientMove {
                    0% { background-position: 0% 50%; }
                    100% { background-position: 100% 50%; }
                  }
                `}</style>
                <span className="font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]">تعرف على المزيد</span>
                <span>
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 scale-x-[-1] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]" />
                </span>
              </Button>
            </motion.div>
          </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 border border-gray-200/60 shadow-xl relative overflow-hidden max-w-4xl mx-auto">
            <div className="relative z-10 space-y-4 sm:space-y-6 lg:space-y-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                هل تحتاج خدمة مخصصة؟
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
                نحن نقدم حلولاً مخصصة تماماً لاحتياجاتك الفريدة
              </p>
              <motion.div >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#36a1d7] duration-700 to-[#66b19e] hover:from-[#66b19e] hover:to-[#8bbb4c] text-white text-sm sm:text-base md:text-lg lg:text-xl px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 rounded-full shadow-xl hover:shadow-2xl transition-all "
                >
                  <Link href="/contact">
                    تواصل معنا الآن
                    <ArrowRight className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 scale-x-[-1]" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
