import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import PricingSection from "@/components/pricing-section"

export const metadata: Metadata = {
  title: "أسعار الخدمات - ehabgm | باقات تسويق رقمي حلوان 2025",
  description:
    "أسعار تنافسية لخدمات التسويق الرقمي في حلوان. باقات مرنة تناسب جميع الميزانيات. عروض خاصة! اطلب عرض سعر مجاني.",
  keywords: "أسعار تسويق رقمي حلوان، باقات سوشيال ميديا، أسعار تصميم مواقع، عروض خاصة، ehabgm",
  openGraph: {
    title: "أسعار الخدمات - ehabgm | باقات تسويق رقمي حلوان",
    description: "أسعار تنافسية، باقات مرنة، عروض خاصة. اطلب عرض سعر مجاني!",
    url: "https://ehabgm.online/pricing",
    siteName: "ehabgm",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "https://i.postimg.cc/TYyK2Rtv/logo.png",
        width: 1200,
        height: 630,
        alt: "أسعار الخدمات - ehabgm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "أسعار الخدمات - ehabgm | باقات تسويق رقمي",
    description: "أسعار تنافسية، باقات مرنة. اطلب عرض سعر مجاني!",
  },
  alternates: {
    canonical: "https://ehabgm.online/pricing",
  },
}

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PricingSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
