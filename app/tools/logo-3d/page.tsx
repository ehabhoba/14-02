import type { Metadata } from "next"
import Logo3DClient from "./Logo3DClient"

export const metadata: Metadata = {
  title: "محول الشعارات إلى 3D | أدوات مجانية - إيهاب جي إم",
  description:
    "حول شعارك إلى تصميم ثلاثي الأبعاد احترافي باستخدام الذكاء الاصطناعي. أداة مجانية لتحويل الشعارات 2D إلى 3D بدقة عالية للشركات في مصر والشرق الأوسط.",
  keywords: "تحويل شعار 3D, شعار ثلاثي الأبعاد, تصميم 3D, شعارات احترافية, 3D logo مصر",
  openGraph: {
    title: "محول الشعارات إلى 3D - أداة مجانية",
    description: "حول شعارك إلى تصميم ثلاثي الأبعاد احترافي",
    url: "https://ehabgm.online/tools/logo-3d",
    type: "website",
  },
}

export default function Logo3DPage() {
  return <Logo3DClient />
}
