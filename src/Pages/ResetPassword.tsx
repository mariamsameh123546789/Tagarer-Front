import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
// import { Link } from "react-router-dom";
// import { FileText, Building2, FileBarChart2 } from "lucide-react";
import logo from "../assets/image.png";
import image from "../../src/assets/image.png";
import chart from "../../src/assets/chart.png";
import city from "../../src/assets/city.svg";

type FormInputs = {
  newPassword: string;
  confirmPassword: string;
};

const ResetPassword: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormInputs>();
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

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
      <div className="min-h-screen bg-white flex justify-center items-center p-4">
        <div className="w-full max-w-md overflow-hidden">
          {/* Header with logo */}
          <div className="px-6 pt-4 pb-4 flex justify-between items-end w-full rtl">
            <img src={image} width={117} height={49} alt="" />
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="px-6 pt-2 pb-6">
            {/* Main heading */}
            <h1 className="text-xl font-bold mb-2 mt-4 text-right">اعادة تعيين كلمة المرور</h1>
            <p className="font-[400] text-[15px] text-[#00000099] mb-14 text-right rtl">قم بإدخال كلمة مرور جديدة لحسابك لضمان استمرار الوصول الآمن إلى المنصة.</p>

            {/* New Password field */}
            <div className="mb-4 mt-26">
              <label className="block text-gray-700 text-sm font-medium mb-3 text-right font-IBM_Plex_Sans_Arabic">
              كلمة المرور الجديدة
              </label>
              <div className="relative">
                <input
                  type={showNewPassword ? "text" : "password"}
                  className="w-full p-3 rounded-[15px] text-right bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#004136] font-IBM_Plex_Sans_Arabic"
                  placeholder="أدخل كلمة المرور هنا"
                  {...register("newPassword", {
                    required: "كلمة المرور مطلوبة",
                    minLength: {
                      value: 8,
                      message: "كلمة المرور يجب أن تكون 8 أحرف على الأقل",
                    },
                  })}
                />
                <button 
                  type="button"
                  className="absolute inset-y-0 left-2 flex items-center justify-center" 
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {showNewPassword ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    )}
                  </svg>
                </button>
                {errors.newPassword && (
                  <p className="text-red-500 text-sm text-right mt-1">
                    {errors.newPassword.message}
                  </p>
                )}
              </div>
            </div>

            {/* Confirm Password field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mt-6 text-right font-IBM_Plex_Sans_Arabic">
              تأكيد كلمة المرور
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="w-full p-3 rounded-[15px] text-right bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#004136] font-IBM_Plex_Sans_Arabic"
                  placeholder="أدخل كلمة المرور هنا"
                  {...register("confirmPassword", {
                    required: "تأكيد كلمة المرور مطلوب",
                    validate: (value) => 
                      value === watch("newPassword") || "كلمة المرور غير متطابقة"
                  })}
                />
                <button 
                  type="button"
                  className="absolute inset-y-0 left-2 flex items-center justify-center" 
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {showConfirmPassword ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    )}
                  </svg>
                </button>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm text-right mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-[#004136] text-white mt-10 py-3 rounded-lg font-medium hover:bg-green-900 transition duration-200"
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
          منصة رقمية متكاملة تتيح لك الوصول إلى أحدث التقارير، الدراسات، والأدلة المعرفية الصادرة عن الجهات الحكومية السعودية، بكل سهولة وموثوقية، لدعم قراراتك وبناء معرفتك على مصادر رسمية.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex flex-col pr-12 items-end  text-right bg-white">
        <div className="relative w-8/10 z-10 justify-end">
          <div className="mb-8">
            <img src={logo} alt="Logo" className="w-32 h-auto mt-12 ml-auto" />
            <h1 className="text-3xl font-bold mt-20 text-[#004136] text-[25 px] font-IBM_Plex_Sans_Arabic">
            اعادة تعيين كلمة المرور
            </h1>
            <p className="text-sm mt-2 text-gray-600 font-IBM_Plex_Sans_Arabic text-[15px]">
            قم بإدخال كلمة مرور جديدة لحسابك لضمان استمرار الوصول الآمن إلى المنصة
            </p>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* New Password field */}
              <div className="mb-4 mt-16">
                <label className="block text-gray-700 text-sm font-medium mb-3 text-right font-IBM_Plex_Sans_Arabic">
                كلمة المرور الجديدة
                </label>
                <div className="relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    className="w-full p-3 rounded-[15px] text-right bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#004136] font-IBM_Plex_Sans_Arabic"
                    placeholder="أدخل كلمة المرور هنا"
                    {...register("newPassword", {
                      required: "كلمة المرور مطلوبة",
                      minLength: {
                        value: 8,
                        message: "كلمة المرور يجب أن تكون 8 أحرف على الأقل",
                      },
                    })}
                  />
                  <button 
                    type="button"
                    className="absolute inset-y-0 left-2 flex items-center  justify-center" 
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {showNewPassword ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      )}
                    </svg>
                  </button>
                  {errors.newPassword && (
                    <p className="text-red-500 text-sm text-right mt-1">
                      {errors.newPassword.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Confirm Password field */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium text-right font-IBM_Plex_Sans_Arabic">
                تأكيد كلمة المرور
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="w-full p-3 rounded-[15px] text-right bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#004136] font-IBM_Plex_Sans_Arabic"
                    placeholder="أدخل كلمة المرور هنا"
                    {...register("confirmPassword", {
                      required: "تأكيد كلمة المرور مطلوب",
                      validate: (value) => 
                        value === watch("newPassword") || "كلمة المرور غير متطابقة"
                    })}
                  />
                  <button 
                    type="button"
                    className="absolute inset-y-0 left-2 flex items-center justify-center" 
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {showConfirmPassword ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      )}
                    </svg>
                  </button>
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm text-right mt-1">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full text-white text-center h-10 mt-44 rounded-[15px] bg-[#004136] hover:bg-[#003028] transition-colors"
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

export default ResetPassword;