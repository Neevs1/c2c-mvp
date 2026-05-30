"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    Coffee,
    GitBranch,
    Brain,
    LineChart,
    Zap,
    Cloud,
    Database,
    Code2,
    ArrowRight,
    Trophy,
    Flame,
    CheckCircle,
    Clock,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// ─── Domain Data ────────────────────────────────────────────────────────────────
const domainCards = [
    {
        id: "java-development",
        name: "Java Development",
        description: "Master enterprise Java, Spring Boot, and JVM internals for production systems.",
        icon: Coffee,
        color: "orange",
        bgGlow: "bg-orange-500/20",
        borderColor: "border-orange-500/20",
        iconBg: "bg-orange-500/10",
        iconColor: "text-orange-400",
        btnBg: "bg-orange-500/10 hover:bg-orange-500/20 text-orange-400",
        difficulty: "Intermediate",
        diffBadge: "bg-yellow-500/10 text-yellow-400",
        progress: 35,
        progressBar: "bg-orange-500",
    },
    {
        id: "devops",
        name: "DevOps",
        description: "CI/CD pipelines, containerization, orchestration, and infrastructure as code.",
        icon: GitBranch,
        color: "green",
        bgGlow: "bg-green-500/20",
        borderColor: "border-green-500/20",
        iconBg: "bg-green-500/10",
        iconColor: "text-green-400",
        btnBg: "bg-green-500/10 hover:bg-green-500/20 text-green-400",
        difficulty: "Advanced",
        diffBadge: "bg-red-500/10 text-red-400",
        progress: 20,
        progressBar: "bg-green-500",
    },
    {
        id: "ai-workflows",
        name: "AI Workflows",
        description: "RAG architectures, prompt engineering, LLM integration, and AI system design.",
        icon: Brain,
        color: "purple",
        bgGlow: "bg-purple-500/20",
        borderColor: "border-purple-500/20",
        iconBg: "bg-purple-500/10",
        iconColor: "text-purple-400",
        btnBg: "bg-purple-500/10 hover:bg-purple-500/20 text-purple-400",
        difficulty: "Advanced",
        diffBadge: "bg-red-500/10 text-red-400",
        progress: 15,
        progressBar: "bg-purple-500",
    },
    {
        id: "machine-learning",
        name: "Machine Learning",
        description: "Supervised & unsupervised learning, deep learning, and model optimization.",
        icon: LineChart,
        color: "cyan",
        bgGlow: "bg-cyan-500/20",
        borderColor: "border-cyan-500/20",
        iconBg: "bg-cyan-500/10",
        iconColor: "text-cyan-400",
        btnBg: "bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400",
        difficulty: "Advanced",
        diffBadge: "bg-red-500/10 text-red-400",
        progress: 10,
        progressBar: "bg-cyan-500",
    },
    {
        id: "python-fastapi",
        name: "Python + FastAPI",
        description: "Modern async Python APIs, Pydantic validation, and production deployment.",
        icon: Zap,
        color: "yellow",
        bgGlow: "bg-yellow-500/20",
        borderColor: "border-yellow-500/20",
        iconBg: "bg-yellow-500/10",
        iconColor: "text-yellow-400",
        btnBg: "bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400",
        difficulty: "Intermediate",
        diffBadge: "bg-yellow-500/10 text-yellow-400",
        progress: 45,
        progressBar: "bg-yellow-500",
    },
    {
        id: "cloud-computing",
        name: "Cloud Computing",
        description: "AWS, Azure, GCP services, serverless architecture, and cloud-native patterns.",
        icon: Cloud,
        color: "sky",
        bgGlow: "bg-sky-500/20",
        borderColor: "border-sky-500/20",
        iconBg: "bg-sky-500/10",
        iconColor: "text-sky-400",
        btnBg: "bg-sky-500/10 hover:bg-sky-500/20 text-sky-400",
        difficulty: "Intermediate",
        diffBadge: "bg-yellow-500/10 text-yellow-400",
        progress: 25,
        progressBar: "bg-sky-500",
    },
    {
        id: "data-engineering",
        name: "Data Engineering",
        description: "ETL pipelines, data lakes, streaming platforms, and data warehouse design.",
        icon: Database,
        color: "emerald",
        bgGlow: "bg-emerald-500/20",
        borderColor: "border-emerald-500/20",
        iconBg: "bg-emerald-500/10",
        iconColor: "text-emerald-400",
        btnBg: "bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400",
        difficulty: "Advanced",
        diffBadge: "bg-red-500/10 text-red-400",
        progress: 5,
        progressBar: "bg-emerald-500",
    },
    {
        id: "full-stack-development",
        name: "Full Stack Development",
        description: "React, Next.js, Node.js, databases, and end-to-end application architecture.",
        icon: Code2,
        color: "pink",
        bgGlow: "bg-pink-500/20",
        borderColor: "border-pink-500/20",
        iconBg: "bg-pink-500/10",
        iconColor: "text-pink-400",
        btnBg: "bg-pink-500/10 hover:bg-pink-500/20 text-pink-400",
        difficulty: "Intermediate",
        diffBadge: "bg-yellow-500/10 text-yellow-400",
        progress: 30,
        progressBar: "bg-pink-500",
    },
];

