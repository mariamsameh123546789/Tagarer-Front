import React, { useState } from 'react';

interface FormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md overflow-hidden">
        {/* Status bar */}
        <div className="px-5 pt-4 flex justify-between items-center text-sm">
          <div>9:27</div>
          <div className="flex space-x-1">
            <div>•••</div> {/* Signal dots */}
            <div>📶</div> {/* WiFi */}
            <div>🔋</div> {/* Battery */}
          </div>
        </div>

        {/* Header with logo */}
        <div className="px-6 pt-6 pb-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-right text-gray-800">تقارير</div>
          <div className="flex">
            {/* Logo dots - 8 colored dots in circular pattern */}
            <svg width="24" height="24" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="2" fill="#4CAF50" />
              <circle cx="16" cy="10" r="2" fill="#2196F3" />
              <circle cx="18" cy="14" r="2" fill="#9C27B0" />
              <circle cx="16" cy="18" r="2" fill="#F44336" />
              <circle cx="12" cy="20" r="2" fill="#FF9800" />
              <circle cx="8" cy="18" r="2" fill="#FFEB3B" />
              <circle cx="6" cy="14" r="2" fill="#03A9F4" />
              <circle cx="8" cy="10" r="2" fill="#8BC34A" />
            </svg>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="px-6 pt-2 pb-6">
          {/* Main heading */}
          <h1 className="text-xl font-bold mb-2 text-right">إنشاء حساب</h1>
          <p className="text-sm text-gray-600 mb-6 text-right">قم بإنشاء حساب جديد للاستفادة من خدمات المنصة بكل سهولة.</p>

          {/* Full Name field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2 text-right">
              الاسم الكامل
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-right"
              placeholder="أدخل الاسم الكامل هنا"
            />
          </div>

          {/* Email field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2 text-right">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-right"
              placeholder="أدخل البريد الإلكتروني هنا"
            />
          </div>

          {/* Password field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2 text-right">
              كلمة المرور
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg text-right"
                placeholder="أدخل كلمة المرور هنا"
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
          </div>

          {/* Confirm Password field */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2 text-right">
              تأكيد كلمة المرور
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg text-right"
                placeholder="أدخل كلمة المرور هنا"
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
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-green-800 text-white py-3 rounded-lg font-medium hover:bg-green-900 transition duration-200"
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
            className="w-full flex justify-center items-center border border-gray-300 py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition duration-200"
          >
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
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
            تسجيل عن طريق Google
          </button>

          {/* Login link */}
          <div className="text-center mt-6">
            <span className="text-gray-600 text-sm">لديك حساب؟</span>{' '}
            <a href="#" className="text-green-800 text-sm font-medium">
              إنشاء حساب
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;