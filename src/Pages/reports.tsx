import React from 'react'
import { useState, useEffect } from "react";
import Footer from '../components/Footer/Footer';
import Navbar from '../components/NavBar/NavBar';
import stars from '../assets/stars.svg';

const ReportItem = ({ year = '', expanded = false, title = '', source= '', type= '', size = '' }) => {
    const [isExpanded, setIsExpanded] = useState(expanded);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="border-b border-gray-100">
            {/* Main report row */}
            <div className="grid grid-cols-12 px-6 py-4 bg-white items-center">
                {/* Report Title - rightmost column */}
                <div className="col-span-4 text-right">
                    <h3 className="font-medium text-gray-800 text-sm">{title}</h3>
                </div>

                {/* Organization/Source */}
                <div className="col-span-2 text-right text-sm text-gray-700">{source}</div>

                {/* Year */}
                <div className="col-span-1 text-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs ${
                        year === "2025" ? "bg-teal-100 text-teal-600" :
                            "bg-blue-100 text-blue-600"
                        }`}>
                        {year}
                    </span>
                </div>

                {/* Type */}
                <div className="col-span-1 text-right text-sm text-gray-700">{type}</div>

                {/* Size */}
                <div className="col-span-1 text-center text-sm text-gray-700">{size}</div>

                {/* Action buttons */}
                <div className="col-span-3 flex justify-start gap-2">
                    {/* Download button */}
                    <button className="flex items-center justify-center gap-1 rounded px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200">
                        
                        <span className="text-sm">تحميل</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    </button>

                    {/* Read button */}
                    <button className="flex items-center justify-center gap-1 rounded-lg px-3 py-2 text-sm border border-teal-900 bg-white text-teal-900 hover:bg-teal-50">
                      
                        <span>قراءة</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </button>

                    {/* Summarize button */}
                    <button className="flex items-center justify-center gap-1 rounded px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200">
                       
                        <span className="text-sm">تلخيص</span>
                        <img src={stars} width={17} height={17} alt="" />
                    </button>

                    {/* Expand button */}
                    <button
                        className="flex items-center justify-center rounded w-8 h-8 text-sm bg-white hover:bg-gray-100 text-gray-600 border border-gray-200"
                        onClick={toggleExpand}
                    >
                        <svg
                            className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Expandable section */}
            {isExpanded && (
                <div className="bg-gray-50 px-6 py-4 border-t border-gray-100  rounded-lg m-2">
                    <div className="text-right">
                        <div className="text-xs text-gray-500 mb-1">نبذة مختصرة</div>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            يقدم تقرير "مؤشرات التنمية الاجتماعية في المملكة" نظرة شاملة على أبرز المؤشرات المرتبطة بجودة الحياة، مثل التعليم، والصحة، والإسكان، والحماية الاجتماعية. تُبرز التقرير الجهود الوطنية المبذولة لتعزيز التنمية المستدامة وتحسين مستوى معيشة الأفراد، مع تسليط الضوء على الإنجازات المحققة والتحديات المستقبلية في بناء مجتمع مزدهر.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};
const MobileReportItem = ({ year = '', expanded = false }) => {
    const [isExpanded, setIsExpanded] = useState(expanded);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="mb-4 bg-white rounded-xl shadow-sm overflow-hidden">
            {/* Top part with report details */}
            <div className="grid grid-cols-1 gap-2 p-4">
                {/* Report Title */}
                <div className="text-right">
                    <h3 className="text-sm font-medium">
                        التقرير السنوي لهيئة الاتصالات وتقنية المعلومات لعام 2021م
                    </h3>
                </div>

                {/* Organization */}
                <div className="text-right">
                    <div className="text-sm text-gray-600">هيئة الاتصالات وتقنية المعلومات</div>
                </div>

                {/* Details row */}
                <div className="flex justify-between items-center">
                    {/* Size */}
                    <div className="text-right">
                        <div className="text-xs text-gray-500">3.8MB</div>
                    </div>

                    {/* Type */}
                    <div className="text-right">
                        <div className="text-xs text-gray-500">دراسة تحليلية</div>
                    </div>

                    {/* Year */}
                    <div className="text-right">
                        <span className="inline-block px-3 py-0.5 rounded-full text-xs bg-teal-100 text-teal-600">
                            {year}
                        </span>
                    </div>
                </div>
            </div>

            {/* Action buttons */}
            <div className="flex justify-between flex-row-reverse mb-4 mx-4 items-center border-t border-gray-100 pt-3">
                {/* Expand button */}
                <button
                    className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600"
                    onClick={toggleExpand}
                >
                    <svg
                        className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {/* Summary button */}
                <button className="flex items-center justify-center bg-[#F1F2F3] gap-1 px-3 py-1.5 rounded-md text-gray-600">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-sm">تلخيص</span>
                </button>

                {/* Read button */}
                <button className="flex items-center justify-center gap-1 border border-teal-900 rounded-xl px-6 py-1.5 text-teal-900">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>قراءة</span>
                </button>

                {/* Download button */}
                <button className="flex items-center justify-center gap-1 bg-gray-100 rounded-md px-3 py-1.5 text-gray-700">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span className="text-sm">تحميل</span>
                </button>
            </div>

            {/* Expandable section */}
            {isExpanded && (
                <div className="bg-gray-50 p-4 border-t border-gray-100">
                    <div className="text-right">
                        <div className="text-sm font-medium text-gray-700 mb-2">نبذة مختصرة</div>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            يقدم تقرير "مؤشرات التنمية الاجتماعية في المملكة" نظرة شاملة على أبرز المؤشرات المرتبطة بجودة الحياة، مثل التعليم، والصحة، والإسكان، والحماية الاجتماعية.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};


const ReportPage: React.FC = () => {
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
            <div className={`p-6 ${isMobile ? "" : "px-24"} bg-gray-50 min-h-screen text-right font-sans`}>
                {/* Breadcrumb */}
                <section className="py-8 w-full">
                    <div
                        className="w-full p-3 rounded-xl shadow-sm text-right font-IBM_Plex_Sans_Arabic text-[16px]"
                        style={{
                            backgroundColor: '#00413612',
                        }}
                    >
                        الرئيسية / التقارير و الدراسات
                    </div>
                </section>

                {/* Filters */}
                <div className={`flex flex-wrap gap-4 mb-4 ${isMobile? "flex-col-reverse": "flex-row"} justify-between items-center w-full`}>
                    <select className={`border border-gray-100 bg-gray-100 rounded px-4 py-2 text-sm w-auto h-10 text-right ${isMobile? "w-full" :"" } rtl`}>
                        <option>اختر العام</option>
                    </select>
                    <select className={`border border-gray-100 bg-gray-100 rounded px-4 py-2 text-sm flex-grow  w-auto h-10 text-right ${isMobile? "w-full" :"" } rtl`}>
                        <option>اختر المصدر</option>
                    </select>
                    <select className={`border border-gray-100 bg-gray-100 end-2 rounded px-4 py-2 text-sm flex-grow  w-auto h-10 text-right ${isMobile? "w-full" :"" } rtl`}>
                        <option>نوع التقرير</option>
                    </select>
                    <div className="relative rtl w-100">
                        
                        <input type="search" id="default-search" className="block w-full h-[40px] p-4  text-sm text-gray-900 bg-[#F9F9FA] border border-[#EEEEEE] rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="أدخل كلمة البحث هنا.." required />
                        <div className="absolute inset-y-0 end-2 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                    </div>
                    
                </div>
                {/* Table */}
                <div className="bg-white shadow rounded overflow-hidden">
                    {/* Table Header */}
                    {!isMobile ? (
                        <div className="grid grid-cols-12 bg-gray-100 px-6 py-3 text-sm font-bold text-gray-600">
                            <div className="col-span-3 text-center">إجراءات</div>
                            <div className="col-span-1 text-center">الحجم</div>
                            <div className="col-span-1 text-center">النوع</div>
                            <div className="col-span-1 text-center">السنة</div>
                            <div className="col-span-2 text-right">المصدر</div>
                            <div className="col-span-4 text-right">اسم التقارير</div>
                        </div>
                    ) : null}

                    {/* Table Content */}
                    <div className="bg-white" dir="rtl">
                        {isMobile ? (
                            <div className="flex flex-col gap-4 p-4">
                                <MobileReportItem year="2023" expanded={true} />
                                <MobileReportItem year="2024" />
                                <MobileReportItem year="2022" />
                            </div>
                        ) : (
                            <div className="flex flex-col">
                                <ReportItem
                                    year="2023"
                                    expanded={true}
                                    title="التقرير السنوي لهيئة الاتصالات وتقنية المعلومات لعام 2021م"
                                    source="هيئة الاتصالات وتقنية المعلومات"
                                    type="دراسة تحليلية"
                                    size="3.8MB"
                                />
                                <ReportItem
                                    year="2025"
                                    title="التقرير السنوي لهيئة الاتصالات وتقنية المعلومات لعام 2021م"
                                    source="هيئة الاتصالات وتقنية المعلومات"
                                    type="دراسة تحليلية"
                                    size="3.8MB"
                                />
                                <ReportItem
                                    year="2022"
                                    title="التقرير السنوي لهيئة الاتصالات وتقنية المعلومات لعام 2021م"
                                    source="هيئة الاتصالات وتقنية المعلومات"
                                    type="دراسة تحليلية"
                                    size="3.8MB"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ReportPage;