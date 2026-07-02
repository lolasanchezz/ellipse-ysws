'use client'
import dynamic from 'next/dynamic'
import Header from './components/Header'
import Examples from './components/Examples'
import Prizes from './components/Prizes'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Examples />
      <Prizes />
      <Footer />
    </main>
  )
}
