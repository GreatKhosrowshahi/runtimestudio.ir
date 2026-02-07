
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

interface Request {
    id: string;
    name: string;
    phone: string;
    projectType: string;
    description: string;
    date: string;
}

const Admin = () => {
    const [requests, setRequests] = useState<Request[]>([]);

    useEffect(() => {
        // Load requests from localStorage
        const storedRequests = JSON.parse(localStorage.getItem('runtime_requests') || '[]');
        setRequests(storedRequests.reverse()); // Show newest first
    }, []);

    const clearRequests = () => {
        if (window.confirm("آیا مطمئن هستید که می‌خواهید تمام درخواست‌ها را پاک کنید؟")) {
            localStorage.removeItem('runtime_requests');
            setRequests([]);
        }
    };

    return (
        <Layout>
            <div className="container px-4 py-24 min-h-screen">
                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-3xl font-bold text-white">مدیریت درخواست‌ها</h1>
                    <button
                        onClick={clearRequests}
                        className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors text-sm"
                    >
                        پاک کردن همه
                    </button>
                </div>

                {requests.length === 0 ? (
                    <div className="text-center text-gray-400 py-12 bg-white/5 rounded-2xl border border-white/5">
                        هنوز درخواستی ثبت نشده است.
                    </div>
                ) : (
                    <div className="grid gap-6">
                        {requests.map((req) => (
                            <div key={req.id} className="bg-white/5 border border-white/5 rounded-xl p-6 hover:border-blue-500/30 transition-colors">
                                <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">{req.name}</h3>
                                        <div className="text-blue-400 font-sans text-sm">{req.phone}</div>
                                    </div>
                                    <div className="text-right md:text-left">
                                        <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs border border-blue-500/20">
                                            {req.projectType}
                                        </span>
                                        <div className="text-gray-500 text-xs mt-2 font-sans">{new Date(req.date).toLocaleString()}</div>
                                    </div>
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed bg-black/20 p-4 rounded-lg">
                                    {req.description}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default Admin;
