

"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Head from "next/head"
import { 
  Building2, 
  Award, 
  Users, 
  Target, 
  Zap, 
  TrendingUp, 
  Globe,
  Heart,
  Star,
  Shield,
  CheckCircle,
  ArrowRight,
  MapPin,
  Calendar,
  Trophy,
  Handshake,
  X,
  Phone,
  MessageSquare
} from "lucide-react"
import { useRouter } from "next/navigation"

export default function PartnersPage() {
  const [selectedPartner, setSelectedPartner] = useState<any>(null)
  const [selectedCategory, setSelectedCategory] = useState("الكل")
  const router = useRouter()

  const partners = [
    {
        name:"وزارة الصحة",
        logo:"/images/partners/logo_AJ (1).png",
        category: "حكومي",
        description: "شراكة استراتيجية لتعزيز الصحة الرقمية في المملكة",
        establishedYear: "2020",
        location: "الرياض",
        projects: 15,
        services: ["تطبيقات الصحة", "أنظمة إدارة المستشفيات", "التوعية الصحية الرقمية"],
        testimonial: "حلول تقنية مبتكرة ساعدتنا في تطوير عملياتنا الصحية",
        color: "#8bbb4c"
    },
    {
      name: "مزارع أسترا",
      logo: "/images/partners/logo_AJ (2).png",
      category: "زراعي",
      description: "رائد في القطاع الزراعي مع حلول تقنية مبتكرة",
      establishedYear: "2021",
      location: "الرياض",
      projects: 12,
      services: ["إدارة المزارع الذكية", "التطبيقات الزراعية", "التسويق الرقمي"],
      testimonial: "حلول تقنية مبتكرة ساعدتنا في تطوير عملياتنا الزراعية",
      color: "#8bbb4c"
    },
    {
      name: "وزارة البيئة والمياه والزراعة",
      logo: "/images/partners/logo_AJ (3).png",
      category: "حكومي",
      description: "شراكة بيئية مستدامة لحماية البيئة والموارد الطبيعية",
      establishedYear: "2020",
      location: "الرياض",
      projects: 20,
      services: ["أنظمة المراقبة البيئية", "إدارة الموارد", "التوعية الرقمية"],
      testimonial: "شراكة فعالة في تطوير الحلول البيئية المستدامة",
      color: "#66b19e"
    },
    {
      name: "مركز الملك عبدالعزيز للحوار الوطني",
      logo: "/images/partners/logo_AJ (4).png",
      category: "حكومي",
      description: "مركز الحوار الوطني لتعزيز التواصل المجتمعي",
      establishedYear: "2019",
      location: "الرياض",
      projects: 16,
      services: ["منصات الحوار الرقمية", "إدارة الفعاليات", "التوثيق الرقمي"],
      testimonial: "أدوات تقنية ساعدت في تعزيز الحوار المجتمعي",
      color: "#8bbb4c"
    },
    {
      name: "النادي الوطني السعودي",
      logo: "/images/partners/logo_AJ (5).png",
      category: "رياضي",
      description: "شراكة رياضية متميزة لتطوير الرياضة الرقمية",
      establishedYear: "2020",
      location: "الرياض",
      projects: 14,
      services: ["تطبيقات اللياقة", "إدارة الأعضاء", "البث المباشر"],
      testimonial: "حلول رقمية عززت تجربة الأعضاء والمشجعين",
      color: "#8B5CF6"
    },
    {
      name: "Athens Coffee",
      logo: "/images/partners/logo_AJ (6).png",
      category: "تجاري",
      description: "علامة تجارية عالمية في صناعة القهوة المتخصصة",
      establishedYear: "2019",
      location: "الرياض",
      projects: 8,
      services: ["تطبيق التوصيل", "إدارة المحتوى", "التسويق الرقمي"],
      testimonial: "نمو مذهل في المبيعات والحضور الرقمي",
      color: "#6B7280"
    },
    {
      name: "جامعة تبوك",
      logo: "/images/partners/logo_AJ (7).png",
      category: "تعليمي",
      description: "شراكة أكاديمية متميزة في مجال التعليم الرقمي",
      establishedYear: "2006",
      location: "تبوك",
      projects: 30,
      services: ["المنصات التعليمية", "إدارة المحتوى التعليمي", "التطبيقات الأكاديمية"],
      testimonial: "شراكة استراتيجية أسهمت في تطوير التعليم الرقمي",
      color: "#059669"
    },
    {
      name: "موهبة",
      logo: "/images/partners/logo_AJ (8).png",
      category: "تعليمي",
      description: "مؤسسة الملك عبدالعزيز ورجاله للموهبة والإبداع",
      establishedYear: "2019",
      location: "الرياض",
      projects: 25,
      services: ["برامج الموهبة", "التطوير التعليمي", "المنصات الذكية"],
      testimonial: "شراكة إبداعية لتطوير المواهب والقدرات",
      color: "#3B82F6"
    },
    {
      name: "غرفة تبوك",
      logo: "/images/partners/logo_AJ (9).png",
      category: "تجاري",
      description: "شراكة تجارية استراتيجية لدعم القطاع الخاص",
      establishedYear: "2018",
      location: "تبوك",
      projects: 22,
      services: ["منصات التجارة الإلكترونية", "أنظمة إدارة الأعضاء", "التسويق الرقمي"],
      testimonial: "شراكة ناجحة أسهمت في تطوير الأعمال التجارية في المنطقة",
      color: "#64748B"
    },
    {
      name: "Point Card",
      logo: "/images/partners/logo_AJ (11).png",
      category: "تجاري",
      description: "منصة نقاط وولاء رائدة في المملكة",
      establishedYear: "2020",
      location: "الرياض",
      projects: 15,
      services: ["أنظمة الولاء", "تطبيقات النقاط", "التسويق الرقمي"],
      testimonial: "حلول مبتكرة في أنظمة الولاء ونقاط العملاء",
      color: "#8B5CF6"
    },
    {
      name: "قهوتي همس",
      logo: "/images/partners/logo_AJ (12).png",
      category: "تجاري",
      description: "قهوة عربية فاخرة مدحومة ومحدودة",
      establishedYear: "2021",
      location: "جدة",
      projects: 8,
      services: ["تطبيق التوصيل", "إدارة المحتوى", "التسويق الرقمي"],
      testimonial: "نمو استثنائي في المبيعات والحضور الرقمي",
      color: "#A16207"
    },
    {
      name: "هيئة الصحفيين السعوديين",
      logo: "/images/partners/logo_AJ (13).png",
      category: "إعلامي",
      description: "شراكة إعلامية متميزة في مجال الصحافة والإعلام",
      establishedYear: "2019",
      location: "الرياض",
      projects: 15,
      services: ["إدارة المحتوى", "التصوير الصحفي", "التسويق الرقمي"],
      testimonial: "تعاون مثمر ونتائج استثنائية في جميع مشاريعنا المشتركة",
      color: "#059669"
    },
    {
      name: "أطيب النسيم",
      logo: "/images/partners/logo_AJ (14).png",
      category: "تجاري",
      description: "علامة تجارية متميزة في المنتجات الطبيعية",
      establishedYear: "2020",
      location: "الرياض",
      projects: 12,
      services: ["التجارة الإلكترونية", "التسويق الرقمي", "إدارة العلامة التجارية"],
      testimonial: "شراكة ناجحة في تطوير الحضور الرقمي",
      color: "#059669"
    },
    {
      name: "Artist",
      logo: "/images/partners/logo_AJ (15).png",
      category: "إبداعي",
      description: "حلول إبداعية في مجال التصميم والفنون الرقمية",
      establishedYear: "2020",
      location: "جدة",
      projects: 7,
      services: ["تصميم الجرافيك", "الرسوم المتحركة", "التسويق الإبداعي"],
      testimonial: "إبداع وتميز في كل مشروع نتعاون فيه",
      color: "#6B7280"
    },
    {
      name: "هيئة الهلال الأحمر السعودي",
      logo: "/images/partners/logo_AJ (16).svg",
      category: "حكومي",
      description: "شراكة استراتيجية لدعم خدمات الإسعاف والرعاية الصحية الطارئة رقمياً",
      establishedYear: "2022",
      location: "الرياض",
      projects: 10,
      services: ["أنظمة الإسعاف الذكية", "التوعية الصحية الرقمية", "إدارة الفرق الميدانية"],
      testimonial: "شراكة تقنية عززت سرعة الاستجابة وتحسين الخدمات الإسعافية",
      color: "#ed252b"
    },
    {
      name: "INUIT COLD BEVERAGE - SWEET",
      logo: "/images/partners/logo_AJ (17) .png",
      category: "تجاري",
      description: "مشروب بارد بنكهة حلوة مستوحى من تقاليد الإنويت.",
      establishedYear: "2024",
      location: "جدة",
      projects: 3,
      services: ["تطوير المنتج", "التسويق الرقمي", "إدارة العلامة التجارية"],
      testimonial: "منتج فريد يجمع بين الأصالة والطعم العصري.",
      color: "#4579a9"
    },{
      name: "ريباس كَافييه",
      logo: "/images/partners/logo_AJ (18).jpeg",
      category: "تجاري",
      description: "مقهى عصري يقدم أفضل أنواع القهوة المختصة.",
      establishedYear: "2022",
      location: "جدة",
      projects: 5,
      services: ["تطبيق الطلبات", "إدارة الفروع", "التسويق الرقمي"],
      testimonial: "تجربة رائعة في تطوير العلامة التجارية وزيادة العملاء.",
      color: "#A16207"
    },
  ]

  const categories = ["الكل", "حكومي", "تجاري", "تعليمي", "إعلامي", "زراعي", "رياضي", "إبداعي"]

  const filteredPartners = selectedCategory === "الكل" 
    ? partners 
    : partners.filter(partner => partner.category === selectedCategory)

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
      number: "250+",
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

  const partnershipBenefits = [
    {
      icon: Globe,
      title: "وصول أوسع للجمهور",
      description: "نساعدك في الوصول لجمهور أكبر عبر قنواتنا الرقمية المتعددة"
    },
    {
      icon: Zap,
      title: "حلول تقنية متطورة",
      description: "نقدم أحدث التقنيات والحلول المبتكرة لتطوير أعمالك"
    },
    {
      icon: Users,
      title: "فريق خبراء متخصص",
      description: "فريق من الخبراء في مختلف المجالات الرقمية والتقنية"
    },
    {
      icon: Shield,
      title: "أمان وموثوقية",
      description: "نضمن أعلى معايير الأمان والحماية لبياناتك ومشاريعك"
    },
    {
      icon: TrendingUp,
      title: "نمو مستدام",
      description: "نساعدك في تحقيق نمو مستدام وطويل المدى لأعمالك"
    },
    {
      icon: Heart,
      title: "علاقة شراكة حقيقية",
      description: "نؤمن بالشراكة الحقيقية والتعاون المثمر لتحقيق النجاح المشترك"
    }
  ]

  return (
    <>
      {/* SEO Head with metadata */}
      <Head>
        <title>شركاؤنا - AJ Marketing | شراكات استراتيجية مع أبرز المؤسسات السعودية</title>
        <meta name="description" content="تعرف على شركاء النجاح في AJ Marketing من المؤسسات الحكومية والشركات الرائدة في المملكة العربية السعودية. شراكات استراتيجية في مختلف القطاعات التجارية والتعليمية والإعلامية." />
        <meta name="keywords" content="شركاء AJ Marketing, شراكات استراتيجية, مؤسسات سعودية, شركات رائدة, وزارة البيئة والمياه والزراعة, جامعة تبوك, غرفة تبوك التجارية, موهبة, Athens Coffee, Point Card, هيئة الصحفيين السعوديين, النادي الوطني السعودي, مزارع أسترا, مركز الملك عبدالعزيز للحوار الوطني, شراكات تجارية, عملاء مميزون" />
        <meta name="author" content="AJ Marketing" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph */}
        <meta property="og:title" content="شركاؤنا - AJ Marketing | شراكات النجاح مع أبرز المؤسسات" />
        <meta property="og:description" content="شراكات استراتيجية مع أبرز المؤسسات والشركات الرائدة في المملكة العربية السعودية" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ajmarketing.sa/partners" />
        <meta property="og:site_name" content="AJ Marketing" />
        <meta property="og:image" content="/images/partners-hero.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="شركاء AJ Marketing" />
        <meta property="og:locale" content="ar_SA" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="شركاؤنا - AJ Marketing" />
        <meta name="twitter:description" content="نفتخر بثقة عملائنا المميزين من أبرز المؤسسات والشركات في المملكة" />
        <meta name="twitter:image" content="/images/partners-hero.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ajmarketing.sa/partners" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br ">
     
      
      <main className="">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-[#36a1d7]/10 via-[#66b19e]/5 to-[#8bbb4c]/10 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-white/20" />
          
          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-20 h-20 bg-[#36a1d7]/10 rounded-full blur-xl"
          />
          <motion.div 
            animate={{ y: [20, -20, 20], x: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-10 w-32 h-32 bg-[#66b19e]/10 rounded-full blur-xl"
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#8bbb4c]/10 rounded-full blur-xl"
          />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-md border border-gray-200/60 rounded-full shadow-lg mb-8">
                <Building2 className="w-5 h-5 text-[#36a1d7] ml-2" />
                <span className="text-gray-800 font-semibold">شركاء النجاح</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                نفتخر بثقة
                <span className="block bg-gradient-to-r p-2 from-[#36a1d7] via-[#66b19e] to-[#8bbb4c] bg-clip-text text-transparent mt-2">
                  عملائنا المميزين
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                شراكات استراتيجية مع أبرز المؤسسات والشركات الرائدة في المملكة العربية السعودية
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.05 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div 
                      className="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${achievement.color}15` }}
                    >
                      <achievement.icon className="w-6 h-6" style={{ color: achievement.color }} />
                    </div>
                    <div className="text-2xl font-bold mb-2" style={{ color: achievement.color }}>
                      {achievement.number}
                    </div>
                    <div className="text-sm font-semibold text-gray-900 mb-1">{achievement.label}</div>
                    <div className="text-xs text-gray-600">{achievement.description}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 bg-white/50 backdrop-blur-sm border-y border-gray-200/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">تصفية حسب القطاع</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-[#36a1d7] to-[#66b19e] text-white shadow-lg"
                        : "bg-white/80 text-gray-700 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                شركاؤنا في
                <span className="block bg-gradient-to-r p-2 from-[#36a1d7] via-[#66b19e] to-[#8bbb4c] bg-clip-text text-transparent mt-2">
                  التميز والنجاح
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                نعمل مع نخبة من أفضل المؤسسات والشركات لتقديم خدمات استثنائية ومتميزة
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
              <AnimatePresence mode="wait">
                {filteredPartners.map((partner, index) => (
                  <motion.div
                    key={`${partner.name}-${selectedCategory}`}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -30, scale: 0.9 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      y: -10, 
                      scale: 1.03,
                      transition: { duration: 0.3 }
                    }}
                    className="group relative cursor-pointer"
                    onClick={() => setSelectedPartner(partner)}
                  >
                    <div className="relative bg-white/95 backdrop-blur-md rounded-3xl p-6 border border-gray-200/60 shadow-lg hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                      {/* Background gradient on hover */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                        style={{ background: `linear-gradient(135deg, ${partner.color}08, ${partner.color}15)` }}
                      />
                      
                      {/* Partner Logo */}
                      <div className="relative z-10 w-full h-44 mb-4 rounded-2xl overflow-hidden bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                        <img
                          src={partner.logo || "/placeholder.svg"}
                          alt={partner.name}
                          className="w-full h-full object-fit group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      
                      {/* Category Badge */}
                      <div 
                        className="relative z-10 inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
                        style={{ 
                          backgroundColor: `${partner.color}20`,
                          color: partner.color
                        }}
                      >
                        {partner.category}
                      </div>
                      
                      {/* Partner Name */}
                      <h3 className="relative z-10 text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors line-clamp-2">
                        {partner.name}
                      </h3>
                      
                      {/* Partner Description */}
                      <p className="relative z-10 text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {partner.description}
                      </p>
                      
                      {/* Partner Stats */}
                      <div className="relative z-10 flex items-center justify-between text-xs text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>منذ {partner.establishedYear}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Target className="w-3 h-3" />
                          <span>{partner.projects} مشروع</span>
                        </div>
                      </div>
                      
                      {/* Learn More Button */}
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="relative z-10 w-full py-2 px-4 rounded-xl text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                        style={{ backgroundColor: partner.color }}
                      >
                        تفاصيل الشراكة
                        <ArrowRight className="w-3 h-3 scale-x-[-1]" />
                      </motion.div>
                      
                      {/* Decorative elements */}
                      <motion.div 
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-60"
                        style={{ backgroundColor: partner.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                لماذا نحن الشريك الأمثل؟
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                نقدم مزايا فريدة وحلول مبتكرة تجعلنا الخيار الأفضل لشراكتك القادمة
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnershipBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-[#36a1d7] to-[#66b19e] rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-r from-[#36a1d7] via-[#66b19e] to-[#8bbb4c] relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <Handshake className="w-5 h-5 ml-2" />
                <span className="font-semibold">انضم إلينا</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                هل تريد أن تكون شريكنا القادم؟
              </h2>
              <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
                انضم إلى قائمة شركائنا المتميزين واحصل على خدمات استثنائية تحقق أهدافك التجارية
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
               
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={()=>{
                      router.push("/contact")
                    }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#36a1d7] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  تواصل معنا
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Partner Details Modal */}
      <AnimatePresence>
        {selectedPartner && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPartner(null)}
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
                style={{ background: `linear-gradient(135deg, ${selectedPartner?.color}, ${selectedPartner?.color}cc)` }}
              >
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedPartner(null)}
                  className="absolute top-6 left-6 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors z-10 backdrop-blur-sm"
                >
                  <X className="w-5 h-5 text-white" />
                </motion.button>

                <div className="flex items-center gap-6 mb-4">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center overflow-hidden">
                    <img 
                      src={selectedPartner?.logo || "/placeholder.svg"} 
                      alt={selectedPartner?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm opacity-80 mb-2">{selectedPartner?.category}</div>
                    <h3 className="text-3xl font-bold mb-2">
                      {selectedPartner?.name}
                    </h3>
                    <div className="w-16 h-1 bg-white/40 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="px-8 pb-8 max-h-[calc(95vh-180px)] overflow-y-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">نبذة عن الشريك</h4>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {selectedPartner?.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4 text-gray-600" />
                          <span className="text-sm font-semibold text-gray-900">تاريخ الشراكة</span>
                        </div>
                        <span className="text-lg font-bold" style={{ color: selectedPartner?.color }}>
                          {selectedPartner?.establishedYear}
                        </span>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="w-4 h-4 text-gray-600" />
                          <span className="text-sm font-semibold text-gray-900">الموقع</span>
                        </div>
                        <span className="text-lg font-bold" style={{ color: selectedPartner?.color }}>
                          {selectedPartner?.location}
                        </span>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Trophy className="w-4 h-4 text-gray-600" />
                        <span className="text-sm font-semibold text-gray-900">المشاريع المكتملة</span>
                      </div>
                      <span className="text-2xl font-bold" style={{ color: selectedPartner?.color }}>
                        {selectedPartner?.projects}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">الخدمات المقدمة</h4>
                    <div className="space-y-3 mb-6">
                      {selectedPartner?.services?.map((service: string, index: number) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
                        >
                          <CheckCircle 
                            className="w-5 h-5 flex-shrink-0"
                            style={{ color: selectedPartner?.color }}
                          />
                          <span className="text-gray-700 font-medium">
                            {service}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 mb-4">شهادة الشريك</h4>
                    <div className="bg-gray-50 rounded-xl p-6">
                      <Star className="w-8 h-8 text-yellow-500 mb-4" />
                      <p className="text-gray-700 italic leading-relaxed mb-4">
                        "{selectedPartner?.testimonial}"
                      </p>
                      <div className="text-sm font-semibold" style={{ color: selectedPartner?.color }}>
                        — {selectedPartner?.name}
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={()=>{
                      router.push("/contact")
                    }}
                    className="flex-1 py-4 px-6 rounded-xl text-white font-semibold shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                    style={{ backgroundColor: selectedPartner?.color }}
                  >
                    <Handshake className="w-5 h-5" />
                    ابدأ شراكة مماثلة
                  </motion.button>
                 
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

     
      </div>
    </>
  )
}
