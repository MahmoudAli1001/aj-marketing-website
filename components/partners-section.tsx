"use client"

import { motion } from "framer-motion"
import { Building2, Award, Users, Target, Zap, TrendingUp } from "lucide-react"

export function PartnersSection() {
  const partners = [
    {
      name: "جمعية الصحفيين",
      logo: "/images/partners/logo_AJ (7).png",
      category: "إعلامي",
      description: "شراكة إعلامية متميزة",
    },
    {
      name: "وزارة الصحة",
      logo: "/images/partners/logo_AJ (1).png",
      category: "حكومي",
      description: "شريك موثوق في القطاع الصحي",
    },
    {
      name: "جامعة تبوك",
      logo: "/images/partners/logo_AJ (2).png",
      category: "تعليمي",
      description: "شراكة أكاديمية متميزة",
    },
    {
      name: "مزارع أسترا",
      logo: "/images/partners/logo_AJ (3).png",
      category: "زراعي",
      description: "رائد في القطاع الزراعي",
    },
    {
      name: "وزارة البيئة والمياه والزراعة",
      logo: "/images/partners/logo_AJ (4).png",
      category: "حكومي",
      description: "شراكة بيئية مستدامة",
    },
    {
      name: "الهلال الأحمر السعودي",
      logo: "/images/partners/logo_AJ (5).png",
      category: "إنساني",
      description: "شريك في العمل الإنساني",
    },
    {
      name: "غرفة تبوك",
      logo: "/images/partners/logo_AJ (6).png",
      category: "تجاري",
      description: "شراكة تجارية استراتيجية",
    },
   
    {
      name: "قهوتي همس",
      logo: "/images/partners/logo_AJ (8).png",
      category: "تجاري",
      description: "علامة تجارية مميزة",
    },
    {
      name: "شعار تجاري",
      logo: "/images/partners/logo_AJ (9).png",
      category: "تجاري",
      description: "شراكة تجارية ناجحة",
    },
   
    {
      name: "مركز الملك عبدالعزيز للحوار الوطني",
      logo: "/images/partners/logo_AJ (11).png",
      category: "حكومي",
      description: "مركز الحوار الوطني",
    },
    {
      name: "النادي الرياضي",
      logo: "/images/partners/logo_AJ (12).png",
      category: "رياضي",
      description: "شراكة رياضية متميزة",
    },
    {
      name: "مؤسسة تطوير الأعمال",
      logo: "/images/partners/logo_AJ (13).png",
      category: "استشارات",
      description: "استشارات أعمال متكاملة",
    },
    {
      name: "شركة التقنية الحديثة",
      logo: "/images/partners/logo_AJ (14).png",
      category: "تقنية",
      description: "حلول تقنية مبتكرة",
    },
    {
      name: "مؤسسة الإبداع الفني",
      logo: "/images/partners/logo_AJ (15).png",
      category: "إبداعي",
      description: "إبداع في التصميم والفن",
    },{
      name:"الهلال الأحمر السعودي",
      logo: "/images/partners/logo_AJ (16).svg",
      category: "حكومي",
      description: "شراكة استراتيجية لدعم خدمات الإسعاف والرعاية الصحية الطارئة رقمياً",
    },{
      name: "INUIT COLD BEVERAGE - SWEET",
      logo: "/images/partners/logo_AJ (17) .png",
      category: "تجاري",
      description: "مشروب بارد بنكهة حلوة مستوحى من تقاليد الإنويت.",
    },{
      name: "ريباس كَافييه",
      logo: "/images/partners/logo_AJ (18).jpeg",
      category: "تجاري",
      description: "علامة تجارية متميزة في صناعة القهوة",
    }
  ]

  const achievements = [
    {
      icon: Building2,
      number: "60+",
      label: "شريك موثوق",
      color: "#36a1d7",
      description: "من أكبر المؤسسات في المملكة",
    },
    {
      icon: Target,
      number: "150+",
      label: "مشروع مكتمل",
      color: "#66b19e",
      description: "بنجاح وجودة عالية",
    },
    {
      icon: Award,
      number: "98%",
      label: "معدل الرضا",
      color: "#8bbb4c",
      description: "من عملائنا المميزين",
    },
    {
      icon: Zap,
      number: "24/7",
      label: "دعم مستمر",
      color: "#36a1d7",
      description: "خدمة عملاء متميزة",
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-br from-white via-gray-50/30 to-[#36a1d7]/5 overflow-hidden relative">
      <div className="section-container relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-6 sm:space-y-8 lg:space-y-12 mb-16 sm:mb-20 lg:mb-24"
        >
          <div className="inline-flex items-center px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 bg-white/90 backdrop-blur-md border border-gray-200/60 rounded-full shadow-xl">
            <Building2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#66b19e] ml-2 sm:ml-3" />
            <span className="text-gray-800 font-bold text-xs sm:text-sm md:text-base lg:text-lg">شركاء النجاح</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 leading-tight px-4">
            نفتخر بثقة
            <span className="block p-1 bg-gradient-to-r from-[#36a1d7] via-[#66b19e] to-[#8bbb4c] bg-clip-text text-transparent mt-2 sm:mt-4">
              عملائنا المميزين
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-medium px-4">
            شراكات استراتيجية مع أبرز المؤسسات والشركات الرائدة في المملكة العربية السعودية
          </p>
        </motion.div>

        {/* Enhanced Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-20 lg:mb-24"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="text-center p-6 sm:p-8 lg:p-10 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl lg:rounded-3xl border border-gray-200/60 shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                style={{ background: `linear-gradient(135deg, ${achievement.color}, transparent)` }}
              />

              <div className="relative z-10">
                <div
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-4 sm:mb-6 lg:mb-8 rounded-xl sm:rounded-2xl lg:rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${achievement.color}15` }}
                >
                  <achievement.icon
                    className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
                    style={{ color: achievement.color }}
                  />
                </div>
                <div
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 lg:mb-4"
                  style={{ color: achievement.color }}
                >
                  {achievement.number}
                </div>
                <div className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2 lg:mb-3">
                  {achievement.label}
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">
                  {achievement.description}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Static Partners Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">
              شركاؤنا في
              <span className="bg-gradient-to-r from-[#36a1d7] via-[#66b19e] to-[#8bbb4c] bg-clip-text text-transparent">
                {" "}
                التميز
              </span>
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-medium px-4">
              نعمل مع نخبة من أفضل المؤسسات والشركات لتقديم خدمات استثنائية ومتميزة
            </p>
          </div>

          {/* Responsive Partners Pyramid Grid */}
          <div className="max-w-6xl mx-auto">
            {/* First Row - 3 items */}
            <div className="flex justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-4 sm:mb-6 lg:mb-8">
              {partners.slice(0, 3).map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="group relative bg-white/95 backdrop-blur-sm rounded-2xl lg:rounded-3xl border border-gray-200/60 shadow-lg hover:shadow-2xl hover:border-[#36a1d7]/30 transition-all duration-500 cursor-pointer w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 overflow-hidden"
                >
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  />

                  {/* Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                    style={{ background: "linear-gradient(135deg, #36a1d7, #66b19e)" }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Second Row - 4 items */}
            <div className="flex justify-center items-center gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6 lg:mb-8">
              {partners.slice(3, 7).map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="group relative bg-white/95 backdrop-blur-sm rounded-2xl lg:rounded-3xl border border-gray-200/60 shadow-lg hover:shadow-2xl hover:border-[#36a1d7]/30 transition-all duration-500 cursor-pointer w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 overflow-hidden"
                >
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  />

                  {/* Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                    style={{ background: "linear-gradient(135deg, #36a1d7, #66b19e)" }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Third Row - 5 items */}
            <div className="flex justify-center items-center gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6 lg:mb-8">
              {partners.slice(7, 12).map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (index + 7) * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="group relative bg-white/95 backdrop-blur-sm rounded-xl lg:rounded-2xl border border-gray-200/60 shadow-lg hover:shadow-2xl hover:border-[#36a1d7]/30 transition-all duration-500 cursor-pointer w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 overflow-hidden"
                >
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  />

                  {/* Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                    style={{ background: "linear-gradient(135deg, #36a1d7, #66b19e)" }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Fourth Row - Remaining items (if any) */}
            {partners.length > 12 && (
              <div className="flex justify-center items-center gap-2 sm:gap-3 lg:gap-4 flex-wrap max-w-4xl mx-auto">
                {partners.slice(12).map((partner, index) => (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: (index + 12) * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8, scale: 1.05 }}
                    className="group relative bg-white/95 backdrop-blur-sm rounded-xl lg:rounded-2xl border border-gray-200/60 shadow-lg hover:shadow-2xl hover:border-[#36a1d7]/30 transition-all duration-500 cursor-pointer w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 overflow-hidden"
                  >
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                    />

                    {/* Hover Effect Overlay */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                      style={{ background: "linear-gradient(135deg, #36a1d7, #66b19e)" }}
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 sm:mt-20 lg:mt-24 xl:mt-32"
        >
          <div className="relative bg-gradient-to-br from-white/95 via-gray-50/80 to-[#36a1d7]/10 rounded-xl sm:rounded-2xl lg:rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20 border border-gray-200/60 shadow-2xl overflow-hidden max-w-5xl mx-auto">
            <div className="relative z-10 space-y-6 sm:space-y-8 lg:space-y-10">
              <div className="inline-flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-[#36a1d7]/10 rounded-full text-[#36a1d7] font-bold text-sm sm:text-base lg:text-lg">
                <Users className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 ml-2" />
                انضم إلينا
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                هل تريد أن تكون شريكنا القادم؟
              </h3>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium px-4">
                انضم إلى قائمة شركائنا المتميزين واحصل على خدمات استثنائية تحقق أهدافك التجارية وتضعك في المقدمة
              </p>

              <motion.button
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#36a1d7] to-[#66b19e] hover:from-[#66b19e] hover:to-[#8bbb4c] text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 rounded-full font-bold text-sm sm:text-base md:text-lg lg:text-xl shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  ابدأ الشراكة الآن
                  <TrendingUp className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform duration-300 scale-x-[-1]" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
