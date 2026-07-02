'use client'

import { useEffect, useRef } from 'react'
import styles from './Spiral.module.css'

export default function Spiral(props: {width: number}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const p5Ref = useRef<import('p5').default | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    let mounted = true

    const init = async () => {
      const p5 = (await import('p5')).default
      if (!mounted || !containerRef.current || p5Ref.current) return

      p5Ref.current = new p5((s: import('p5').default) => {
        const canvasSize = props.width
        let increasing = true
        let slider: import('p5').default.Element

        s.setup = () => {
          const canvas = s.createCanvas(canvasSize, canvasSize)
          canvas.parent(containerRef.current!)
          s.angleMode(s.DEGREES)
          s.colorMode(s.RGB)
          slider = s.createSlider(60, 120, 0, 0.005)
         // slider.parent(containerRef.current!)
          ;(slider.elt as HTMLInputElement).className = styles.slider
          createPattern(170, 5, 0)
        }

        s.draw = () => {
          const step = slider.value() as number
          createPattern(step, step / 100, 0)
          if (increasing) {
            slider.value(step + 0.005)
            if (step == 120) {
              increasing = false
            }
          } else {
            slider.value(step - 0.005)
            if (step == 60) {
              increasing = true
            }
          }
        }

        s.mousePressed = () => {
          createPattern()
        }

        s.keyPressed = () => {
          createPattern()
        }

        function createPattern(fix?: number, zoom?: number, startColour?: number) {
          let length = 0
          let step = s.round(s.random(360))
          let colour = 0
          let rotationAngle = 0
          let magnify = s.height / 500
          let oldX = s.width / 2
          let oldY = s.height / 2

          if (fix != null) step = fix
          if (zoom != null) magnify = zoom
          if (startColour != null) colour = 0

          s.background(255)
          
          for (let i = 0; i < 500; i++) {
            s.stroke('#d63884')
            const newX = length * s.cos(rotationAngle) + oldX
            const newY = length * s.sin(rotationAngle) + oldY
            s.line(oldX, oldY, newX, newY)
            oldX = newX
            oldY = newY
            rotationAngle += step
            length -= magnify
          }
            
         

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
