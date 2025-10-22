import type { Metadata } from "next"
import AboutClientPage from "./AboutClientPage"

export const metadata: Metadata = {
  title: "من نحن - ehabgm | وكالة تسويق رقمي حلوان - خبرة +8 سنوات",
  description: "وكالة ehabgm للتسويق الرقمي في حلوان. خبرة +8 سنوات، 500+ عميل راضٍ، فريق محترف. تعرف على قصتنا!",
  keywords: "من نحن ehabgm، وكالة تسويق حلوان، إيهاب محمد، فريق العمل، خبرة تسويق رقمي",
  openGraph: {
    title: "من نحن - ehabgm | وكالة تسويق رقمي حلوان",
    description: "خبرة +8 سنوات، 500+ عميل راضٍ، فريق محترف. تعرف على قصتنا!",
    url: "https://ehabgm.online/about",
    siteName: "ehabgm",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "https://i.postimg.cc/TYyK2Rtv/logo.png",
        width: 1200,
        height: 630,
        alt: "من نحن - ehabgm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "من نحن - ehabgm | وكالة تسويق رقمي حلوان",
    description: "خبرة +8 سنوات، 500+ عميل راضٍ. تعرف على قصتنا!",
  },
  alternates: {
    canonical: "https://ehabgm.online/about",
  },
}

export default function AboutPage() {
  return <AboutClientPage />
}
