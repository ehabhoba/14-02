import type { Metadata } from "next"
import AIWebsiteBuilderClient from "./AIWebsiteBuilderClient"

export const metadata: Metadata = {
  title: "منشئ المواقع بالذكاء الاصطناعي | أدوات مجانية - إيهاب جي إم",
  description:
    "أنشئ موقعك الإلكتروني الاحترافي في دقائق باستخدام الذكاء الاصطناعي. أداة مجانية لإنشاء مواقع احترافية للشركات في مصر والشرق الأوسط مع شهادة توثيق.",
  keywords: "إنشاء موقع بالذكاء الاصطناعي, منشئ مواقع, تصميم مواقع مصر, AI website builder, مواقع احترافية",
  openGraph: {
    title: "منشئ المواقع بالذكاء الاصطناعي - أداة مجانية",
    description: "أنشئ موقعك الإلكتروني الاحترافي في دقائق",
    url: "https://ehabgm.online/tools/ai-website-builder",
    type: "website",
  },
}

export default function AIWebsiteBuilderPage() {
  return <AIWebsiteBuilderClient />
}
