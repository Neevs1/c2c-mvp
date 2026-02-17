"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Play, Lock, ChevronDown, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function dashboard(){
    const router = useRouter();
    
    

    useEffect(() => {
        //If there is no user in local storage, redirect to / i.e. our landing page
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
            router.push("/");
        }
    }, [router]);

 
    
   
    

    return(
        <div className="max-w-4xl mx-auto space-y-8 pt-6">

            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">Daily Preparation Track</h1>
                    <p className="text-gray-400 mt-1">Complete modules in order to unlock the next.</p>
                </div>
                <div className="bg-white rounded-full px-4 py-1.5 flex items-center gap-2 shadow-lg shadow-white/5">
                    <span className="text-sm font-bold text-blue-900">Day 12 Streak</span>
                    <span className="text-lg">🔥</span>
                </div>
            </div>

            {/* MODULE 1: APTITUDE (Active & Expanded) */}
            <div className="rounded-2xl overflow-hidden border border-blue-500/30 bg-[#0f172a]">
                {/* Module Header Card */}
                <div className="bg-[#1e1b4b] p-6 flex items-start gap-5 relative overflow-hidden group cursor-pointer">
                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />

                    {/* Number Box */}
                    <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center text-xl font-bold text-white shadow-lg shadow-blue-500/40 z-10">
                        1
                    </div>

                    <div className="flex-1 z-10">
                        <h2 className="text-xl font-bold text-white">Aptitude</h2>
                        <p className="text-gray-400 text-sm">Master numerical and logical reasoning skills.</p>
                        <div className="mt-3 flex items-center gap-2">
                            <span className="text-xs bg-white/10 text-white px-2 py-0.5 rounded">3 topics</span>
                        </div>
                    </div>

                    <ChevronDown className="text-blue-400 w-6 h-6 mt-2" />
                </div>

                {/* Expanded Content (Sub-modules) */}
                <div className="p-4 space-y-3 bg-[#0f172a]">
                    {/* Sub-item 1 */}
                    <div className="flex items-center justify-between p-4 rounded-xl bg-[#1e293b] hover:bg-[#334155] transition-colors border border-white/5 cursor-pointer group">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full border-2 border-blue-500 flex items-center justify-center">
                                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            </div>
                            <div>
                                <h4 className="text-white font-medium">Quantitative Aptitude</h4>
                                <p className="text-xs text-gray-500">3 questions</p>
                            </div>
                        </div>
                        <span className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity text-sm">Start →</span>
                    </div>

                    {/* Sub-item 2 (Locked) */}
                    <div className="flex items-center justify-between p-4 rounded-xl bg-[#0f172a] border border-white/5 opacity-50">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full border-2 border-gray-600" />
                            <div>
                                <h4 className="text-gray-400 font-medium">Logical Reasoning</h4>
                                <p className="text-xs text-gray-600">3 questions</p>
                            </div>
                        </div>
                        <Lock className="w-4 h-4 text-gray-500" />
                    </div>
                </div>
            </div>

            {/* MODULE 2: DSA (Locked) */}
            <div className="rounded-2xl overflow-hidden bg-[#0a0f1c] border border-white/5 p-6 flex items-center gap-5 opacity-70 hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-lg bg-blue-900/50 flex items-center justify-center text-xl font-bold text-blue-300">
                    2
                </div>
                <div className="flex-1">
                    <h2 className="text-xl font-bold text-white">DSA</h2>
                    <p className="text-gray-400 text-sm">Master Data Structures and Algorithms fundamentals.</p>
                    <span className="text-xs text-gray-500 mt-1 block">7 topics</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Play className="w-4 h-4 text-blue-400 fill-current" />
                </div>
            </div>

            {/* MODULE 3: OOP (Locked) */}
            <div className="rounded-2xl overflow-hidden bg-[#0a0f1c] border border-white/5 p-6 flex items-center gap-5 opacity-70">
                <div className="w-12 h-12 rounded-lg bg-indigo-900/30 flex items-center justify-center text-xl font-bold text-indigo-300">
                    3
                </div>
                <div className="flex-1">
                    <h2 className="text-xl font-bold text-white">OOP</h2>
                    <p className="text-gray-400 text-sm">Object-Oriented Programming principles.</p>
                    <span className="text-xs text-gray-500 mt-1 block">5 topics</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center">
                    <Play className="w-4 h-4 text-indigo-400 fill-current" />
                </div>
            </div>

        </div>
    )
}