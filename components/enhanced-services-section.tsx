"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Palette, Megaphone, Camera, BarChart3, Users, ArrowRight, Sparkles, Mic, X, CheckCircle, Phone, MessageSquare } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function EnhancedServicesSection() {
  const [selectedService, setSelectedService] = useState<any>(null)
  const services = [
    {
      icon: Code,
      title: "تصميم وبرمجة المواقع",
      description: "تصميم وتطوير مواقع ومتاجر إلكترونية احترافية وسريعة مع أحدث التقنيات",
      color: "#8bbb4c",
      features: ["تصميم متجاوب", "سرعة عالية", "أمان متقدم", "SEO محسن"],
      fullDescription: "نقدم خدمات تصميم وبرمجة المواقع الإلكترونية بأحدث التقنيات والمعايير العالمية. فريقنا المتخصص يعمل على تطوير مواقع متجاوبة وسريعة مع تحسين محركات البحث.",
      benefits: ["زيادة المبيعات بنسبة 300%", "تحسين تجربة المستخدم", "أمان عالي المستوى", "دعم فني مدى الحياة"],
      process: ["تحليل المتطلبات", "التصميم والتطوير", "الاختبار والمراجعة", "الإطلاق والمتابعة"]
    },
     {
      icon: Code,
      title: "تطوير تطبيقات الهواتف",
      description: "تطوير تطبيقات مخصصة للهواتف الذكية بأنظمة iOS وAndroid",
      color: "#36a1d7",
      features: ["تطبيقات مخصصة", "تصميم UX/UI", "تكامل مع الخدمات", "اختبار شامل"],
      fullDescription: "نطور تطبيقات الهواتف الذكية المخصصة لأنظمة iOS وAndroid بتصميم مميز وأداء عالي، مع التكامل الكامل مع خدماتك الحالية.",
      benefits: ["وصول أكبر للعملاء", "تفاعل أكثر مع العلامة التجارية", "إشعارات فورية", "عمل بدون إنترنت"],
      process: ["دراسة السوق", "التصميم والبرمجة", "الاختبار المكثف", "النشر على المتاجر"]
    },
    {
      icon: Palette,
      title: "التصاميم والإنفوجرافيك",
      description: "تصاميم إبداعية وانفوجرافيك وموشن جرافيك متميز يجذب الجمهور",
      color: "#66b19e",
      features: ["هوية بصرية", "انفوجرافيك", "موشن جرافيك", "تصاميم طباعة"],
      fullDescription: "فريق التصميم لدينا يبدع في إنتاج التصاميم البصرية المميزة والإنفوجرافيك التفاعلي الذي يوصل رسالتك بوضوح وجاذبية.",
      benefits: ["جذب انتباه أكبر", "توصيل الرسالة بوضوح", "زيادة التفاعل", "تميز عن المنافسين"],
      process: ["فهم الرسالة", "العصف الذهني", "التصميم والتطوير", "المراجعة والتسليم"]
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
      fullDescription: "نصمم استراتيجيات تسويقية شاملة تشمل الإعلانات المدفوعة على جميع المنصات، تحسين محركات البحث، وإدارة حسابات التواصل الاجتماعي.",
      benefits: ["زيادة المبيعات", "تحسين الوعي بالعلامة التجارية", "استهداف دقيق", "عائد استثمار مضمون"],
      process: ["تحليل السوق", "وضع الاستراتيجية", "تنفيذ الحملات", "التحليل والتحسين"]
    },
    {
      icon: Camera,
      title: "التصوير والمونتاج",
      description: "تصوير احترافي ومونتاج متقن للفيديوهات والصور بأعلى جودة",
      color: "#36a1d7",
      features: ["تصوير منتجات", "فيديو ترويجي", "تصوير فعاليات", "مونتاج احترافي"],
      fullDescription: "خدمات التصوير الاحترافي والمونتاج المتقن لجميع أنواع المحتوى المرئي، من تصوير المنتجات إلى الفيديوهات الترويجية والفعاليات.",
      benefits: ["محتوى عالي الجودة", "جذب انتباه أكبر", "احترافية في العرض", "زيادة التفاعل"],
      process: ["التخطيط المسبق", "التصوير", "المونتاج والمعالجة", "التسليم النهائي"]
    },
    {
      icon: BarChart3,
      title: "التحليل والإحصائيات",
      description: "تحليل البيانات وقياس الأداء لتحسين النتائج واتخاذ قرارات مدروسة",
      color: "#66b19e",
      features: ["تقارير مفصلة", "تحليل الجمهور", "قياس ROI", "توصيات تحسين"],
      fullDescription: "نوفر تحليلات عميقة لبياناتك التسويقية والرقمية، مع تقارير مفصلة وتوصيات عملية لتحسين الأداء وزيادة العائد على الاستثمار.",
      benefits: ["قرارات مبنية على البيانات", "تحسين الأداء المستمر", "فهم أعمق للجمهور", "زيادة الربحية"],
      process: ["جمع البيانات", "التحليل والتفسير", "إعداد التقارير", "تقديم التوصيات"]
    },
    {
      icon: Users,
      title: "إدارة المحتوى",
      description: "إدارة شاملة ومتخصصة لمحتوى وسائل التواصل الاجتماعي",
      color: "#8bbb4c",
      features: ["استراتيجية محتوى", "جدولة منشورات", "تفاعل مع الجمهور", "تقارير أداء"],
      fullDescription: "فريق إدارة المحتوى لدينا يخطط وينفذ استراتيجيات محتوى فعالة عبر جميع منصات التواصل الاجتماعي مع متابعة مستمرة للتفاعل والنتائج.",
      benefits: ["حضور مستمر", "تفاعل أعلى", "بناء مجتمع", "زيادة الولاء للعلامة التجارية"],
      process: ["وضع الاستراتيجية", "إنتاج المحتوى", "النشر والتفاعل", "التحليل والتطوير"]
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
      fullDescription: "نقدم خدمات التعليق الصوتي الاحترافي بأصوات متنوعة (رجالي، نسائي، طفولي) مع خدمات التسجيل والتحرير الصوتي والمؤثرات.",
      benefits: ["أصوات احترافية متنوعة", "جودة تسجيل عالية", "سرعة في التنفيذ", "أسعار تنافسية"],
      process: ["اختيار الصوت المناسب", "التسجيل", "التحرير والمعالجة", "التسليم النهائي"]
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
                onClick={() => setSelectedService(service)}
                className="w-full justify-between duration-700 text-white transition-all rounded-lg sm:rounded-xl lg:rounded-2xl py-3 sm:py-4 lg:py-6 group/btn relative overflow-hidden text-sm sm:text-base lg:text-lg font-semibold cursor-pointer"
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

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[95vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div 
                className="relative p-8 pb-6 text-white"
                style={{ background: `linear-gradient(135deg, ${selectedService?.color}, ${selectedService?.color}cc)` }}
              >
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 left-6 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors z-10 backdrop-blur-sm"
                >
                  <X className="w-5 h-5 text-white" />
                </motion.button>

                <div className="flex items-center gap-6 mb-4">
                  <motion.div 
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg"
                  >
                    {selectedService?.icon && <selectedService.icon className="w-10 h-10 text-white" />}
                  </motion.div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">
                      {selectedService?.title}
                    </h3>
                    <div className="w-16 h-1 bg-white/40 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="px-8 pb-8 max-h-[calc(95vh-180px)] overflow-y-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">نظرة عامة</h4>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {selectedService?.fullDescription}
                    </p>

                    <h4 className="text-xl font-bold text-gray-900 mb-4">الفوائد الرئيسية</h4>
                    <div className="space-y-3">
                      {selectedService?.benefits?.map((benefit: string, index: number) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div 
                            className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{ backgroundColor: selectedService?.color }}
                          />
                          <span className="text-gray-700">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">ما نقدمه لك</h4>
                    <div className="grid grid-cols-1 gap-3 mb-6">
                      {selectedService?.features?.map((feature: string, index: number) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                        >
                          <CheckCircle 
                            className="w-5 h-5 flex-shrink-0"
                            style={{ color: selectedService?.color }}
                          />
                          <span className="text-gray-700 font-medium">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 mb-4">خطوات العمل</h4>
                    <div className="space-y-3">
                      {selectedService?.process?.map((step: string, index: number) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div 
                            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg"
                            style={{ backgroundColor: selectedService?.color }}
                          >
                            {index + 1}
                          </div>
                          <span className="text-gray-700">{step}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-4 px-6 rounded-xl text-white font-semibold shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                    style={{ backgroundColor: selectedService?.color }}
                  >
                    <Phone className="w-5 h-5" />
                    اطلب عرض سعر مجاني
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-4 px-6 border-2 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                    style={{ 
                      borderColor: selectedService?.color,
                      color: selectedService?.color
                    }}
                  >
                    <MessageSquare className="w-5 h-5" />
                    تواصل معنا الآن
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
