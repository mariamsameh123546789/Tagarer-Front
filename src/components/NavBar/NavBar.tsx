import image from '../../assets/image.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";


const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const toggleMenu = () => {
     setIsMenuOpen(!isMenuOpen);
   };

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
      {/* Navbar Section */}
      <div>
        {isMobile && (
           <nav className="bg-white p-4 shadow-sm fixed top-0 left-0 right-0 z-50">
           <div className="container mx-auto px-4 lg:px-8">
             <div className="flex justify-between items-center">
               {/* Left side: Logo (becomes right in RTL) */}
               <div className="flex items-center order-3 md:order-3">
                  <Link to="/home">
                    <img src={image} alt="Tagger Logo" className="h-8 md:h-10" width={154} height={65}/>
                  </Link>
               </div>
   
               {/* Center: Links - Hidden on mobile, visible on desktop */}
               <div className="hidden md:flex gap-4 xl:gap-6 items-center mx-auto order-2">
                 <a href="packages" className="text-black font-[IBM_Plex_Sans_Arabic] text-base xl:text-lg">
                   الباقات
                 </a>
                 <a href="about" className="text-black font-[IBM_Plex_Sans_Arabic] text-base xl:text-lg">
                   من نحن
                 </a>
                 <a href="#" className="text-black font-[IBM_Plex_Sans_Arabic] text-base xl:text-lg">
                   الأدلة المعرفية
                 </a>
                 <a href="report" className="text-black font-[IBM_Plex_Sans_Arabic] text-base xl:text-lg">
                   التقارير والدراسات
                 </a>
                 <a href="home" className="text-black font-[IBM_Plex_Sans_Arabic] text-base xl:text-lg">
                   الرئيسية
                 </a>
               </div>
   
               {/* Right side: Buttons (becomes left in RTL) */}
               <div className="hidden md:flex gap-3 order-1">
                 <Link
                   to="/"
                   className="bg-[#004136] text-white px-4 md:px-6 py-2 h-14 rounded-xl text-sm md:text-base font-[IBM_Plex_Sans_Arabic]"
                 >
                   انشاء حساب
                 </Link>
                 <Link
                   to="/login"
                   className="bg-[#004136] text-white px-4 md:px-6 py-2 h-14 rounded-xl text-sm md:text-base font-[IBM_Plex_Sans_Arabic]"
                 >
                   تسجيل الدخول
                 </Link>
               </div>
   
               {/* Mobile menu button */}
               <div className="md:hidden flex order-1">
                 <button 
                   onClick={toggleMenu} 
                   className="text-[#004136] focus:outline-none"
                 >
                   {isMenuOpen ? (
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                     </svg>
                   ) : (
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                     </svg>
                   )}
                 </button>
               </div>
             </div>
           </div>
   
           {/* Mobile menu - conditionally rendered */}
           {isMenuOpen && (
             <div className="md:hidden mt-4 px-4 pb-4">
               <div className="flex flex-col space-y-4">
                 <Link to="/home" className='text-black font-[IBM_Plex_Sans_Arabic] text-lg text-right'>
                  الرئيسية     
                 </Link>
                 <Link to="/report" className='text-black font-[IBM_Plex_Sans_Arabic] text-lg text-right'>
                  التقارير والدراسات      
                 </Link>
                 <Link to="#" className='text-black font-[IBM_Plex_Sans_Arabic] text-lg text-right'>
                  الأدلة المعرفية       
                 </Link>
                 <Link to="/about" className='text-black font-[IBM_Plex_Sans_Arabic] text-lg text-right'>
                  من نحن      
                 </Link>
                 <Link to="/packages" className='text-black font-[IBM_Plex_Sans_Arabic] text-lg text-right'>
                  الباقات     
                 </Link>
                 
                 {/* Mobile buttons */}
                 <div className="flex gap-3 mt-2 justify-end">
                   <Link
                     to="/"
                     className="bg-[#004136] text-white px-4 py-2 rounded-xl text-sm font-[IBM_Plex_Sans_Arabic]"
                   >
                     انشاء حساب
                   </Link>
                   <Link
                     to="/login"
                     className="bg-[#004136] text-white px-4 py-2 rounded-xl text-sm font-[IBM_Plex_Sans_Arabic]"
                   >
                     تسجيل الدخول
                   </Link>
                 </div>
               </div>
             </div>
           )}
         </nav>
        )}
      </div>
      {!isMobile && (
      <nav className="bg-white p-4 fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center">
          {/* Right side: Buttons */}
          <div className="flex gap-3">
            <Link
              to="/"
              className="bg-[rgba(0,65,54,1)] text-white px-6 py-2 rounded-[15px] text-[16px] font-[IBM_Plex_Sans_Arabic]"
            >
              انشاء حساب
            </Link>
            <Link
              to="/login"
              className="bg-[rgba(0,65,54,0.1)] text-[rgba(0,65,54,1)] px-6 py-2 rounded-[15px] text-[16px] font-[IBM_Plex_Sans_Arabic]"
            >
              تسجيل الدخول
            </Link>
          </div>
          {/* Center: Links */}
          <div className="lg:flex gap-6 items-center mx-auto">
            <a href="packages" className="text-[rgba(0,0,0,1)] font-[IBM_Plex_Sans_Arabic] text-[18px]">
              الباقات
            </a>
            <a href="about" className="text-[rgba(0,0,0,1)] font-[IBM_Plex_Sans_Arabic] text-[18px]">
              من نحن
            </a>
            <a href="#" className="text-[rgba(0,0,0,1)] font-[IBM_Plex_Sans_Arabic] text-[18px]">
              الأدلة المعرفية
            </a>
            <a href="report" className="text-[rgba(0,0,0,1)] font-[IBM_Plex_Sans_Arabic] text-[18px]">
              التقارير والدراسات
            </a>
            <a href="home" className="text-[rgba(0,0,0,1)] font-[IBM_Plex_Sans_Arabic] text-[18px]">
              الرئيسية
            </a>
          </div>

          {/* Left side: Logo */}
          <div className="flex items-center">
            <Link to="/home">
              <img src={image} alt="Tagger Logo" className="h-8 md:h-10" width={154} height={65}/>
            </Link>
          </div>
        </div>
      </div>
    </nav>
      )}

      {/* Add a spacer to prevent content from being hidden under the fixed navbar */}
      <div className={`${isMobile ? 'h-20' : 'h-24'}`}></div>
    </>
  );
};

export default Navbar;