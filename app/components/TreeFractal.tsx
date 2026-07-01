'use client'

import { useEffect, useRef } from 'react'
import styles from './TreeFractal.module.css'

export default function TreeFractal() {
  const containerRef = useRef<HTMLDivElement>(null)
  const p5Ref = useRef<{ remove: () => void } | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    let mounted = true

    const init = async () => {
      const p5 = (await import('p5')).default
      if (!mounted || !containerRef.current || p5Ref.current) return

      p5Ref.current = new p5((s: any) => {
        const canvasSize = 570
        const limit = 4
        const animMult = 0.0002
        const sizeMult = 0.26
        const brLenRatio = 0.67
        const scrub = 0.01
        let slider: any

        s.setup = () => {
          const canvas = s.createCanvas(canvasSize, canvasSize)
          canvas.parent(containerRef.current!)
          slider = s.createSlider(0, s.TWO_PI, s.QUARTER_PI, scrub)
          slider.parent(containerRef.current!)
          ;(slider.elt as HTMLInputElement).className = styles.slider
        }

        s.draw = () => {
          s.stroke('#d63884')
          s.strokeWeight(1.2)
          s.background(255)
          const halfAngle = (slider.value() as number) * 0.5
          const waver = s.sin(s.millis() * 0.0006) * halfAngle * 0.3
          const angle = halfAngle + waver
          // translate to top-center and draw downward (flipped from original)
          s.translate(s.width / 2, 0)
          branch(s.height * sizeMult, angle, s, limit, brLenRatio)
        }
      }, containerRef.current)
    }

    init()

    return () => {
      mounted = false
      if (p5Ref.current) {
        p5Ref.current.remove()
        p5Ref.current = null
      }
    }
  }, [])

  return <div ref={containerRef} className={styles.container} />
}

function branch(length: number, angle: number, s: any, limit: number, ratio: number) {
  s.line(0, 0, 0, length)
  s.translate(0, length)
  s.push()
  s.rotate(angle)
  if (length > limit) branch(length * ratio, angle, s, limit, ratio)
  s.pop()
  s.push()
  s.rotate(-angle)
  if (length > limit) branch(length * ratio, angle, s, limit, ratio)
  s.pop()
}
