import type { Metadata } from "next"
import StoreClient from "./StoreClient"

export const metadata: Metadata = {
  title: "متجر المنتجات الرقمية | ehabgm - قوالب، أدوات، وحلول جاهزة",
  description:
    "تسوق من متجر ehabgm للمنتجات الرقمية - قوالب مواقع، تصاميم جرافيك، أدوات تسويقية، وحلول جاهزة للأعمال. أسعار تنافسية وجودة عالية.",
  keywords: "متجر رقمي، قوالب مواقع، تصاميم جرافيك، أدوات تسويقية، منتجات رقمية، ehabgm store، حلول جاهزة",
  openGraph: {
    title: "متجر المنتجات الرقمية | ehabgm",
    description: "تسوق من متجر ehabgm للمنتجات الرقمية - قوالب، أدوات، وحلول جاهزة للأعمال",
    url: "https://ehabgm.online/store",
    type: "website",
  },
}

export default function StorePage() {
  return <StoreClient />
}
