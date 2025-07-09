import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import logo from '../../assets/image.png';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import linkedin from "../../assets/insta.svg";


const Footer = () => {
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
    <footer className="bg-[#004136] text-white py-12">
      <div className="container mx-auto px-6">
      <div className={`flex ${isMobile ? "flex-col items-end justify-start" : "flex-row-reverse justify-between"} `}>
          <div className={`w-full ${isMobile ? "mb-8" : "md:w-1/3 mb-0"} text-right order-1 md:order-4 pl-8`}>
            <div className="flex justify-end mb-6">
              <img 
                src={logo} 
                alt="تقارير" 
                className="h-8 w-28 brightness-0 invert"
              />
            </div>
            <p className="text-right leading-relaxed text-[18px] mb-6">
              تقارير هي منصة تجمع التقارير والدراسات الرسمية في السعودية،
              مما يتيح للمستخدمين البحث، الاطلاع، وتحميلها بسهولة من
              مصادر موثوقة.
            </p>
            <div className="flex justify-end gap-2">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <div className="w-[90%] h-8 flex items-center justify-center rounded-md">
                  <img src={linkedin} style={{backgroundColor: "#00000000"}} width={38} height={38} alt="" />
                </div>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <div className="bg-white w-8 h-8 flex items-center justify-center rounded-md">
                  <FaXTwitter size={18} className="text-[#004136]" />
                </div>
              </a>
            </div>
          </div>

          {/* Platform links */}
          <div className="w-1/2 md:w-1/4 text-right md:mb-0 order-2 md:order-3">
            <h3 className="text-xl font-bold mb-4 text-right">روابط السريعة</h3>
            <ul className="space-y-2 text-base text-right">
              <li>
                <Link to="/home" className="hover:underline">الرئيسية</Link>
              </li>
              <li>
                <Link to="/home" className="hover:underline">التقارير و الدراسات</Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">الأدلة المعرفية</Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">من نحن</Link>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div className="w-full md:w-1/4 text-right md:mb-0 order-3 md:order-2">
            <ul className={`space-y-2 text-base ${isMobile ? "pt-4 pb-4" : "pt-10"} text-right`}>
              <li>
                <Link to="/blog" className="hover:underline">المدونة</Link>
              </li>
              <li>
                <a href="/" className="hover:underline">الجهات الحكومية</a>
              </li>
              <li>
                <Link to="/priv_and_policy" className="hover:underline">سياسة الخصوصية</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:underline">الشروط و الأحكام</Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className={`${isMobile? "w-full": "w-1/2"} md:w-1/4 text-right mb-8 md:mb-0 order-4 md:order-1 ml-8 mt-8`}>
            <h3 className={`text-xl font-bold mb-4 ${isMobile? 'text-right' : 'text-left'}`}>بيانات التواصل</h3>
            <div className={`space-y-1 text-left ${isMobile? 'text-right' : 'text-left'}`}>
              {isMobile && (
                <div>
                  <p className="text-md">TAGARER LTD Registered in England and Wales Company Number: 16173662 Registered Office : Office 11244 182-184 High Street North East Ham, London E6 2JA</p>
                </div>
              )}
              {!isMobile && (
                <div>
                  <p className="font-bold text-base">TAGARER LTD</p>
                  <p className="text-sm">Registered in England and Wales</p>
                  <p className="text-sm">Company Number: 16173662</p>
                  <p className="text-sm">Registered Office :</p>
                  <p className="text-sm">Office 11244</p>
                  <p className="text-sm">182-184 High Street North</p>
                  <p className="text-sm">East Ham, London</p>
                  <p className="text-sm">E6 2JA</p> 
                </div>
              )}
              
              <div className={`flex items-center ${isMobile? "justify-end" : "justify-start"} mt-4`}>
                <a href="mailto:info@tagarer.com" className={`text-sm hover:underline flex items-center ${isMobile? "flex-row-reverse" : ""}`}>
                  <span className="flex items-center justify-center bg-white rounded-full w-7 h-7">
                    <MdEmail size={16} className="text-[#004136]" />
                  </span>
                  <span className="mx-2">info@tagarer.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10 text-center border-t border-[#ffffff33] pt-6">
          <p className="text-sm">جميع الحقوق محفوظة لمنصة تقارير © 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;