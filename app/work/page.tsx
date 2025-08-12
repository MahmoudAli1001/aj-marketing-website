"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Volume2, VolumeX, Award, Eye, Users, Briefcase, X, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useRouter } from "next/navigation"

export default function OurWorkPage() {
  const [isMuted, setIsMuted] = useState(true)
  const [selectedVideo, setSelectedVideo] = useState<any>(null)
  const [isVideoDialogOpen, setIsVideoDialogOpen] = useState(false)
  const videoRefs = useRef<Record<string, HTMLVideoElement>>({})
  const router = useRouter()

  const ourWork = [
    {
      id: 1,
      title: "",
      video: "/images/ourWork/ourWork (1).mp4",
      color: "#8bbb4c",
    },
    {
      id: 2,
      title: "",
      video: "/images/ourWork/ourWork (2).mp4",
      color: "#66b19e",
    },
    {
      id: 3,
      title: "",
      video: "/images/ourWork/ourWork (3).mp4",
      color: "#36a1d7",
    },
    {
      id: 4,
      title:"",
      video: "/images/ourWork/ourWork (4).mp4",
      color: "#8bbb4c",
    },
    {
      id: 5,
      title: "",
      video: "/images/ourWork/ourWork (5).mp4",
      color: "#66b19e",
    },
    {
      id: 6,
      title: "",
      video: "/images/ourWork/ourWork (6).mp4",
      color: "#36a1d7",
    },
    {
      id: 7,
      title: "",
      video: "/images/ourWork/ourWork (7).mp4",
      color: "#8bbb4c",
    },
    {
      id: 8,
      title: "",
      video: "/images/ourWork/ourWork (8).mp4",
      color: "#66b19e",
    },
    {
      id: 9,
      title: "",
      video: "/images/ourWork/ourWork (9).mp4",
      color: "#36a1d7",
    },
    {
      id: 10,
      title: "",
      video: "/images/ourWork/ourWork (10).mp4",
      color: "#8bbb4c",
    },
    {
      id: 11,
      title: "",
      video: "/images/ourWork/ourWork (11).mp4",
      color: "#66b19e",
    },
    {
      id: 12,
      title: "",
      video: "/images/ourWork/ourWork (12).mp4",
      color: "#36a1d7",
    },{
      id: 13,
      title: "",
      video: "/images/ourWork/ourWork (13).mp4",
      color: "#8bbb4c",
    }
  ]

  const toggleMute = () => {
    const newMutedState = !isMuted
    setIsMuted(newMutedState)
    
    Object.values(videoRefs.current).forEach(video => {
      if (video) {
        video.muted = newMutedState
      }
    })
  }

  const handleVideoClick = (video: any) => {
    setSelectedVideo(video)
    setIsVideoDialogOpen(true)
  }

  const handleContactClick = () => {
    router.push('/contact')
  }

  useEffect(() => {
    // Initialize all videos as muted
    Object.values(videoRefs.current).forEach(video => {
      if (video) {
        video.muted = isMuted
      }
    })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header Section */}
      <div className="relative pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-green-600/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-white/90 backdrop-blur-md border border-gray-200/60 rounded-full shadow-lg mb-4 sm:mb-6">
              <span className="text-gray-800 font-semibold text-xs sm:text-sm">أعمالنا المميزة</span>
            </div>
            
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              <span className="block">معرض</span>
              <span className="block bg-gradient-to-r py-3 from-[#36a1d7] via-[#66b19e] to-[#8bbb4c] bg-clip-text text-transparent">
                إبداعاتنا
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl lg:max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16 leading-relaxed px-4 sm:px-0">
              استكشف مجموعة من أفضل مشاريعنا وحملاتنا التسويقية المبتكرة التي حققت نجاحاً باهراً لعملائنا
            </p>
            
            {/* Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto mb-8 sm:mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center p-3 sm:p-4 lg:p-6"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mb-3 sm:mb-4 shadow-lg">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-blue-600" />
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">12</div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">جائزة وتقدير</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center p-3 sm:p-4 lg:p-6"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center mb-3 sm:mb-4 shadow-lg">
                  <Eye className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-green-600" />
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">+25M</div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">مشاهدة</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center p-3 sm:p-4 lg:p-6"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto rounded-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center mb-3 sm:mb-4 shadow-lg">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-teal-600" />
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">+80</div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">عميل سعيد</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center p-3 sm:p-4 lg:p-6"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto rounded-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center mb-3 sm:mb-4 shadow-lg">
                  <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-purple-600" />
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">+150</div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">مشروع مكتمل</div>
              </motion.div>
            </div>
            
            {/* Mute/Unmute Button */}
            <Button
              onClick={toggleMute}
              size="lg"
              className={`
                bg-gradient-to-r transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold
                px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base
                ${isMuted 
                  ? 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700' 
                  : 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
                }
              `}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  تشغيل الصوت
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  إيقاف الصوت
                </>
              )}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Videos Grid */}
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {ourWork.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer"
              onClick={() => handleVideoClick(work)}
            >
              {/* Video Container */}
              <div className="relative aspect-video bg-black rounded-xl sm:rounded-2xl overflow-hidden">
                <video
                  ref={(el) => {
                    if (el) videoRefs.current[work.id] = el
                  }}
                  src={work.video}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 rounded-full p-3 sm:p-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 text-[#36a1d7] fill-current" />
                  </div>
                </div>
                
                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-sm sm:text-base lg:text-lg font-semibold leading-tight">
                    {work.title}
                  </h3>
                </div>
                
                {/* Color Accent */}
                <div 
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full opacity-80"
                  style={{ backgroundColor: work.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#36a1d7] to-[#66b19e] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              مستعد لإنشاء مشروعك القادم؟
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 leading-relaxed px-4 sm:px-0">
              دعنا نحول فكرتك إلى واقع مبهر يحقق أهدافك ويتجاوز توقعاتك
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={handleContactClick}
                className="bg-white text-[#36a1d7] hover:bg-gray-50 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300"
              >
                تواصل معنا
              </Button>
             
            </div>
          </motion.div>
        </div>
      </section>

      {/* Background Decorations */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-400/10 rounded-full blur-3xl" />
      </div>

      {/* Video Popup Dialog */}
      <Dialog open={isVideoDialogOpen} onOpenChange={setIsVideoDialogOpen}>
        <DialogContent className="w-[95vw] sm:w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] max-w-4xl max-h-[95vh] p-0 bg-black border-none">
          {/* Close Button */}
          <button
            onClick={() => setIsVideoDialogOpen(false)}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 p-2 bg-black/60 hover:bg-black/80 rounded-full text-white transition-all duration-200"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          
          {selectedVideo && (
            <div className="relative w-full">
              {/* Video Title */}
              <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-40 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 max-w-[calc(100%-4rem)] sm:max-w-[calc(100%-6rem)]">
                <h3 className="text-white font-semibold text-xs sm:text-sm md:text-base truncate">
                  {selectedVideo.title}
                </h3>
              </div>
              
              {/* Video Container - Flexible aspect ratio */}
              <div className="relative w-full bg-black">
                <video
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-auto max-h-[80vh] object-contain bg-black"
                  style={{ aspectRatio: 'auto' }}
                >
                  <source src={selectedVideo.video} type="video/mp4" />
                  <p className="text-white text-center p-4">
                    متصفحك لا يدعم تشغيل الفيديو
                  </p>
                </video>
              </div>
              
              {/* Video Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 sm:p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-medium text-xs sm:text-sm md:text-base mb-1 truncate">
                      {selectedVideo.title}
                    </h4>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <div 
                        className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full flex-shrink-0"
                        style={{ backgroundColor: selectedVideo.color }}
                      />
                      <span className="text-white/80 text-xs sm:text-sm">
                        عالي الجودة
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}