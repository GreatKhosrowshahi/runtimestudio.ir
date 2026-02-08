export interface BlogPost {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    content?: string; // For full page view later
    author: string;
    date: string;
    category: string;
    readingTime: string;
    image: string;
    tags: string[];
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "معماری Microservices در مقابل Monolith: راهنمای تصمیم‌گیری برای CTOها",
        slug: "microservices-vs-monolith-guide",
        excerpt: "آیا واقعاً به میکروسرویس نیاز دارید؟ بررسی عمیق Trade-offهای فنی، پیچیدگی‌های Infrastructure و هزینه‌های نگهداری در مقیاس‌های مختلف.",
        author: "Yazdan Astaraki",
        date: "1402/11/20",
        category: "Software Architecture",
        readingTime: "12 min",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
        tags: ["Architecture", "Scalability", "DevOps"]
    },
    {
        id: 2,
        title: "بهینه‌سازی Performance در React: فراتر از useMemo و useCallback",
        slug: "react-performance-optimization-advanced",
        excerpt: "بررسی تکنیک‌های پیشرفته مانند Code Splitting، Virtualization، و مدیریت State بهینه برای کاهش Bundle Size و افزایش سرعت Time to Interactive.",
        author: "Sarina Ahmadi",
        date: "1402/11/18",
        category: "Frontend Engineering",
        readingTime: "8 min",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000",
        tags: ["React", "Performance", "Web Vitals"]
    },
    {
        id: 3,
        title: "امنیت در APIهای مدرن: پیاده‌سازی OAuth2 و JWT در Node.js",
        slug: "nodejs-api-security-oauth2-jwt",
        excerpt: "راهنمای عملی پیاده‌سازی احراز هویت امن، مدیریت Refresh Tokenها و جلوگیری از حملات XSS و CSRF در معماری‌های RESTful.",
        author: "Ali Karimi",
        date: "1402/11/15",
        category: "Backend Security",
        readingTime: "10 min",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1000",
        tags: ["Node.js", "Security", "Auth"]
    },
    {
        id: 4,
        title: "مقیاس‌پذیری دیتابیس: Sharding در مقابل Partitioning در PostgreSQL",
        slug: "scaling-postgresql-sharding-partitioning",
        excerpt: "چگونه دیتابیس خود را برای مدیریت ترابایت‌ها داده آماده کنیم؟ استراتژی‌های افقی و عمودی برای Scaling لایه داده.",
        author: "Reza Alipour",
        date: "1402/11/10",
        category: "Database Engineering",
        readingTime: "15 min",
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=1000",
        tags: ["PostgreSQL", "Database", "Scalability"]
    }
];
