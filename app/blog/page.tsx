import type { Metadata } from "next"
import BlogClientPage from "./BlogClientPage"

export const metadata: Metadata = {
  title: "مدونة ehabgm | نصائح التسويق الرقمي والسوشيال ميديا 2025",
  description: "أحدث مقالات التسويق الرقمي، SEO، سوشيال ميديا، وتطوير المواقع. نصائح عملية من خبراء ehabgm. اقرأ الآن!",
  keywords: "مدونة تسويق رقمي، نصائح سوشيال ميديا، مقالات SEO، تطوير مواقع، ehabgm",
  openGraph: {
    title: "مدونة ehabgm | نصائح التسويق الرقمي 2025",
    description: "أحدث مقالات التسويق الرقمي والسوشيال ميديا. نصائح عملية من خبراء. اقرأ الآن!",
    url: "https://ehabgm.online/blog",
    siteName: "ehabgm",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "https://i.postimg.cc/TYyK2Rtv/logo.png",
        width: 1200,
        height: 630,
        alt: "مدونة ehabgm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "مدونة ehabgm | نصائح التسويق الرقمي 2025",
    description: "أحدث مقالات التسويق الرقمي. نصائح عملية من خبراء!",
  },
  alternates: {
    canonical: "https://ehabgm.online/blog",
  },
}

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "مدونة ehabgm للتسويق الرقمي",
            description: "مقالات ونصائح في التسويق الرقمي وتطوير الأعمال",
            url: "https://ehabgm.online/blog",
            publisher: {
              "@type": "Organization",
              name: "ehabgm",
              logo: {
                "@type": "ImageObject",
                url: "https://i.postimg.cc/TYyK2Rtv/logo.png",
              },
            },
            inLanguage: "ar",
          }),
        }}
      />
      <BlogClientPage />
    </>
  )
}
