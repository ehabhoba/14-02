import type { Metadata } from "next"
import WhatsAppLinkClient from "./WhatsAppLinkClient"

export const metadata: Metadata = {
  title: "مولد روابط واتساب المباشرة - إنشاء رابط محادثة واتساب | إيهاب جي إم",
  description:
    "أنشئ روابط واتساب مباشرة مجاناً لبدء المحادثات مع عملائك بنقرة واحدة. مولد روابط WhatsApp احترافي مع رسائل مخصصة.",
  keywords: "روابط واتساب, WhatsApp Link Generator, رابط واتساب مباشر, محادثة واتساب, واتساب بزنس",
  openGraph: {
    title: "مولد روابط واتساب المباشرة - إنشاء رابط محادثة واتساب",
    description: "أنشئ روابط واتساب مباشرة مجاناً لبدء المحادثات مع عملائك بنقرة واحدة",
    url: "https://ehabgm.online/tools/whatsapp-link",
  },
}

export default function WhatsAppLinkPage() {
  return <WhatsAppLinkClient />
}
