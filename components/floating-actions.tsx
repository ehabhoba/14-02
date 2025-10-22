"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleCall = () => {
    window.open("tel:+201022679250", "_self")
  }

  const handleWhatsApp = () => {
    window.open("https://wa.me/201022679250?text=مرحباً، أريد الاستفسار عن خدماتكم", "_blank")
  }

  const handleSupport = () => {
    window.open("https://wa.me/201022679250?text=أحتاج مساعدة تقنية", "_blank")
  }

  const PhoneIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  )

  const MessageIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    </svg>
  )

  const HeadphonesIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
      />
    </svg>
  )

  const ArrowUpIcon = () => (
    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  )

  return (
    <>
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-28 left-4 sm:left-6 w-12 h-12 sm:w-14 sm:h-14 bg-primary text-white rounded-full shadow-xl hover:bg-primary/90 transition-colors z-40 touch-manipulation flex items-center justify-center"
            aria-label="العودة للأعلى"
          >
            <ArrowUpIcon />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Action Menu */}
      <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mb-4 space-y-3"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleCall}
                className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-blue-500 text-white rounded-full shadow-xl hover:bg-blue-600 transition-colors touch-manipulation"
                aria-label="اتصل بنا"
              >
                <PhoneIcon />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleWhatsApp}
                className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-green-500 text-white rounded-full shadow-xl hover:bg-green-600 transition-colors touch-manipulation"
                aria-label="واتساب"
              >
                <MessageIcon />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleSupport}
                className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-purple-500 text-white rounded-full shadow-xl hover:bg-purple-600 transition-colors touch-manipulation"
                aria-label="الدعم الفني"
              >
                <HeadphonesIcon />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-2xl flex items-center justify-center touch-manipulation"
          aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={isOpen}
        >
          <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </motion.div>
        </motion.button>
      </div>
    </>
  )
}
