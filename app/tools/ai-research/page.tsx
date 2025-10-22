import type { Metadata } from "next"
import AIResearchClient from "./AIResearchClient"

export const metadata: Metadata = {
  title: "مولد الأبحاث بالذكاء الاصطناعي | أدوات مجانية - إيهاب جي إم",
  description:
    "أنشئ أبحاث أكاديمية احترافية للطلاب والباحثين في مصر والشرق الأوسط باستخدام الذكاء الاصطناعي. أداة مجانية لإنشاء أبحاث علمية متكاملة مع المراجع والمصادر.",
  keywords: "مولد الأبحاث, أبحاث بالذكاء الاصطناعي, أبحاث للطلاب, أبحاث أكاديمية, أبحاث علمية مصر, كتابة الأبحاث",
  openGraph: {
    title: "مولد الأبحاث بالذكاء الاصطناعي - أداة مجانية",
    description: "أنشئ أبحاث أكاديمية احترافية باستخدام الذكاء الاصطناعي",
    url: "https://ehabgm.online/tools/ai-research",
    type: "website",
  },
}

export default function AIResearchPage() {
  return <AIResearchClient />
}
