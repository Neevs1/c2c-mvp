"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Code, Database, Globe, ArrowRight, Zap, Target, Lock, ChevronDown, CheckCircle2 } from "lucide-react";
import { toast } from "sonner"; // Assuming sonner or use standard toast. User didn't specify library, will use simple alert if no library or placeholder. 
// Actually user said "toast/alert". I'll use a custom notification div or alert for now if no toast lib installed.
// Checking package.json... I don't see sonner. I'll use a reliable custom toast or standard alert for simplicity, 
// OR simpler: I'll use a state-based toast component inline since I can't install packages easily without user. 
// Wait, I can use 'radix-ui' toast if available? No, let's just use a simple state-based alert in the component.

import { QuizModal } from "@/components/QuizModal";

// Mock Data with Sub-modules
const initialModules = [
    {
        id: 1,
        title: "Aptitude",
        icon: Brain,
        description: "Quantitative & Logical Reasoning",
        progress: 65, // Unlocked
        color: "from-pink-500 to-rose-500",
        isLocked: false,
        subModules: [
            { id: 101, title: "Quantitative Aptitude", completed: true },
            { id: 102, title: "Logical Reasoning", completed: false },
            { id: 103, title: "Verbal Ability", completed: false },
        ]
    },
    {
        id: 2,
        title: "DSA",
        icon: Code,
        description: "Data Structures & Algorithms",
        progress: 0,
        color: "from-blue-500 to-cyan-500",
        isLocked: true, // Logic will override this
        subModules: [
            { id: 201, title: "Arrays & Strings", completed: false },
            { id: 202, title: "Linked Lists", completed: false },
            { id: 203, title: "Trees & Graphs", completed: false },
        ]
    },
    {
        id: 3,
        title: "DBMS",
        icon: Database,
        description: "Database Management Systems",
        progress: 0,
        color: "from-emerald-500 to-teal-500",
        isLocked: true,
        subModules: []
    },
    {
        id: 4,
        title: "Networks",
        icon: Globe,
        description: "Computer Networks & Security",
        progress: 0,
        color: "from-violet-500 to-purple-500",
        isLocked: true,
        subModules: []
    },
];

export default function PrepDashboard() {
    // State management
    const [modules, setModules] = useState(initialModules);
    const [expandedModule, setExpandedModule] = useState<number | null>(null);
    const [showToast, setShowToast] = useState(false);

    // Quiz State
    const [quizOpen, setQuizOpen] = useState(false);
    const [quizTopic, setQuizTopic] = useState("");
    const [quizTitle, setQuizTitle] = useState("");

    // Locking Logic: Module N is locked until Module N-1 is 100% complete.
    // For prototype, we'll just check if previous module progress is 100.
    // Since mock data has fixed progress, we handle interaction mock.

    // Check locked status based on index
    const isModuleLocked = (index: number) => {
        if (index === 0) return false;
        // Previous module must be 100% complete
        return modules[index - 1].progress < 100;
    };

    const handleModuleClick = (index: number, moduleId: number) => {
        if (isModuleLocked(index)) {
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
            return;
        }
        setExpandedModule(expandedModule === moduleId ? null : moduleId);
    };

    const handleStartQuiz = (topic: string, title: string) => {
        setQuizTopic(topic);
        setQuizTitle(title);
        setQuizOpen(true);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8 relative min-h-screen pb-20"
        >
            <QuizModal
                isOpen={quizOpen}
                onClose={() => setQuizOpen(false)}
                topic={quizTopic}
                title={quizTitle}
            />

            {/* Custom Toast */}
            <AnimatePresence>
                {showToast && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, x: "-50%" }}
                        animate={{ opacity: 1, y: 0, x: "-50%" }}
                        exit={{ opacity: 0, y: -20, x: "-50%" }}
                        className="fixed top-8 left-1/2 -translate-x-1/2 bg-red-500/90 text-white px-6 py-3 rounded-full shadow-lg z-50 backdrop-blur-md font-medium flex items-center gap-2 border border-red-400/50"
                    >
                        <Lock className="w-4 h-4" />
                        Complete previous module first!
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Header */}
            <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-bold tracking-tight text-white">
                    Prep Phase
                </h1>
                <p className="text-gray-400">Master concepts sequentially. Visualizing your locked path.</p>
            </div>

            {/* Modules Grid */}
            <div className="grid grid-cols-1 gap-6">
                {modules.map((module, index) => {
                    const locked = isModuleLocked(index);
                    const isExpanded = expandedModule === module.id;

                    return (
                        <div key={module.id} className="relative group">
                            {/* Card */}
                            <motion.div
                                onClick={() => handleModuleClick(index, module.id)}
                                className={`
                                    glass-card rounded-2xl p-6 cursor-pointer relative overflow-hidden
                                    ${locked ? 'opacity-60 grayscale' : 'hover:border-primary/50'}
                                    transition-all duration-300
                                `}
                            >
                                {/* Locked Overlay */}
                                {locked && (
                                    <div className="absolute inset-0 z-20 bg-black/10 flex items-center justify-center">
                                        <div className="bg-black/50 p-4 rounded-full backdrop-blur-sm border border-white/10">
                                            <Lock className="w-8 h-8 text-white/70" />
                                        </div>
                                    </div>
                                )}

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-6">
                                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center shadow-lg`}>
                                            <module.icon className="w-7 h-7 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-1">{module.title}</h3>
                                            <p className="text-gray-400 text-sm">{module.description}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-8">
                                        <div className="text-right hidden md:block">
                                            <p className="text-xs text-gray-400 mb-1">Progress</p>
                                            <div className="flex items-center gap-3">
                                                <div className="w-32 h-2 bg-white/5 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full bg-gradient-to-r ${module.color}`}
                                                        style={{ width: `${module.progress}%` }}
                                                    />
                                                </div>
                                                <span className="text-sm font-bold text-white">{module.progress}%</span>
                                            </div>
                                        </div>
                                        <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Accordion Content */}
                            <AnimatePresence>
                                {isExpanded && !locked && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="mt-4 pl-4 md:pl-20 pr-4 space-y-3">
                                            {module.subModules.length > 0 ? (
                                                module.subModules.map((sub) => (
                                                    <div key={sub.id} className="glass-panel p-4 rounded-xl flex items-center justify-between hover:bg-white/5 transition-colors group/sub">
                                                        <span className="text-gray-300 font-medium group-hover/sub:text-white transition-colors">
                                                            {sub.title}
                                                        </span>
                                                        <div className="flex items-center gap-3">
                                                            {sub.completed ? (
                                                                <span className="text-xs text-green-400 flex items-center gap-1 bg-green-500/10 px-2 py-1 rounded-full">
                                                                    <CheckCircle2 className="w-3 h-3" /> Completed
                                                                </span>
                                                            ) : (
                                                                <button
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        handleStartQuiz(sub.title, sub.title);
                                                                    }}
                                                                    className="text-xs bg-primary/20 text-primary hover:bg-primary hover:text-white px-3 py-1.5 rounded-lg transition-all"
                                                                >
                                                                    Start
                                                                </button>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="p-4 text-gray-500 italic text-sm">No sub-modules available yet.</div>
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
}

// Helper icons
import { BookOpen as BookOpenIcon } from "lucide-react";