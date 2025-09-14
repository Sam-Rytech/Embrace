"use client"
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Companies from '@/components/Companies'
import Commitments from '@/components/Commitments'
import HowItWorks from '@/components/HowItWorks'
import OurWork from '@/components/OurWork'
import CTASection from '@/components/CTASection'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'


export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Companies Section */}
      <Companies />

      {/* Commitments Section */}
      <Commitments />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Our Work Section */}
      <OurWork />

      {/* CTA Section */}
      <CTASection />

      {/* Team Section */}
      <Team />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA Section */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </main>
  )
}
