"use client";

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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Mock Data
const companies = [
    {
        name: "Google",
        type: "Product Based",
        logo: "G",
        color: "bg-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        description: "Search, Cloud, Advertisements",
    },
    {
        name: "Microsoft",
        type: "Product Based",
        logo: "M",
        color: "bg-orange-500",
        bg: "bg-orange-500/10",
        border: "border-orange-500/20",
        description: "Windows, Azure, Office 365",
    },
    {
        name: "Amazon",
        type: "Product Based",
        logo: "A",
        color: "bg-yellow-500",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/20",
        description: "E-Commerce, AWS, Prime",
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
        name: "Goldman Sachs",
        type: "FinTech",
        logo: "GS",
        color: "bg-amber-500",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20",
        description: "Investment Banking, Finance",
    }
];

export default function InterviewPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
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
                        <Card className={`glass-card h-full flex flex-col justify-between overflow-hidden relative ${company.border}`}>
                            {/* Decorative Background Fade */}
                            <div className={`absolute top-0 right-0 w-32 h-32 ${company.bg} blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:opacity-100 transition-opacity`} />

                            <CardHeader className="relative z-10 pb-2">
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`w-12 h-12 rounded-xl ${company.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                                        {company.logo}
                                    </div>
                                    <Badge variant="outline" className={`bg-white/5 border-white/10 text-gray-300 ${company.type === "Product Based" ? "text-green-400 border-green-500/20" : "text-blue-400 border-blue-500/20"}`}>
                                        {company.type}
                                    </Badge>
                                </div>
                                <CardTitle className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                    {company.name}
                                </CardTitle>
                                <p className="text-sm text-gray-400 mt-1">{company.description}</p>
                            </CardHeader>

                            <CardContent className="space-y-4 pt-4 relative z-10">
                                <div className="grid grid-cols-2 gap-2">
                                    <Button variant="outline" className="w-full bg-white/5 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20 text-gray-400 justify-start gap-2 h-9 text-xs">
                                        <FileText size={14} className="text-blue-400" /> MCQs
                                    </Button>
                                    <Button variant="outline" className="w-full bg-white/5 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20 text-gray-400 justify-start gap-2 h-9 text-xs">
                                        <Clock size={14} className="text-orange-400" /> Coding
                                    </Button>
                                    <Button variant="outline" className="w-full bg-white/5 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20 text-gray-400 justify-start gap-2 h-9 text-xs">
                                        <Users size={14} className="text-purple-400" /> Questions
                                    </Button>
                                    <Button variant="outline" className="w-full bg-white/5 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20 text-gray-400 justify-start gap-2 h-9 text-xs">
                                        <Video size={14} className="text-red-400" /> Experience
                                    </Button>
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
