import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "ما هي منصة ehabgm؟",
    answer:
      "منصة ehabgm هي وجهتك الشاملة للتسويق الرقمي والمنتجات الاحترافية في مصر. نقدم خدمات تسويق إلكتروني متكاملة تشمل إدارة السوشيال ميديا، الإعلانات الممولة، تصميم المواقع، SEO، بالإضافة إلى متجر رقمي يضم قوالب، تصاميم، ودورات تدريبية احترافية.",
  },
  {
    question: "كم تبلغ تكلفة الإعلانات الممولة على فيسبوك؟",
    answer:
      "تبدأ أسعار الإعلانات الممولة على فيسبوك من 750 جنيه لحملة 5 أيام، و1,280 جنيه لحملة 7 أيام، و2,800 جنيه لحملة 15 يوم، و6,999 جنيه لحملة 30 يوم. جميع الأسعار تشمل إدارة الحملة، التصميمات، كتابة المحتوى، والمتابعة اليومية.",
  },
  {
    question: "هل تقدمون خدمات تصميم المواقع الإلكترونية؟",
    answer:
      "نعم، نقدم خدمات تصميم وتطوير المواقع الإلكترونية والمتاجر الإلكترونية الكاملة. تبدأ أسعار المتاجر الإلكترونية من 6,000 جنيه وتشمل التصميم، البرمجة، ربط بوابات الدفع، وتدريب على الإدارة.",
  },
  {
    question: "كم من الوقت يستغرق رؤية نتائج التسويق الإلكتروني؟",
    answer:
      "عادةً ما تبدأ النتائج الأولية في الظهور خلال 2-4 أسابيع من بدء الحملات التسويقية. النتائج الملموسة والمستدامة تظهر عادةً بعد 2-3 أشهر من العمل المستمر. نقدم تقارير شهرية مفصلة لمتابعة الأداء والنتائج.",
  },
  {
    question: "هل تقدمون ضمان على الخدمات؟",
    answer:
      "نعم، نقدم ضمان استرداد الأموال إذا لم تحقق النتائج المتفق عليها. نحن واثقون من جودة خدماتنا ونلتزم بتحقيق أهدافك التسويقية. كما نقدم دعم فني مستمر ومتابعة دورية لضمان نجاح حملاتك.",
  },
  {
    question: "ما الفرق بين ehabgm والشركات الأخرى؟",
    answer:
      "ehabgm تجمع بين الخبرة الواسعة (5+ سنوات)، الأسعار العادلة المناسبة للسوق المصري، والنتائج المضمونة. نحن لا نقدم خدمات فقط، بل نوفر حلول متكاملة تشمل الاستشارات، التنفيذ، والمتابعة. بالإضافة إلى متجر رقمي يضم منتجات احترافية بأسعار تنافسية.",
  },
  {
    question: "هل يمكنني شراء منتجات من المتجر فقط دون الاشتراك في الخدمات؟",
    answer:
      "بالتأكيد! متجر ehabgm مفتوح للجميع ويمكنك شراء أي منتج بشكل منفصل. نقدم قوالب مواقع، تصاميم سوشيال ميديا، دورات تدريبية، وأدوات تسويقية يمكنك استخدامها مباشرة دون الحاجة لخدمات إضافية.",
  },
  {
    question: "كيف يمكنني التواصل مع فريق ehabgm؟",
    answer:
      "يمكنك التواصل معنا عبر واتساب على 01022679250، أو من خلال نموذج الاتصال في الموقع، أو عبر صفحتنا على فيسبوك. فريق الدعم متاح من السبت إلى الخميس من 9 صباحاً حتى 6 مساءً.",
  },
]

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            الأسئلة الشائعة
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            أسئلة <span className="text-primary">متكررة</span> عن ehabgm
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            إجابات واضحة ومفصلة على أكثر الأسئلة شيوعاً حول خدماتنا ومنتجاتنا
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 bg-card shadow-lg">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-border last:border-0">
                    <AccordionTrigger className="text-right hover:text-primary transition-colors py-6">
                      <div className="flex items-start gap-3 text-lg font-semibold">
                        <HelpCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6 pr-8">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Still Have Questions CTA */}
          <div className="mt-12 text-center bg-muted/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">لا تزال لديك أسئلة؟</h3>
            <p className="text-muted-foreground mb-6">فريقنا جاهز للإجابة على جميع استفساراتك</p>
            <a
              href="https://wa.me/201022679250?text=مرحباً، لدي سؤال عن خدمات ehabgm"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              تواصل معنا عبر واتساب
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
