import type { Metadata } from "next"
import InvoiceGeneratorClient from "./InvoiceGeneratorClient"

export const metadata: Metadata = {
  title: "مولد الفواتير المجاني - إنشاء فواتير احترافية | إيهاب جي إم",
  description:
    "أنشئ فواتير احترافية مجاناً بتصميم عصري وقابل للطباعة. مولد فواتير سهل الاستخدام مع إمكانية التخصيص الكامل.",
  keywords: "مولد فواتير, Invoice Generator, فواتير احترافية, إنشاء فاتورة, فواتير مجانية",
  openGraph: {
    title: "مولد الفواتير المجاني - إنشاء فواتير احترافية",
    description: "أنشئ فواتير احترافية مجاناً بتصميم عصري وقابل للطباعة",
    url: "https://ehabgm.online/tools/invoice-generator",
  },
}

export default function InvoiceGeneratorPage() {
  return <InvoiceGeneratorClient />
}
