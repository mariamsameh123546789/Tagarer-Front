import { HiSearch, HiDatabase, HiLink } from 'react-icons/hi';


import { useState, useEffect } from "react";
import Navbar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

import heroImage from "../../src/assets/hero.png";
import sectionImage from "../../src/assets/photo.png";
import group0 from "../../src/assets/Group.svg";
import group1 from "../../src/assets/Group-1.svg";
import group2 from "../../src/assets/Group-2.svg";
import group3 from "../../src/assets/Group-3.svg";
import group4 from "../../src/assets/Group-4.svg";
import group5 from "../../src/assets/Group-5.svg";
import tqarir_mid from "../../src/assets/tqarir_mid.png";
import tts from "../../src/assets/home_float.svg";
import grImage from "../../src/assets/gr.png";
import youtube from "../../src/assets/youtube-icon.svg";
import work from "../../src/assets/work.png";
import chart from "../../src/assets/chart.png";
import city from "../../src/assets/city.svg";
import search from "../../src/assets/search.png";

// Define the Navbar component as a functional component
const ArabicLandingPage = () => {
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
  const steps = [
    {
      number: '1',
      title: 'ابحث عن التقرير',
      description: 'أدخل اسم التقرير أو جزء من الاسم، أو يمكن اختيار نوع معين من التقارير أو تحديد جهة المصدر'
    },
    {
      number: '2',
      title: 'تصفح النتائج',
      description: 'استعرض قائمة التقارير للنتائج مع عرض تفاصيل مثل الجهة المصدرة، تاريخ النشر، وصف مختصر لمحتوى التقرير'
    },
    {
      number: '3',
      title: 'عرض أو تحميل',
      description: 'يمكنك من خلال صفحة تقرير قراءة التقرير مباشرة عبر الصفحة أو تحميله بجودة عالية للاحتفاظ به والرجوع إليه في أي وقت'
    }
  ];
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      {!isMobile && (
        <section className={`${isMobile ? "bg-gradient-to-t h-[600px]" : "bg-gradient-to-tr"} from-[#AADDD5] via-[#AADDD54D] to-white`} style={{ position: 'relative' }}>
          <div className={`container mx-auto px-10`}>
            <div className={`flex ${isMobile ? "flex-col-reverse" : "flex-row"} justify-bottom items-center`}>

              {/* Left side: Image */}
              <div className={`${isMobile ? "w-[735/1000]" : "w-6/10"}  pr-[6%]`} style={{ position: 'relative' }}>
                <div >
                  <img
                    src={heroImage}
                    className="object-contain"
                  />
                </div>
              </div>
              {isMobile && (
                <div
                  className="absolute rounded-xl p-4 mb-4 flex items-center justify-between"
                  style={{
                    position: 'absolute',
                    width: "120.33px",
                    height: '48px',
                    top: '436px',
                    left: '179px',
                  }}>
                  <img src={tts} width={360.46} height={80} alt="" />
                </div>
              )}
              {!isMobile && (
                <div
                  className="absolute rounded-xl p-4 flex items-center justify-between"
                  style={{
                    position: 'absolute',
                    width: '320.46px',
                    height: '80px',
                    top: '30%',
                    left: '33%',
                  }}>
                  <img src={tts} width={360.46} height={80} alt="" />
                </div>
              )}

              {/* Right side: Text and Buttons */}
              <div className={`${isMobile ? "mt-[12px]" : ""}flex-1 mr-18  text-right mb-12`}>
                {/* Badge */}
                <div className="flex justify-end mb-2 mt-6">
                  <span className="bg-[#F2F2F2] text-teal-900 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 font-[IBM_Plex_Sans_Arabic] text-[25px]">
                    منصة التقارير
                  </span>
                </div>

                {/* Title */}
                <h1 className={`${isMobile ? "text-[35px]" : "text-[55px]"} font-bold text-black mb-4 font-[IBM_Plex_Sans_Arabic]`}>
                  مرجعك الأول <span style={{ color: 'rgba(15, 154, 131, 1)' }}>للتقارير</span> <br />
                  والدراسات في السعودية
                </h1>

                {/* Subtitle */}
                <p className="text-xl text-gray-600 mt-2 font-[IBM_Plex_Sans_Arabic] text-[16px] rtl">
                  سهولة الوصول إلى التقارير والأبحاث والدراسات المنشورة من الجهات الحكومية والشركات والقطاع الثالث – في مكان واحد.
                </p>

                {/* Buttons */}
                <div className="flex justify-end gap-4 mt-8">
                  <button className="bg-[#0041361A] text-teal-900 px-6 py-2 rounded-xl text-base font-medium font-[IBM_Plex_Sans_Arabic] text-[15px] h-[50px] w-[160px]">
                    المزيد عن تقارير
                  </button>
                  <button className="bg-teal-900 text-white px-6 py-2 rounded-xl text-base font-medium font-[IBM_Plex_Sans_Arabic] text-[15px] h-[50px] w-[160px]">
                    تصفح التقارير
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {isMobile && (
        <section
          className={`${isMobile ? "py-8 bg-gradient-to-t" : "py-16 bg-gradient-to-r"} relative from-[#AADDD5] via-[#AADDD54D] to-white overflow-hidden`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex ${isMobile ? "flex-col-reverse" : "flex-row"} items-center`}>

              {/* Left side: Image now positioned to touch bottom */}
              <div className={`${isMobile ? "w-full" : "w-5/12 lg:w-6/12"} relative`}>
                <div className={`relative ${isMobile ? "flex justify-center" : "absolute bottom-0 left-0"}`}
                  style={{
                    [isMobile ? "marginTop" : "width"]: isMobile ? "1rem" : "100%",
                    [isMobile ? "marginBottom" : "height"]: isMobile ? "-2rem" : "auto",
                  }}>
                  <img
                    src={heroImage}
                    alt="Hero illustration"
                    className={`object-contain ${isMobile ? "max-h-[420px]" : "max-h-[450px]"}`}
                    style={{
                      marginBottom: isMobile ? "-8px" : "0",
                      transform: isMobile ? "translateY(0)" : "translateY(12px)"
                    }}
                  />

                  {/* TTS logo - positioned relative to image */}
                  <div
                    className="absolute"
                    style={{
                      width: isMobile ? "120px" : "320px",
                      height: isMobile ? "48px" : "80px",
                      top: isMobile ? "40%" : "50%",
                      left: isMobile ? "75%" : "60%",
                      transform: "translate(-50%, -50%)"
                    }}
                  >
                    <img
                      src={tts}
                      alt="TTS logo"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Right side: Text and Buttons */}
              <div className={`${isMobile ? "w-full mb-6" : "w-7/12 lg:w-6/12"} text-right`}>
                {/* Badge */}
                <div className="flex justify-end mb-4">
                  <span className="bg-[#F2F2F2] text-teal-900 px-4 py-2 rounded-lg font-[IBM_Plex_Sans_Arabic] text-base sm:text-lg md:text-xl">
                    منصة التقارير
                  </span>
                </div>

                {/* Title with responsive text size */}
                <h1 className={`font-bold text-black mb-4 font-[IBM_Plex_Sans_Arabic] ${isMobile ? "text-2xl sm:text-3xl" : "text-3xl md:text-4xl lg:text-5xl"}`}>
                  مرجعك الأول <span className="text-[#0F9A83]">للتقارير</span> <br />
                  والدراسات في السعودية
                </h1>

                {/* Subtitle with improved RTL support */}
                <p dir="rtl" className="text-gray-600 mb-6 font-[IBM_Plex_Sans_Arabic] text-sm sm:text-base md:text-lg">
                  سهولة الوصول إلى التقارير والأبحاث والدراسات المنشورة من الجهات الحكومية والشركات والقطاع الثالث – في مكان واحد.
                </p>

                {/* Buttons with better responsive sizing */}
                <div className="flex justify-end gap-3 sm:gap-4">
                  <button className="bg-[#0041361A] text-teal-900 px-3 sm:px-6 py-2 rounded-xl font-medium font-[IBM_Plex_Sans_Arabic] text-sm sm:text-base h-12 w-36 sm:w-40">
                    المزيد عن تقارير
                  </button>
                  <button className="bg-teal-900 text-white px-3 sm:px-6 py-2 rounded-xl font-medium font-[IBM_Plex_Sans_Arabic] text-sm sm:text-base h-12 w-36 sm:w-40">
                    تصفح التقارير
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="bg-white py-[3%] my-[2%]">
        <div className="container mx-auto ">
          <div className={`text-right mb-[3%]`}>
            <h2 className="text-2xl pr-8 font-semibold text-black font-[IBM_Plex_Sans_Arabic] text-[30 px]">
              اكتشف مميزاتنا
            </h2>
            <p className="text-gray-600 pr-8 text-base mt-2 font-[IBM_Plex_Sans_Arabic] text-[20px] bg-[ #00000099]">
              أهم الخصائص التي تجعل "تقارير" وجهتك الأولى للمعرفة
            </p>
          </div>
          <div className={`flex ${isMobile ? "flex-col-reverse" : "flex-row"} items-center justify-center gap-4 px-[2%]`}>
            <div className={`flex flex-col items-end text-end bg-white border border-gray-200 rounded-xl p-4 max-w-full ${isMobile ? "w-90" : "w-[25%]"}`}>
              <div className="bg-gray-200 p-4 mb-4 rounded-lg">
                <HiDatabase className="w-8 h-8 text-teal-900" />
              </div>
              <h2 className="text-xl font-semibold text-black mb-1 font-[IBM_Plex_Sans_Arabic] text-[25px]">
                قاعدة بيانات متكاملة
              </h2>
              <p className="text-gray-600 text-base font-[IBM_Plex_Sans_Arabic] text-[20px]">
                مجموعة شاملة من التقارير في كل<br />  .المجالات في مكان واحد
              </p>
            </div>
            <div className={`flex flex-col items-end text-end bg-white border border-gray-200 rounded-xl p-4 max-w-full ${isMobile ? "w-90" : "w-[25%]"}`}>
              <div className="bg-gray-200 p-4 mb-4 rounded-lg">
                <HiLink className="w-8 h-8 text-teal-900" />
              </div>
              <h2 className="text-xl font-semibold text-black mb-1 font-[IBM_Plex_Sans_Arabic] text-[25px]">
                روابط محدثة دائمًا
              </h2>
              <p className="text-gray-600 text-base font-[IBM_Plex_Sans_Arabic] text-[20px]">
                تأكد من وصولك إلى التقارير دون<br />  .عناء الروابط المعطلة
              </p>
            </div>
            <div className={`flex flex-col items-end text-end bg-white border border-gray-200 rounded-xl p-4 max-w-full ${isMobile ? "w-90" : "w-[25%]"}`}>
              <div className="bg-gray-200 p-4 mb-4 rounded-lg">
                <img src={youtube} alt="" />
              </div>
              <h2 className="text-xl font-semibold text-black mb-1 font-[IBM_Plex_Sans_Arabic] text-[25px]">
                تحميل مباشر
              </h2>
              <p className="text-gray-600 text-base font-[IBM_Plex_Sans_Arabic] text-[20px]">
                حمل التقارير بجودة عالية دون <br /> .تعقيدات أو صعوبات
              </p>
            </div>
            <div className={`flex flex-col items-end text-end bg-white border border-gray-200 rounded-xl p-4 max-w-full ${isMobile ? "w-90" : "w-[25%]"}`}>
              <div className="bg-gray-200 p-4 mb-4 content-center items-center rounded-lg">
                <img src={search} alt="" width={42} height={42} className='w-full m-auto w-42 h-42' />
              </div>
              <h2 className="text-xl font-semibold text-black mb-1 font-[IBM_Plex_Sans_Arabic] text-[25px]">
                بحث متقدم وسريع
              </h2>
              <p className="text-gray-600 text-base font-[IBM_Plex_Sans_Arabic] text-[18px]">
                ابحث عن التقارير بسهولة حسب<br /> .الجهة، المجال، أو الكلمات المفتاحية
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Taqareer Section */}
      <section className="bg-white py-12 my-8">
        <div className="container mx-auto px-8">
          <div className={`flex ${isMobile ? "flex-col-reverse" : "flex-row"} items-center justify-between`}>
            {/* Left Side: Text */}
            <div className={`${isMobile ? "w-full mt-8 mx-4" : "w-1/2"} text-right flex flex-col justify-center pl-4`}>
              <h2 className="text-3xl font-bold text-black mb-4 font-[IBM_Plex_Sans_Arabic] text-[30px]">
                لماذا تقارير؟
              </h2>
              {isMobile && (
                <p className={`text-[18px] text-gray-600 mb-4 leading-relaxed font-[IBM_Plex_Sans_Arabic] text-[#141313CC] rtl`} >
                  في ظل تشتت التقارير والدراسات في منصات متعددة، جاء "تقارير" ليكون الحل الأمثل للباحثين والمهتمين. نقدم قاعدة بيانات متجددة للتقارير والأبحاث الرسمية، مع إمكانية الاطلاع المباشر أو التحميل بسهولة
                </p>
              )}

              {!isMobile && (
                <p className={`text-[18px] text-gray-600 mb-4 leading-relaxed font-[IBM_Plex_Sans_Arabic] text-[#141313CC]`} >
                  في ظل تشتت التقارير والدراسات في منصات متعددة، جاء "تقارير" ليكون الحل <br />الأمثل للباحثين والمهتمين. نقدم قاعدة بيانات متجددة للتقارير والأبحاث <br />الرسمية، مع إمكانية الاطلاع المباشر أو التحميل بسهولة
                </p>
              )}

              <div className="flex justify-end">
                <ul className="space-y-4 text-gray-600 text-lg">
                  <li className="flex items-center justify-end gap-3 font-[IBM_Plex_Sans_Arabic] text-[18px] text-[#141313CC] ">
                    <span>الوصول السريع إلى التقارير الرسمية</span>
                    <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center">
                      <div className="w-5 h-5 bg-[#004136] rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </li>
                  <li className="flex items-center justify-end gap-3 font-[IBM_Plex_Sans_Arabic] text-[18px] text-[#141313CC] ">
                    <span>تحميل الملفات بضغطة زر</span>
                    <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center">
                      <div className="w-5 h-5 bg-[#004136] rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </li>
                  <li className="flex items-center justify-end gap-3 font-[IBM_Plex_Sans_Arabic] text-[18px] text-[#141313CC] ">
                    <span>البحث الذكي حسب الجهة أو المجال</span>
                    <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center">
                      <div className="w-5 h-5 bg-[#004136] rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* Right Side: Card with Image */}
            <div className={`${isMobile ? "w-full" : "w-1/2"} flex justify-end items-center`}>
              <div className={`bg-[#004136] rounded-3xl p-6 flex justify-center items-center ${isMobile ? "w-full h-80" : "w-4/5 h-100"} `}>
                <img
                  src={tqarir_mid} alt="Saudi Arabia Map with Dots" width={isMobile ? 208 : 248} height={isMobile ? 85 : 105}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Taqareer Works Section */}
      <section className="bg-white py-6 my-8">
        <div className="container mx-auto px-8">
          <div className={`text-right  ${isMobile ? "pr-4" : ""} `}>
            <h2 className={`text-2xl font-semibold text-black font-[IBM_Plex_Sans_Arabic] text-[30 px] text-[#000000]]`}>
              كيف يعمل موقع تقارير؟
            </h2>
            <p className="text-gray-600 text-md mt-2 font-[IBM_Plex_Sans_Arabic] text-[20 px]">
              خطوات بسيطة للوصول إلى المعلومات بسهولة
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white my-4">
        <div className="container mx-auto">
          <div className={`max-w-full mx-auto ${isMobile ? "px-8" : ""}`}>
            <div className={`flex ${isMobile ? "flex-col" : "flex-row-reverse"} justify-between items-start gap-4`}>
              {steps.map((step, index) => (
                <div key={index} className={`bg-white border border-gray-200 ${isMobile ? "" : "mx-8 rounded-2xl"} p-4 h-60 flex-1 text-right`}>
                  <div className="mb-4 flex justify-end">
                    <div className="bg-[#004136] text-white w-16 h-16 rounded-md flex items-center justify-center text-2xl font-bold">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="font-bold text-base mb-2 text-right">{step.title}</h3>
                  <p className="text-gray-600 text-md leading-relaxed text-right">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>


          </div>
        </div>
      </section>

      {/* Trusted Source Section */}
      <section className="bg-white py-12 my-8">
        <div className="container mx-auto ">
          <div className={`flex ${isMobile ? "flex-col" : "flex-row"} items-center justify-between`}>
            <div className={`${isMobile ? "w-full" : "w-1/2"} flex justify-center items-center`}>
              <img
                src={sectionImage}
                alt="Section Image"
                className={`${isMobile ? "w-5/5 h-87" : "w-4/5 h-auto"}  object-contain rounded-lg`}
              />
            </div>
            <div className={`${isMobile ? "w-full" : "w-1/2"} mt-4 mx-8 text-right flex flex-col justify-center pl-8`}>
              <h2 className="text-3xl font-bold text-black mb-4">
                مصدر موثوق لكل تقرير تحتاجه
              </h2>
              <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                بدلاً من البحث في عشرات المواقع والمنصات المختلفة، يمنحك "تقارير" وصولاً سريعًا ومباشرًا إلى التقارير والأبحاث الرسمية في المملكة العربية السعودية. استمتع ببحث متقدم، تحميل فوري، وروابط محدثة دائمًا – كل ذلك في مكان واحد، لتوفير وقتك وجهدك
              </p>
              <div className="flex justify-end">
                <button className="bg-[#004136] h-14 text-white px-6 py-2 rounded-xl text-base font-medium">
                  عرض التقارير
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Report Types Section */}
      <section className="bg-white py-8 my-2">
        <div className="container mx-auto">
          <div className="text-right mb-10">
            <h2 className="text-2xl pr-8 font-semibold text-black font-[IBM_Plex_Sans_Arabic]">
              أنواع التقارير المتاحة
            </h2>
            <p className="text-gray-600 pr-8 font-[IBM_Plex_Sans_Arabic] text-sm mt-2">
              مجموعة متنوعة من التقارير في مختلف المجالات
            </p>
          </div>
          <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-4"} gap-4 px-4`}>
            <div className="flex flex-col items-center text-center bg-white border-[1.5px] border-[#EEEEEE] rounded-lg p-4">
              <div className="bg-gray-200 p-3 mb-4 rounded-xl">
                <HiSearch className="w-8 h-8 text-[rgba(0,65,54,1)]" />
              </div>
              <h2 className="text-xl font-semibold text-black font-[IBM_Plex_Sans_Arabic] mb-1">
                تقارير القطاع الثالث
              </h2>
              <p className="text-gray-600 font-[IBM_Plex_Sans_Arabic] text-sm">
                إحصائيات وتقارير من الجمعيات والمنظمات غير الربحية
              </p>
            </div>
            <div className="flex flex-col items-center text-center bg-white border-[1.5px] border-[#EEEEEE] rounded-lg p-4">
              <div className="bg-gray-200 p-3 mb-4 rounded-xl">
                <img src={work} width={38} height={38} alt="العمل" />
              </div>
              <h2 className="text-xl font-semibold text-black font-[IBM_Plex_Sans_Arabic] mb-1">
                تقارير الشركات
              </h2>
              <p className="text-gray-600 font-[IBM_Plex_Sans_Arabic] text-sm">
                التقارير السنوية والاستشارية، والمسؤولية الاجتماعية في مختلف القطاعات
              </p>
            </div>
            <div className="flex flex-col items-center text-center bg-white border-[1.5px] border-[#EEEEEE] rounded-lg p-4">
              <div className="bg-gray-200 p-3 mb-4 rounded-xl">
                <img src={chart} width={38} height={38} alt="الرسم البياني" />
              </div>
              <h2 className="text-xl font-semibold text-black font-[IBM_Plex_Sans_Arabic] mb-1">
                الدراسات الاقتصادية
              </h2>
              <p className="text-gray-600 font-[IBM_Plex_Sans_Arabic] text-sm">
                تقارير عن الأسواق، الاستثمارات، والاقتصاد المحلي
              </p>
            </div>
            <div className="flex flex-col items-center text-center bg-white border-[1.5px] border-[#EEEEEE] rounded-lg p-4">
              <div className="bg-gray-200 p-3 mb-4 rounded-xl">
                <img src={city} width={38} height={38} alt="المدينة" />
              </div>
              <h2 className="text-xl font-semibold text-black font-[IBM_Plex_Sans_Arabic] mb-1">
                تقارير حكومية
              </h2>
              <p className="text-gray-600 font-[IBM_Plex_Sans_Arabic] text-sm">
                إصدارات رسمية من الوزارات والهيئات وغيرها من الأجهزة الحكومية
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reports Around the Kingdom Section */}
      <section className="bg-white py-12 my-8">
        <div className="container mx-auto ">
          <div className={`flex items-center justify-between ${isMobile ? "flex-col-reverse" : "flex-row"}`}>
            {/* Left Side: Text */}
            <div className={`${isMobile ? "w-full mt-8" : "w-1/2 pl-8"} text-right flex flex-col justify-center `}>
              <h2 className="text-3xl font-bold text-black mb-4">
                التقارير في كل أنحاء المملكة
              </h2>
              <p className="text-xl text-gray-600 mb-4 ml-[20%] x leading-relaxed">
                أينما كنت في المملكة، يتيح لك "تقارير" الوصول السريع إلى أحدث الإصدارات الرسمية من الجهات الحكومية، الشركات، والمنظمات غير الربحية. استكشف الدراسات والأبحاث بسهولة، وابحث عن المعلومات التي تحتاجها بضغطة زر، دون الحاجة للتنقل بين عشرات المواقع المختلفة.
              </p>
              <div className="flex justify-end">
                <button className="bg-[#004136] text-white px-6 py-2 rounded-xl h-12 text-base font-medium">
                  قراءة المزيد
                </button>
              </div>
            </div>
            {/* Right Side: Card with Image */}
            <div className={`${isMobile ? "w-full" : "w-1/2"} flex justify-end items-center`}>
              <div className={`bg-teal-900 rounded-3xl p-6 flex justify-center items-center ${isMobile ? " w-5/5  h-80" : "w-9/10  h-110"} `} >
                <div className="relative w-full h-full">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5">
                    <img
                      src={grImage}
                      alt="Saudi Arabia Map with Dots"
                      width={238}
                      height={105}
                      className="object-contain h-[80%] w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="bg-white py-6 my-8">
        <div className="container mx-auto px-[3.8%]">
          <div className="text-right mb-12">
            <h2 className="text-2xl font-semibold text-black">
              مصادرنا الموثوقة
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              تقارير رسمية من جهات حكومية، اقتصادية، وأكاديمية
            </p>
          </div>
          {!isMobile && (
            <div className="flex justify-between items-start flex-wrap">
              <div className="flex items-center gap-1">
                <img src={group5} alt="Logo 5" height={90} width={190.54} />
              </div>
              <div className="flex items-center gap-1">
                <img src={group0} alt="Logo 6" height={90} width={190.54} />
              </div>
              <div className="flex items-center gap-1">
                <img src={group4} alt="Logo 4" height={90} width={190.54} />
              </div>
              <div className="flex items-center gap-1">
                <img src={group3} alt="Logo 3" height={90} width={190.54} />
              </div>
              <div className="flex items-center gap-1">
                <img src={group1} alt="Logo 2" height={90} width={190.54} />
              </div>
              <div className="flex items-center gap-1">
                <img src={group2} alt="Logo 1" height={90} width={190.54} />
              </div>
            </div>
          )}
          {isMobile && (
            <div className="md:hidden w-full overflow-x-auto scrollbar-hide">
              <div className="flex items-center flex-col-reversed py-4" style={{
                width: 'max-content',
                paddingLeft: '12px',
                paddingRight: '12px'
              }}>
                <div className="flex items-center">
                  <img src={group5} alt="Logo 5" height={70} width={150} className="max-w-none" />
                </div>
                <div className="flex items-center">
                  <img src={group0} alt="Logo 6" height={70} width={150} className="max-w-none" />
                </div>
                <div className="flex items-center">
                  <img src={group4} alt="Logo 4" height={70} width={150} className="max-w-none" />
                </div>
                <div className="flex items-center">
                  <img src={group3} alt="Logo 3" height={70} width={150} className="max-w-none" />
                </div>
                <div className="flex items-center">
                  <img src={group1} alt="Logo 2" height={70} width={150} className="max-w-none" />
                </div>
                <div className="flex items-center">
                  <img src={group2} alt="Logo 1" height={70} width={150} className="max-w-none" />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-12 my-4 px-[3.8%]">
        <div className="container mx-auto px-8">
          <div className="text-right mb-8">
            <h2 className="text-2xl font-semibold text-black">
              الأسئلة الشائعة
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              إجابات لأكثر الأسئلة المتداولة حول المنصة
            </p>
          </div>
          <div className="flex flex-col items-end gap-4">
            <select
              className="w-full p-3 bg-gray-50 rounded-xl shadow-sm text-right text-base appearance-none"
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 20 20\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M6 8l4 4 4-4\' stroke=\'%23000\' strokeWidth=\'2\'/%3E%3C/svg%3E")',
                backgroundSize: 32,
                backgroundPosition: 'left 1rem center',
                backgroundRepeat: 'no-repeat',
                paddingLeft: '2.5rem',
              }}
            >
              <option>ما هو موقع "تقارير"؟</option>
            </select>
            <select
              className="w-full p-3 bg-gray-50 rounded-xl shadow-sm text-right text-base appearance-none"
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 20 20\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M6 8l4 4 4-4\' stroke=\'%23000\' strokeWidth=\'2\'/%3E%3C/svg%3E")',
                backgroundSize: 32,
                backgroundPosition: 'left 1rem center',
                backgroundRepeat: 'no-repeat',
                paddingLeft: '2.5rem',
              }}
            >
              <option>هل يمكنني تحميل التقارير مباشرة؟</option>
            </select>
            <select
              className="w-full p-3 bg-gray-50 rounded-xl shadow-sm text-right text-base appearance-none"
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 20 20\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M6 8l4 4 4-4\' stroke=\'%23000\' strokeWidth=\'2\'/%3E%3C/svg%3E")',
                backgroundSize: 32,
                backgroundPosition: 'left 1rem center',
                backgroundRepeat: 'no-repeat',
                paddingLeft: '2.5rem',
              }}
            >
              <option>كيف يمكنني البحث عن تقرير معين؟</option>
            </select>
            <select
              className="w-full p-3 bg-gray-50 rounded-xl shadow-sm text-right text-base appearance-none"
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 20 20\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M6 8l4 4 4-4\' stroke=\'%23000\' strokeWidth=\'2\'/%3E%3C/svg%3E")',
                backgroundSize: 32,
                backgroundPosition: 'left 1rem center',
                backgroundRepeat: 'no-repeat',
                paddingLeft: '2.5rem',
              }}
            >
              <option>هل التقارير المتاحة في الموقع محدثة؟</option>
            </select>
            <select
              className="w-full p-3 bg-gray-50 rounded-xl shadow-sm text-right text-base appearance-none"
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 20 20\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M6 8l4 4 4-4\' stroke=\'%23000\' strokeWidth=\'2\'/%3E%3C/svg%3E")',
                backgroundSize: 32,
                backgroundPosition: 'left 1rem center',
                backgroundRepeat: 'no-repeat',
                paddingLeft: '2.5rem',
              }}
            >
              <option>هل الموقع مجاني أم يحتاج لاشتراك؟</option>
            </select>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ArabicLandingPage;