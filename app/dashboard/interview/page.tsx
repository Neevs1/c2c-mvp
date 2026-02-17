"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Briefcase,
    MonitorPlay,
    Clock,
    FileText,
    Video,
    MoreHorizontal,
    Building2,
    Users
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QuizModal } from "@/components/QuizModal";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Mock Data
const companies = [
    {
        name: "Principal global services",
        type: "Fintech",
        logo: "PGS",
        color: "bg-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        description: "Financial Services, Investment Banking",
    },
    {
        name: "Bentley Systems",
        type: "Product Based",
        logo: "BS",
        color: "bg-orange-500",
        bg: "bg-orange-500/10",
        border: "border-orange-500/20",
        description: "Infrastructure Engineering Software",
    },
    {
        name: "Cytel",
        type: "Product Based",
        logo: "C",
        color: "bg-yellow-500",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/20",
        description: "Clinical Research, Biostatistics",
    },
    {
        name: "TCS",
        type: "Service Based",
        logo: "T",
        color: "bg-indigo-500",
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/20",
        description: "IT Services, Consulting",
    },
    {
        name: "Infosys",
        type: "Service Based",
        logo: "I",
        color: "bg-cyan-500",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/20",
        description: "Business Consulting, IT",
    },
    {
        name: "Zomato",
        type: "FinTech",
        logo: "Z",
        color: "bg-red-500",
        bg: "bg-red-500/10",
        border: "border-red-500/20",
        description: "Food Delivery, E-Commerce",
    }
];

export default function InterviewPage() {
    const [quizOpen, setQuizOpen] = useState(false);
    const [quizTopic, setQuizTopic] = useState("");
    const [quizTitle, setQuizTitle] = useState("");

    const handleStartQuiz = (companyName: string) => {
        setQuizTopic(companyName);
        setQuizTitle(`${companyName} Interview`);
        setQuizOpen(true);
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <QuizModal
                isOpen={quizOpen}
                onClose={() => setQuizOpen(false)}
                topic={quizTopic}
                title={quizTitle}
            />

            {/* Header */}
            <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-bold tracking-tight text-white">
                    Interview Preparation
                </h1>
                <p className="text-gray-400">Target specific companies and crack their recruitment process.</p>
            </div>

            {/* Company Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {companies.map((company, index) => (
                    <motion.div
                        key={company.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group"
                    >
                        <Card className={`glass-card h-full flex flex-col bg-gray-900 justify-between overflow-hidden relative ${company.border}`}>
                            {/* Decorative Background Fade */}
                            <div className={`absolute top-0 right-0 w-32 h-32 ${company.bg} blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:opacity-100 transition-opacity`} />

                            <CardHeader className="relative z-10 pb-2">
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`w-12 h-12 rounded-xl ${company.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                                        {company.logo}
                                    </div>

                                </div>
                                <CardTitle className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                    {company.name}
                                </CardTitle>
                                <p className="text-sm text-gray-400 mt-1">{company.description}</p>
                            </CardHeader>

                            <CardContent className="space-y-4 pt-4 relative z-10">
                                <div className="grid grid-cols-2 gap-2">
                                    <Button
                                        onClick={() => handleStartQuiz(company.name)}
                                        variant="outline"
                                        className="w-full bg-white/5 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20 text-gray-400 justify-start gap-2 h-9 text-xs"
                                    >
                                        <FileText size={14} className="text-blue-400" /> MCQs
                                    </Button>
                                    <Button variant="outline" className="w-full bg-white/5 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20 text-gray-400 justify-start gap-2 h-9 text-xs">
                                        <Clock size={14} className="text-orange-400" /> Coding
                                    </Button>
                                    <Button variant="outline" className="w-full bg-white/5 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20 text-gray-400 justify-start gap-2 h-9 text-xs">
                                        <Users size={14} className="text-purple-400" /> Questions
                                    </Button>
                                    <Link href="/dashboard/interview/experience"> <Button variant="outline" className="w-full bg-white/5 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20 text-gray-400 justify-start gap-2 h-9 text-xs">
                                        <Video size={14} className="text-red-400" /> Experience
                                    </Button></Link>
                                </div>

                                <Button className={`w-full ${company.bg} hover:bg-opacity-20 text-white border border-white/5`}>
                                    View Full Process
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}