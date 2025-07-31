"use client"
import { cn } from "@/lib/utils"
import { useRef, useEffect, useState } from "react"

export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize,
  showGradient = true,
}: {
  animationSpeed?: number
  opacities?: number[]
  colors?: number[][]
  containerClassName?: string
  dotSize?: number
  showGradient?: boolean
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let dots: Array<{
      x: number
      y: number
      opacity: number
      targetOpacity: number
      color: number[]
    }> = []

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }

    const initializeDots = () => {
      dots = []
      const cols = Math.floor(canvas.width / (dotSize || 4))
      const rows = Math.floor(canvas.height / (dotSize || 4))

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({
            x: i * (dotSize || 4),
            y: j * (dotSize || 4),
            opacity: 0,
            targetOpacity: 0,
            color: colors[Math.floor(Math.random() * colors.length)],
          })
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      dots.forEach((dot) => {
        if (Math.abs(dot.opacity - dot.targetOpacity) > 0.01) {
          dot.opacity += (dot.targetOpacity - dot.opacity) * animationSpeed
        }

        if (dot.opacity > 0.01) {
          ctx.fillStyle = `rgba(${dot.color.join(",")}, ${dot.opacity})`
          ctx.fillRect(dot.x, dot.y, dotSize || 4, dotSize || 4)
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    const startAnimation = () => {
      setIsAnimating(true)
      dots.forEach((dot) => {
        dot.targetOpacity = opacities[Math.floor(Math.random() * opacities.length)]
      })
    }

    const stopAnimation = () => {
      setIsAnimating(false)
      dots.forEach((dot) => {
        dot.targetOpacity = 0
      })
    }

    resizeCanvas()
    initializeDots()
    animate()

    const handleMouseEnter = startAnimation
    const handleMouseLeave = stopAnimation

    canvas.addEventListener("mouseenter", handleMouseEnter)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    const resizeObserver = new ResizeObserver(resizeCanvas)
    resizeObserver.observe(canvas)

    return () => {
      cancelAnimationFrame(animationId)
      canvas.removeEventListener("mouseenter", handleMouseEnter)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      resizeObserver.disconnect()
    }
  }, [animationSpeed, opacities, colors, dotSize])

  return (
    <div className={cn("h-full relative bg-white w-full", containerClassName)}>
      <canvas ref={canvasRef} className="absolute inset-0 z-20 h-full w-full" />
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%] to-transparent pointer-events-none z-30" />
      )}
    </div>
  )
}
