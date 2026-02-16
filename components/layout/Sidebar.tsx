"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Layers, Briefcase, Zap, User } from "lucide-react";

export default function Sidebar() {
    const pathname = usePathname();

    const menuItems = [
        { icon: Home, label: "Home", href: "/dashboard" },
        { icon: Layers, label: "Prep Phase", href: "/dashboard/prep" },
        { icon: Briefcase, label: "Interview Phase", href: "/dashboard/interview" },
    ];

    return (
        <div className="flex flex-col h-full w-full bg-[#050b1c] text-white border-r border-white/5">
            {/* Logo Area */}
            <div className="p-6 pb-8">
                <h1 className="text-2xl font-bold text-blue-500 tracking-tight flex items-center gap-2">
                    PrepBridge
                    <span className="text-xs text-white/80 bg-white/10 px-2 py-0.5 rounded-full font-medium">Beta</span>
                </h1>
            </div>

            {/* User Profile Snippet (Top Left in your React design) */}
            <div className="px-6 mb-8 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-white text-blue-900 font-bold text-2xl flex items-center justify-center mb-3">
                    JD
                </div>
                <h3 className="font-bold text-lg">John Doe</h3>
                <p className="text-sm text-gray-400">Level 5</p>
                <div className="flex items-center justify-center gap-3 mt-2 text-xs font-medium">
                    <span className="text-orange-500 flex items-center gap-1"><Zap className="w-3 h-3 fill-orange-500" /> 12</span>
                    <span className="text-gray-500">XP 1450</span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 space-y-2">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-200 ${isActive
                                    ? "bg-blue-600/20 text-blue-400 border-l-4 border-blue-500 font-semibold"
                                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                                }`}
                        >
                            <item.icon className={`w-5 h-5 ${isActive ? "text-blue-400" : "text-gray-500"}`} />
                            <span>{item.label}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 text-xs text-center text-gray-600">
                © 2026 PrepBridge
            </div>
        </div>
    );
}