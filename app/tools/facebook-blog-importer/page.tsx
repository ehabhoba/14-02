import type { Metadata } from "next"
import FacebookBlogImporterClient from "./FacebookBlogImporterClient"

export const metadata: Metadata = {
  title: "استيراد منشورات الفيسبوك إلى المدونة | أداة مجانية - ehabgm",
  description:
    "أداة مجانية لاستيراد منشورات صفحة الفيسبوك تلقائياً إلى مدونتك. حول محتوى السوشيال ميديا إلى مقالات SEO محسنة بنقرة واحدة.",
  keywords: "استيراد منشورات فيسبوك, تحويل منشورات لمقالات, أداة مدونة فيسبوك, استيراد محتوى تلقائي, SEO فيسبوك",
  openGraph: {
    title: "استيراد منشورات الفيسبوك إلى المدونة - أداة مجانية",
    description: "حول منشورات صفحتك على فيسبوك إلى مقالات مدونة محسنة لمحركات البحث تلقائياً",
    url: "https://ehabgm.online/tools/facebook-blog-importer",
    type: "website",
  },
}

export default function FacebookBlogImporterPage() {
  return <FacebookBlogImporterClient />
}
