import { Layout } from "@/components/layout/Layout";
import Meta from "@/components/SEO/Meta";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts"; // Import authentic data
import { Search, Tag, ArrowLeft } from "lucide-react";

const BlogPage = () => {
    return (
        <Layout>
            <Meta
                title="وبلاگ تخصصی و مقالات فنی"
                description="جدیدترین مقالات و آموزش‌های تخصصی در حوزه برنامه‌نویسی، معماری نرم‌افزار، طراحی وب و تکنولوژی‌های روز دنیا در وبلاگ Runtime Studio."
            />

            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#030303]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-600/10 blur-[120px]" />
                    <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-600/10 blur-[120px]" />
                </div>

                <div className="container px-4 relative z-10 text-center">
                    <span className="text-blue-500 font-bold tracking-[0.3em] text-xs uppercase mb-6 block animate-fade-up font-sans">
                        Knowledge Base
                    </span>
                    <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-white animate-fade-up font-vazir" style={{ animationDelay: "0.1s" }}>
                        وبلاگ <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">تخصصی</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-vazir animate-fade-up leading-relaxed" style={{ animationDelay: "0.2s" }} dir="rtl">
                        بررسی عمیق چالش‌های مهندسی نرم‌افزار و راهکارهای مدرن.
                    </p>

                    {/* Search Bar - Visual Only for now */}
                    <div className="mt-12 max-w-lg mx-auto relative group animate-fade-up" style={{ animationDelay: "0.3s" }}>
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                            <Search className="text-gray-500 w-5 h-5" />
                        </div>
                        <input
                            type="text"
                            placeholder="جستجو در مقالات..."
                            className="w-full bg-white/5 border border-white/10 rounded-full py-4 pr-12 pl-6 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all font-vazir text-right"
                        />
                    </div>
                </div>
            </section>

            <section className="py-24 relative bg-[#050505]">
                <div className="container px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {blogPosts.map((post, i) => (
                            <Link
                                key={post.id}
                                to={`/blog/${post.slug}`}
                                className="group relative bg-white/5 rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 animate-fade-up"
                                style={{ animationDelay: `${i * 0.1}s` }}
                            >
                                <div className="aspect-[16/9] overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10" />
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-6 right-6 z-20">
                                        <span className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-bold text-white hover:bg-blue-600 hover:border-blue-500 transition-colors">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8 md:p-10">
                                    <div className="flex items-center gap-4 mb-6 text-xs text-gray-500 font-medium">
                                        <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-lg">
                                            <Tag size={12} />
                                            {post.tags[0]}
                                        </span>
                                        <span className="font-vazir">{post.readingTime} مطالعه</span>
                                        <span className="font-vazir ml-auto text-gray-600">{post.date}</span>
                                    </div>

                                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-vazir leading-tight group-hover:text-blue-400 transition-colors text-right" dir="rtl">
                                        {post.title}
                                    </h2>

                                    <p className="text-gray-400 text-base mb-8 leading-loose font-vazir text-justify line-clamp-3" dir="rtl">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between border-t border-white/5 pt-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-sm font-bold text-white border border-white/10">
                                                {post.author.charAt(0)}
                                            </div>
                                            <div className="flex flex-col items-start">
                                                <span className="text-sm text-white font-medium">{post.author}</span>
                                                <span className="text-[10px] text-gray-500 uppercase tracking-wider">Author</span>
                                            </div>
                                        </div>
                                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-blue-600 group-hover:border-blue-500 transition-all">
                                            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default BlogPage;
