export const metadata = {
  title: "سياسة الخصوصية - ehabgm | حماية بياناتك أولويتنا",
  description:
    "سياسة الخصوصية لمنصة ehabgm - نحن نحترم خصوصيتك ونحمي بياناتك الشخصية وفقاً لأعلى معايير الأمان والخصوصية",
  openGraph: {
    title: "سياسة الخصوصية - ehabgm",
    description: "سياسة الخصوصية وحماية البيانات في منصة ehabgm",
    url: "https://ehabgm.online/privacy",
  },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">سياسة الخصوصية</h1>

        <div className="bg-card rounded-lg p-8 shadow-lg space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">مقدمة</h2>
            <p className="text-muted-foreground leading-relaxed">
              في ehabgm، نحن ملتزمون بحماية خصوصيتك وأمان بياناتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمع واستخدام
              وحماية المعلومات التي تقدمها لنا عند استخدام موقعنا الإلكتروني وخدماتنا.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">المعلومات التي نجمعها</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">المعلومات الشخصية</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-4">
                  <li>الاسم الكامل</li>
                  <li>عنوان البريد الإلكتروني</li>
                  <li>رقم الهاتف</li>
                  <li>اسم الشركة أو المشروع</li>
                  <li>معلومات الدفع (عند الاشتراك في الخدمات المدفوعة)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">المعلومات التقنية</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-4">
                  <li>عنوان IP</li>
                  <li>نوع المتصفح والجهاز</li>
                  <li>نظام التشغيل</li>
                  <li>صفحات الموقع التي تزورها</li>
                  <li>الوقت والتاريخ الذي تزور فيه موقعنا</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">كيف نستخدم معلوماتك</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-4">
              <li>تقديم وتحسين خدماتنا</li>
              <li>التواصل معك بخصوص طلباتك واستفساراتك</li>
              <li>إرسال تحديثات حول خدماتنا وعروضنا الخاصة</li>
              <li>تحليل استخدام الموقع لتحسين تجربة المستخدم</li>
              <li>حماية موقعنا من الاحتيال والأنشطة غير القانونية</li>
              <li>الامتثال للمتطلبات القانونية والتنظيمية</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">حماية البيانات</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              نحن نتخذ إجراءات أمنية صارمة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التغيير أو الإفصاح أو
              التدمير. تشمل هذه الإجراءات:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-4">
              <li>تشفير SSL/TLS لجميع البيانات المنقولة</li>
              <li>تخزين آمن للبيانات في خوادم محمية</li>
              <li>الوصول المحدود للموظفين المصرح لهم فقط</li>
              <li>مراجعات أمنية منتظمة</li>
              <li>نسخ احتياطية دورية للبيانات</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">مشاركة المعلومات</h2>
            <p className="text-muted-foreground leading-relaxed">
              نحن لا نبيع أو نؤجر أو نشارك معلوماتك الشخصية مع أطراف ثالثة إلا في الحالات التالية:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-4 mt-4">
              <li>عندما تمنحنا موافقتك الصريحة</li>
              <li>مع مزودي الخدمات الذين يساعدوننا في تشغيل أعمالنا</li>
              <li>عند الامتثال للمتطلبات القانونية</li>
              <li>لحماية حقوقنا وممتلكاتنا وسلامتنا</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">ملفات تعريف الارتباط (Cookies)</h2>
            <p className="text-muted-foreground leading-relaxed">
              نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. يمكنك التحكم في ملفات تعريف الارتباط من خلال إعدادات
              المتصفح الخاص بك. لاحظ أن تعطيل ملفات تعريف الارتباط قد يؤثر على وظائف معينة في الموقع.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">حقوقك</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">لديك الحق في:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-4">
              <li>الوصول إلى معلوماتك الشخصية</li>
              <li>تصحيح أو تحديث معلوماتك</li>
              <li>حذف معلوماتك (في ظروف معينة)</li>
              <li>الاعتراض على معالجة معلوماتك</li>
              <li>طلب نقل بياناتك</li>
              <li>سحب موافقتك في أي وقت</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">الاحتفاظ بالبيانات</h2>
            <p className="text-muted-foreground leading-relaxed">
              نحتفظ بمعلوماتك الشخصية طالما كان ذلك ضرورياً لتقديم خدماتنا والامتثال لالتزاماتنا القانونية. عندما لم تعد
              هناك حاجة لمعلوماتك، سنحذفها بشكل آمن.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">خصوصية الأطفال</h2>
            <p className="text-muted-foreground leading-relaxed">
              خدماتنا غير موجهة للأطفال دون سن 18 عاماً. نحن لا نجمع عن قصد معلومات شخصية من الأطفال. إذا علمنا أننا
              جمعنا معلومات من طفل، سنحذفها فوراً.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">التغييرات على سياسة الخصوصية</h2>
            <p className="text-muted-foreground leading-relaxed">
              قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنخطرك بأي تغييرات جوهرية عن طريق نشر السياسة الجديدة على
              هذه الصفحة وتحديث تاريخ "آخر تحديث" أدناه.
            </p>
            <p className="text-sm text-muted-foreground mt-4">آخر تحديث: يناير 2025</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">اتصل بنا</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه أو ممارساتنا المتعلقة بالبيانات، يرجى الاتصال بنا:
            </p>
            <div className="bg-muted/50 p-6 rounded-lg space-y-2">
              <p>
                <strong>البريد الإلكتروني:</strong> info@ehabgm.online
              </p>
              <p>
                <strong>الهاتف:</strong> 01022679250
              </p>
              <p>
                <strong>العنوان:</strong> حلوان، القاهرة، مصر
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
