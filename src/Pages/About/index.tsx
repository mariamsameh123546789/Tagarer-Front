import React from "react";

// Image imports
import about1 from "../../../src/assets/about1.png";
import about2 from "../../../src/assets/about2.png";
import about3 from "../../../src/assets/about3.png";
import about4 from "../../../src/assets/about4.png";
import about5 from "../../../src/assets/about5.png";
import { useState, useEffect } from "react";
import Navbar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import case_img from "../../../src/assets/case.png";
import search from "../../../src/assets/search.png";
import book from "../../../src/assets/book.png";
import chart from "../../../src/assets/chart.png";


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
            className="w-full p-3 md-50 bg-[#00413612] rounded-xl shadow-sm text-right font-[IBM_Plex_Sans_Arabic] text-[16px]"
            style={{
              color: "rgba(0, 0, 0, 1)",
              backgroundColor: '#00413612',

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
      <section
        className={`bg-white ${isMobile ? "py-1" : "py-2"
          } my-6 flex items-center ${isMobile ? "flex-col-reverse" : "flex-col"}`}
      >
        <div className="container mx-auto ">
          {!isMobile ? (
            // Desktop layout: Three images at 30% width each
            <div className="flex justify-center items-center gap-4  mb-20">
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
          ) : (
            // Mobile layout: First image 100%, other two at 50% each
            <div className="flex flex-col gap-4 mt-8">
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
        <div className="container mx-auto px-16">
          <div className="flex items-center justify-between">
            <div className="w-[100%] text-right flex flex-col justify-center">
              <h2 className="text-[30px] font-bold text-[rgba(0,0,0,1)] ml-4 text-[30px]font-[IBM_Plex_Sans_Arabic] ">
                من نحن
              </h2>
              <p className="text-[rgba(0,0,0,0.8)]  leading-relaxed text-[22px] font-[IBM_Plex_Sans_Arabic]">
                <br />
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص
                <br />
                لأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو
                <br />
                مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم
                <br />
                الموقع. هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
                <br />
                النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص
                <br />
                لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية
                <br />
                لتصميم الموقع. هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                <br />
                العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما
                <br />
                تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على
                <br />
                صورة حقيقية لتصميم الموقع. هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
                <br />
                النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد
                <br />
                الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن
                <br />
                .يطلع على صورة حقيقية لتصميم الموقع
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Reports and Studies Section */}
      <section className="bg-white py-12 my-8">
        <div className="container mx-auto px-8">
          <div
            className={`flex items-center ${isMobile ? "flex-col-reverse" : "flex-row"
              } justify-between`}
          >
            {/* Left Side: Text */}
            <div
              className={`${isMobile ? "w-full" : "w-[50%]"
                } text-right flex flex-col justify-center ${isMobile ? "px-8" : "pl-4"
                }`}
            >
              <h2 className="text-[30px] font-bold text-[rgba(0,0,0,1)] font-[IBM_Plex_Sans_Arabic] mt-8 mb-4">
                التقارير والدراسات
              </h2>
              ${!isMobile && (
                <p className="text-[20px] text-[#14131399;)] font-[IBM_Plex_Sans_Arabic] mb-4 leading-relaxed rtl">
                  يحتوي هذا القسم على مجموعة من التقارير الرسمية الصادرة عن الجهات<br />
                  الحكومية في المملكة، تغطي مواضيع متنوعة في التنمية، الاقتصاد
                  التعليم،<br /> الصحة وغيرها. صُمّم القسم ليسهّل على المستخدم الوصول
                  للمعلومة <br />الدقيقة وتحميلها بضغطة واحدة
                </p>
              )}
              {isMobile && (
                <p className="text-[20px] text-[#14131399;)] font-[IBM_Plex_Sans_Arabic]  mb-4 leading-relaxed rtl">
                  يحتوي هذا القسم على مجموعة من التقارير الرسمية الصادرة عن الجهات
                  الحكومية في المملكة، تغطي مواضيع متنوعة في التنمية، الاقتصاد
                  التعليم، الصحة وغيرها. صُمّم القسم ليسهّل على المستخدم الوصول
                  للمعلومة الدقيقة وتحميلها بضغطة واحدة
                </p>
              )}
              <div className="flex justify-end">
                <button className="bg-[rgba(0,65,54,1)] h-14 w-32 text-white px-6 py-2 rounded-[15px] text-[16px] font-[IBM_Plex_Sans_Arabic]">
                  التقارير
                </button>
              </div>
            </div>

            {/* Right Side: Card with Image */}
            <div
              className={` ${isMobile ? "w-full" : "w-[50%]"
                } flex justify-end items-center`}
            >
              <div
                className={`rounded-[40px] p-4 flex justify-center items-center ${isMobile ? "w-full h-[300px]" : "w-[90%] h-[400px]"
                  } `}
              >
                <div className="relative w-full h-full">
                  <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isMobile ? "w-[105%]" : "w-[95%]"} h-[95%]`}>
                    <img
                      src={about1}
                      alt="Saudi Arabia Map with Dots"
                      className="w-full object-contain rounded-[20px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="bg-white py-8 my-2">
        <div className={"container mx-auto px-2"}>
          <div className="text-right mb-10">
            <h2 className="text-[25px] pr-8 pl-30 font-semibold text-black font-[IBM_Plex_Sans_Arabic]">
              لمن هذه المنصة؟
            </h2>
            <p
              className={`text-gray-600 pr-8 ${isMobile ? "pl-10" : "pl-30"
                }font-[IBM_Plex_Sans_Arabic] text-[15px] mt-2`}
            >
              منصتنا صُممت لتخدم فئات متعددة تسعى للوصول إلى محتوى موثوق
            </p>
          </div>
          <div
            className={`grid ${isMobile ? "grid-rows-4 -order-1" : "grid-cols-4 "
              } gap-4 `}
          >
                        <div
              className={`flex flex-col ${isMobile ? "items-center text-center" : "items-end text-end max-w-[90%]"
                } bg-[rgba(255,255,255,1)] border-[1.5px] border-[rgba(238,238,238,1)] p-4`}
            >
              <div className="bg-gray-200 p-4 mb-4 rounded-lg">
                <img
                  src={chart}
                  width={38}
                  height={38}
                  alt=""
                  className="p-1"
                />
              </div>
              <h2 className="text-[20px] font-semibold text-black font-[IBM_Plex_Sans_Arabic] mb-1">
                المستثمرين
              </h2>
              <p className="text-gray-600 font-[IBM_Plex_Sans_Arabic] text-[15px]">
                بيانات وتقارير تساعدك على اتخاذ<br /> .قرارات استثمارية دقيقة ومدروسة
              </p>
            </div>
            <div
              className={`flex flex-col ${isMobile ? "items-center text-center" : "items-end text-end max-w-[90%]"
                } bg-[rgba(255,255,255,1)] border-[1.5px] border-[rgba(238,238,238,1)] p-4`}
            >
              <div className="bg-gray-200 p-4 mb-4 rounded-lg">
                <img
                  src={book}
                  width={38}
                  height={38}
                  alt=""
                  className="p-1"
                />
              </div>
              <h2 className="text-[20px] font-semibold text-black font-[IBM_Plex_Sans_Arabic] mb-1">
                المتخصصين
              </h2>
              <p className="text-gray-600 font-[IBM_Plex_Sans_Arabic] text-[15px]">
                مصادر معرفية تدعم تطورك المهني<br /> .وتبقيك على اطلاع دائم
              </p>
            </div>
            <div
              className={`flex flex-col ${isMobile ? "items-center text-center" : "items-end text-end max-w-[90%]"
                } bg-[rgba(255,255,255,1)] border-[1.5px] border-[rgba(238,238,238,1)] p-4 `}
            >
              <div className="bg-gray-200 p-4 mb-4 rounded-lg">
                <img
                  src={case_img}
                  width={38}
                  height={38}
                  alt=""
                  className="p-1"
                />
              </div>
              <h2 className="text-[20px] font-semibold text-black font-[IBM_Plex_Sans_Arabic] mb-1">
                الاستشاريين
              </h2>
              <p className="text-gray-600 font-[IBM_Plex_Sans_Arabic] text-[15px]">
                تحليلات وبيانات موثوقة تعزز<br /> .توصياتك واستراتيجياتك للعملاء
              </p>
            </div>

            <div
              className={`flex flex-col ${isMobile ? "items-center text-center" : "items-end text-end max-w-[90%]"
                } bg-[rgba(255,255,255,1)] border-[1.5px] border-[rgba(238,238,238,1)] p-4 `}
            >
              <div className="bg-gray-200 p-4 mb-4 rounded-lg">
                <img
                  src={search}
                  width={38}
                  height={38}
                  alt=""
                  className="p-1"
                />
              </div>
              <h2 className="text-[20px] font-semibold text-black font-[IBM_Plex_Sans_Arabic] mb-1">
                الباحثين
              </h2>
              <p className="text-gray-600 font-[IBM_Plex_Sans_Arabic] text-[15px] rtl">
                تقارير ومراجع داعمة للأبحاث <br />والدراسات الأكاديمية باحترافية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Guides Section */}
      <section className="bg-white py-12 my-8">
        <div className="container mx-auto px-8">
          <div
            className={`flex items-center ${isMobile ? "flex-col space-y-12" : ""
              } justify-between`}
          >
            {/* Left Side: Card with Image */}
            <div
              className={`${isMobile ? "w-full" : "w-[50%]"
                } flex justify-start items-center`}
            >
              <div
                className={`rounded-[40px] p-4 flex justify-center object-contain items-center w-[600px] ${isMobile ? "h-[200px]" : "h-[400px]"}`}>
                <div className="relative w-full h-full ">
                  <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isMobile? "w-[105%]" : "w-[95%]"} h-[95%]`}>
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
            <div
              className={`${isMobile ? "w-full mx-16" : "w-[50%]"
                } text-right flex flex-col justify-center pr-4 mb-16`}
            >
              <h2 className="text-[30px] font-bold text-[rgba(0,0,0,1)] font-[IBM_Plex_Sans_Arabic]  mt-8 mb-2">
                الأدلة المعرفية
              </h2>
              <p className="text-[20px] text-[rgba(20,19,19,0.6)] font-[IBM_Plex_Sans_Arabic] mb-4 leading-relaxed">
                يوفّر هذا القسم مكتبة شاملة من الأدلة الإرشادية الصادرة عن
                الجهات<br /> المختصة، والتي تهدف إلى توضيح الإجراءات، المفاهيم،
                والخدمات بطريقة<br /> مبسطة ومباشرة. دليل عملي لكل من يبحث عن فهم أعمق
                للأنظمة <br /> والخدمات<br />
              </p>
              <div className="flex justify-end">
                <button className="bg-[rgba(0,65,54,1)] h-14 w-38 text-white px-6 py-2 rounded-[15px] text-[16px] font-[IBM_Plex_Sans_Arabic]">
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