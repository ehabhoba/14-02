import type { Metadata } from "next"
import NFTCertificateClient from "./NFTCertificateClient"

export const metadata: Metadata = {
  title: "مولد شهادات NFT | أدوات مجانية - إيهاب جي إم",
  description:
    "أنشئ شهادات NFT رقمية موثقة على البلوكشين للدورات والشهادات الأكاديمية في مصر والشرق الأوسط. أداة مجانية لإصدار شهادات رقمية آمنة وموثوقة.",
  keywords: "شهادات NFT, شهادات رقمية, بلوكشين, شهادات موثقة, NFT مصر, شهادات أكاديمية رقمية",
  openGraph: {
    title: "مولد شهادات NFT - أداة مجانية",
    description: "أنشئ شهادات NFT رقمية موثقة على البلوكشين",
    url: "https://ehabgm.online/tools/nft-certificate",
    type: "website",
  },
}

export default function NFTCertificatePage() {
  return <NFTCertificateClient />
}
