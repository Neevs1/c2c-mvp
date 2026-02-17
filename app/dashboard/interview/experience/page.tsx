"use client";

import React from 'react';
import { Card } from "@/components/ui/card";

import { Calendar, Clock, MapPin, Code, BookOpen, Users, CheckCircle, Brain, Terminal, Server, Cloud } from "lucide-react";

export default function Experience() {
    return (
        <div className="max-w-4xl mx-auto space-y-8 p-6">

            {/* Header Section */}
            <div className="space-y-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-white tracking-tight">Interview Experience</h1>
                        <h2 className="text-sky-500 text-xl  text-primary font-semibold mt-1">Principal Global Services</h2>
                    </div>

                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                        <Calendar className="w-4 h-4 text-blue-400" />
                        <span>Aug - Sept 2025</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                        <MapPin className="w-4 h-4 text-purple-400" />
                        <span>Pool Campus</span>
                    </div>
                </div>
            </div>

            {/* Round 1: Aptitude */}
            <Card className="glass-card bg-gray-900/50 p-6 border-white/10 space-y-6 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/50" />
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-blue-500/20">
                        <Brain className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">Round 1: Aptitude Test (Online)</h3>
                        <div className="flex items-center gap-4 text-xs text-gray-400 mt-1">
                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> 24th Aug 2025</span>
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 120 Minutes</span>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <Section title="Quantitative Aptitude" icon={<BookOpen className="w-4 h-4" />}>
                        <ul className="list-disc list-inside text-sm text-gray-300 space-y-1 ml-2">
                            <li>Number System, Percentages, Profit & Loss</li>
                            <li>Ratio & Proportion, Averages</li>
                            <li>Time & Work, Speed & Distance</li>
                            <li>Simple/Compound Interest, Algebra</li>
                        </ul>
                    </Section>

                    <Section title="Verbal Ability" icon={<BookOpen className="w-4 h-4" />}>
                        <ul className="list-disc list-inside text-sm text-gray-300 space-y-1 ml-2">
                            <li>Reading Comprehension</li>
                            <li>Vocabulary (Synonyms/Antonyms)</li>
                            <li>Sentence Correction, Para-jumbles</li>
                        </ul>
                    </Section>

                    <Section title="Logical Reasoning" icon={<Brain className="w-4 h-4" />}>
                        <ul className="list-disc list-inside text-sm text-gray-300 space-y-1 ml-2">
                            <li>Cryptarithmetic Problems</li>
                            <li>Statements & Conclusions</li>
                            <li>Puzzles, Seating Arrangements</li>
                            <li>Data Interpretation & Sufficiency</li>
                        </ul>
                    </Section>

                    <Section title="Coding Questions" icon={<Code className="w-4 h-4" />}>
                        <div className="text-sm text-gray-300 space-y-2">
                            <p>Focus on Arrays, Strings, Two Pointers.</p>
                            <div className="flex gap-2 mt-2">

                            </div>
                        </div>
                    </Section>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl mt-4">
                    <h4 className="text-blue-400 font-semibold text-sm mb-2">Preparation Tip</h4>
                    <p className="text-sm text-gray-300">Practice aptitude daily. For coding, focus on two-pointer techniques, edge cases, and time complexity.</p>
                </div>
            </Card>

            {/* Round 2: Technical */}
            <Card className="glass-card bg-gray-900/50 p-6 border-white/10 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-purple-500/50" />
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-purple-500/20">
                        <Terminal className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">Round 2: Technical Interview</h3>
                        <div className="flex items-center gap-4 text-xs text-gray-400 mt-1">
                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> 15th Sept 2025</span>
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> ~1 Hour</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <TechCategory title="Core Java" items={[
                        "Comparable vs Comparator",
                        "CopyOnWriteArrayList usage",
                        "Exception handling in overriding",
                        "Internal working of HashMap & LinkedList"
                    ]} />

                    <TechCategory title="DSA (Optimized O(n))" items={[
                        "Swap two numbers without 3rd variable (XOR)",
                        "Second largest element in array",
                        "HashMap collision handling"
                    ]} />

                    <TechCategory title="OS & Networking" items={[
                        "Firewall purpose",
                        "OSI Model layers",
                        "VPN concepts"
                    ]} />

                    <TechCategory title="Cloud & AWS" items={[
                        "AWS Basics (S3, EC2, IAM)",
                        "Horizontal vs Vertical Scaling",
                        "Stateful vs Stateless Backend"
                    ]} />
                </div>
            </Card>

            {/* Round 3: HR */}
            <Card className="glass-card bg-gray-900/50 p-6 border-white/10 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-pink-500/50" />
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-pink-500/20">
                        <Users className="w-6 h-6 text-pink-400" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">Round 3: HR Interview</h3>
                        <div className="flex items-center gap-4 text-xs text-gray-400 mt-1">
                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> 15th Sept 2025</span>
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 20-30 Mins</span>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    {["Why PGS?", "Strengths & Weaknesses", "Career Goals (3-5 years)", "Project/Internship Experience", "Adaptability & Relocation"].map((q, i) => (
                        <div key={i} className="bg-white/5 p-3 rounded-lg border border-white/5 text-sm text-gray-300 flex items-start gap-2">
                            <span className="text-pink-400 font-bold">•</span> {q}
                        </div>
                    ))}
                </div>
            </Card>

            {/* Final Result */}
            <Card className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-6 border-green-500/30 text-center">
                <h3 className="text-lg font-bold text-white mb-2">Final Verdict</h3>
                <p className="text-gray-200">Selected! 🎉 (Result declared on 18th Sept)</p>
            </Card>

        </div>
    );
}

function Section({ title, icon, children }: { title: string, icon: React.ReactNode, children: React.ReactNode }) {
    return (
        <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-200 font-semibold">
                <span className="text-primary">{icon}</span>
                {title}
            </div>
            {children}
        </div>
    )
}

function TechCategory({ title, items }: { title: string, items: string[] }) {
    return (
        <div className="space-y-3">
            <h4 className="text-sm font-bold text-purple-300 border-b border-white/5 pb-2">{title}</h4>
            <div className="grid md:grid-cols-2 gap-2">
                {items.map((item, idx) => (
                    <div key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-purple-500/50 mt-1">›</span> {item}
                    </div>
                ))}
            </div>
        </div>
    )
}