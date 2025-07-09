import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
// import { FileText, Building2, FileBarChart2 } from "lucide-react";
import logo from "../assets/image.png";
import img from "../../src/assets/image.png"
import chart from "../../src/assets/chart.svg"
import city from "../../src/assets/city.svg"

type FormInputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Registration: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormInputs>();
  const password = watch("password");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    navigate("/login");
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
      <div className="min-h-screen bg-white flex justify-center p-4">
        <div className="w-full max-w-md overflow-hidden">
          {/* Header with logo */}
          <div className="px-2 pt-2 pb-4 flex justify-between items-end w-full rtl">
            <img src={img} width={117} height={49} alt="" />

          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="px-2 pt-2 pb-6">
            {/* Main heading */}
            <h1 className="text-[25px] font-bold text-right">إنشاء حساب</h1>
            <p className="text-sm text-gray-600 text-right rtl">قم بإنشاء حساب جديد للاستفادة من خدمات المنصة بكل</p>
            <p className="text-sm text-gray-600 mb-10 text-right rtl">سهولة.</p>

            {/* Full Name field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2 text-right">
                الاسم الكامل
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-[15px] text-right bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#004136]"
                placeholder="أدخل الاسم الكامل هنا"
                {...register("name", {
                  required: "الاسم مطلوب",
                })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm text-right mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2 text-right">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                className="w-full p-3 rounded-[15px] text-right bg-[#F5F5F5]  focus:outline-none focus:ring-2 focus:ring-[#004136]"
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

            {/* Password field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2 text-right">
                كلمة المرور
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full p-3 rounded-[15px] text-right bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#004136]"
                  placeholder="أدخل كلمة المرور هنا"
                  {...register("password", {
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
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {showPassword ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    )}
                  </svg>
                </button>
                {errors.password && (
                  <p className="text-red-500 text-sm text-right mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            {/* Confirm Password field */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2 text-right">
                تأكيد كلمة المرور
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="w-full p-3 rounded-[15px] text-right bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#004136]"
                  placeholder="أدخل كلمة المرور هنا"
                  {...register("confirmPassword", {
                    required: "تأكيد كلمة المرور مطلوب",
                    validate: (value) =>
                      value === password || "كلمة المرور غير متطابقة",
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
              className="w-full bg-[#004136] text-white py-3 mt-5 rounded-lg font-medium hover:bg-green-900 transition duration-200"
            >
              إنشاء حساب
            </button>

            {/* Separator */}
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="px-3 text-sm text-gray-500">أو</span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>

            {/* Google Sign-in */}
            <button
              type="button"
              className="w-full flex bg-[#F7F8F8] justify-center items-center py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition duration-200 rtl"
            >
              تسجيل عن طريق Google
              <svg className="h-5 w-5 ml-2" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
            </button>

            {/* Login link */}
            <div className="text-center mt-6">
              <span className="text-gray-600 text-sm">لديك حساب؟</span>{' '}
              <Link to="/login" className="text-green-800 text-sm font-medium">
                الدخول الى الحساب
              </Link>
            </div>
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
              className="flex flex-row-reverse items-center bg-white text-[#004136] p-4 shadow-md rounded-[20px] mb-[2%]"
              style={{ width: "70%", height: "123px" }}
            >
              <div className="p-4 bg-green-100 w-[95px] h-[85px] flex items-center bg-[#e5eceb] justify-center rounded-[20%]">
                <img src={chart} alt="" />
              </div>
              <div className="mr-4 text-right">
                <h3 className="text-lg font-bold">الدراسات الاقتصادية</h3>
                <p className="text-[16px]">
                  تقارير تسلط الضوء على مؤشرات الاقتصاد السعودي<br /> .وتحلل توجهات السوق والفرص الاستثمارية
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
                <p className="text-[16px] rtl">
                  معلومات وتحليلات عن أداء الشركات السعودية، تشمل البيانات المالية، الإنجازات، والخطط المستقبلية.
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
                  إصدارات رسمية من الجهات الحكومية تسلط الضوء<br /> .على المبادرات، السياسات، والنتائج السنوية
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
      <div className="w-1/2 flex flex-col items-center justify-center text-right bg-white">
        <div className="relative w-8/10 z-10">
          <div className="mb-[2%]">
            <img src={logo} alt="Logo" className="w-32 my-[4%] h-auto ml-auto" />
            <h1 className="text-3xl font-bold mb-2 text-[#004136]">
              إنشاء حساب
            </h1>
            <p className="text-sm mb-14 text-gray-600 rtl">
            قم بإنشاء حساب جديد للاستفادة من خدمات المنصة بكل سهولة.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-[2%]">
              <div>
                <label className="block text-gray-700 text-md font-medium mb-2 text-right">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  placeholder="أدخل الاسم  هنا"
                  className={`w-full p-3 rounded-[15px] text-right bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#004136] ${errors.name ? "border-red-500" : ""
                    }`}
                  {...register("name", {
                    required: "الاسم مطلوب",
                  })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm text-right mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 text-md font-medium mb-2 text-right">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  placeholder="أدخل البريد الإلكتروني هنا"
                  className={`w-full p-3 rounded-[15px] text-right text-md bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#004136] ${errors.email ? "border-red-500" : ""
                    }`}
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
              <div className="flex justify-between rtl">
                <div className="w-[48%]">
                  <label className="block text-gray-700 text-md font-medium mb-2 text-right">
                    كلمة المرور
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full p-3 bg-[#F5F5F5] rounded-[15px] text-right focus:outline-none focus:ring-2 focus:ring-[#004136]"
                      placeholder="أدخل كلمة المرور هنا"
                      {...register("password", {
                        required: "كلمة المرور مطلوبة",
                        minLength: {
                          value: 8,
                          message: "كلمة المرور يجب أن تكون 8 أحرف على الأقل",
                        },
                      })}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 left-0 px-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {showPassword ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        )}
                      </svg>
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-sm text-right mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div className="w-[48%]">
                  <label className="block text-gray-700 text-md font-medium mb-2 text-right">
                    تأكيد كلمه المرور
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="أدخل تأكيد كلمة المرور"
                      className={`w-full p-3 rounded-[15px] text-right bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#004136] ${errors.confirmPassword ? "border-red-500" : ""
                        }`}
                      {...register("confirmPassword", {
                        required: "تأكيد كلمة المرور مطلوب",
                        validate: (value) =>
                          value === password || "كلمة المرور غير متطابقة",
                      })}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 left-0 px-3 flex items-center"
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
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm text-right mt-1">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white text-md p-3 mt-10 rounded-[15px] bg-[#004136] hover:bg-[#003028] transition-colors"
              >
                إنشاء الحساب
              </button>
            </form>
            <div className="text-right mt-4">
              <div className="flex items-center my-4 text-gray-600 text-sm">
                <hr className="flex-grow border-t border-gray-300" />
                <span className="mx-2">أو</span>
                <hr className="flex-grow border-t border-gray-300" />
              </div>
              <button
                className="mt-2 flex items-center justify-center w-full p-3 rounded-[15px] bg-[#B4B7BD1A] text-[#004136] hover:bg-[#B4B7BD33] transition-colors"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1.04.69-2.37 1.1-3.71 1.1-2.85 0-5.26-1.92-6.12-4.5H2.18v2.84C4 20.36 7.68 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.88 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.85-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.68 1 4 3.64 2.18 7.07l3.66 2.84c.87-2.58 3.27-4.53 6.16-4.53z"
                  />
                </svg>
                تسجيل دخول عبر Google
              </button>
              <p className="text-sm text-gray-600 mt-4 text-center">
                 لديك حساب؟{" "}
                <Link to="/login" className="text-[#004136] font-[600] text-[#004136] hover:underline font-IBM_Plex_Sans_Arabic">
                  تسجيل دخول
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;