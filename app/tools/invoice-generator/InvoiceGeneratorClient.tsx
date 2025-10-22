"use client"

import { useState } from "react"
import Link from "next/link"

interface InvoiceItem {
  description: string
  quantity: number
  price: number
}

export default function InvoiceGeneratorClient() {
  const [companyName, setCompanyName] = useState("")
  const [companyAddress, setCompanyAddress] = useState("")
  const [clientName, setClientName] = useState("")
  const [clientAddress, setClientAddress] = useState("")
  const [invoiceNumber, setInvoiceNumber] = useState("")
  const [invoiceDate, setInvoiceDate] = useState(new Date().toISOString().split("T")[0])
  const [items, setItems] = useState<InvoiceItem[]>([{ description: "", quantity: 1, price: 0 }])

  const addItem = () => {
    setItems([...items, { description: "", quantity: 1, price: 0 }])
  }

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index))
  }

  const updateItem = (index: number, field: keyof InvoiceItem, value: string | number) => {
    const newItems = [...items]
    newItems[index] = { ...newItems[index], [field]: value }
    setItems(newItems)
  }

  const calculateTotal = () => {
    return items.reduce((sum, item) => sum + item.quantity * item.price, 0)
  }

  const printInvoice = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
      <div className="container mx-auto px-4">
        {/* Breadcrumb - Hidden in print */}
        <div className="mb-8 text-sm text-gray-600 print:hidden">
          <Link href="/" className="hover:text-blue-600">
            الرئيسية
          </Link>
          <span className="mx-2">/</span>
          <Link href="/tools" className="hover:text-blue-600">
            الأدوات
          </Link>
          <span className="mx-2">/</span>
          <span className="text-blue-600">مولد الفواتير</span>
        </div>

        {/* Header - Hidden in print */}
        <div className="text-center mb-12 print:hidden">
          <div className="inline-block p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6">
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">مولد الفواتير الاحترافي</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            أنشئ فواتير احترافية بسهولة واطبعها أو احفظها كملف PDF
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Invoice Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 print:shadow-none">
            <div className="grid md:grid-cols-2 gap-8 mb-8 print:mb-4">
              {/* Company Info */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">معلومات الشركة</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="اسم الشركة"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none print:border-0 print:p-0"
                  />
                  <textarea
                    value={companyAddress}
                    onChange={(e) => setCompanyAddress(e.target.value)}
                    placeholder="عنوان الشركة"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none resize-none print:border-0 print:p-0"
                    rows={3}
                  />
                </div>
              </div>

              {/* Client Info */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">معلومات العميل</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="اسم العميل"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none print:border-0 print:p-0"
                  />
                  <textarea
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                    placeholder="عنوان العميل"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none resize-none print:border-0 print:p-0"
                    rows={3}
                  />
                </div>
              </div>
            </div>

            {/* Invoice Details */}
            <div className="grid md:grid-cols-2 gap-4 mb-8 print:mb-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">رقم الفاتورة</label>
                <input
                  type="text"
                  value={invoiceNumber}
                  onChange={(e) => setInvoiceNumber(e.target.value)}
                  placeholder="INV-001"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none print:border-0 print:p-0"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">تاريخ الفاتورة</label>
                <input
                  type="date"
                  value={invoiceDate}
                  onChange={(e) => setInvoiceDate(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none print:border-0 print:p-0"
                />
              </div>
            </div>

            {/* Items */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">البنود</h3>
              <div className="space-y-4">
                {items.map((item, index) => (
                  <div key={index} className="grid grid-cols-12 gap-4 items-end">
                    <div className="col-span-12 md:col-span-5">
                      <input
                        type="text"
                        value={item.description}
                        onChange={(e) => updateItem(index, "description", e.target.value)}
                        placeholder="وصف الخدمة/المنتج"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none print:border-0 print:p-0"
                      />
                    </div>
                    <div className="col-span-5 md:col-span-2">
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateItem(index, "quantity", Number(e.target.value))}
                        placeholder="الكمية"
                        min="1"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none print:border-0 print:p-0"
                      />
                    </div>
                    <div className="col-span-5 md:col-span-3">
                      <input
                        type="number"
                        value={item.price}
                        onChange={(e) => updateItem(index, "price", Number(e.target.value))}
                        placeholder="السعر"
                        min="0"
                        step="0.01"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none print:border-0 print:p-0"
                      />
                    </div>
                    <div className="col-span-2 md:col-span-2 print:hidden">
                      <button
                        onClick={() => removeItem(index)}
                        disabled={items.length === 1}
                        className="w-full px-4 py-3 bg-red-100 text-red-600 rounded-xl hover:bg-red-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        حذف
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={addItem}
                className="mt-4 px-6 py-3 bg-blue-100 text-blue-600 rounded-xl font-semibold hover:bg-blue-200 transition-all print:hidden"
              >
                + إضافة بند
              </button>
            </div>

            {/* Total */}
            <div className="border-t-2 border-gray-200 pt-6">
              <div className="flex justify-between items-center text-2xl font-bold">
                <span>الإجمالي:</span>
                <span className="text-blue-600">{calculateTotal().toFixed(2)} جنيه</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 print:hidden">
            <button
              onClick={printInvoice}
              className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all"
            >
              طباعة / حفظ PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
