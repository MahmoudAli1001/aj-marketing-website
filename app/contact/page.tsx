
"use client"

import { Mail, Phone, MapPin, Clock } from "lucide-react"
import Head from "next/head"
import ContactForm from "./contactForm"

// SEO Metadata for Contact Page
export const metadata = {
  title: "تواصل معنا - AJ Marketing | استشارة مجانية وعروض أسعار مخصصة",
  description: "تواصل مع فريق AJ Marketing للحصول على استشارة مجانية وعروض أسعار مخصصة. نحن هنا لمساعدتك في تحقيق أهدافك الرقمية. اتصل بنا عبر الهاتف، البريد الإلكتروني أو قم بزيارتنا في مكتبنا.",
  keywords: [
    "تواصل مع AJ Marketing",
    "استشارة مجانية",
    "عروض أسعار",
    "خدمة عملاء",
    "دعم فني",
    "موقع الشركة",
    "رقم الهاتف",
    "البريد الإلكتروني",
    "عنوان المكتب",
    "ساعات العمل",
    "تواصل فوري",
    "طلب عرض سعر",
    "استفسارات",
    "خدمات تسويق رقمي"
  ].join(", "),
  author: "AJ Marketing",
  robots: "index, follow",
  openGraph: {
    title: "تواصل معنا - AJ Marketing | نحن في خدمتكم",
    description: "تواصل مع فريق AJ Marketing المتخصص للحصول على استشارة مجانية وحلول رقمية مخصصة",
    type: "website",
    url: "https://ajmarketing.sa/contact",
    siteName: "AJ Marketing",
    images: [
      {
        url: "/images/contact-hero.jpg",
        width: 1200,
        height: 630,
        alt: "تواصل مع AJ Marketing"
      }
    ],
    locale: "ar_SA"
  },
  twitter: {
    card: "summary_large_image",
    title: "تواصل معنا - AJ Marketing",
    description: "احصل على استشارة مجانية وعروض أسعار مخصصة من فريق AJ Marketing",
    images: ["/images/contact-hero.jpg"]
  },
  alternates: {
    canonical: "https://ajmarketing.sa/contact"
  }
}

