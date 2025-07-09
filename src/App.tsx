import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// import {configStore} from './Store/store'; // Ensure you have a store file exporting the Redux store
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import ArabicLandingPage from "./Pages/Home";
import AboutPage from "./Pages/About/index";
import BlogPage from "./Pages/Blog";
import PackagesPage from "./Pages/packages";
import BlogDetails from "./Pages/BlogDetails";
import DataPolicyPage from "./Pages/DataPolicyPage";
import TermsPage from "./Pages/Terms";
import ReportPage from "./Pages/reports";


const App: React.FC = () => {
  return (

    <Routes>
      <Route path="/" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/home" element={<ArabicLandingPage />} />
      <Route path="/report" element={<ReportPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/packages" element={<PackagesPage />} />
      <Route path="/blog_details" element={<BlogDetails />} />
      <Route path="/priv_and_policy" element={<DataPolicyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="*" element={<>
        <h1>This is error</h1>
      </>} />
    </Routes>

  );
};

export default App;