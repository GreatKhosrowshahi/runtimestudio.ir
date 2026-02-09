
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Meta from "@/components/SEO/Meta";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { Search, Tag, ArrowLeft, Calendar, User, Clock } from "lucide-react";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

const BlogPage = () => {
    const [posts, setPosts] = useState(blogPosts);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data, error } = await supabase
                    .from('blog_posts')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (error) throw error;
                if (data && data.length > 0) {
                    setPosts(data as any);
                }
            } catch (err) {
                console.error("Error fetching blog posts:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Layout>
            <Meta
                title="وبلاگ مهندسی و مقالات تخصصی | Runtime Studio"
                description="بررسی عمیق چالش‌های توسعه نرم‌افزار، معماری سیستم و فرآیندهای مهندسی در وبلاگ رسمی رانتایم استودیو."
            />

            {/* Header */}
            <section className="relative pt-20 pb-20 overflow-hidden">
                <div className="container-width relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-runtime-secondary/10 border border-runtime-secondary/20 text-runtime-secondary text-[10px] font-bold uppercase tracking-[0.3em] en mb-8"
                    >
                        Technical Knowledge Base
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-black mb-8 font-vazir"
                    >
                        وبلاگ <span className="text-gradient">تخصصی رانتایم</span>
                    </motion.h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto font-vazir">
                        در این فضا، تجربیات فنی و چالش‌های واقعی مهندسی نرم‌افزار را با شما به اشتراک می‌گذاریم.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-12 max-w-xl mx-auto relative group"
                    >
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                            <Search className="text-gray-500 w-5 h-5" />
                        </div>
                        <input
                            type="text"
                            placeholder="جستجو در مقالات فنی..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pr-12 pl-6 text-white placeholder:text-gray-600 focus:ring-2 focus:ring-runtime-primary/50 outline-none transition-all font-vazir text-right"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Post Grid */}
            <section className="py-24">
                <div className="container-width">
                    {loading ? (
                        <div className="flex justify-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-runtime-primary"></div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {filteredPosts.map((post, i) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        to={`/blog/${post.slug}`}
                                        className="group block glass-card rounded-[2.5rem] overflow-hidden border-white/5 hover:border-runtime-primary/30 transition-all duration-500"
                                    >
                                        <div className="aspect-video overflow-hidden relative">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                            />
                                            <div className="absolute top-6 right-6">
                                                <span className="px-4 py-2 rounded-xl glass border-white/10 text-[10px] en font-bold text-white uppercase tracking-widest">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-8 md:p-10">
                                            <div className="flex flex-wrap items-center gap-4 mb-6 text-[10px] en font-bold text-gray-500 uppercase tracking-wider">
                                                <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
                                                <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readingTime}</span>
                                                <span className="flex items-center gap-1.5 bg-runtime-primary/10 text-runtime-primary px-2 py-1 rounded-lg">
                                                    <Tag size={12} /> {post.tags[0]}
                                                </span>
                                            </div>

                                            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-vazir leading-tight group-hover:text-runtime-primary transition-colors text-right">
                                                {post.title}
                                            </h2>

                                            <p className="text-gray-400 leading-relaxed font-vazir text-justify line-clamp-3 mb-8">
                                                {post.excerpt}
                                            </p>

                                            <div className="flex items-center justify-between border-t border-white/5 pt-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-runtime-surface flex items-center justify-center border border-white/10 text-xs font-bold text-white en">
                                                        {post.author.charAt(0)}
                                                    </div>
                                                    <span className="text-sm text-gray-300 font-medium font-vazir">{post.author}</span>
                                                </div>
                                                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-runtime-primary group-hover:border-runtime-primary transition-all">
                                                    <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
};

export default BlogPage;