// ─── Component ──────────────────────────────────────────────────────────────────
export default function DomainSpecificPage() {
    const totalProgress = Math.round(
        domainCards.reduce((sum, d) => sum + d.progress, 0) / domainCards.length
    );
    const completedDomains = domainCards.filter((d) => d.progress === 100).length;

    return (
        <div className="max-w-6xl mx-auto space-y-8 pt-6 pb-20 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">
                        Domain Specific Learning
                    </h1>
                    <p className="text-gray-400 mt-2 text-sm">
                        Prepare for role-based technical interviews and assessments.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 flex items-center gap-2">
                        <Flame className="w-4 h-4 text-orange-500" />
                        <span className="text-sm font-bold text-orange-500">3 Day Streak</span>
                    </div>
                </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card className="bg-[#0f172a] border-white/10 p-5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                        <Trophy className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-white">{totalProgress}%</p>
                        <p className="text-xs text-gray-400">Overall Progress</p>
                    </div>
                </Card>
                <Card className="bg-[#0f172a] border-white/10 p-5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-white">{completedDomains} / {domainCards.length}</p>
                        <p className="text-xs text-gray-400">Domains Completed</p>
                    </div>
                </Card>
                <Card className="bg-[#0f172a] border-white/10 p-5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                        <Clock className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-white">
                            {domainCards.reduce((s, d) => s + d.progress, 0) > 0
                                ? `${Math.round(domainCards.reduce((s, d) => s + (d.progress / 100) * 40, 0))}h`
                                : "0h"}{" "}
                            Invested
                        </p>
                        <p className="text-xs text-gray-400">Total Learning Time</p>
                    </div>
                </Card>
            </div>

            {/* Domain Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {domainCards.map((domain, index) => (
                    <motion.div
                        key={domain.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.07, duration: 0.4, ease: "easeOut" }}
                        className="group"
                    >
                        <Link href={`/dashboard/domain-specific/${domain.id}`}>
                            <Card
                                className={`bg-[#0f172a] h-full flex flex-col justify-between overflow-hidden relative ${domain.borderColor} hover:border-opacity-60 transition-all duration-300 hover:shadow-lg cursor-pointer`}
                            >
                                {/* Background Glow */}
                                <div
                                    className={`absolute top-0 right-0 w-32 h-32 ${domain.bgGlow} blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 opacity-30 group-hover:opacity-60 transition-opacity duration-500`}
                                />

                                <div className="relative z-10 p-5 flex flex-col gap-4 flex-1">
                                    {/* Icon & Difficulty */}
                                    <div className="flex items-start justify-between">
                                        <div
                                            className={`w-12 h-12 rounded-xl ${domain.iconBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                                        >
                                            <domain.icon className={`w-6 h-6 ${domain.iconColor}`} />
                                        </div>
                                        <span
                                            className={`text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded ${domain.diffBadge}`}
                                        >
                                            {domain.difficulty}
                                        </span>
                                    </div>

                                    {/* Title & Description */}
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                            {domain.name}
                                        </h3>
                                        <p className="text-xs text-gray-400 mt-1.5 leading-relaxed line-clamp-2">
                                            {domain.description}
                                        </p>
                                    </div>

                                    {/* Progress */}
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between text-xs">
                                            <span className="text-gray-400">Progress</span>
                                            <span className="text-white font-semibold">
                                                {domain.progress}%
                                            </span>
                                        </div>
                                        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${domain.progress}%` }}
                                                transition={{
                                                    delay: index * 0.07 + 0.3,
                                                    duration: 0.8,
                                                    ease: "easeOut",
                                                }}
                                                className={`h-full rounded-full ${domain.progressBar}`}
                                            />
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <Button
                                        className={`w-full ${domain.btnBg} border border-white/5 rounded-xl h-9 text-xs font-semibold transition-all group-hover:scale-[1.02]`}
                                    >
                                        {domain.progress > 0 ? "Continue Learning" : "Start Learning"}
                                        <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5" />
                                    </Button>
                                </div>
                            </Card>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
