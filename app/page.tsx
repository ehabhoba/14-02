import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import ToolsSection from "@/components/tools-section"
import AboutSection from "@/components/about-section"
import StatsSection from "@/components/stats-section"
import ProductsSection from "@/components/products-section"
import PlatformContentSection from "@/components/platform-content-section"
import PortfolioSection from "@/components/portfolio-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import BlogSection from "@/components/blog-section"
import FAQSection from "@/components/faq-section"
import PartnersSection from "@/components/partners-section"
import AdSenseAd from "@/components/AdSenseAd"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AdSenseAd slot="1111111111" format="horizontal" />
      <ProductsSection />
      <AdSenseAd slot="2222222222" format="auto" />
      <PlatformContentSection />
      <ServicesSection />
      <AdSenseAd slot="3333333333" format="horizontal" />
      <PartnersSection />
      <ToolsSection />
      <AdSenseAd slot="4444444444" format="auto" />
      <PortfolioSection />
      <AboutSection />
      <StatsSection />
      <AdSenseAd slot="5555555555" format="horizontal" />
      <TestimonialsSection />
      <BlogSection />
      <AdSenseAd slot="6666666666" format="auto" />
      <FAQSection />
      <ContactSection />
    </main>
  )
}
