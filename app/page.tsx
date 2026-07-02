'use client'
import dynamic from 'next/dynamic'
import Header from './components/Header'
import Examples from './components/Examples'
import Prizes from './components/Prizes'
import Footer from './components/Footer'
import ProceduralArt from './components/ProceduralArt'
export default function Home() {
  return (
    <main>
      <Header />
      <ProceduralArt />
      <Examples />
      <Prizes />
      <Footer />
    </main>
  )
}
