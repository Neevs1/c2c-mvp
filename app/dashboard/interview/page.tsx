"use client";

import { useState } from "react";
import { Code2, FileText, MessageSquare, Video, Search, Bell, X, CheckCircle } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function InterviewPage() {
    const [activeCompany, setActiveCompany] = useState<string | null>(null);

    // --- Sample MCQ Data for Demo ---
    const mcqData = {
        TCS: {
            question: "What will be the output of the following C code?",
            code: "#include <stdio.h>\nint main() {\n    int x = 5;\n    printf(\"%d %d %d\", x++, x++, ++x);\n    return 0;\n}",
            options: ["5 6 7", "7 6 7", "7 6 5", "Undefined / Compiler Dependent"],
            correct: 3 // Index of correct answer
        },
        Infosys: {
            question: "Which data structure is best for implementing a priority queue?",
            code: null,
            options: ["Array", "Linked List", "Heap", "Stack"],
            correct: 2
        }
    };

    const companies = [
        {
            name: "TCS",
            type: "Service Based",
            logo: "T",
            color: "bg-blue-600",
            accent: "border-blue-500/20",
            badgeColor: "text-blue-300 bg-blue-500/20",
            bgGradient: "from-blue-900/40 to-[#030712]",
            description: "IT Services, Consulting & Business Solutions",
            links: {
                mcqs: "open_modal", // 👈 Trigger the modal
                coding: "#",
                questions: "#",
                experience: "https://youtu.be/ez1A3cqp30k"
            }
        },
        {
            name: "Infosys",
            type: "Service Based",
            logo: "I",
            color: "bg-cyan-600",
            accent: "border-cyan-500/20",
            badgeColor: "text-cyan-300 bg-cyan-500/20",
            bgGradient: "from-cyan-900/40 to-[#030712]",
            description: "Business Consulting, IT & Outsourcing",
            links: { mcqs: "open_modal", coding: "#", questions: "#", experience: "#" }
        },
        {
            name: "Zomato",
            type: "Product Based",
            logo: "Z",
            color: "bg-rose-600",
            accent: "border-rose-500/20",
            badgeColor: "text-rose-300 bg-rose-500/20",
            bgGradient: "from-rose-900/40 to-[#030712]",
            description: "Food Delivery, Dining & Logistics",
            links: { mcqs: "#", coding: "#", questions: "#", experience: "#" }
        },
        {
            name: "Principal Global",
            type: "Service Based",
            logo: "P",
            color: "bg-indigo-600",
            accent: "border-indigo-500/20",
            badgeColor: "text-indigo-300 bg-indigo-500/20",
            bgGradient: "from-indigo-900/40 to-[#030712]",
            description: "Financial Services, Investment Banking",
            links: { mcqs: "#", coding: "#", questions: "#", experience: "#" }
        },
        {
            name: "Bentley Systems",
            type: "Product Based",
            logo: "B",
            color: "bg-yellow-600",
            accent: "border-yellow-500/20",
            badgeColor: "text-yellow-300 bg-yellow-500/20",
            bgGradient: "from-yellow-900/40 to-[#030712]",
            description: "Infrastructure Engineering Software",
            links: { mcqs: "#", coding: "#", questions: "#", experience: "#" }
        },
        {
            name: "Cytel",
            type: "Product Based",
            logo: "C",
            color: "bg-emerald-600",
            accent: "border-emerald-500/20",
            badgeColor: "text-emerald-300 bg-emerald-500/20",
            bgGradient: "from-emerald-900/40 to-[#030712]",
            description: "Clinical Research, Biostatistics",
            links: { mcqs: "#", coding: "#", questions: "#", experience: "#" }
        },
    ];

    const resources = [
        { icon: FileText, label: "MCQs", key: "mcqs", color: "text-purple-400" },
        { icon: Code2, label: "Coding", key: "coding", color: "text-orange-400" },
        { icon: MessageSquare, label: "Questions", key: "questions", color: "text-blue-400" },
        { icon: Video, label: "Experience", key: "experience", color: "text-red-400" },
    ];

    return (
        <div className="max-w-7xl mx-auto space-y-8 pt-6 pb-20 relative">

            {/* Header with Search */}
            <div className="flex items-center justify-between gap-4">
                <div className="relative flex-1 max-w-lg">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search modules, companies..."
                        className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#111827] border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/5 transition-all"
                    />
                </div>

                <div className="flex items-center gap-2">
                    <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                        <Bell className="w-5 h-5" />
                    </button>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center font-bold text-white text-xs">
                        JD
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {companies.map((company, idx) => (
                    <div
                        key={idx}
                        className={`group relative overflow-hidden rounded-3xl border ${company.accent} bg-[#0a0f1c] hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
                    >
                        <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${company.bgGradient} opacity-50`} />

                        <div className="relative p-6 space-y-6">
                            <div className="flex justify-between items-start">
                                <div className={`w-14 h-14 rounded-xl ${company.color} flex items-center justify-center text-3xl font-bold text-white shadow-lg`}>
                                    {company.logo}
                                </div>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-white mb-1">{company.name}</h2>
                                <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">{company.description}</p>
                            </div>

                            {/* Resource Grid (2x2) */}
                            <div className="grid grid-cols-2 gap-3">
                                {resources.map((res, i) => {
                                    const linkUrl = company.links[res.key as keyof typeof company.links] || "#";
                                    const isExternal = linkUrl.startsWith("http");
                                    const isModal = linkUrl === "open_modal";

                                    // If it's the MCQ button for TCS/Infosys, trigger the modal
                                    if (isModal) {
                                        return (
                                            <button
                                                key={i}
                                                onClick={() => setActiveCompany(company.name)}
                                                className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#111827]/80 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all group/link text-left"
                                            >
                                                <res.icon className={`w-3.5 h-3.5 ${res.color}`} />
                                                <span className="text-xs font-medium text-gray-300 group-hover/link:text-white transition-colors">
                                                    {res.label}
                                                </span>
                                            </button>
                                        );
                                    }

                                    return (
                                        <Link
                                            key={i}
                                            href={linkUrl}
                                            target={isExternal ? "_blank" : "_self"}
                                            className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#111827]/80 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all group/link"
                                        >
                                            <res.icon className={`w-3.5 h-3.5 ${res.color}`} />
                                            <span className="text-xs font-medium text-gray-300 group-hover/link:text-white transition-colors">
                                                {res.label}
                                            </span>
                                        </Link>
                                    );
                                })}
                            </div>

                            <button className="w-full py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-gray-300 hover:text-white transition-all">
                                View Full Process
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- SAMPLE MCQ MODAL --- */}
            <AnimatePresence>
                {activeCompany && mcqData[activeCompany as keyof typeof mcqData] && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-[#1e293b] w-full max-w-lg rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
                        >
                            {/* Modal Header */}
                            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#0f172a]">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white">
                                        {activeCompany.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">{activeCompany} Quick Check</h3>
                                        <p className="text-xs text-gray-400">Previous Year Question (PYQ)</p>
                                    </div>
                                </div>
                                <button onClick={() => setActiveCompany(null)} className="text-gray-400 hover:text-white p-2 hover:bg-white/5 rounded-full transition-colors">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Modal Body */}
                            <div className="p-8">
                                {mcqData[activeCompany as keyof typeof mcqData].code && (
                                    <div className="mb-4 p-4 rounded-lg bg-[#0f172a] border border-white/5 overflow-x-auto">
                                        <pre className="text-xs text-blue-300 font-mono">
                                            {mcqData[activeCompany as keyof typeof mcqData].code}
                                        </pre>
                                    </div>
                                )}

                                <h4 className="text-lg font-medium text-white mb-6">
                                    {mcqData[activeCompany as keyof typeof mcqData].question}
                                </h4>

                                <div className="space-y-3">
                                    {mcqData[activeCompany as keyof typeof mcqData].options.map((opt, i) => (
                                        <button
                                            key={i}
                                            className="w-full text-left p-4 rounded-xl border border-white/10 hover:bg-white/5 hover:border-blue-500/50 text-gray-300 hover:text-white transition-all flex items-center justify-between group"
                                        >
                                            <span className="text-sm">{opt}</span>
                                            <div className="w-5 h-5 rounded-full border border-white/20 group-hover:border-blue-400 group-hover:bg-blue-500/10 transition-all" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </div>
    );
}