
import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import Layout from "@/components/Layout";
import Meta from "@/components/SEO/Meta";
import { blogPosts } from "@/data/blogPosts";
import { ArrowRight, Calendar, User, Clock, Tag, Share2, ChevronLeft } from "lucide-react";
import ReactMarkdown from 'react-markdown';

const BlogPostDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = blogPosts.find((p) => p.slug === slug);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    if (!post) {
        return (
            <Layout>
                <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-4xl font-bold mb-6 font-vazir text-white">مقاله مورد نظر یافت نشد</h1>
                    <Link to="/blog" className="text-runtime-primary flex items-center gap-2 hover:underline font-vazir">
                        بازگشت به وبلاگ <ArrowRight size={20} />
                    </Link>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <Meta
                title={`${post.title} | وبلاگ رانتایم استودیو`}
                description={post.excerpt}
            />

            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-runtime-primary z-50 origin-left"
                style={{ scaleX }}
            />

            <article className="pt-32 pb-24">
                <div className="container-width max-w-4xl">
                    {/* Header Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12 text-center"
                    >
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 text-gray-500 hover:text-runtime-primary transition-colors mb-8 en text-xs font-bold uppercase tracking-widest"
                        >
                            <ChevronLeft size={14} /> Back to Knowledge Base
                        </Link>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 font-vazir leading-tight text-white text-right">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 font-vazir mb-10">
                            <span className="flex items-center gap-2"><User size={16} className="text-runtime-primary" /> {post.author}</span>
                            <span className="flex items-center gap-2"><Calendar size={16} className="text-runtime-primary" /> {post.date}</span>
                            <span className="flex items-center gap-2"><Clock size={16} className="text-runtime-primary" /> {post.readingTime} مطالعه</span>
                        </div>

                        <div className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-16 glass border-white/5">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="prose prose-invert prose-lg max-w-none font-vazir text-justify leading-loose text-gray-300
                            prose-headings:text-white prose-headings:font-black prose-headings:font-vazir
                            prose-a:text-runtime-primary prose-strong:text-white prose-code:text-runtime-secondary
                            prose-pre:bg-runtime-surface prose-pre:border prose-pre:border-white/5 prose-pre:rounded-2xl"
                        dir="rtl"
                    >
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </motion.div>

                    {/* Footer / Tags */}
                    <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-6">
                        <div className="flex flex-wrap items-center gap-3">
                            <Tag size={18} className="text-runtime-primary" />
                            {post.tags.map(tag => (
                                <span key={tag} className="px-4 py-1.5 rounded-xl bg-runtime-primary/10 text-runtime-primary text-xs font-bold en uppercase tracking-wider">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-vazir text-sm">
                            <Share2 size={18} /> اشتراک‌گذاری مقاله
                        </button>
                    </div>
                </div>
            </article>
        </Layout>
    );
};

export default BlogPostDetail;
