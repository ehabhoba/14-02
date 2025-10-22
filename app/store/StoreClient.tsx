"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Search, Filter, Star, ExternalLink, MessageCircle } from "lucide-react"

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  rating: number
  reviews: number
}

export default function StoreClient() {
  const [products, setProducts] = useState<Product[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [cart, setCart] = useState<Product[]>([])

  // Sample products - في التطبيق الحقيقي، سيتم جلبها من ehabgm.store API
  useEffect(() => {
    const sampleProducts: Product[] = [
      {
        id: "1",
        name: "قالب موقع تجاري احترافي",
        description: "قالب موقع متكامل للشركات والأعمال التجارية مع لوحة تحكم",
        price: 1500,
        image: "/professional-business-website-template.png",
        category: "قوالب",
        rating: 4.8,
        reviews: 45,
      },
      {
        id: "2",
        name: "حزمة تصاميم سوشيال ميديا",
        description: "100+ تصميم جاهز لمنصات التواصل الاجتماعي بصيغة PSD",
        price: 800,
        image: "/social-media-design-templates.jpg",
        category: "تصاميم",
        rating: 4.9,
        reviews: 67,
      },
      {
        id: "3",
        name: "أداة تحليل المنافسين",
        description: "برنامج متقدم لتحليل المنافسين وتتبع استراتيجياتهم التسويقية",
        price: 2500,
        image: "/competitor-analysis-tool.jpg",
        category: "أدوات",
        rating: 4.7,
        reviews: 32,
      },
      {
        id: "4",
        name: "دورة التسويق الرقمي الشاملة",
        description: "دورة تدريبية كاملة في التسويق الرقمي مع شهادة معتمدة",
        price: 3000,
        image: "/digital-marketing-course.png",
        category: "دورات",
        rating: 5.0,
        reviews: 89,
      },
      {
        id: "5",
        name: "باقة هوية بصرية متكاملة",
        description: "شعار + بطاقات عمل + أوراق رسمية + دليل استخدام العلامة التجارية",
        price: 4000,
        image: "/brand-identity-package.jpg",
        category: "تصاميم",
        rating: 4.9,
        reviews: 56,
      },
      {
        id: "6",
        name: "نظام إدارة محتوى مخصص",
        description: "CMS مخصص لإدارة المحتوى والمنتجات مع لوحة تحكم عربية",
        price: 5000,
        image: "/custom-cms-system.jpg",
        category: "أنظمة",
        rating: 4.8,
        reviews: 23,
      },
    ]
    setProducts(sampleProducts)
  }, [])

  const categories = ["all", "قوالب", "تصاميم", "أدوات", "دورات", "أنظمة"]

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const addToCart = (product: Product) => {
    setCart([...cart, product])
  }

  const sendWhatsAppOrder = () => {
    const orderDetails = cart.map((item, index) => `${index + 1}. ${item.name} - ${item.price} جنيه`).join("\n")
    const total = cart.reduce((sum, item) => sum + item.price, 0)
    const message = `مرحباً، أريد طلب المنتجات التالية:\n\n${orderDetails}\n\nالإجمالي: ${total} جنيه`
    const whatsappUrl = `https://wa.me/201022679250?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            متجر <span className="gradient-text">المنتجات الرقمية</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اكتشف مجموعة واسعة من المنتجات الرقمية الاحترافية - قوالب، تصاميم، أدوات، ودورات تدريبية
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <a
              href="https://ehabgm.store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              زيارة المتجر الكامل
            </a>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="ابحث عن منتج..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pr-10 pl-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap"
              >
                <Filter className="w-4 h-4 ml-2" />
                {category === "all" ? "الكل" : category}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                  {product.price} جنيه
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">{product.category}</span>
                  <div className="flex items-center gap-1 mr-auto">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                <Button onClick={() => addToCart(product)} className="w-full">
                  <ShoppingCart className="w-4 h-4 ml-2" />
                  أضف للسلة
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        {cart.length > 0 && (
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-card shadow-2xl rounded-xl p-6 max-w-md w-full mx-4 z-50 border-2 border-primary">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">السلة ({cart.length} منتج)</h3>
              <Button variant="ghost" size="sm" onClick={() => setCart([])}>
                إفراغ
              </Button>
            </div>
            <div className="space-y-2 mb-4 max-h-40 overflow-y-auto">
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span>{item.name}</span>
                  <span className="font-bold">{item.price} جنيه</span>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-4 mb-4">
              <div className="flex justify-between text-lg font-bold">
                <span>الإجمالي:</span>
                <span className="gradient-text">{cart.reduce((sum, item) => sum + item.price, 0)} جنيه</span>
              </div>
            </div>
            <Button onClick={sendWhatsAppOrder} className="w-full bg-green-600 hover:bg-green-700">
              <MessageCircle className="w-5 h-5 ml-2" />
              إتمام الطلب عبر واتساب
            </Button>
          </div>
        )}

        {/* Store Info */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">هل تبحث عن منتج معين؟</h2>
          <p className="text-muted-foreground mb-6">
            تواصل معنا عبر واتساب وسنساعدك في إيجاد المنتج المناسب لاحتياجاتك
          </p>
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700"
            onClick={() => window.open("https://wa.me/201022679250", "_blank")}
          >
            <MessageCircle className="w-5 h-5 ml-2" />
            تواصل معنا الآن
          </Button>
        </div>
      </div>
    </div>
  )
}
