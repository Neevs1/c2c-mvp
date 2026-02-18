"use client";

import { useState } from "react";
import { Lock, ChevronDown, ChevronUp, CheckCircle, Circle, Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- 1. The Demo Data Structure ---
const initialModules = [
    {
        id: 1,
        title: "Aptitude & Logic",
        desc: "Master numerical and logical reasoning skills.",
        topicsCount: 3,
        topics: [
            { id: "1-1", title: "Quantitative Aptitude", questions: 5, time: "10 mins", questionDemo: "If A is 50% of B, what is B?" },
            { id: "1-2", title: "Logical Reasoning", questions: 5, time: "10 mins", questionDemo: "Find the next number: 2, 4, 8, 16..." },
            { id: "1-3", title: "Verbal Ability", questions: 5, time: "10 mins", questionDemo: "Synonym of 'Ephemeral'?" },
        ]
    },
    {
        id: 2,
        title: "Data Structures (DSA)",
        desc: "Arrays, Linked Lists, Trees, and Graphs.",
        topicsCount: 4,
        topics: [
            { id: "2-1", title: "Arrays & Strings", questions: 3, time: "15 mins", questionDemo: "Reverse a string in O(1) space." },
            { id: "2-2", title: "Linked Lists", questions: 3, time: "20 mins", questionDemo: "Detect a cycle in a linked list." },
            { id: "2-3", title: "Stacks & Queues", questions: 3, time: "20 mins", questionDemo: "Implement a Queue using Stacks." },
            { id: "2-4", title: "Trees", questions: 3, time: "30 mins", questionDemo: "Find the height of a binary tree." },
        ]
    },
    {
        id: 3,
        title: "Object Oriented Prog.",
        desc: "Classes, Objects, Inheritance.",
        topicsCount: 3,
        topics: [
            { id: "3-1", title: "Classes & Objects", questions: 2, time: "10 mins", questionDemo: "Define a class in C++." },
            { id: "3-2", title: "Inheritance", questions: 2, time: "15 mins", questionDemo: "Explain Multiple Inheritance." },
            { id: "3-3", title: "Polymorphism", questions: 2, time: "15 mins", questionDemo: "Runtime vs Compile-time Polymorphism." },
        ]
    },
    {
        id: 4,
        title: "DBMS",
        desc: "SQL, Normalization, Transactions.",
        topicsCount: 3,
        topics: [
            { id: "4-1", title: "SQL Basics", questions: 2, time: "10 mins", questionDemo: "Write a query to select unique names." },
            { id: "4-2", title: "Normalization", questions: 2, time: "15 mins", questionDemo: "Explain 3NF." },
            { id: "4-3", title: "Transactions", questions: 2, time: "15 mins", questionDemo: "What is ACID property?" },
        ]
    },
    {
        id: 5,
        title: "Computer Networks (CN)",
        desc: "OSI Model, TCP/IP, Security.",
        topicsCount: 3,
        topics: [
            { id: "5-1", title: "OSI Model", questions: 2, time: "10 mins", questionDemo: "List layers of OSI Model." },
            { id: "5-2", title: "TCP/IP", questions: 2, time: "15 mins", questionDemo: "Difference between TCP and UDP." },
            { id: "5-3", title: "HTTP/HTTPS", questions: 2, time: "15 mins", questionDemo: "How does SSL work?" },
        ]
    },
    {
        id: 6,
        title: "Theory of Computation",
        desc: "Finite Automata, Context Free Grammars.",
        topicsCount: 2,
        topics: [
            { id: "6-1", title: "Finite Automata", questions: 2, time: "15 mins", questionDemo: "Draw DFA for odd number of 1s." },
            { id: "6-2", title: "Context Free Grammars", questions: 2, time: "20 mins", questionDemo: "Define CFG." },
        ]
    }
];

export default function PrepPage() {
    const [expandedId, setExpandedId] = useState<number | null>(1);
    const [completedTopics, setCompletedTopics] = useState<string[]>([]); // Stores IDs like "1-1"
    const [activeQuestion, setActiveQuestion] = useState<any | null>(null); // For the Modal

    // --- Logic: Check if things are locked ---
    const isTopicLocked = (modIndex: number, topicIndex: number) => {
        // First topic of first module is always unlocked
        if (modIndex === 0 && topicIndex === 0) return false;

        // Previous topic in same module must be done
        if (topicIndex > 0) {
            const prevTopicId = initialModules[modIndex].topics[topicIndex - 1].id;
            return !completedTopics.includes(prevTopicId);
        }

        // If it's the first topic of a NEW module, previous MODULE must be done
        if (modIndex > 0) {
            const prevMod = initialModules[modIndex - 1];
            const prevModLastTopicId = prevMod.topics[prevMod.topics.length - 1].id;
            return !completedTopics.includes(prevModLastTopicId);
        }

        return true;
    };

    const isModuleLocked = (modIndex: number) => {
        if (modIndex === 0) return false;
        const prevMod = initialModules[modIndex - 1];
        // Module is locked if the LAST topic of previous module is not done
        const lastTopicId = prevMod.topics[prevMod.topics.length - 1].id;
        return !completedTopics.includes(lastTopicId);
    };

    // --- Actions ---
    const handleStartTopic = (topic: any) => {
        setActiveQuestion(topic);
    };

    const handleCompleteTopic = () => {
        if (activeQuestion) {
            setCompletedTopics([...completedTopics, activeQuestion.id]);
            setActiveQuestion(null); // Close modal

            // Auto-expand next module if we just finished the last topic of current module
            // (Optional simple UX improvement)
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8 pt-6 pb-20 relative">

            {/* Header */}
            <div className="flex items-end justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Daily Preparation Track</h1>
                    <p className="text-gray-400 mt-2 text-sm">Sequential Learning: Unlock modules one by one.</p>
                </div>
                <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 flex items-center gap-2">
                    <span className="text-sm font-bold text-orange-500">Demo Mode</span>
                    <span className="text-lg animate-pulse">🔥</span>
                </div>
            </div>

            {/* Modules List */}
            <div className="space-y-4">
                {initialModules.map((module, modIndex) => {
                    const isModLocked = isModuleLocked(modIndex);
                    const isOpen = expandedId === module.id;

                    // Calculate progress for badge
                    const modTopicIds = module.topics.map(t => t.id);
                    const completedCount = modTopicIds.filter(id => completedTopics.includes(id)).length;
                    const isModComplete = completedCount === module.topics.length;

                    return (
                        <motion.div
                            key={module.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${!isModLocked
                                    ? "bg-[#0f172a] border-blue-500/50 shadow-[0_0_30px_-10px_rgba(37,99,235,0.15)]"
                                    : "bg-[#0a0f1c] border-white/5 opacity-70"
                                }`}
                        >
                            {/* Module Header */}
                            <div
                                onClick={() => !isModLocked && setExpandedId(isOpen ? null : module.id)}
                                className={`p-6 flex items-start gap-5 cursor-pointer relative ${isModLocked ? "cursor-not-allowed" : ""}`}
                            >
                                {!isModLocked && <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 shadow-[0_0_10px_blue]" />}

                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold shrink-0 transition-colors ${!isModLocked ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30" : "bg-[#1e293b] text-gray-500"
                                    }`}>
                                    {module.id}
                                </div>

                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <h3 className={`text-xl font-bold ${!isModLocked ? "text-white" : "text-gray-400"}`}>
                                            {module.title}
                                        </h3>
                                        {isModLocked ? <Lock className="w-5 h-5 text-gray-600" /> : (isOpen ? <ChevronUp className="text-blue-400" /> : <ChevronDown className="text-gray-500" />)}
                                    </div>

                                    <div className="mt-3 flex items-center gap-2">
                                        <span className="text-[10px] uppercase font-bold tracking-wider bg-white/5 text-gray-400 px-2 py-1 rounded">
                                            {completedCount} / {module.topicsCount} Completed
                                        </span>
                                        {isModComplete && (
                                            <span className="text-[10px] uppercase font-bold tracking-wider bg-green-500/20 text-green-300 px-2 py-1 rounded">
                                                Done
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Topics List */}
                            <AnimatePresence>
                                {isOpen && !isModLocked && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="border-t border-white/5 bg-[#0b1221]"
                                    >
                                        <div className="p-2 space-y-1">
                                            {module.topics.map((topic, topicIndex) => {
                                                const isLocked = isTopicLocked(modIndex, topicIndex);
                                                const isCompleted = completedTopics.includes(topic.id);

                                                return (
                                                    <div key={topic.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group cursor-pointer mx-2 my-1">
                                                        <div className="flex items-center gap-3">
                                                            {isCompleted ? (
                                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                                            ) : isLocked ? (
                                                                <Lock className="w-4 h-4 text-gray-600" />
                                                            ) : (
                                                                <Play className="w-5 h-5 text-blue-400 fill-blue-400/20" />
                                                            )}

                                                            <div>
                                                                <p className={`text-sm font-medium ${isCompleted ? "text-gray-400 line-through" : "text-white"}`}>
                                                                    {topic.title}
                                                                </p>
                                                                <p className="text-xs text-gray-500">{topic.questions} Qs • {topic.time}</p>
                                                            </div>
                                                        </div>

                                                        {!isLocked && !isCompleted && (
                                                            <button
                                                                onClick={(e) => { e.stopPropagation(); handleStartTopic(topic); }}
                                                                className="text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg shadow-blue-500/20 transition-all hover:scale-105"
                                                            >
                                                                Start
                                                            </button>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>

            {/* --- DEMO QUESTION MODAL --- */}
            <AnimatePresence>
                {activeQuestion && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-[#1e293b] w-full max-w-lg rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
                        >
                            {/* Modal Header */}
                            <div className="p-6 border-b border-white/10 flex justify-between items-center">
                                <h3 className="text-xl font-bold text-white">Quick Check</h3>
                                <button onClick={() => setActiveQuestion(null)} className="text-gray-400 hover:text-white">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Modal Body */}
                            <div className="p-8">
                                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 block">
                                    {activeQuestion.title}
                                </span>
                                <h4 className="text-2xl font-medium text-white mb-6">
                                    {activeQuestion.questionDemo}
                                </h4>

                                <div className="space-y-3">
                                    {["Option A", "Option B", "Option C", "Option D"].map((opt, i) => (
                                        <div key={i} className="p-3 rounded-lg border border-white/10 hover:bg-white/5 cursor-pointer text-gray-300 hover:text-white transition-colors">
                                            {opt}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div className="p-6 border-t border-white/10 bg-[#0f172a] flex justify-end gap-3">
                                <button
                                    onClick={() => setActiveQuestion(null)}
                                    className="px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleCompleteTopic}
                                    className="px-6 py-2 rounded-lg bg-green-600 hover:bg-green-500 text-white font-bold shadow-lg shadow-green-500/20 transition-all"
                                >
                                    Submit & Unlock Next
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </div>
    );
}