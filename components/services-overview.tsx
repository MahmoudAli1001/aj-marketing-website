"use client"

import { motion } from "framer-motion"
import { Code, Palette, Megaphone, Camera, BarChart3, Users } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ServicesOverview() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Code,
      title: t("services.webDevelopment.title"),
      description: t("services.webDevelopment.description"),
      color: "#36a1d7",
      features: ["تصميم متجاوب", "سرعة عالية", "أمان متقدم", "SEO محسن"],
    },
    {
      icon: Palette,
      title: t("services.design.title"),
      description: t("services.design.description"),
      color: "#66b19e",
      features: ["هوية بصرية", "انفوجرافيك", "موشن جرافيك", "تصاميم طباعة"],
    },
    {
      icon: Megaphone,
      title: t("services.marketing.title"),
      description: t("services.marketing.description"),
      color: "#8bbb4c",
      features: ["إعلانات مدفوعة", "تسويق محتوى", "SEO", "تحليل البيانات"],
    },
    {
      icon: Camera,
      title: t("services.photography.title"),
      description: t("services.photography.description"),
      color: "#36a1d7",
      features: ["تصوير منتجات", "فيديو ترويجي", "تصوير فعاليات", "مونتاج احترافي"],
    },
    {
      icon: BarChart3,
      title: t("services.analytics.title"),
      description: t("services.analytics.description"),
      color: "#66b19e",
      features: ["تقارير مفصلة", "تحليل الجمهور", "قياس ROI", "توصيات تحسين"],
    },
    {
      icon: Users,
      title: t("services.contentManagement.title"),
      description: t("services.contentManagement.description"),
      color: "#8bbb4c",
      features: ["استراتيجية محتوى", "جدولة منشورات", "تفاعل مع الجمهور", "تقارير أداء"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-[#36a1d7]/10 rounded-full text-[#36a1d7] font-medium text-sm">
            <Users className="w-4 h-4 mr-2" />
            {t("services.title")}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            خدماتنا
            <span className="gradient-text"> المتميزة</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t("services.subtitle")}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className="h-full bg-white/80 backdrop-blur-sm border border-gray-200/50 soft-shadow hover:soft-shadow-hover transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <service.icon className="h-8 w-8" style={{ color: service.color }} />
                  </motion.div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: service.color }}></div>
                        <span className="text-sm text-gray-600 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
