"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Play, Lock, ChevronDown, CheckCircle, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QuizModal } from "@/components/QuizModal";

export default function dashboard() {
    const router = useRouter();
    const [quizOpen, setQuizOpen] = useState(false);
    const [quizTopic, setQuizTopic] = useState("");
    const [quizTitle, setQuizTitle] = useState("");

    useEffect(() => {
        //If there is no user in local storage, redirect to / i.e. our landing page
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
            router.push("/");
        }
    }, [router]);

    const handleStartQuiz = (topic: string, title: string) => {
        setQuizTopic(topic);
        setQuizTitle(title);
        setQuizOpen(true);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8 pt-6">
            <QuizModal
                isOpen={quizOpen}
                onClose={() => setQuizOpen(false)}
                topic={quizTopic}
                title={quizTitle}
            />

            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">Daily Preparation Track</h1>
                    <p className="text-gray-400 mt-1">Complete daily test to keep your streak alive.</p>
                </div>
                <div className="bg-white rounded-full px-4 py-1.5 flex items-center gap-2 shadow-lg shadow-white/5">
                    <span className="text-sm font-bold text-blue-900">Day 12 Streak</span>
                    <span className="text-lg">🔥</span>
                </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-6">
                <Card className="glass-card p-6 relative overflow-hidden group border-primary/20 bg-primary/5">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start text-center md:text-left justify-between gap-6 p-2">
                        <div className="flex items-center gap-6">
                            <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0">
                                <Zap className="w-10 h-10 text-primary" />
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-white">Daily Test</h3>
                                <p className="text-gray-400 mt-1 max-w-md">Challenge yourself with a mix of questions from your active modules to keep your streak alive.</p>
                            </div>
                        </div>

                        <Button
                            onClick={() => handleStartQuiz("General", "Daily Quest")}
                            className="w-full md:w-auto px-8 bg-primary hover:bg-primary/90 text-white rounded-xl h-12 font-medium shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] self-center"
                        >
                            Start Quiz
                        </Button>
                    </div>
                </Card>
            </div>

            {/* Revision Quick Access */}
            <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">Revision Quick Access</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {["Aptitude", "DSA", "OOP", "DBMS", "OS", "Networks"].map((topic, index) => (
                        <motion.div
                            key={topic}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Card
                                onClick={() => handleStartQuiz(topic, `${topic} Revision`)}
                                className="glass-card bg-gray-900 p-4 hover:bg-white/5 transition-all cursor-pointer border-white/5 hover:border-primary/30 group flex flex-col items-center justify-center gap-3 text-center h-full min-h-[100px]"
                            >
                                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-primary/20 transition-colors">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                </div>
                                <span className="font-medium text-gray-300 group-hover:text-white text-sm">{topic}</span>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>



        </div>
    )
}