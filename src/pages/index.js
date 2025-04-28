import React from 'react'
import { Hero } from './components/Hero'


export default function Home() {
  return (
    <main>
    <Hero />
    <section className="min-h-screen bg-white p-12">
      <h2 className="text-3xl font-bold text-[#205879]">
         Content Continues Here
      </h2>
    </section>
  </main>
  )
}