export default function ContactPage() {

 
  return (
    <div className="min-h-screen">
      {/* <Navbar /> */}
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
              <div className="text-center lg:text-right space-y-6 sm:space-y-8 lg:order-2">
                <div className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-md border border-gray-200/60 rounded-full shadow-lg mb-6">
                  <Mail className="w-4 h-4 text-[#36a1d7] ml-2" />
                  <span className="text-gray-800 font-semibold text-sm">تواصل معنا</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  دعنا نحول
                  <span className="block py-3 bg-gradient-to-r from-[#36a1d7] via-[#66b19e] to-[#8bbb4c] bg-clip-text text-transparent mt-2">
                    أفكارك إلى واقع
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                  نحن هنا لمساعدتك في تحقيق أهدافك الرقمية وبناء حضور قوي ومؤثر لعلامتك التجارية
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                  <button className="bg-gradient-to-r from-[#36a1d7] to-[#66b19e] hover:from-[#66b19e] hover:to-[#8bbb4c] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                    ابدأ مشروعك الآن
                  </button>
                  <button className="border-2 border-[#36a1d7] text-[#36a1d7] hover:bg-[#36a1d7] hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300">
                    تحدث معنا مباشرة
                  </button>
                </div>
              </div>
              
              {/* Image Content */}
              <div className="relative lg:order-1">
                <div className="relative max-w-md sm:max-w-lg lg:max-w-xl mx-auto">
                  {/* Background Circle */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#36a1d7]/20 via-[#66b19e]/20 to-[#8bbb4c]/20 rounded-full blur-3xl scale-110" />
                  
                  {/* Image Container */}
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-gray-200/60">
                    <img 
                      src="/contact_us.gif" 
                      alt="Contact Us" 
                      className="w-full h-auto rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-500"
                      loading="eager"
                    />
                  </div>
                  
                  {/* Floating Cards */}
                  <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-gray-200/60 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-[#36a1d7]" />
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-gray-200/60 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-[#66b19e]" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats or Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mt-16 lg:mt-20">
              <div className="text-center p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="text-2xl sm:text-3xl font-bold text-[#36a1d7] mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">دعم مستمر</div>
              </div>
              
              <div className="text-center p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="text-2xl sm:text-3xl font-bold text-[#66b19e] mb-2 group-hover:scale-110 transition-transform duration-300">+500</div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">عميل راضي</div>
              </div>
              
              <div className="text-center p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="text-2xl sm:text-3xl font-bold text-[#8bbb4c] mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">معدل النجاح</div>
              </div>
              
              <div className="text-center p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="text-2xl sm:text-3xl font-bold text-[#36a1d7] mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">سنوات خبرة</div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Contact Content */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50/50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            {/* Section Header */}
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-md border border-gray-200/60 rounded-full shadow-lg mb-6">
                <Phone className="w-4 h-4 text-[#36a1d7] ml-2" />
                <span className="text-gray-800 font-semibold text-sm">كيف يمكننا مساعدتك</span>
              </div>
              <h2 className="text-3xl sm:text-4xl py-3 lg:text-5xl font-bold text-gray-900 mb-4">
                طرق التواصل
                <span className="block bg-gradient-to-r py-2 from-[#36a1d7] via-[#66b19e] to-[#8bbb4c] bg-clip-text text-transparent">
                  والتفاعل معنا
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                اختر الطريقة الأنسب لك للتواصل معنا. نحن متواجدون دائماً لخدمتك
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Enhanced Contact Information */}
              <div className="space-y-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/60 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">معلومات التواصل</h3>
                  <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
                    سواء كان لديك مشروع جديد أو استفسار، نحن متحمسون للتحدث معك ومساعدتك في تحقيق أهدافك
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-r from-[#36a1d7]/5 to-[#66b19e]/5 hover:from-[#36a1d7]/10 hover:to-[#66b19e]/10 transition-all duration-300 group">
                      <div className="w-12 h-12 bg-[#36a1d7]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Mail className="h-6 w-6 text-[#36a1d7]" />
                      </div>
                      <div className="space-x-reverse">
                        <h4 className="font-bold mb-1 text-gray-900">البريد الإلكتروني</h4>
                        <p className="text-gray-600 font-medium">Ajmarkting.s@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-r from-[#66b19e]/5 to-[#8bbb4c]/5 hover:from-[#66b19e]/10 hover:to-[#8bbb4c]/10 transition-all duration-300 group">
                      <div className="w-12 h-12 bg-[#66b19e]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Phone className="h-6 w-6 text-[#66b19e]" />
                      </div>
                      <div className="space-x-reverse">
                        <h4 className="font-bold mb-1 text-gray-900">رقم الهاتف</h4>
                        <p className="text-gray-600 font-medium">+966502959253</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-r from-[#36a1d7]/5 to-[#66b19e]/5 hover:from-[#36a1d7]/10 hover:to-[#66b19e]/10 transition-all duration-300 group">
                      <div className="w-12 h-12 bg-[#36a1d7]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="h-6 w-6 text-[#36a1d7]" />
                      </div>
                      <div className="space-x-reverse">
                        <h4 className="font-bold mb-1 text-gray-900">العنوان</h4>
                        <p className="text-gray-600 font-medium">تبوك، المملكة العربية السعودية</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-r from-[#66b19e]/5 to-[#8bbb4c]/5 hover:from-[#66b19e]/10 hover:to-[#8bbb4c]/10 transition-all duration-300 group">
                      <div className="w-12 h-12 bg-[#66b19e]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Clock className="h-6 w-6 text-[#66b19e]" />
                      </div>
                      <div className="space-x-reverse">
                        <h4 className="font-bold mb-1 text-gray-900">ساعات العمل</h4>
                        <p className="text-gray-600 font-medium">الأحد - الخميس: 9:00 صباحاً - 6:00 مساءً</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Contact Form */}
             <ContactForm />
            </div>
          </div>
        </section>
      </main>
   
    </div>
  )
}
