'use client'

import { useEffect, useRef } from 'react'
import styles from './Globe.module.css'

export default function Globe({ size = 260 }: { size?: number }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const p5Ref = useRef<{ remove: () => void } | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    let mounted = true

    const init = async () => {
      const p5 = (await import('p5')).default
      if (!mounted || !containerRef.current || p5Ref.current) return

      p5Ref.current = new p5((s: any) => {
        s.setup = () => {
          const canvas = s.createCanvas(size, size, s.WEBGL)
          canvas.parent(containerRef.current!)
          s.noFill()
          s.stroke('#d63884')
          s.strokeWeight(1)
        }

        s.draw = () => {
          s.background(255)
          s.rotateX(-0.35)
          s.rotateY(s.frameCount * 0.004)
          s.sphere(size * 0.38, 24, 16)
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
  }, [size])

  return <div ref={containerRef} className={styles.container} />
}
