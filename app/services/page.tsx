"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Head from "next/head"
import { 
  Code, 
  Palette, 
  Megaphone, 
  Camera, 
  BarChart3, 
  Users, 
  Mic, 
  Sparkles, 
  X, 
  ArrowRight,
  Star,
  CheckCircle,
  Phone,
  Mail,
  MessageSquare,
  Zap,
  Target,
  Award,
  Globe
} from "lucide-react"

// SEO Metadata for Services Page
export const metadata = {
  title: "خدماتنا الرقمية - AJ Marketing | تصميم المواقع والتطبيقات والتسويق الإلكتروني",
  description: "نقدم خدمات رقمية شاملة تشمل تصميم وبرمجة المواقع، تطوير تطبيقات الهواتف، التسويق الإلكتروني، التصاميم والإنفوجرافيك، التصوير والمونتاج. احصل على حلول رقمية احترافية مع فريق AJ Marketing المتخصص.",
  keywords: [
    "تصميم مواقع",
    "برمجة تطبيقات", 
    "تسويق إلكتروني",
    "تصميم جرافيك",
    "انفوجرافيك",
    "تصوير فيديو",
    "مونتاج",
    "تحليل بيانات",
    "إدارة محتوى",
    "تعليق صوتي",
    "خدمات رقمية السعودية",
    "شركة تسويق رقمي",
    "تطوير مواقع الرياض",
    "SEO",
    "موشن جرافيك"
  ].join(", "),
  author: "AJ Marketing",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "خدماتنا الرقمية - AJ Marketing | حلول رقمية شاملة ومتطورة",
    description: "خدمات رقمية احترافية تشمل تصميم المواقع، تطوير التطبيقات، التسويق الإلكتروني، والتصميم الإبداعي. نحول أحلامك الرقمية إلى واقع ملموس.",
    type: "website",
    url: "https://ajmarketing.sa/services",
    siteName: "AJ Marketing",
    images: [
      {
        url: "/images/services-hero.jpg",
        width: 1200,
        height: 630,
        alt: "خدمات AJ Marketing الرقمية"
      }
    ],
    locale: "ar_SA"
  },
  twitter: {
    card: "summary_large_image",
    title: "خدماتنا الرقمية - AJ Marketing",
    description: "حلول رقمية شاملة ومتطورة تواكب أحدث التطورات التقنية",
    images: ["/images/services-hero.jpg"],
    site: "@ajmarketing_sa"
  },
  alternates: {
    canonical: "https://ajmarketing.sa/services",
    languages: {
      "ar-SA": "https://ajmarketing.sa/ar/services",
      "en-US": "https://ajmarketing.sa/en/services"
    }
  },
  other: {
    "theme-color": "#36a1d7",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no"
  }
}

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<any>(null)

  const services = [
    {
      icon: Code,
      title: "تصميم وبرمجة المواقع",
      description: "تصميم وتطوير مواقع ومتاجر إلكترونية احترافية وسريعة مع أحدث التقنيات",
      color: "#8bbb4c",
      features: ["تصميم متجاوب", "سرعة عالية", "أمان متقدم", "SEO محسن"],
      fullDescription: "نقدم خدمات تصميم وبرمجة المواقع الإلكترونية بأحدث التقنيات والمعايير العالمية. فريقنا المتخصص يعمل على تطوير مواقع متجاوبة وسريعة مع تحسين محركات البحث لضمان ظهور موقعك في النتائج الأولى.",
      benefits: ["زيادة المبيعات بنسبة 300%", "تحسين تجربة المستخدم", "أمان عالي المستوى", "دعم فني مدى الحياة"],
      process: ["تحليل المتطلبات", "التصميم والتطوير", "الاختبار والمراجعة", "الإطلاق والمتابعة"],
      category: "تطوير ويب"
    },
    {
      icon: Code,
      title: "تطوير تطبيقات الهواتف",
      description: "تطوير تطبيقات مخصصة للهواتف الذكية بأنظمة iOS وAndroid",
      color: "#36a1d7",
      features: ["تطبيقات مخصصة", "تصميم UX/UI", "تكامل مع الخدمات", "اختبار شامل"],
      fullDescription: "نطور تطبيقات الهواتف الذكية المخصصة لأنظمة iOS وAndroid بتصميم مميز وأداء عالي، مع التكامل الكامل مع خدماتك الحالية وضمان تجربة مستخدم استثنائية.",
      benefits: ["وصول أكبر للعملاء", "تفاعل أكثر مع العلامة التجارية", "إشعارات فورية", "عمل بدون إنترنت"],
      process: ["دراسة السوق", "التصميم والبرمجة", "الاختبار المكثف", "النشر على المتاجر"],
      category: "تطبيقات موبايل"
    },
    {
      icon: Palette,
      title: "التصاميم والإنفوجرافيك",
      description: "تصاميم إبداعية وانفوجرافيك وموشن جرافيك متميز يجذب الجمهور",
      color: "#66b19e",
      features: ["هوية بصرية", "انفوجرافيك", "موشن جرافيك", "تصاميم طباعة"],
      fullDescription: "فريق التصميم لدينا يبدع في إنتاج التصاميم البصرية المميزة والإنفوجرافيك التفاعلي الذي يوصل رسالتك بوضوح وجاذبية تترك أثراً لا يُنسى لدى جمهورك.",
      benefits: ["جذب انتباه أكبر", "توصيل الرسالة بوضوح", "زيادة التفاعل", "تميز عن المنافسين"],
      process: ["فهم الرسالة", "العصف الذهني", "التصميم والتطوير", "المراجعة والتسليم"],
      category: "تصميم وإبداع"
    },
    {
      icon: Megaphone,
      title: "التسويق الإلكتروني",
      description: "حملات تسويقية مدروسة ومخططة لزيادة المبيعات والوصول للجمهور المستهدف",
      color: "#8bbb4c",
      features: ["إعلانات مدفوعة", "SEO", "التسويق على وسائل التواصل", "تحليل النتائج"],
      fullDescription: "نصمم استراتيجيات تسويقية شاملة تشمل الإعلانات المدفوعة على جميع المنصات، تحسين محركات البحث، وإدارة حسابات التواصل الاجتماعي لضمان وصولك للجمهور المناسب في الوقت المناسب.",
      benefits: ["زيادة المبيعات", "تحسين الوعي بالعلامة التجارية", "استهداف دقيق", "عائد استثمار مضمون"],
      process: ["تحليل السوق", "وضع الاستراتيجية", "تنفيذ الحملات", "التحليل والتحسين"],
      category: "تسويق رقمي"
    },
    {
      icon: Camera,
      title: "التصوير والمونتاج",
      description: "تصوير احترافي ومونتاج متقن للفيديوهات والصور بأعلى جودة",
      color: "#36a1d7",
      features: ["تصوير منتجات", "فيديو ترويجي", "تصوير فعاليات", "مونتاج احترافي"],
      fullDescription: "خدمات التصوير الاحترافي والمونتاج المتقن لجميع أنواع المحتوى المرئي، من تصوير المنتجات إلى الفيديوهات الترويجية والفعاليات، مع أحدث المعدات والتقنيات.",
      benefits: ["محتوى عالي الجودة", "جذب انتباه أكبر", "احترافية في العرض", "زيادة التفاعل"],
      process: ["التخطيط المسبق", "التصوير", "المونتاج والمعالجة", "التسليم النهائي"],
      category: "إنتاج مرئي"
    },
    {
      icon: BarChart3,
      title: "التحليل والإحصائيات",
      description: "تحليل البيانات وقياس الأداء لتحسين النتائج واتخاذ قرارات مدروسة",
      color: "#66b19e",
      features: ["تقارير مفصلة", "تحليل الجمهور", "قياس ROI", "توصيات تحسين"],
      fullDescription: "نوفر تحليلات عميقة لبياناتك التسويقية والرقمية، مع تقارير مفصلة وتوصيات عملية لتحسين الأداء وزيادة العائد على الاستثمار بناءً على بيانات حقيقية.",
      benefits: ["قرارات مبنية على البيانات", "تحسين الأداء المستمر", "فهم أعمق للجمهور", "زيادة الربحية"],
      process: ["جمع البيانات", "التحليل والتفسير", "إعداد التقارير", "تقديم التوصيات"],
      category: "تحليل بيانات"
    },
    {
      icon: Users,
      title: "إدارة المحتوى",
      description: "إدارة شاملة ومتخصصة لمحتوى وسائل التواصل الاجتماعي",
      color: "#8bbb4c",
      features: ["استراتيجية محتوى", "جدولة منشورات", "تفاعل مع الجمهور", "تقارير أداء"],
      fullDescription: "فريق إدارة المحتوى لدينا يخطط وينفذ استراتيجيات محتوى فعالة عبر جميع منصات التواصل الاجتماعي مع متابعة مستمرة للتفاعل والنتائج وبناء مجتمع قوي حول علامتك التجارية.",
      benefits: ["حضور مستمر", "تفاعل أعلى", "بناء مجتمع", "زيادة الولاء للعلامة التجارية"],
      process: ["وضع الاستراتيجية", "إنتاج المحتوى", "النشر والتفاعل", "التحليل والتطوير"],
      category: "إدارة مواقع التواصل"
    },
    {
      icon: Mic,
      title: "التعليق الصوتي",
      description: "خدمات التعليق الصوتي الاحترافي لمختلف المشاريع",
      color: "#36a1d7",
      features: ["تعليق صوتي احترافي", "تسجيل صوتي", "تحرير صوتي", "مؤثرات صوتية"],
      fullDescription: "نقدم خدمات التعليق الصوتي الاحترافي بأصوات متنوعة (رجالي، نسائي، طفولي) مع خدمات التسجيل والتحرير الصوتي والمؤثرات لجميع أنواع المشاريع الإعلامية والتسويقية.",
      benefits: ["أصوات احترافية متنوعة", "جودة تسجيل عالية", "سرعة في التنفيذ", "أسعار تنافسية"],
      process: ["اختيار الصوت المناسب", "التسجيل", "التحرير والمعالجة", "التسليم النهائي"],
      category: "إنتاج صوتي"
    }
  ]

  const stats = [
    { icon: Target, value: "500+", label: "مشروع مكتمل" },
    { icon: Users, value: "200+", label: "عميل راضي" },
    { icon: Award, value: "5+", label: "سنوات خبرة" },
    { icon: Globe, value: "24/7", label: "دعم فني" }
  ]

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AJ Marketing",
    "description": "شركة متخصصة في الخدمات الرقمية والتسويق الإلكتروني",
    "url": "https://ajmarketing.sa",
    "logo": "https://ajmarketing.sa/logo.png",
    "sameAs": [
      "https://twitter.com/ajmarketing_sa",
      "https://linkedin.com/company/ajmarketing",
      "https://instagram.com/ajmarketing_sa"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+966-XX-XXX-XXXX",
      "contactType": "customer service",
      "areaServed": "SA",
      "availableLanguage": ["Arabic", "English"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "SA",
      "addressRegion": "Riyadh"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "خدمات AJ Marketing الرقمية",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description,
          "category": service.category,
          "provider": {
            "@type": "Organization",
            "name": "AJ Marketing"
          }
        }
      }))
    }
  }

  return (
    <>
      {/* SEO Head with Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      <div className="min-h-screen">
        <main className="">
          {/* Hero Section */}
          <section 
            className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-[#36a1d7]/10 via-[#66b19e]/5 to-[#8bbb4c]/10 overflow-hidden"
            itemScope 
            itemType="https://schema.org/WebPageElement"
          >
            <meta itemProp="name" content="قسم خدماتنا الرقمية" />
            <meta itemProp="description" content="عرض شامل لخدمات AJ Marketing الرقمية المتخصصة" />
            
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
                <Sparkles className="w-5 h-5 text-[#36a1d7] ml-2" />
                <span className="text-gray-800 font-semibold">خدماتنا المميزة</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                خدمات رقمية
                <span className="block bg-gradient-to-r from-[#36a1d7] via-[#66b19e] to-[#8bbb4c] bg-clip-text text-transparent mt-2">
                  شاملة ومتطورة
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                نحول أحلامك الرقمية إلى واقع ملموس بخدمات احترافية تواكب أحدث التطورات التقنية
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <stat.icon className="w-8 h-8 text-[#36a1d7] mx-auto mb-3" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section 
          className="py-20 lg:py-28"
          itemScope 
          itemType="https://schema.org/ItemList"
          aria-labelledby="services-heading"
        >
          <meta itemProp="name" content="خدمات AJ Marketing الرقمية" />
          <meta itemProp="description" content="مجموعة شاملة من الخدمات الرقمية المتخصصة" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                مجموعة خدماتنا
                <span className="block bg-gradient-to-r from-[#66b19e] to-[#8bbb4c] bg-clip-text text-transparent mt-2">
                  المتكاملة
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                نقدم حلولاً شاملة تغطي جميع احتياجاتك الرقمية من التصميم والتطوير إلى التسويق والتحليل
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  viewport={{ once: true }}
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedService(service)}
                  itemScope
                  itemType="https://schema.org/Service"
                  itemProp="itemListElement"
                >
                  <meta itemProp="name" content={service.title} />
                  <meta itemProp="description" content={service.description} />
                  <meta itemProp="category" content={service.category} />
                  <div 
                    itemProp="provider" 
                    itemScope 
                    itemType="https://schema.org/Organization"
                  >
                    <meta itemProp="name" content="AJ Marketing" />
                  </div>
                  
                  <article className="relative bg-white/95 backdrop-blur-md rounded-3xl p-6 lg:p-8 border border-gray-200/60 shadow-lg hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                    {/* Background gradient on hover */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                      style={{ background: `linear-gradient(135deg, ${service.color}08, ${service.color}15)` }}
                    />
                    
                    {/* Service Icon */}
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="relative z-10 w-16 h-16 mb-6 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                      style={{ backgroundColor: `${service.color}15` }}
                    >
                      <service.icon className="w-8 h-8" style={{ color: service.color }} />
                    </motion.div>
                    
                    {/* Category Badge */}
                    <div 
                      className="relative z-10 inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                      style={{ 
                        backgroundColor: `${service.color}20`,
                        color: service.color
                      }}
                    >
                      {service.category}
                    </div>
                    
                    {/* Service Title */}
                    <h3 className="relative z-10 text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                      {service.title}
                    </h3>
                    
                    {/* Service Description */}
                    <p className="relative z-10 text-gray-600 leading-relaxed mb-6 text-sm">
                      {service.description}
                    </p>
                    
                    {/* Features Preview */}
                    <div className="relative z-10 space-y-2 mb-6">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: service.color }} />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 2 && (
                        <div className="text-sm text-gray-500">+{service.features.length - 2} المزيد...</div>
                      )}
                    </div>
                    
                    {/* Learn More Button */}
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative z-10 w-full py-3 px-6 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                      style={{ backgroundColor: service.color }}
                    >
                      تعرف على المزيد
                      <ArrowRight className="w-4 h-4 scale-x-[-1]" />
                    </motion.button>
                    
                    {/* Decorative elements */}
                    <motion.div 
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="absolute top-4 right-4 w-3 h-3 rounded-full opacity-60"
                      style={{ backgroundColor: service.color }}
                    />
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute bottom-4 left-4 w-2 h-2 rounded-full opacity-40"
                      style={{ backgroundColor: service.color }}
                    />
                  </article>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
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
                لماذا تختارنا؟
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                نجمع بين الخبرة والإبداع والتقنيات الحديثة لنقدم لك أفضل الحلول الرقمية
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: "سرعة في التنفيذ",
                  description: "نلتزم بالمواعيد المحددة ونسلم مشاريعك في الوقت المناسب"
                },
                {
                  icon: Award,
                  title: "جودة عالية",
                  description: "نضمن أعلى معايير الجودة في جميع خدماتنا ومشاريعنا"
                },
                {
                  icon: Users,
                  title: "فريق متخصص",
                  description: "فريق من الخبراء والمتخصصين في مختلف المجالات الرقمية"
                },
                {
                  icon: Target,
                  title: "حلول مخصصة",
                  description: "نصمم حلولاً تناسب احتياجاتك الفريدة ومتطلبات عملك"
                },
                {
                  icon: Phone,
                  title: "دعم مستمر",
                  description: "دعم فني متواصل ومتابعة دورية لضمان استمرار نجاح مشروعك"
                },
                {
                  icon: Star,
                  title: "أسعار تنافسية",
                  description: "نقدم أفضل الأسعار مع الحفاظ على أعلى مستويات الجودة"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#36a1d7] to-[#66b19e] rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                ابدأ مشروعك معنا اليوم
              </h2>
              <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
                دعنا نساعدك في تحويل أفكارك إلى واقع رقمي ناجح
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#36a1d7] px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  تواصل معنا الآن
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#36a1d7] transition-all duration-300"
                >
                  اطلب عرض سعر
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

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
                    <div className="text-sm opacity-80 mb-2">{selectedService?.category}</div>
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
                    className={`flex-1 py-4 px-6 border-2 rounded-xl font-semibold transition-all duration-300 text-${selectedService?.color} flex items-center justify-center gap-2 hover:text-white`}

                    style={{ 
                      borderColor: selectedService?.color,
                      
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = selectedService?.color || '';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = 'transparent';
                    }}
                  >
                    <MessageSquare className={`w-5 h-5 text-${selectedService?.color}`} />
                    تواصل معنا الآن
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
