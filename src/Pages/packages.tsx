import React from 'react';
import { useState, useEffect } from "react";
import Navbar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import SR from '../../src/assets/SR.png';
import black_icon from '../../src/assets/SR-black.png';

// Define the Navbar component as a functional component with TypeScript
const PackagesPage: React.FC = () => {
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
            <section className="py-2">
                    <div className="container mx-auto px-8">
                        <div
                            className="w-full p-3 bg-[rgba(0,65,54,0.3)] rounded-xl shadow-sm text-right font-[IBM_Plex_Sans_Arabic] text-[16px]"
                            style={{
                                color: 'rgba(0, 0, 0, 1)',
                                backgroundColor: '#00413612',
                            }}
                        >
                            الرئيسية / الباقات
                        </div>
                    </div>
                </section>

                <section className="bg-white py-6 my-4">
                    <div className="container mx-auto px-8">
                        <div className="flex items-center justify-between">
                            <div className="w-[100%] text-right flex flex-col justify-center pr-4">
                                <h2 className="text-[25px] font-[IBM_Plex_Sans_Arabic] text-[rgba(0,0,0,1)] font-[IBM_Plex_Sans_Arabic] mb-4">
                                    الباقات
                                </h2>
                                <p className="text-[17px] text-[rgba(0,0,0,0.8)] font-[IBM_Plex_Sans_Arabic] mb-4 leading-relaxed">
                                    استفد من مجموعة متنوعة من المزايا حسب احتياجك
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white py-6 my-4">
                    <div className="container mx-auto px-8">
                        <div className={`flex justify-between ${isMobile? "flex-col": "flex-row"} gap-6`}>
                            {/* Card 1 */}
                            <div
                                className={`${isMobile? "w-full" : "w-[33%]"} p-6 rounded-[40px] text-right font-[IBM_Plex_Sans_Arabic]`}
                                style={{
                                    border: '2px solid rgba(238, 238, 238, 1)',
                                    background: 'rgba(249, 249, 250, 1)',
                                }}
                            >
                                <h3 className="text-[26px]  font-[IBM_Plex_Sans_Arabic] text-[rgba(0,0,0,1)] mb-2 text-center">
                                    الباقة المؤسسية
                                </h3>
                                <p className="text-[16px] font-[IBM_Plex_Sans_Arabic] text-[rgba(0,0,0,0.8)] mb-4 text-center">
                                    الباقة المثالية للجهات الحكومية، المراكز البحثية<br/> والمؤسسات التي تعتمد على البيانات
                                </p>
                                <p className="text-[18px]   font-[IBM_Plex_Sans_Arabic] text-[rgba(17, 17, 17, 0.8)] mb-4 text-center">
                                    شهريا
                                </p>
                                <p className="text-[50px]  font-[IBM_Plex_Sans_Arabic]  text-[rgba(0,0,0,1)] mb-4 text-center">
                                    <img src={black_icon} className='mx-2' style={{display: 'inline'}}></img>39<span className='text-[16px]'>.99</span>
                                </p>
                                <ul className="text-[16px] text-[rgba(0,0,0,0.8)] mb-10 space-y-4">
                                    <li className="flex items-center justify-end gap-2 font-[IBM_Plex_Sans_Arabic]">
                                        <span> Pro كل ميزات باقة </span>
                                        <svg className="w-5 h-5 text-[rgba(0,0,0,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-end gap-2 font-[IBM_Plex_Sans_Arabic]">
                                        <span>لوحة تحكم متعددة المستخدمين  </span>
                                        <svg className="w-5 h-5 text-[rgba(0,0,0,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-end gap-2 font-[IBM_Plex_Sans_Arabic]">
                                        <span>  إدارة حسابات الموظفين</span>
                                        <svg className="w-5 h-5 text-[rgba(0,0,0,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-end gap-2 font-[IBM_Plex_Sans_Arabic]">
                                        <span>    تقارير مخصصة حسب القطاع</span>
                                        <svg className="w-5 h-5 text-[rgba(0,0,0,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-end gap-2 font-[IBM_Plex_Sans_Arabic]">
                                        <span> دعم فني وخدمة عملاء مخصصة</span>
                                        <svg className="w-5 h-5 text-[rgba(0,0,0,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </li>
                                </ul>
                                <button className="w-full bg-[rgba(0,65,54,1)] text-white py-2 rounded-[15px] text-[16px] font-[IBM_Plex_Sans_Arabic]">
                                    اختر الباقة
                                </button>
                            </div>

                            {/* Card 2 */}
                            <div
                                className={`${isMobile? "w-full" : "w-[33%]"} p-6 rounded-[40px] text-right font-[IBM_Plex_Sans_Arabic]`}
                                style={{
                                    border: '2px solid rgba(238, 238, 238, 1)',
                                    background: 'rgba(0, 65, 54, 1)',
                                }}
                            >
                                <h3 className="text-[26px]  font-[IBM_Plex_Sans_Arabic] text-white mb-2 text-center">
                                    الباقة الاحترافية
                                </h3>
                                <p className="text-[16px]  font-[IBM_Plex_Sans_Arabic] text-[rgba(255,255,255,0.8)] mb-4 text-center">
                                    للمهنيين، الباحثين، وصناع القرار الباحثين عن محتوى<br/> عميق وتحليلات متقدمة
                                </p>
                                <p className="text-[18px]  font-[IBM_Plex_Sans_Arabic] text-[rgba(255,255,255,0.8)] mb-4 text-center">
                                    شهريا
                                </p>

                                <p className="text-[50px]  font-[IBM_Plex_Sans_Arabic] text-white mb-4 text-center">
                                    <img src={SR} className='mx-2' style={{display: 'inline'}}></img>99<span className='text-[16px]'>.99</span>
                                </p>
                                <ul className="text-[16px]  font-[IBM_Plex_Sans_Arabic]   text-[rgba(255,255,255,0.8)] mb-10 space-y-4">
                                    <li className="flex items-center justify-end gap-2">
                                        <span>تحميل غير محدود للتقارير</span>
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-end gap-2 text-[16px]  font-[IBM_Plex_Sans_Arabic]">
                                        <span>الوصول إلى التقارير الحصرية  </span>
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-end gap-2 text-[16px]  font-[IBM_Plex_Sans_Arabic]">
                                        <span> أدوات تصفية وبحث متقدمة</span>
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-end gap-2 text-[16px]  font-[IBM_Plex_Sans_Arabic]">
                                        <span> توصيات مخصصة حسب اهتماماتك</span>
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-end gap-2 text-[16px]  font-[IBM_Plex_Sans_Arabic]">
                                        <span>    دعم مباشر عبر الشات</span>
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </li>
                                </ul>
                                <button className="w-full bg-white text-[rgba(0,65,54,1)] py-2 rounded-[15px] text-[16px] font-[IBM_Plex_Sans_Arabic]">
                                    اختر الباقة
                                </button>
                            </div>

                            {/* Card 3 */}
                            <div
                                className={`${isMobile? "w-full": "w-[33%]"} p-6 rounded-[40px] text-right font-[IBM_Plex_Sans_Arabic]`}
                                style={{
                                    border: '2px solid rgba(238, 238, 238, 1)',
                                    background: 'rgba(249, 249, 250, 1)',
                                }}
                            >
                                <h3 className="text-[26px]  font-[IBM_Plex_Sans_Arabic] text-[rgba(0,0,0,1)] mb-2 text-center">
                                    الباقة الأساسية
                                </h3>
                                <p className="text-[16px]  font-[IBM_Plex_Sans_Arabic]text-[rgba(0,0,0,0.8)] mb-4 text-center">
                                    للمستخدمين الذين يحتاجون إلى محتوى معرفي<br/> بشكل دوري
                                </p>
                                <p className="text-[18px]  font-[IBM_Plex_Sans_Arabic] text-[rgba(0,0,0,0.8)] mb-4 text-center">
                                    شهريا
                                </p>
                                <p className="text-[50px]  font-[IBM_Plex_Sans_Arabic] text-[rgba(0,0,0,1)] mb-4 text-center item-center">
                                    <img src={black_icon} className='mx-2' style={{display: 'inline'}}></img>39<span className='text-[16px]'>.99</span>
                                </p>
                                <ul className="text-[18px]  font-[IBM_Plex_Sans_Arabic]  text-[rgba(0,0,0,0.8)] mb-10  space-y-4">
                                    <li className="flex items-center justify-end gap-2">
                                        <span>  تصفح وتحميل حتى 5 تقارير شهريًا</span>
                                        <svg className="w-5 h-5 text-[rgba(0,0,0,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-end gap-2 text-[16px]  font-[IBM_Plex_Sans_Arabic]">
                                        <span>  الوصول إلى الأدلة المعرفية </span>
                                        <svg className="w-5 h-5 text-[rgba(0,0,0,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-end gap-2 text-[16px]  font-[IBM_Plex_Sans_Arabic]">
                                        <span> إضافة تقارير إلى المفضلة </span>
                                        <svg className="w-5 h-5 text-[rgba(0,0,0,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-end gap-2 text-[16px]  font-[IBM_Plex_Sans_Arabic]">
                                        <span> إشعارات بالتقارير الجديدة  </span>
                                        <svg className="w-5 h-5 text-[rgba(0,0,0,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-end gap-2 text-[16px]  font-[IBM_Plex_Sans_Arabic]">
                                        <span>   دعم عبر البريد الإلكتروني  </span>
                                        <svg className="w-5 h-5 text-[rgba(0,0,0,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </li>

                                </ul>
                                <button className="w-full bg-[rgba(0,65,54,1)] text-white py-2 rounded-[15px] text-[16px]">
                                    اختر الباقة
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
            <Footer/>
        </>
    );
};

export default PackagesPage;