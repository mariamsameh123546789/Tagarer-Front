import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import Navbar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import about4 from '../../src/assets/about4.png';



const BlogDetails = () => {
    const articles = [
        {
            id: 1,
            title: 'هذا النص هو مثال لنص يمكن استبداله',
            description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص.',
            image: '../../src/assets/blog9.png'
        },
        {
            id: 2,
            title: 'هذا النص هو مثال لنص يمكن استبداله',
            description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص.',
            image: '../../src/assets/blog10.png'
        },
        {
            id: 3,
            title: 'هذا النص هو مثال لنص يمكن استبداله',
            description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص.',
            image: '../../src/assets/blog8.png'
        }
    ];
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
        <div className="max-w-full mx-auto bg-gray-50 min-h-screen font-sans">
            <Navbar/>
            {/* Header section with light background */}
            <section className="py-8">
                <div className="container mx-auto px-8">
                    <div
                        className="w-full p-3 bg-[#0041364D] rounded-xl shadow-sm text-right font-[IBM_Plex_Sans_Arabic] text-[16px]"
                        style={{
                            color: 'rgba(0, 0, 0, 1)',
                            backgroundColor: '#00413612',
                        }}
                    > الرئيسية / المدونة / اسم المقالة سيظهر هنا
                    </div>
                </div>
            </section>

            {/* Main content */}
            <div className={isMobile ? "mx-auto px-8 py-6" : "mx-auto px-40 py-6"}>
                {/* Top image */}
                <div className="mb-6">
                    <img
                        src={about4}
                        alt="Desktop workspace with notebook and pen"
                        className="w-full h-[280px] object-cover rounded-[40px] shadow-sm"
                    />
                </div>


                {/* Article content - all with right-to-left text */}
                <div className="space-y-4 text-right" dir="rtl">
                    <p className='text-gray-700 font-[IBM_Plex_Sans_Arabic]'>اخر تحديث 5 افريل 2025</p>
                    <h2 className="text-lg font-semibold text-gray-800 font-[IBM_Plex_Sans_Arabic]">هذا النص هو مثال يمكن أن يستبدل</h2>
                    <p className="text-gray-700 leading-relaxed font-[IBM_Plex_Sans_Arabic]">
                        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق، إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد.
                    </p>

                    <p className="text-gray-700 leading-relaxed font-[IBM_Plex_Sans_Arabic]">
                        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق، إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد.
                    </p>

                    <h2 className="text-lg font-semibold text-gray-800 pt-2 font-[IBM_Plex_Sans_Arabic]">هذا النص هو مثال يمكن أن يستبدل</h2>
                    <p className="text-gray-700 leading-relaxed font-[IBM_Plex_Sans_Arabic]">
                        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق، إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد.
                    </p>

                    <h2 className="text-lg font-semibold text-gray-800 pt-2 font-[IBM_Plex_Sans_Arabic]">هذا النص هو مثال يمكن أن يستبدل</h2>
                    <p className="text-gray-700 leading-relaxed font-[IBM_Plex_Sans_Arabic]">
                        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق، إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد.
                    </p>

                    <p className="text-gray-700 leading-relaxed font-[IBM_Plex_Sans_Arabic]">
                        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق، إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد.
                    </p>
                </div>
                <section className="py-10 bg-gray-50 items-end">
                    <div className="container mx-auto">
                        <div className='flex justify-between flex-row items-end'>
                            {/* View More Button (visible on smaller screens) */}
                            {!isMobile && (
                                <div className="mb-6">
                                    <Link
                                        to="/more-articles"
                                        className="block bg-[#0041361A] font-[600] text-[#004136] text-sm rounded-md py-2 px-8 font-[IBM_Plex_Sans_Arabic]"
                                    >
                                        عرض المزيد
                                    </Link>
                                </div>
                            )}
                            {/* Section Header */}
                            <div className="flex flex-col items-end w-full mb-8">
                                <h2 className="text-xl md:text-2xl font-bold text-right mb-2 font-[IBM_Plex_Sans_Arabic]">مقالات مشابهة</h2>
                                <p className="text-gray-600 text-sm text-right font-[IBM_Plex_Sans_Arabic]">
                                    استكشف المزيد من المقالات الأخرى في نفس المجال
                                </p>
                            </div>


                        </div>

                        {/* Articles Grid */}
                        <div className="flex flex-row  gap-6">
                            {isMobile && articles.map(article => (
                                <div key={article.id} className="bg-white rounded-lg w-full">
                                    {/* Article Image */}
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>

                                    {/* Article Content */}
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-right mb-2">
                                            {article.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm text-right">
                                            {article.description}
                                        </p>
                                    </div>

                                    {/* View More Button (visible on larger screens) */}
                                    <div className="mt-8 md:block text-left">
                                        <Link
                                            to="/blog_details"
                                            className="inline-block w-full text-center bg-[#0041361A] text-gray-800 text-sm rounded-md py-2 font-[600] px-4 font-[IBM_Plex_Sans_Arabic]"
                                        >
                                            عرض المزيد
                                        </Link>
                                    </div>
                                </div>
                            ))[0]}
                            {!isMobile && articles.map(article => (
                                <div key={article.id} className="bg-white rounded-lg">
                                    {/* Article Image */}
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>

                                    {/* Article Content */}
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-right mb-2">
                                            {article.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm text-right">
                                            {article.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                </section>
            </div>
            <Footer/>
        </div>
    );
};

export default BlogDetails;