import React from 'react';

// Image imports
import blog1 from '../../src/assets/blog1.png';
import blog2 from '../../src/assets/blog2.png';
import blog3 from '../../src/assets/blog3.png';
import blog4 from '../../src/assets/blog4.png';
import blog5 from '../../src/assets/blog5.png';
import blog6 from '../../src/assets/blog6.png';
import blog7 from '../../src/assets/blog7.png';
import blog8 from '../../src/assets/blog8.png';
import blog9 from '../../src/assets/blog9.png';
import blog10 from '../../src/assets/blog10.png';
import { useState, useEffect } from "react";
import Navbar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

// Define the BlogPage component as a functional component with TypeScript
const BlogPage: React.FC = () => {
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
      <Navbar/>
      {/* Navbar Section */}
      <div className="bg-white p-4 shadow-sm">
        <section className="py-8">
          <div className="container mx-auto px-8">
            <div
              className="w-full p-3 bg-[#0041364D] rounded-xl shadow-sm text-right font-IBM_Plex_Sans_Arabic text-[16px]"
              style={{
                color: 'rgba(0, 0, 0, 1)',
                backgroundColor: '#00413612',

              }}
            >
              الرئيسية / المدونة
            </div>
          </div>
        </section>
        <section className="bg-white">
          <div className="container mx-auto px-8">
            <div className={`flex items-center justify-between ${isMobile ? "flex-col-reverse" : "flex-row"}`}>
              {/* Left Side: Text */}
              <div className={`${isMobile ? "w-full" : "w-[46%] pl-4"} text-right flex flex-col justify-center `}>
                <h2 className="text-[30px] font-bold text-[rgba(0,0,0,1)] font-IBM_Plex_Sans_Arabic mb-3">
                  التطور الرقمي في السعودية
                </h2>
                <p className="text-[20px] text-[rgba(20,19,19,0.6)] font-IBM_Plex_Sans_Arabic mb-4 leading-relaxed">
                  تستعرض هذه المقالة رحلة المملكة العربية السعودية في مجال التحول الرقمي، بدءًا من التحسينات في البنية التحتية الرقمية إلى إطلاق المبادرات التقنية الحديثة. سيتم تسليط الضوء على المشاريع الرقمية الكبيرة التي أثرت بشكل إيجابي على الخدمات الحكومية
                </p>
                <div className="flex justify-end">
                  <button className={`${isMobile? "mt-4"  : ""} bg-[rgba(0,65,54,1)] w-42 text-white px-6 py-2 rounded-[15px] text-[16px] font-IBM_Plex_Sans_Arabic mb-6 h-14`}>
                    قراءة المزيد
                  </button>
                </div>
              </div>

              {/* Right Side: Card with Image */}
              <div className={`${isMobile ? "w-full mt-8" : "w-[50%]"} flex justify-end items-center`}>
                <div className={`rounded-[40px] flex justify-center items-center w-[100%] ${isMobile ? "h-[300px]" : "h-[400px]"}`}>
                  <div className="relative w-full h-full">
                    <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isMobile? "w-full" : "w-[95%]"} h-[95%]`}>
                      <img
                        src={blog1}
                        width={750}
                        height={483}
                        alt="Saudi Arabia Map with Dots"
                        className="w-full h-[90%] object-contain rounded-[40px] object-fill"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-2 my-2">
          <div className="container mx-auto px-8">
            <div className={`flex justify-center items-center gap-4 ${isMobile ? "flex-col" : "flex-row"}`}>
              {/* الصورة الأولى */}
              <div className={isMobile ? "w-full mx-16" : "w-[33%]"}>
                <img
                  src={blog4}
                  alt="Image 5"
                  className="w-full h-[250px] object-cover rounded-[20px]"
                />
                <div className="w-[100%] text-right flex flex-col justify-center pr-4">
                  <h2 className="text-[20px] font-bold text-[rgba(0,0,0,1)] font-IBM_Plex_Sans_Arabic mt-4 mb-1 ">
                    هذا النص هو مثال لنص يمكن استبداله
                  </h2>
                  <p className="text-[15px] text-[rgba(0,0,0,0.8)] font-IBM_Plex_Sans_Arabic mt-0 mb-8 leading-relaxed">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس<br />
                    المساحة، لقد تم توليد هذا النص
                  </p>
                </div>
              </div>
              {/* الصورة الثانية */}
              <div className={isMobile ? "w-full mx-16" : "w-[33%]"}>
                <img
                  src={blog3}
                  alt="Image 4"
                  className="w-full h-[250px] object-cover rounded-[20px]"
                />
                <div className="w-[100%] text-right flex flex-col justify-center pr-4">
                  <h2 className="text-[20px] font-bold text-[rgba(0,0,0,1)] font-IBM_Plex_Sans_Arabic mt-4 mb-1">
                    هذا النص هو مثال لنص يمكن استبداله
                  </h2>
                  <p className="text-[15px] text-[rgba(0,0,0,0.8)] font-IBM_Plex_Sans_Arabic mt-0 mb-8 leading-relaxed">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس<br />
                    المساحة، لقد تم توليد هذا النص
                  </p>
                </div>
              </div>
              {/* الصورة الثالثة */}
              <div className={isMobile ? "w-full mx-16" : "w-[33%]"}>
                <img
                  src={blog2}
                  alt="Image 3"
                  className="w-full h-[250px] object-cover rounded-[20px]"
                />
                <div className="w-[100%] text-right flex flex-col justify-center pr-4">
                  <h2 className="text-[20px] font-bold text-[rgba(0,0,0,1)] font-IBM_Plex_Sans_Arabic mt-4 mb-1">
                    هذا النص هو مثال لنص يمكن استبداله
                  </h2>
                  <p className="text-[15px] text-[rgba(0,0,0,0.8)] font-IBM_Plex_Sans_Arabic mt-0 mb-8 leading-relaxed">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس<br />
                    المساحة، لقد تم توليد هذا النص
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-2 my-2">
          <div className="container mx-auto px-8">
            <div className={`flex justify-center items-center gap-4 ${isMobile ? "flex-col" : "flex-row"}`}>
              {/* الصورة الأولى */}
              <div className={isMobile ? "w-full mx-16" : "w-[33%]"}>
                <img
                  src={blog7}
                  alt="Image 5"
                  className="w-full h-[250px] object-cover rounded-[20px]"
                />
                <div className="w-[100%] text-right flex flex-col justify-center pr-4">
                  <h2 className="text-[20px] font-bold text-[rgba(0,0,0,1)] font-IBM_Plex_Sans_Arabic mt-4 mb-1">
                    هذا النص هو مثال لنص يمكن استبداله
                  </h2>
                  <p className="text-[15px] text-[rgba(0,0,0,0.8)] font-IBM_Plex_Sans_Arabic mt-0 mb-8 leading-relaxed">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس<br />
                    المساحة، لقد تم توليد هذا النص
                  </p>
                </div>
              </div>
              {/* الصورة الثانية */}
              <div className={isMobile ? "w-full mx-16" : "w-[33%]"}>
                <img
                  src={blog6}
                  alt="Image 4"
                  className="w-full h-[250px] object-cover rounded-[20px]"
                />
                <div className="w-[100%] text-right flex flex-col justify-center pr-4">
                  <h2 className="text-[20px] font-bold text-[rgba(0,0,0,1)] font-IBM_Plex_Sans_Arabic mt-4 mb-1">
                    هذا النص هو مثال لنص يمكن استبداله
                  </h2>
                  <p className="text-[15px] text-[rgba(0,0,0,0.8)] font-IBM_Plex_Sans_Arabic mt-0 mb-8 leading-relaxed">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس<br />
                    المساحة، لقد تم توليد هذا النص
                  </p>
                </div>
              </div>
              {/* الصورة الثالثة */}
              <div className={isMobile ? "w-full mx-16" : "w-[33%]"}>
                <img
                  src={blog5}
                  alt="Image 3"
                  className="w-full h-[250px] object-cover rounded-[20px]"
                />
                <div className="w-[100%] text-right flex flex-col justify-center pr-4">
                  <h2 className="text-[20px] font-bold text-[rgba(0,0,0,1)] font-IBM_Plex_Sans_Arabic mt-4 mb-1">
                    هذا النص هو مثال لنص يمكن استبداله
                  </h2>
                  <p className="text-[15px] text-[rgba(0,0,0,0.8)] font-IBM_Plex_Sans_Arabic mt-0 mb-8 leading-relaxed">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس<br />
                    المساحة، لقد تم توليد هذا النص
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-2 my-2">
          <div className="container mx-auto px-8">
            <div className={`flex justify-center items-center gap-4 ${isMobile ? "flex-col" : "flex-row"}`}>
              {/* الصورة الأولى */}
              <div className={isMobile ? "w-full mx-16" : "w-[33%]"}>
                <img
                  src={blog10}
                  alt="Image 5"
                  className="w-full h-[250px] object-cover rounded-[20px]"
                />
                <div className="w-[100%] text-right flex flex-col justify-center pr-4">
                  <h2 className="text-[20px] font-bold text-[rgba(0,0,0,1)] font-IBM_Plex_Sans_Arabic mt-4 mb-1">
                    هذا النص هو مثال لنص يمكن استبداله
                  </h2>
                  <p className="text-[15px] text-[rgba(0,0,0,0.8)] font-IBM_Plex_Sans_Arabic mt-0 mb-8 leading-relaxed">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس<br />
                    المساحة، لقد تم توليد هذا النص
                  </p>
                </div>
              </div>
              {/* الصورة الثانية */}
              <div className={isMobile ? "w-full mx-16" : "w-[33%]"}>
                <img
                  src={blog9}
                  alt="Image 4"
                  className="w-full h-[250px] object-cover rounded-[20px]"
                />
                <div className="w-[100%] text-right flex flex-col justify-center pr-4">
                  <h2 className="text-[20px] font-bold text-[rgba(0,0,0,1)] font-IBM_Plex_Sans_Arabic mt-4 mb-1">
                    هذا النص هو مثال لنص يمكن استبداله
                  </h2>
                  <p className="text-[15px] text-[rgba(0,0,0,0.8)] font-IBM_Plex_Sans_Arabic mt-0 mb-8 leading-relaxed">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس<br />
                    المساحة، لقد تم توليد هذا النص
                  </p>
                </div>
              </div>
              {/* الصورة الثالثة */}
              <div className={isMobile ? "w-full mx-16" : "w-[33%]"}>
                <img
                  src={blog8}
                  alt="Image 3"
                  className="w-full h-[250px] object-cover rounded-[20px]"
                />
                <div className="w-[100%] text-right flex flex-col justify-center pr-4">
                  <h2 className="text-[20px] font-bold text-[rgba(0,0,0,1)] font-IBM_Plex_Sans_Arabic mt-4 mb-1">
                    هذا النص هو مثال لنص يمكن استبداله
                  </h2>
                  <p className="text-[15px] text-[rgba(0,0,0,0.8)] font-IBM_Plex_Sans_Arabic mt-0 mb-8 leading-relaxed">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس<br />
                    المساحة، لقد تم توليد هذا النص
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
};

export default BlogPage;