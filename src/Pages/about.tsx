import React from 'react';

// Image imports
import about1 from '../../src/assets/about1.png';
import about2 from '../../src/assets/about2.png';
import about3 from '../../src/assets/about3.png';
import about4 from '../../src/assets/about4.png';
import about5 from '../../src/assets/about5.png';
import { useState, useEffect } from "react";
import Navbar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import search from "../../src/assets/search.png";
import case_image from "../../src/assets/case.png";
import book from "../../src/assets/book.png";
import chart from "../../src/assets/Chart.png";

// Define the AboutPage component as a functional component with TypeScript
const AboutPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's 'md' breakpoint
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar />
      {/* Breadcrumb Section */}
      <section className="py-8">
        <div className="container mx-auto px-8">
          <div
            className="w-full p-3 bg-[#0041361A] rounded-xl shadow-sm text-right font-IBM_Plex_Sans_Arabic text-[16px]"
            style={{
              color: 'rgba(0, 0, 0, 1)',
              backgroundColor: 'rgba(0, 65, 54, 0.3)'
            }}
          >
            الرئيسية / من نحن
          </div>
        </div>
      </section>

      {/* Image Gallery Section
      <section className="bg-white my-8">
        
      </section> */}

      {/* About Us Section */}
      <section className={`bg-white ${isMobile ? "py-1" : "py-12"} my-8 flex items-center ${isMobile ? "flex-col-reverse" : "flex-col"}`}>
        <div className="container mx-auto px-4 md:px-8">
          {!isMobile ? (
            // Desktop layout: Three images at 30% width each
            <div className="flex justify-center items-center gap-4">
              <div className="w-[30%]">
                <img
                  src={about5}
                  alt="Image 5"
                  className="w-full h-[300px] object-cover rounded-[20px]"
                />
              </div>
              <div className="w-[30%]">
                <img
                  src={about4}
                  alt="Image 4"
                  className="w-full h-[300px] object-cover rounded-[20px]"
                />
              </div>
              <div className="w-[30%]">
                <img
                  src={about3}
                  alt="Image 3"
                  className="w-full h-[300px] object-cover rounded-[20px]"
                />
              </div>
            </div>
          ) :
            (
              // Mobile layout: First image 100%, other two at 50% each
              <div className="flex flex-col gap-4">
                {/* First image at 100% width */}
                <div className="w-full mb-4">
                  <img
                    src={about5}
                    alt="Image 5"
                    className="w-full h-[200px] object-cover rounded-[20px]"
                  />
                </div>

                {/* Second and third images at 50% width each */}
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <img
                      src={about4}
                      alt="Image 4"
                      className="w-full h-[150px] object-cover rounded-[20px]"
                    />
                  </div>
                  <div className="w-1/2">
                    <img
                      src={about3}
                      alt="Image 3"
                      className="w-full h-[150px] object-cover rounded-[20px]"
                    />
                  </div>
                </div>
              </div>
            )}
        </div>
        <div className="container mx-auto px-16 pt-4">
          <div className="flex items-center justify-between">
            <div className="w-[100%] text-right flex flex-col justify-center pr-4">
              <h2 className="text-[30px] font-bold text-[rgba(0,0,0,1)] font-IBM_Plex_Sans_Arabic mb-4">
                من نحن
              </h2>
              <p className="text-[17px] text-[rgba(0,0,0,0.8)] font-IBM_Plex_Sans_Arabic mb-4 leading-relaxed">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Reports and Studies Section */}
      <section className="bg-white py-12 my-8" dir="rtl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center ${isMobile ? "flex-col-reverse" : "flex-row-reverse"} justify-between`}>
            {/* Right Side: Text (now positioned on right for RTL) */}
            <div className={`${isMobile ? "w-full mt-8" : "w-1/2"} text-right flex flex-col justify-center ${isMobile ? "" : "pr-8"}`}>
              <h2 className="text-2xl sm:text-3xl font-bold text-black font-IBM_Plex_Sans_Arabic mb-4">
                التقارير والدراسات
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 font-IBM_Plex_Sans_Arabic mb-6 leading-relaxed">
                يحتوي هذا القسم على مجموعة من التقارير الرسمية الصادرة عن الجهات الحكومية في المملكة، تغطي مواضيع متنوعة في التنمية، الاقتصاد، التعليم، الصحة وغيرها. صُمّم القسم ليسهّل على المستخدم الوصول للمعلومة الدقيقة وتحميلها بضغطة واحدة.
              </p>
              <div className="flex justify-start">
                <button className="bg-[#004136] text-white px-6 py-3 rounded-xl text-base font-IBM_Plex_Sans_Arabic hover:bg-[#003129] transition-colors">
                  التقارير
                </button>
              </div>
            </div>

            {/* Left Side: Card with Image (now positioned on left for RTL) */}
            <div className={`${isMobile ? "w-full" : "w-1/2"} flex justify-start items-center`}>
              <div className={`rounded-3xl ${isMobile ? "w-full h-[280px]" : "w-[90%] h-[400px]"}`}>
                <div className="relative w-full h-full">
                  <img
                    src={about1}
                    alt="خريطة المملكة العربية السعودية"
                    className="w-full h-full object-contain rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="bg-white py-8 my-2">
        <div className={`container mx-auto px-2 }`}>
          <div className="text-right mb-10">
            <h2 className="text-[25px] pr-8 pl-30 font-semibold text-black font-IBM_Plex_Sans_Arabic">
              لمن هذه المنصة؟
            </h2>
            <p className={`text-gray-600 pr-8 ${isMobile ? "pl-10" : "pl-30"}font-IBM_Plex_Sans_Arabic text-[15px] mt-2`}>
              منصتنا صُممت لتخدم فئات متعددة تسعى للوصول إلى محتوى موثوق
            </p>
          </div>
          <div className={`${isMobile ? "flex flex-col" : "flex flex-row-reverse"} gap-4 pl-2 pr-30`} dir='rtl'>
            <div className={`flex flex-col ${isMobile ? "items-center text-center" : "items-end text-end"} bg-[rgba(255,255,255,1)] border-[1.5px] border-[rgba(238,238,238,1)] p-4 max-w-[90%]`}>
              <div className="bg-gray-200 p-3 mb-4 rounded-lg">
                <img src={search} width={38} height={38} alt="" className='p-1' />
              </div>
              <h2 className="text-[20px] font-semibold text-black font-IBM_Plex_Sans_Arabic mb-1">
                الباحثين
              </h2>
              <p className="text-gray-600 font-IBM_Plex_Sans_Arabic text-[15px]">
                تقارير ومراجع داعمة للأبحاث والدراسات الأكاديمية باحترافية.
              </p>
            </div>
            <div className={`flex flex-col ${isMobile ? "items-center text-center" : "items-end text-end"} bg-[rgba(255,255,255,1)] border-[1.5px] border-[rgba(238,238,238,1)] p-4 max-w-[90%]`}>
              <div className="bg-gray-200 p-3 mb-4 rounded-lg">
                <img src={case_image} width={38} height={38} alt="" className='p-1' />
              </div>
              <h2 className="text-[20px] font-semibold text-black font-IBM_Plex_Sans_Arabic mb-1">
                الاستشاريين
              </h2>
              <p className="text-gray-600 font-IBM_Plex_Sans_Arabic text-[15px]">
                تحليلات وبيانات موثوقة تعزز توصياتك واستراتيجياتك للعملاء.
              </p>
            </div>
            <div className={`flex flex-col ${isMobile ? "items-center text-center" : "items-end text-end"} bg-[rgba(255,255,255,1)] border-[1.5px] border-[rgba(238,238,238,1)] p-4 max-w-[90%]`}>
              <div className="bg-gray-200 p-3 mb-4 rounded-lg">
                <img src={book} width={38} height={38} alt="" className='p-1' />
              </div>
              <h2 className="text-[20px] font-semibold text-black font-IBM_Plex_Sans_Arabic mb-1">
                المتخصصين
              </h2>
              <p className="text-gray-600 font-IBM_Plex_Sans_Arabic text-[15px]">
                مصادر معرفية تدعم تطورك المهني وتبقيك على اطلاع دائم.
              </p>
            </div>
            <div className={`flex flex-col ${isMobile ? "items-center text-center" : "items-end text-end"} bg-[rgba(255,255,255,1)] border-[1.5px] border-[rgba(238,238,238,1)] p-4 max-w-[90%]`}>
              <div className="bg-gray-200 p-3 mb-4 rounded-lg">
                <img src={chart} width={38} height={38} alt="" className='p-1' />
              </div>
              <h2 className="text-[20px] font-semibold text-black font-IBM_Plex_Sans_Arabic mb-1">
                المستثمرين
              </h2>
              <p className="text-gray-600 font-IBM_Plex_Sans_Arabic text-[15px]">
                بيانات وتقارير تساعدك على اتخاذ قرارات استثمارية دقيقة ومدروسة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Guides Section */}
      <section className="bg-white py-12 my-8">
        <div className="container mx-auto px-8">
          <div className={`flex items-center ${isMobile ? "flex-col" : ""} justify-between`}>
            {/* Left Side: Card with Image */}
            <div className={`${isMobile ? "w-full" : "w-[50%]"} flex justify-start items-center`}>
              <div className={`rounded-[40px] p-4 flex justify-center items-center w-[600px] ${isMobile ? "h-[250px]" : "h-[400px]"}`}>
                <div className="relative w-full h-full ">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%]">
                    <img
                      src={about2}
                      alt="Saudi Arabia Map with Dots"
                      className="w-full object-contain rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Text */}
            <div className={`${isMobile ? "w-full mx-16" : "w-[50%]"} text-right flex flex-col justify-center pr-4`}>
              <h2 className="text-[30px] font-bold text-[rgba(0,0,0,1)] font-IBM_Plex_Sans_Arabic mb-4">
                الأدلة المعرفية
              </h2>
              <p className="text-[20px] text-[rgba(20,19,19,0.6)] font-IBM_Plex_Sans_Arabic mb-4 leading-relaxed">
                يوفّر هذا القسم مكتبة شاملة من الأدلة الإرشادية الصادرة عن الجهات المختصة، والتي تهدف إلى توضيح الإجراءات، المفاهيم، والخدمات بطريقة مبسطة ومباشرة. دليل عملي لكل من يبحث عن فهم أعمق للأنظمة والخدمات
              </p>
              <div className="flex justify-end">
                <button className="bg-[rgba(0,65,54,1)] text-white px-6 py-2 rounded-[15px] text-[16px] font-IBM_Plex_Sans_Arabic">
                  الأدلة المعرفية
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutPage;