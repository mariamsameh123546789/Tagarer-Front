import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/NavBar/NavBar";

const TermsPage: React.FC = () => {
  return (
    <>
    <Navbar/>
    <div className="mx-auto bg-gray-50 w-full px-[52px] py-8 text-right">
        {/* Header section with light background */}
        <section className="py-8">
                <div className="mx-auto">
                    <div
                        className="w-full p-3 bg-[#0041364D] rounded-xl shadow-sm text-right font-[IBM_Plex_Sans_Arabic] text-[16px]"
                        style={{
                            color: 'rgba(0, 0, 0, 1)',
                            backgroundColor: '#00413612',
                        }}
                    > الرئيسية / سياسة الخصوصية
                    </div>
                </div>
            </section>

      <h1 className="text-xl font-bold mb-4 font-[IBM_Plex_Sans_Arabic] rtl">الشروط و الأحكام</h1>
      
      <p className="text-[20px] mb-6 leading-relaxed font-[IBM_Plex_Sans_Arabic] rtl">
      تلتزم منصة تقارير بحماية خصوصية مستخدميها وضمان أمان بياناتهم الشخصية. تهدف هذه السياسة إلى إطلاعك على كيفية جمع واستخدام وحماية المعلومات التي تقدمها عند استخدامك للمنصة. من خلال استخدامك للمنصة، فإنك توافق على جمع واستخدام بياناتك كما هو موضح في هذه السياسة.
      </p>

      <h2 className="text-lg font-[800] mt-8 mb-4 font-[IBM_Plex_Sans_Arabic] rtl">المعلومات التي نقوم بجمعها:</h2>
      
      <h3 className="font-bold mb-3 font-[IBM_Plex_Sans_Arabic] rtl">المعلومات الشخصية:</h3>
      <p className="text-[20px] mb-4 leading-relaxed font-[IBM_Plex_Sans_Arabic] rtl">
        عند إنشاء حساب أو التسجيل في خدمات المنصة، قد نطلب منك تقديم معلومات شخصية مثل الاسم، البريد الإلكتروني، رقم الهاتف، العنوان، وبيانات الدفع.
      </p>

      <h3 className="font-bold mb-3 font-[IBM_Plex_Sans_Arabic] rtl">المعلومات التقنية:</h3>
      <p className="text-[20px] mb-4 leading-relaxed font-[IBM_Plex_Sans_Arabic] rtl">
        نستخدم تقنيات مثل "الكوكيز" و"تسجيل الدخول" لجمع معلومات حول كيفية استخدامك للمنصة، بما في ذلك عنوان بروتوكول الإنترنت (IP)، نوع الجهاز، نظام التشغيل، نوع المتصفح، والصفحات التي تمت زيارتها.
      </p>
      <h2 className="text-lg font-semibold mt-8 mb-4 font-[IBM_Plex_Sans_Arabic] rtl">المحتوى المقدم من المستخدم:</h2>
      <p className="text-[20px] mb-4 leading-relaxed font-[IBM_Plex_Sans_Arabic] rtl">
        يمكن للمستخدمين تحميل أو تقديم محتوى عبر المنصة مثل التقارير، التعليقات، أو التقييمات. سيتم جمع هذا المحتوى لاستخدامه وفقًا للغرض الذي قُدم من أجله
      </p>

      <h2 className="text-lg font-semibold mt-8 mb-4 font-[IBM_Plex_Sans_Arabic]">كيفية استخدام المعلومات</h2>
      <p className="text-[20px] mb-3 leading-relaxed font-[IBM_Plex_Sans_Arabic] rtl">نستخدم المعلومات التي نجمعها لتحقيق الأغراض التالية:</p>
      <ul className="list-disc list-inside text-[20px] mb-4 text-right pr-4 space-y-2 font-[IBM_Plex_Sans_Arabic] rtl">
        <li>تقديم وتحسين الخدمات: لتقديم الخدمات المطلوبة وتحسين تجربة المستخدم.</li>
        <li>التفاعل مع المستخدمين: للرد على استفساراتك، تقديم الدعم الفني، وإعلامك بالتحديثات المتعلقة بالحساب أو العروض.</li>
        <li>التسويق والعروض: في حال وافقت على تلقي رسائل تسويقية، قد نرسل لك عروضًا وخدمات جديدة تتعلق بالمنصة.</li>
        <li>تحليل الأداء: لتحليل كيفية استخدام المنصة وتحسينها بناءً على احتياجات المستخدمين.</li>
      </ul>

      <h2 className="text-lg font-semibold mt-8 mb-4 font-[IBM_Plex_Sans_Arabic]">مشاركة المعلومات</h2>
      <p className="text-[20px] mb-3 leading-relaxed font-[IBM_Plex_Sans_Arabic]">:نحن لا نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نقوم بمشاركة المعلومات في الحالات التالية</p>
      <ul className="list-disc list-inside text-[20px] mb-4 text-right pr-4 space-y-2 font-[IBM_Plex_Sans_Arabic] rtl">
        <li>مقدمو الخدمات: قد نشارك معلوماتك مع شركاء موثوق بهم الذين يقدمون خدمات تقنية أو مساعدة في إدارة المنصة.</li>
        <li>الامتثال للقانون: قد نضطر إلى الكشف عن معلوماتك الشخصية إذا كان ذلك مطلوبًا بموجب القانون أو استجابة لطلب قانوني من السلطات.</li>
        <li>حماية حقوقنا: قد نستخدم معلوماتك للكشف عن الاحتيال أو حماية حقوقنا القانونية.</li>
      </ul>

      <h2 className="text-lg font-semibold mt-8 mb-4 font-[IBM_Plex_Sans_Arabic]">حماية المعلومات</h2>
      <p className="text-[20px] mb-4 leading-relaxed font-[IBM_Plex_Sans_Arabic] rtl">
        نحن نتخذ تدابير أمنية لحماية المعلومات الشخصية من الوصول غير المصرح به أو استخدامها. تشمل هذه التدابير استخدام التشفير وتقنيات الأمان الأخرى لضمان سرية البيانات.

      </p>

      <h2 className="text-lg font-semibold mt-8 mb-4 font-[IBM_Plex_Sans_Arabic]">الكوكيز والتقنيات المشابهة</h2>
      <p className="text-[20px] mb-4 leading-relaxed font-[IBM_Plex_Sans_Arabic] rtl">
        نستخدم الكوكيز وتقنيات مشابهة لتحسين تجربة المستخدم على المنصة. تسمح لنا هذه التقنيات بتخزين تفضيلاتك ومساعدتك في الوصول إلى الميزات بسرعة أكبر.
      <br />
        • يمكنك ضبط إعدادات المتصفح لمنع الكوكيز، ولكن قد يؤدي ذلك إلى تأثير على بعض وظائف المنصة.
      </p>
    </div>
    <Footer/>
    </>
  );
};

export default TermsPage;