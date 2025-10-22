"use client"

import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import ScrollReveal from "./scroll-reveal"

export default function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-gradient-to-r from-primary/3 to-secondary/3 rounded-full blur-3xl animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-20 sm:py-0">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Content */}
          <ScrollReveal>
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full text-primary text-xs sm:text-sm font-medium border border-primary/20 card-hover">
                  <Icons.Award className="w-3 h-3 sm:w-4 sm:h-4 ml-2 icon-bounce" />
                  <Icons.Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 ml-1 text-secondary animate-pulse" />
                  الوكالة الرقمية الأولى في مصر
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  <span className="gradient-text">ehabgm</span> - منصتك الشاملة
                  <br />
                  <span className="relative">
                    للتسويق الرقمي والمنتجات الاحترافية
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
                  </span>
                </h1>

                <div className="text-base sm:text-xl text-muted-foreground leading-relaxed">
                  <p className="mb-3 sm:mb-4">
                    <strong className="text-primary">ehabgm</strong> - منصة متكاملة تجمع بين خدمات التسويق الرقمي
                    المتميزة ومتجر رقمي يضم أفضل المنتجات والقوالب الاحترافية
                  </p>
                  <p className="text-sm sm:text-base">نساعدك على النجاح من خلال خدماتنا ومنتجاتنا المصممة خصيصاً لك.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-4 h-auto relative overflow-hidden btn-animated group w-full sm:w-auto"
                >
                  <span className="absolute top-0 right-0 bg-gradient-to-r from-red-500 to-red-600 text-white text-[10px] sm:text-xs px-2 py-0.5 sm:py-1 rounded-bl-lg animate-pulse">
                    <Icons.Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3 inline ml-1" />
                    عرض محدود!
                  </span>
                  <span className="relative z-10">احصل على استشارة مجانية</span>
                  <Icons.ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-4 h-auto bg-transparent border-2 border-primary/20 hover:border-primary/40 btn-animated group w-full sm:w-auto"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  <Icons.Play className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:scale-110 transition-transform" />
                  شاهد أعمالنا
                </Button>
              </div>

              <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-8 mb-8 sm:mb-12 animate-fade-in-up animation-delay-300">
                <div className="flex items-center gap-2">
                  <Icons.TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  <span className="text-sm sm:text-lg font-semibold">+500 مشروع</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icons.Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  <span className="text-sm sm:text-lg font-semibold">+300 عميل</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icons.Award className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  <span className="text-sm sm:text-lg font-semibold">10+ سنوات</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground animate-fade-in-up animation-delay-500">
                <div className="flex items-center gap-2">
                  <Icons.CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500" />
                  <span>ضمان الجودة</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icons.CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500" />
                  <span>دعم 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icons.CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500" />
                  <span>أسعار تنافسية</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Simplified Image Section */}
          <ScrollReveal delay={300}>
            <div className="relative space-y-6 sm:space-y-8">
              {/* ehabgm Logo/Brand Identity */}
              <div className="relative z-10 group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 sm:p-12 shadow-2xl card-hover border-2 border-primary/20">
                  <div className="text-center space-y-4 sm:space-y-6">
                    {/* Logo */}
                    <div className="w-32 h-32 sm:w-48 sm:h-48 mx-auto bg-white dark:bg-card rounded-full flex items-center justify-center shadow-xl">
                      <img
                        src="/images/design-mode/logo.png"
                        alt="شعار ehabgm - منصة التسويق الرقمي والمنتجات الاحترافية"
                        className="w-28 h-28 sm:w-40 sm:h-40 object-contain"
                      />
                    </div>

                    {/* Brand Name */}
                    <div>
                      <h2 className="text-3xl sm:text-5xl font-bold gradient-text mb-2">ehabgm</h2>
                      <p className="text-sm sm:text-lg text-muted-foreground">منصة التسويق الرقمي الشاملة</p>
                    </div>

                    {/* Brand Features */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4">
                      <div className="bg-white/50 dark:bg-card/50 p-3 sm:p-4 rounded-lg">
                        <div className="text-xl sm:text-2xl font-bold text-primary mb-1">خدمات</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">تسويق رقمي</div>
                      </div>
                      <div className="bg-white/50 dark:bg-card/50 p-3 sm:p-4 rounded-lg">
                        <div className="text-xl sm:text-2xl font-bold text-primary mb-1">متجر</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">منتجات رقمية</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Facebook Widget */}
              <div className="bg-white dark:bg-card p-4 sm:p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h3 className="text-base sm:text-lg font-bold">تابعنا على فيسبوك</h3>
                  <a
                    href="http://facebook.com/ehab.gm1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Ffacebook.com%2Fehab.gm1&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                    width="100%"
                    height="100%"
                    style={{ border: "none", overflow: "hidden" }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setIsVideoPlaying(false)}
        >
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <Icons.X className="w-6 h-6 text-white" />
            </button>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  )
}
