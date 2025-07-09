import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
// import { Link } from "react-router-dom";
// import { FileText, Building2, FileBarChart2 } from "lucide-react";
import logo from "../assets/image.png";
import about from '../../src/assets/image.png';

import chart from "../../src/assets/Chart.png";
import city from "../../src/assets/city.svg";


type FormInputs = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
  // const [showPassword, setShowPassword] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
  };

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

  // Mobile UI
  if (isMobile) {
    return (
      <div className="min-h-screen bg-white flex justify-center items-center py-4 px-2">
        <div className="w-full max-w-md overflow-hidden">
          {/* Header with logo */}
          <div className="px-6 pt-4 pb-4 flex justify-between items-end w-full rtl">
            <img src={about} width={117} height={49} alt="" />

          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="px-6 pt-2 pb-6">
            {/* Main heading */}
            <h1 className="text-xl font-bold mb-2 mt-5 text-right">نسيت كلمة المرور</h1>
            <p className="text-sm text-[#00000099] text-[15px] mb-14 text-right rtl">أدخل بريدك الإلكتروني لاستلام رابط إعادة تعيين كلمة المرور واستعادة الوصول إلى حسابك.</p>

            {/* Email field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm mt-30 font-medium mb-2 text-right">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                className="w-full p-3 bg-[#F7F7F7] rounded-lg text-right"
                placeholder="أدخل البريد الإلكتروني هنا"
                {...register("email", {
                  required: "البريد الإلكتروني مطلوب",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "البريد الإلكتروني غير صالح",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm text-right mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            
            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-[#004136] text-white mt-37 py-3 rounded-lg font-medium hover:bg-green-900 transition duration-200"
            >
              تأكيد
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Desktop UI
  return (
    <div className="flex h-screen bg-[#F5F5F5] font-sans">
      {/* Left Section */}
      <div className="w-1/2 bg-[#004136] flex flex-col items-center justify-center text-white text-right relative">
        <div className="relative w-full h-[500px] flex items-center justify-center">
          <div className="absolute w-[70%] h-[100%] rounded-full bg-[#FFFFFF1A] shadow-lg" />
          <div className="relative flex flex-col items-center justify-center">
            <div
              className="flex flex-row-reverse items-center bg-white text-[#004136] p-4 shadow-md rounded-[20px] mb-5"
              style={{ width: "70%", height: "123px" }}
            >
              <div className="p-4 bg-green-100 w-[95px] h-[85px] flex items-center bg-[#e5eceb] justify-center rounded-[20%]">
                <img src={chart} alt="" />
              </div>
              <div className="mr-4 text-right">
                <h3 className="text-lg font-bold">الدراسات الاقتصادية</h3>
                <p className="text-[16px]">
                  تقارير تسلط الضوء على مؤشرات الاقتصاد السعودي<br/> .وتحلل توجهات السوق والفرص الاستثمارية
                </p>
              </div>
            </div>
            <div
              className="flex flex-row-reverse items-center bg-white text-[#004136] p-4 shadow-md rounded-[20px] mb-5"
              style={{ width: "85%", height: "125px" }}
            >
              <div className="p-4 bg-green-100 w-[135px] h-[105px] flex items-center bg-[#e5eceb] justify-center rounded-[20%]">
                <img src={city} alt="" />
              </div>
              <div className="mr-4 text-right">
                <h3 className="text-lg font-bold">تقارير الشركات</h3>
                <p className="text-[16px]">
                  .معلومات وتحليلات عن أداء الشركات السعودية، تشمل البيانات المالية، الإنجازات، والخطط المستقبلية
                </p>
              </div>
            </div>
            <div
              className="flex flex-row-reverse items-center bg-white text-[#004136] p-4 shadow-md rounded-[20px]"
              style={{ width: "70%", height: "123px" }}
            >
              <div className="p-4 bg-green-100 w-[95px] h-[85px] flex items-center bg-[#e5eceb] justify-center rounded-[20%]">
                <img src={city} alt="" />
              </div>
              <div className="mr-4 text-right">
                <h3 className="text-lg font-bold">تقارير حكومية</h3>
                <p className="text-[16px]">
                  إصدارات رسمية من الجهات الحكومية تسلط الضوء<br/> .على المبادرات، السياسات، والنتائج السنوية
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <h4 className="text-lg font-bold">دليلك الموثوق للمعرفة الحكومية</h4>
          <p className="text-[14px] mt-2 text-[#FFFFFFCC] px-14 ms-2 rtl">
          منصة رقمية متكاملة تتيح لك الوصول إلى أحدث التقارير، الدراسات، والأدلة المعرفية الصادرة عن الجهات الحكومية السعودية، بكل سهولة وموثوقية، لدعم قراراتك وبناء معرفتك على مصادر رسمية.          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex flex-col pr-16 items-end justify-center text-right bg-white">
        <div className="relative w-8/10 z-10 justify-end">
          <div className="mb-8">
            <img src={logo} alt="Logo" className="w-32 h-auto mb-12 mt-5 ml-auto" />
            <h1 className="text-3xl font-bold mb-5 text-[#004136] text-[25 px]font-IBM_Plex_Sans_Arabic ">
               نسيت كلمة المرور   
            </h1>
            <p className="text-sm mb-30 text-gray-600 text-[15px] font-IBM_Plex_Sans_Arabic">
            أدخل بريدك الإلكتروني لاستلام رابط إعادة تعيين كلمة المرور واستعادة الوصول إلى حسابك 
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Email field */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-3 text-right text-[20 px] font-IBM_Plex_Sans_Arabic">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  className="w-full p-3 h-14 bg-[#F5F5F5] rounded-lg text-right"
                  placeholder="أدخل البريد الإلكتروني هنا"
                  {...register("email", {
                    required: "البريد الإلكتروني مطلوب",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "البريد الإلكتروني غير صالح",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm text-right mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

            
              <button
                type="submit"
                className="w-full text-white text-center mt-6 h-10 mt-60  rounded-[15px] bg-[#004136] hover:bg-[#003028] transition-colors"
              >
                  تأكيد  
              </button>
            </form>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;