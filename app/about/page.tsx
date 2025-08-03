"use client"

import { Eye, Target, Users, Award, Sparkles, Heart, Zap, Trophy, Star, Lightbulb, Shield, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

// SEO Metadata for About Page
export const metadata = {
  title: "من نحن - AJ Marketing | شركة رائدة في التسويق الرقمي والحلول التقنية",
  description: "تعرف على AJ Marketing، شركة متخصصة في التسويق الرقمي والحلول التقنية المبتكرة. نقدم خدمات تصميم المواقع، تطوير التطبيقات، التسويق الإلكتروني، والتصميم الإبداعي. رؤيتنا وقيمنا وفريق العمل المتخصص.",
  keywords: [
    "من نحن AJ Marketing",
    "شركة تسويق رقمي",
    "حلول تقنية مبتكرة",
    "فريق متخصص",
    "رؤية ورسالة الشركة",
    "قيم الشركة",
    "خبرة في التسويق",
    "شركة سعودية",
    "تطوير مواقع",
    "تصميم تطبيقات",
    "إبداع وتميز",
    "خدمات رقمية شاملة",
    "فريق AJ Marketing",
    "تاريخ الشركة"
  ].join(", "),
  author: "AJ Marketing",
  robots: "index, follow",
  openGraph: {
    title: "من نحن - AJ Marketing | قصة النجاح والتميز",
    description: "اكتشف قصة AJ Marketing وفريق العمل المتخصص في التسويق الرقمي والحلول التقنية المبتكرة",
    type: "website",
    url: "https://ajmarketing.sa/about",
    siteName: "AJ Marketing",
    images: [
      {
        url: "/images/about-hero.jpg",
        width: 1200,
        height: 630,
        alt: "فريق AJ Marketing"
      }
    ],
    locale: "ar_SA"
  },
  twitter: {
    card: "summary_large_image",
    title: "من نحن - AJ Marketing",
    description: "شركة رائدة في التسويق الرقمي والحلول التقنية المبتكرة",
    images: ["/images/about-hero.jpg"]
  },
  alternates: {
    canonical: "https://ajmarketing.sa/about"
  }
}

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "الجودة والإتقان",
      description: "نلتزم بأعلى معايير الجودة والإتقان في جميع أعمالنا ومشاريعنا",
      color: "#36a1d7",
      delay: 0.1
    },
    {
      icon: Users,
      title: "العمل الجماعي",
      description: "نؤمن بقوة الفريق والتعاون المثمر لتحقيق أفضل النتائج",
      color: "#66b19e",
      delay: 0.2
    },
    {
      icon: Award,
      title: "التميز والإبداع",
      description: "نسعى دائماً للتميز والإبداع في كل ما نقدمه لعملائنا",
      color: "#8bbb4c",
      delay: 0.3
    },
    {
      icon: Eye,
      title: "الابتكار والتطوير",
      description: "نبتكر حلولاً جديدة ومتطورة تواكب أحدث التطورات التقنية",
      color: "#36a1d7",
      delay: 0.4
    }
  ]

  return (
    <div className="min-h-screen">
      
      <main className="">
        {/* Enhanced Hero Section */}
        <section className="relative py-20 sm:py-24 lg:py-32 xl:py-40 bg-gradient-to-br from-[#36a1d7]/10 via-[#66b19e]/5 to-[#8bbb4c]/10 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-white/20" />
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-[#36a1d7]/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#66b19e]/10 rounded-full blur-xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#8bbb4c]/10 rounded-full blur-xl animate-pulse delay-500" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
              {/* Text Content */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="text-center lg:text-right space-y-6 sm:space-y-8 lg:order-2"
              >
                <div className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-md border border-gray-200/60 rounded-full shadow-lg mb-6">
                  <Heart className="w-4 h-4 text-[#36a1d7] ml-2" />
                  <span className="text-gray-800 font-semibold text-sm">قصتنا</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  من نحن
                  <span className="block bg-gradient-to-r from-[#36a1d7] via-[#66b19e] to-[#8bbb4c] bg-clip-text text-transparent mt-2">
                    وما قصتنا؟
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                  تعرف على رحلتنا في عالم التسويق الرقمي والإبداع، وكيف نحول الأحلام إلى واقع رقمي مبهر
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="bg-gradient-to-r from-[#36a1d7] to-[#66b19e] hover:from-[#66b19e] hover:to-[#8bbb4c] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <a href="#enhanced-vision">

                    اكتشف رؤيتنا
                    </a>
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-[#36a1d7] text-[#36a1d7] hover:bg-[#36a1d7] hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300"
                  >
                    <a href="#enhanced-values">
                      قيمنا الأساسية
                    </a>
                  </motion.button>
                </div>
              </motion.div>
              
              {/* Image Content */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative lg:order-1"
              >
                <div className="relative max-w-md sm:max-w-lg lg:max-w-xl mx-auto">
                  {/* Background Circle */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#36a1d7]/20 via-[#66b19e]/20 to-[#8bbb4c]/20 rounded-full blur-3xl scale-110" />
                  
                  {/* Image Container */}
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-gray-200/60">
                    <img 
                      src="/about_us.gif" 
                      alt="About Us" 
                      className="w-full h-auto rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-500"
                      loading="eager"
                    />
                  </div>
                  
                  {/* Floating Cards */}
                  <motion.div 
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-gray-200/60"
                  >
                    <Sparkles className="w-6 h-6 text-[#36a1d7]" />
                  </motion.div>
                  
                  <motion.div 
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-gray-200/60"
                  >
                    <Trophy className="w-6 h-6 text-[#66b19e]" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enhanced About Us Content */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50/50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-md border border-gray-200/60 rounded-full shadow-lg mb-6">
                  <Users className="w-4 h-4 text-[#36a1d7] ml-2" />
                  <span className="text-gray-800 font-semibold text-sm">فريقنا</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                  من نحن
                  <span className="block bg-gradient-to-r from-[#36a1d7] to-[#66b19e] bg-clip-text text-transparent">
                    وماذا نقدم؟
                  </span>
                </h2>
                
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p className="font-medium">
                    نحن <span className="text-[#36a1d7] font-bold">شباب سعوديين</span> نعمل في مجال الدعاية والإعلان، 
                    جمعنا حب العمل والشغف والإبداع مع أسس عالية ومعايير للجودة والاحترافية.
                  </p>
                  <p>
                    نقدم مثالاً يُحتذى به في مجموعة متنوعة من خدمات إدارة محتوى السوشال ميديا، 
                    مع التركيز على الابتكار والتميز في كل مشروع نتولاه.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 shadow-lg"
                  >
                    <div className="text-2xl font-bold text-[#36a1d7] mb-2">+100</div>
                    <div className="text-sm text-gray-600 font-medium">مشروع ناجح</div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 shadow-lg"
                  >
                    <div className="text-2xl font-bold text-[#66b19e] mb-2">5+</div>
                    <div className="text-sm text-gray-600 font-medium">سنوات خبرة</div>
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200/60 hover:shadow-3xl transition-all duration-500">
                  <div className="aspect-square bg-gradient-to-br from-[#36a1d7]/10 via-[#66b19e]/10 to-[#8bbb4c]/10 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    {/* Replace Users icon with first shape image */}
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      <img 
                        src="/about_us-1.gif" 
                        alt="Team Collaboration" 
                        className="w-44 h-44 object-cover filter drop-shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#36a1d7]/20 to-[#66b19e]/20 rounded-full blur-xl" />
                    </div>
                    
                    {/* Enhanced animated background elements */}
                    <motion.div 
                      animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border-2 border-[#36a1d7]/20 rounded-full"
                    />
                    <motion.div 
                      animate={{ rotate: -360, scale: [0.9, 1, 0.9] }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-4 border border-[#66b19e]/30 rounded-full"
                    />
                    <motion.div 
                      animate={{ rotate: 180, scale: [1.1, 0.9, 1.1] }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-8 border border-[#8bbb4c]/20 rounded-full"
                    />
                  </div>
                  
                  {/* Enhanced floating elements around the shape */}
                  <motion.div 
                    animate={{ 
                      y: [-5, 5, -5],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-r from-[#36a1d7] to-[#66b19e] rounded-full shadow-lg"
                  />
                  <motion.div 
                    animate={{ 
                      y: [5, -5, 5],
                      x: [-2, 2, -2]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute bottom-4 left-4 w-3 h-3 bg-gradient-to-r from-[#66b19e] to-[#8bbb4c] rounded-full shadow-lg"
                  />
                  <motion.div 
                    animate={{ 
                      y: [-3, 3, -3],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-1/2 right-2 w-2 h-2 bg-gradient-to-r from-[#8bbb4c] to-[#36a1d7] rounded-full shadow-lg"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enhanced Vision Section */}
        <section id="enhanced-vision" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#8bbb4c]/5 via-[#66b19e]/5 to-[#36a1d7]/5 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="relative order-2 lg:order-1"
              >
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200/60 hover:shadow-3xl transition-all duration-500">
                  <div className="aspect-square bg-gradient-to-br from-[#8bbb4c]/10 via-[#66b19e]/10 to-[#36a1d7]/10 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    {/* Replace Eye icon with second shape image */}
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      <img 
                        src="/about_us-2.gif" 
                        alt="Vision Shape" 
                        className="w-44 h-44 object-cover filter drop-shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#66b19e]/20 to-[#8bbb4c]/20 rounded-full blur-xl" />
                    </div>
                    
                    {/* Enhanced animated ripple effect */}
                    <motion.div 
                      animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 bg-gradient-to-r from-[#66b19e]/30 to-[#8bbb4c]/30 rounded-full"
                    />
                    <motion.div 
                      animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                      className="absolute inset-0 bg-gradient-to-r from-[#8bbb4c]/20 to-[#36a1d7]/20 rounded-full"
                    />
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0, 0.2] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                      className="absolute inset-0 bg-gradient-to-r from-[#36a1d7]/25 to-[#66b19e]/25 rounded-full"
                    />
                  </div>
                  
                  {/* Enhanced vision indicators */}
                  <motion.div 
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#66b19e] to-[#8bbb4c] rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Zap className="w-4 h-4 text-white" />
                  </motion.div>
                  
                  {/* Additional floating elements */}
                  <motion.div 
                    animate={{ 
                      y: [-8, 8, -8],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-r from-[#36a1d7] to-[#66b19e] rounded-full shadow-lg"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6 order-1 lg:order-2"
              >
                <div className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-md border border-gray-200/60 rounded-full shadow-lg mb-6">
                  <Eye className="w-4 h-4 text-[#66b19e] ml-2" />
                  <span className="text-gray-800 font-semibold text-sm">رؤيتنا المستقبلية</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                  رؤيتنا
                  <span className="block bg-gradient-to-r from-[#66b19e] to-[#8bbb4c] bg-clip-text text-transparent">
                    للمستقبل
                  </span>
                </h2>
                
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p className="font-medium">
                    أن نكون <span className="text-[#66b19e] font-bold">المؤسسة الرائدة</span> المتخصصة في مجال 
                    التصوير والمونتاج وإدارة المحتوى.
                  </p>
                  <p>
                    نسعى لتقديم حلول مبتكرة وإبداعية متفردة تحول أحلام عملائنا إلى واقع مبهر وملموس، 
                    مع الحفاظ على أعلى معايير الجودة والاحترافية.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-3 space-x-reverse p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/60 shadow-lg"
                  >
                    <div className="w-10 h-10 bg-[#66b19e]/10 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-[#66b19e]" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">هدفنا</div>
                      <div className="text-sm text-gray-600">الريادة والتميز</div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-3 space-x-reverse p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/60 shadow-lg"
                  >
                    <div className="w-10 h-10 bg-[#8bbb4c]/10 rounded-lg flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-[#8bbb4c]" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">طموحنا</div>
                      <div className="text-sm text-gray-600">الإبداع والابتكار</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enhanced Values Section */}
        <section id='enhanced-values' className="relative py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-grid-gray-900/[0.04] bg-[size:40px_40px]" />
          <motion.div 
            animate={{ 
              background: [
                "radial-gradient(circle at 20% 80%, rgba(139, 187, 76, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 20%, rgba(102, 177, 158, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 40% 40%, rgba(54, 161, 215, 0.1) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0"
          />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-md border border-gray-200/60 rounded-full shadow-lg mb-8">
                <Heart className="w-5 h-5 text-[#36a1d7] ml-2" />
                <span className="text-gray-800 font-semibold">قيمنا الأساسية</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-[#36a1d7] via-[#66b19e] to-[#8bbb4c] bg-clip-text text-transparent">
                  قيمنا
                </span>
                <span className="block text-gray-800 mt-2">التي نؤمن بها</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                نحن نؤمن بقوة القيم الأساسية التي تقود كل ما نقوم به، من الإبداع والابتكار إلى الجودة والاحترافية
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {[
                {
                  icon: Star,
                  title: "الجودة والإتقان",
                  description: "نسعى دائماً لتقديم أفضل النتائج بأعلى مستويات الجودة والإتقان في كل مشروع نعمل عليه.",
                  gradient: "from-[#36a1d7] to-[#66b19e]",
                  bgGradient: "from-[#36a1d7]/10 to-[#66b19e]/10",
                  delay: 0
                },
                {
                  icon: Users,
                  title: "العمل الجماعي",
                  description: "نؤمن بقوة الفريق الواحد والتعاون المثمر لتحقيق أفضل النتائج لعملائنا.",
                  gradient: "from-[#66b19e] to-[#8bbb4c]",
                  bgGradient: "from-[#66b19e]/10 to-[#8bbb4c]/10",
                  delay: 0.2
                },
                {
                  icon: Lightbulb,
                  title: "الإبداع والابتكار",
                  description: "نبتكر حلولاً إبداعية متميزة تواكب احتياجات عملائنا وتفوق توقعاتهم.",
                  gradient: "from-[#8bbb4c] to-[#36a1d7]",
                  bgGradient: "from-[#8bbb4c]/10 to-[#36a1d7]/10",
                  delay: 0.4
                },
                {
                  icon: Shield,
                  title: "الثقة والمصداقية",
                  description: "نبني علاقات مبنية على الثقة والشفافية مع عملائنا وشركائنا.",
                  gradient: "from-[#36a1d7] to-[#8bbb4c]",
                  bgGradient: "from-[#36a1d7]/10 to-[#8bbb4c]/10",
                  delay: 0.6
                },
                {
                  icon: Award,
                  title: "التميز والتفوق",
                  description: "نسعى للتميز في كل ما نقوم به ونحرص على تقديم خدمات تفوق توقعات عملائنا.",
                  gradient: "from-[#66b19e] to-[#36a1d7]",
                  bgGradient: "from-[#66b19e]/10 to-[#36a1d7]/10",
                  delay: 0.8
                },
                {
                  icon: Target,
                  title: "التطوير المستمر",
                  description: "نؤمن بأهمية التطوير المستمر ومواكبة أحدث التقنيات والاتجاهات في مجالنا.",
                  gradient: "from-[#8bbb4c] to-[#66b19e]",
                  bgGradient: "from-[#8bbb4c]/10 to-[#66b19e]/10",
                  delay: 1.0
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: value.delay,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-200/60 shadow-xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
                    {/* Background gradient on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <motion.div 
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 mb-6 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                      >
                        <value.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                        {value.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                        {value.description}
                      </p>
                    </div>
                    
                    {/* Decorative elements */}
                    <motion.div 
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-70"
                    />
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-60"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
    </div>
  )
}
