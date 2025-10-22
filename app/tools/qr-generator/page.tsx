import type { Metadata } from "next"
import QRGeneratorClient from "./QRGeneratorClient"

export const metadata: Metadata = {
  title: "مولد رموز QR المجاني - إنشاء رموز الاستجابة السريعة | إيهاب جي إم",
  description:
    "أنشئ رموز QR احترافية مجاناً لموقعك، منتجاتك، أو خدماتك. مولد رموز الاستجابة السريعة بتصميم مخصص وألوان متعددة.",
  keywords: "مولد QR, رموز الاستجابة السريعة, QR Code Generator, باركود, رموز QR مجانية",
  openGraph: {
    title: "مولد رموز QR المجاني - إنشاء رموز الاستجابة السريعة",
    description: "أنشئ رموز QR احترافية مجاناً بتصميم مخصص وألوان متعددة",
    url: "https://ehabgm.online/tools/qr-generator",
  },
}

export default function QRGeneratorPage() {
  return <QRGeneratorClient />
}
