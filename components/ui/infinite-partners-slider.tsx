"use client"

import { cn } from "@/lib/utils"
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

export const InfinitePartnersSlider = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string
    logo: string
    category?: string
    description?: string
  }[]
  direction?: "left" | "right"
  speed?: "fast" | "normal" | "slow"
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)

  useEffect(() => {
    addAnimation()
  }, [])

  const [start, setStart] = useState(false)

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards")
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse")
      }
    }
  }

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "30s")
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "60s")
      } else {
        containerRef.current.style.setProperty("--animation-duration", "120s")
      }
    }
  }

  return (
    <div className="w-full overflow-hidden py-8">
      {/* First Row - Moving Right */}
      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20 max-w-none overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
          className,
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex min-w-full shrink-0 gap-6 py-4 w-max flex-nowrap",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]",
          )}
        >
          {items.slice(0, Math.ceil(items.length / 2)).map((item, idx) => (
            <motion.li
              key={`row1-${idx}`}
              className="w-[280px] max-w-full relative rounded-3xl border border-gray-200/60 px-8 py-10 bg-white/95 backdrop-blur-sm hover:bg-white hover:shadow-xl hover:border-[#36a1d7]/30 transition-all duration-500 group cursor-pointer"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="relative z-20 flex flex-col items-center space-y-6">
                <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl group-hover:from-[#36a1d7]/10 group-hover:to-[#66b19e]/10 transition-all duration-300">
                  <img
                    src={item.logo || "/placeholder.svg"}
                    alt={item.name}
                    className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#36a1d7] transition-colors duration-300">
                    {item.name}
                  </h3>
                  {item.category && (
                    <span className="inline-block px-3 py-1 text-xs font-medium text-[#66b19e] bg-[#66b19e]/10 rounded-full">
                      {item.category}
                    </span>
                  )}
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Second Row - Moving Left */}
      <div className="scroller relative z-20 max-w-none overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)] mt-4">
        <ul className="flex min-w-full shrink-0 gap-6 py-4 w-max flex-nowrap animate-scroll-reverse">
          {items.slice(Math.ceil(items.length / 2)).map((item, idx) => (
            <motion.li
              key={`row2-${idx}`}
              className="w-[280px] max-w-full relative rounded-3xl border border-gray-200/60 px-8 py-10 bg-white/95 backdrop-blur-sm hover:bg-white hover:shadow-xl hover:border-[#8bbb4c]/30 transition-all duration-500 group cursor-pointer"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="relative z-20 flex flex-col items-center space-y-6">
                <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl group-hover:from-[#8bbb4c]/10 group-hover:to-[#36a1d7]/10 transition-all duration-300">
                  <img
                    src={item.logo || "/placeholder.svg"}
                    alt={item.name}
                    className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#8bbb4c] transition-colors duration-300">
                    {item.name}
                  </h3>
                  {item.category && (
                    <span className="inline-block px-3 py-1 text-xs font-medium text-[#8bbb4c] bg-[#8bbb4c]/10 rounded-full">
                      {item.category}
                    </span>
                  )}
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  )
}
