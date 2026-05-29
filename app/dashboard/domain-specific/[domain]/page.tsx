"use client";

import { use, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    ArrowLeft,
    BookOpen,
    Code2,
    MessageSquare,
    RotateCcw,
    CheckCircle,
    Clock,
    Trophy,
    ChevronDown,
    ChevronUp,
    Zap,
    Coffee,
    GitBranch,
    Brain,
    LineChart,
    Cloud,
    Database,
    Flame,
    type LucideIcon,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    domains,
    type Domain,
    type DomainSection,
    type MCQQuestion,
    type InterviewQuestion,
    type CodingChallenge,
    type RevisionConcept,
} from "@/data/domains";

// ─── Icon Resolver ──────────────────────────────────────────────────────────────
const iconMap: Record<string, LucideIcon> = {
    Coffee,
    GitBranch,
    Brain,
    LineChart,
    Zap,
    Cloud,
    Database,
    Code2,
};

// ─── Section Tab Config ─────────────────────────────────────────────────────────
const sectionTabs = [
    { type: "practice", label: "Practice Questions", icon: BookOpen },
    { type: "interview", label: "Interview Questions", icon: MessageSquare },
    { type: "coding", label: "Coding Challenges", icon: Code2 },
    { type: "revision", label: "Quick Revision", icon: RotateCcw },
];

// ─── Color Utilities ────────────────────────────────────────────────────────────
function getColorClasses(color: string) {
    const map: Record<string, { bg: string; text: string; border: string; glow: string; tabActive: string }> = {
        orange: { bg: "bg-orange-500/10", text: "text-orange-400", border: "border-orange-500/20", glow: "bg-orange-500/20", tabActive: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
        green: { bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/20", glow: "bg-green-500/20", tabActive: "bg-green-500/20 text-green-400 border-green-500/30" },
        purple: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20", glow: "bg-purple-500/20", tabActive: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
        cyan: { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/20", glow: "bg-cyan-500/20", tabActive: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
        yellow: { bg: "bg-yellow-500/10", text: "text-yellow-400", border: "border-yellow-500/20", glow: "bg-yellow-500/20", tabActive: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
        sky: { bg: "bg-sky-500/10", text: "text-sky-400", border: "border-sky-500/20", glow: "bg-sky-500/20", tabActive: "bg-sky-500/20 text-sky-400 border-sky-500/30" },
        emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20", glow: "bg-emerald-500/20", tabActive: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
        pink: { bg: "bg-pink-500/10", text: "text-pink-400", border: "border-pink-500/20", glow: "bg-pink-500/20", tabActive: "bg-pink-500/20 text-pink-400 border-pink-500/30" },
    };
    return map[color] ?? map.blue;
}

// ─── Component ──────────────────────────────────────────────────────────────────
export default function DomainDetailPage({
    params,
}: {
    params: Promise<{ domain: string }>;
}) {
    const { domain: domainSlug } = use(params);
    const domain = domains.find((d) => d.id === domainSlug);

    const [activeTab, setActiveTab] = useState<string>("practice");
    const [expandedItem, setExpandedItem] = useState<string | null>(null);
    const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
    const [showAnswers, setShowAnswers] = useState<Record<string, boolean>>({});

    if (!domain) {
        return (
            <div className="max-w-4xl mx-auto pt-20 text-center space-y-6">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-red-500/10 flex items-center justify-center">
                    <span className="text-4xl">🔍</span>
                </div>
                <h1 className="text-2xl font-bold text-white">Domain Not Found</h1>
                <p className="text-gray-400">
                    The domain you're looking for doesn't exist.
                </p>
                <Link href="/dashboard/domain-specific">
                    <Button className="bg-blue-600 hover:bg-blue-500 text-white rounded-xl">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Domains
                    </Button>
                </Link>
            </div>
        );
    }

    const colors = getColorClasses(domain.color);
    const DomainIcon = iconMap[domain.icon] ?? Code2;
    const activeSection = domain.sections.find((s) => s.type === activeTab);

    const totalItems = domain.sections.reduce((sum, s) => sum + s.items.length, 0);
    const answeredCount = Object.keys(selectedAnswers).length + Object.keys(showAnswers).filter((k) => showAnswers[k]).length;

    const toggleExpand = (id: string) => {
        setExpandedItem(expandedItem === id ? null : id);
    };

    const handleSelectAnswer = (questionId: string, optionIndex: number) => {
        if (selectedAnswers[questionId] !== undefined) return; // already answered
        setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
    };

    const toggleShowAnswer = (id: string) => {
        setShowAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="max-w-5xl mx-auto space-y-8 pt-6 pb-20 animate-in fade-in duration-500">
            {/* Back Navigation */}
            <Link
                href="/dashboard/domain-specific"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm group"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                Back to Domains
            </Link>

            {/* Header */}
            <div className="relative overflow-hidden rounded-2xl bg-[#0f172a] border border-white/10 p-8">
                <div className={`absolute top-0 right-0 w-64 h-64 ${colors.glow} blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 opacity-40`} />

                <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6">
                    <div className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center shrink-0`}>
                        <DomainIcon className={`w-8 h-8 ${colors.text}`} />
                    </div>

                    <div className="flex-1 space-y-4">
                        <div>
                            <h1 className="text-3xl font-bold text-white tracking-tight">
                                {domain.name}
                            </h1>
                            <p className="text-gray-400 mt-1">{domain.description}</p>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap items-center gap-4">
                            <div className="flex items-center gap-2 text-sm">
                                <Trophy className="w-4 h-4 text-yellow-400" />
                                <span className="text-white font-semibold">{domain.progress}%</span>
                                <span className="text-gray-500">Complete</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Clock className="w-4 h-4 text-blue-400" />
                                <span className="text-gray-400">Est. {domain.estimatedTime}</span>
                            </div>
                            <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full ${domain.diffBadge}`}>
                                {domain.difficulty}
                            </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="max-w-md">
                            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${domain.progress}%` }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    className={`h-full rounded-full ${domain.progressBar}`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section Tabs */}
            <div className="flex flex-wrap gap-2">
                {sectionTabs.map((tab) => {
                    const isActive = activeTab === tab.type;
                    return (
                        <button
                            key={tab.type}
                            onClick={() => {
                                setActiveTab(tab.type);
                                setExpandedItem(null);
                            }}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 ${
                                isActive
                                    ? colors.tabActive
                                    : "bg-white/5 text-gray-400 border-white/5 hover:bg-white/10 hover:text-white"
                            }`}
                        >
                            <tab.icon className="w-4 h-4" />
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            {/* Section Content */}
            <div className="space-y-3">
                <AnimatePresence mode="wait">
                    {activeSection && (
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-3"
                        >
                            {activeSection.type === "practice" &&
                                (activeSection.items as MCQQuestion[]).map((item, idx) => (
                                    <MCQCard
                                        key={item.id}
                                        item={item}
                                        index={idx}
                                        isExpanded={expandedItem === item.id}
                                        selectedAnswer={selectedAnswers[item.id]}
                                        onToggle={() => toggleExpand(item.id)}
                                        onSelectAnswer={(optIdx) => handleSelectAnswer(item.id, optIdx)}
                                        colors={colors}
                                    />
                                ))}

                            {activeSection.type === "interview" &&
                                (activeSection.items as InterviewQuestion[]).map((item, idx) => (
                                    <InterviewCard
                                        key={item.id}
                                        item={item}
                                        index={idx}
                                        showAnswer={showAnswers[item.id] ?? false}
                                        onToggleAnswer={() => toggleShowAnswer(item.id)}
                                        colors={colors}
                                    />
                                ))}

                            {activeSection.type === "coding" &&
                                (activeSection.items as CodingChallenge[]).map((item, idx) => (
                                    <CodingCard
                                        key={item.id}
                                        item={item}
                                        index={idx}
                                        isExpanded={expandedItem === item.id}
                                        onToggle={() => toggleExpand(item.id)}
                                        colors={colors}
                                    />
                                ))}

                            {activeSection.type === "revision" &&
                                (activeSection.items as RevisionConcept[]).map((item, idx) => (
                                    <RevisionCard key={item.id} item={item} index={idx} colors={colors} />
                                ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Footer Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <Card className="bg-[#0f172a] border-white/10 p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                        <p className="text-lg font-bold text-white">{answeredCount}</p>
                        <p className="text-xs text-gray-400">Items Completed</p>
                    </div>
                </Card>
                <Card className="bg-[#0f172a] border-white/10 p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                        <Flame className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                        <p className="text-lg font-bold text-white">3 Day Streak</p>
                        <p className="text-xs text-gray-400">Keep it going!</p>
                    </div>
                </Card>
                <Card className="bg-[#0f172a] border-white/10 p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                        <Trophy className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                        <p className="text-lg font-bold text-white">
                            {domain.sections.length} Modules
                        </p>
                        <p className="text-xs text-gray-400">Total Sections</p>
                    </div>
                </Card>
            </div>
        </div>
    );
}

// ─── MCQ Card ───────────────────────────────────────────────────────────────────
function MCQCard({
    item,
    index,
    isExpanded,
    selectedAnswer,
    onToggle,
    onSelectAnswer,
    colors,
}: {
    item: MCQQuestion;
    index: number;
    isExpanded: boolean;
    selectedAnswer?: number;
    onToggle: () => void;
    onSelectAnswer: (idx: number) => void;
    colors: ReturnType<typeof getColorClasses>;
}) {
    const hasAnswered = selectedAnswer !== undefined;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
        >
            <Card className="bg-[#0f172a] border-white/10 overflow-hidden hover:border-white/20 transition-colors">
                <button
                    onClick={onToggle}
                    className="w-full p-5 flex items-start justify-between text-left"
                >
                    <div className="flex items-start gap-3">
                        <span className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                            hasAnswered
                                ? item.options[selectedAnswer!].isCorrect
                                    ? "bg-green-500/20 text-green-400"
                                    : "bg-red-500/20 text-red-400"
                                : `${colors.bg} ${colors.text}`
                        }`}>
                            {hasAnswered ? (item.options[selectedAnswer!].isCorrect ? "✓" : "✗") : `Q${index + 1}`}
                        </span>
                        <p className="text-sm text-white font-medium">{item.question}</p>
                    </div>
                    {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-gray-500 shrink-0 ml-3" />
                    ) : (
                        <ChevronDown className="w-4 h-4 text-gray-500 shrink-0 ml-3" />
                    )}
                </button>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="border-t border-white/5"
                        >
                            <div className="p-5 space-y-2">
                                {item.options.map((opt, optIdx) => {
                                    let optClass = "bg-white/5 border-white/5 text-gray-300 hover:bg-white/10 hover:border-white/10";
                                    if (hasAnswered) {
                                        if (opt.isCorrect) {
                                            optClass = "bg-green-500/10 border-green-500/30 text-green-300";
                                        } else if (optIdx === selectedAnswer && !opt.isCorrect) {
                                            optClass = "bg-red-500/10 border-red-500/30 text-red-300";
                                        } else {
                                            optClass = "bg-white/5 border-white/5 text-gray-500";
                                        }
                                    }

                                    return (
                                        <button
                                            key={optIdx}
                                            onClick={() => onSelectAnswer(optIdx)}
                                            disabled={hasAnswered}
                                            className={`w-full text-left p-3 rounded-xl border text-sm transition-all flex items-center gap-3 ${optClass}`}
                                        >
                                            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center shrink-0 text-[10px]">
                                                {hasAnswered && opt.isCorrect ? "✓" : String.fromCharCode(65 + optIdx)}
                                            </span>
                                            {opt.text}
                                        </button>
                                    );
                                })}

                                {hasAnswered && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-3 p-3 rounded-xl bg-blue-500/5 border border-blue-500/10"
                                    >
                                        <p className="text-xs text-blue-300">{item.explanation}</p>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Card>
        </motion.div>
    );
}

// ─── Interview Card ─────────────────────────────────────────────────────────────
function InterviewCard({
    item,
    index,
    showAnswer,
    onToggleAnswer,
    colors,
}: {
    item: InterviewQuestion;
    index: number;
    showAnswer: boolean;
    onToggleAnswer: () => void;
    colors: ReturnType<typeof getColorClasses>;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
        >
            <Card className="bg-[#0f172a] border-white/10 p-5 space-y-3 hover:border-white/20 transition-colors">
                <div className="flex items-start gap-3">
                    <span className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 ${colors.bg} ${colors.text}`}>
                        {index + 1}
                    </span>
                    <div className="flex-1">
                        <p className="text-sm text-white font-medium">{item.question}</p>

                        <button
                            onClick={onToggleAnswer}
                            className={`mt-3 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all ${
                                showAnswer
                                    ? `${colors.bg} ${colors.text} ${colors.border}`
                                    : "bg-white/5 text-gray-400 border-white/5 hover:bg-white/10"
                            }`}
                        >
                            {showAnswer ? "Hide Answer" : "Show Answer"}
                        </button>

                        <AnimatePresence>
                            {showAnswer && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="mt-3 overflow-hidden"
                                >
                                    <div className={`p-3 rounded-xl bg-white/5 border ${colors.border}`}>
                                        <p className="text-sm text-gray-300 leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </Card>
        </motion.div>
    );
}

// ─── Coding Card ────────────────────────────────────────────────────────────────
function CodingCard({
    item,
    index,
    isExpanded,
    onToggle,
    colors,
}: {
    item: CodingChallenge;
    index: number;
    isExpanded: boolean;
    onToggle: () => void;
    colors: ReturnType<typeof getColorClasses>;
}) {
    const diffColors: Record<string, string> = {
        Easy: "bg-green-500/10 text-green-400",
        Medium: "bg-yellow-500/10 text-yellow-400",
        Hard: "bg-red-500/10 text-red-400",
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
        >
            <Card className="bg-[#0f172a] border-white/10 overflow-hidden hover:border-white/20 transition-colors">
                <button
                    onClick={onToggle}
                    className="w-full p-5 flex items-start justify-between text-left"
                >
                    <div className="flex items-start gap-3">
                        <span className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 ${colors.bg} ${colors.text}`}>
                            <Code2 className="w-3.5 h-3.5" />
                        </span>
                        <div>
                            <p className="text-sm text-white font-medium">{item.title}</p>
                            <span className={`inline-block mt-1.5 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded ${diffColors[item.difficulty]}`}>
                                {item.difficulty}
                            </span>
                        </div>
                    </div>
                    {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-gray-500 shrink-0 ml-3" />
                    ) : (
                        <ChevronDown className="w-4 h-4 text-gray-500 shrink-0 ml-3" />
                    )}
                </button>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="border-t border-white/5"
                        >
                            <div className="p-5 space-y-3">
                                <p className="text-sm text-gray-300">{item.description}</p>
                                <div className={`p-3 rounded-xl bg-white/5 border ${colors.border}`}>
                                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1.5">
                                        Approach
                                    </p>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Card>
        </motion.div>
    );
}

// ─── Revision Card ──────────────────────────────────────────────────────────────
function RevisionCard({
    item,
    index,
    colors,
}: {
    item: RevisionConcept;
    index: number;
    colors: ReturnType<typeof getColorClasses>;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
        >
            <Card className={`bg-[#0f172a] border-white/10 p-5 hover:border-white/20 transition-colors`}>
                <div className="flex items-start gap-3">
                    <span className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 ${colors.bg} ${colors.text}`}>
                        <RotateCcw className="w-3.5 h-3.5" />
                    </span>
                    <div>
                        <h3 className="text-sm font-bold text-white">{item.title}</h3>
                        <p className="text-sm text-gray-400 mt-1.5 leading-relaxed">
                            {item.summary}
                        </p>
                    </div>
                </div>
            </Card>
        </motion.div>
    );
}
