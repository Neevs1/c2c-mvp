"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trophy, AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { getQuestions, type Question } from "@/data/quiz";
import { Button } from "@/components/ui/button";

interface QuizModalProps {
    isOpen: boolean;
    onClose: () => void;
    topic: string;
    title: string;
}

export function QuizModal({ isOpen, onClose, topic, title }: QuizModalProps) {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);

    useEffect(() => {
        if (isOpen) {
            // Reset state when opening
            const q = getQuestions(topic);
            setQuestions(q);
            setCurrentQuestionIndex(0);
            setScore(0);
            setShowResult(false);
            setSelectedOption(null);
            setIsAnswered(false);
        }
    }, [isOpen, topic]);

    const handleOptionClick = (index: number) => {
        if (isAnswered) return;
        setSelectedOption(index);
        setIsAnswered(true);

        if (index === questions[currentQuestionIndex].correctAnswer) {
            setScore((prev) => prev + 1);
        }
    };

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
            setSelectedOption(null);
            setIsAnswered(false);
        } else {
            setShowResult(true);
        }
    };

    if (!isOpen) return null;

    const currentQuestion = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-2xl bg-black/80 border border-white/10 rounded-3xl shadow-2xl overflow-hidden relative flex flex-col max-h-[90vh]"
            >
                {/* Background Details */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/5 relative z-10">
                    <div>
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <span className="text-primary">⚡</span> {title} Quiz
                        </h2>
                        <p className="text-xs text-gray-400">Test your knowledge</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 relative z-10 flex-1 overflow-y-auto custom-scrollbar">
                    <AnimatePresence mode="wait">
                        {!showResult ? (
                            <motion.div
                                key="question"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                {/* Progress Bar */}
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs text-gray-400 uppercase tracking-wider">
                                        <span>Question {currentQuestionIndex + 1}/{questions.length}</span>
                                        <span>{Math.round(progress)}% Complete</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${progress}%` }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </div>
                                </div>

                                {/* Question */}
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white leading-relaxed">
                                        {currentQuestion?.question}
                                    </h3>
                                </div>

                                {/* Options */}
                                <div className="grid gap-3">
                                    {currentQuestion?.options.map((option, index) => {
                                        let optionClass = "border-white/10 hover:border-primary/50 hover:bg-white/5";

                                        if (isAnswered) {
                                            if (index === currentQuestion.correctAnswer) {
                                                optionClass = "border-green-500/50 bg-green-500/10 text-green-200";
                                            } else if (index === selectedOption) {
                                                optionClass = "border-red-500/50 bg-red-500/10 text-red-200";
                                            } else {
                                                optionClass = "border-white/5 opacity-50";
                                            }
                                        } else if (selectedOption === index) {
                                            optionClass = "border-primary bg-primary/10 text-white";
                                        }

                                        return (
                                            <motion.button
                                                key={index}
                                                whileHover={!isAnswered ? { scale: 1.01 } : {}}
                                                whileTap={!isAnswered ? { scale: 0.99 } : {}}
                                                onClick={() => handleOptionClick(index)}
                                                disabled={isAnswered}
                                                className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group ${optionClass}`}
                                            >
                                                <span className="font-medium">{option}</span>
                                                {isAnswered && index === currentQuestion.correctAnswer && (
                                                    <CheckCircle2 size={18} className="text-green-500" />
                                                )}
                                                {isAnswered && index === selectedOption && index !== currentQuestion.correctAnswer && (
                                                    <AlertCircle size={18} className="text-red-500" />
                                                )}
                                            </motion.button>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="result"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center space-y-6 py-8"
                            >
                                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-xl shadow-orange-500/20">
                                    <Trophy size={48} className="text-white drop-shadow-md" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-3xl font-bold text-white">Quiz Completed!</h3>
                                    <p className="text-gray-400">You scored <span className="text-primary font-bold text-xl">{score}</span> out of <span className="text-white font-bold">{questions.length}</span></p>
                                </div>

                                <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto text-sm">
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                        <div className="text-gray-400 mb-1">Accuracy</div>
                                        <div className="text-xl font-bold text-white">{Math.round((score / questions.length) * 100)}%</div>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                        <div className="text-gray-400 mb-1">Time</div>
                                        <div className="text-xl font-bold text-white">2:15</div>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <Button
                                        onClick={onClose}
                                        className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-bold shadow-lg shadow-white/10 hover:shadow-white/20 transition-all font-sans"
                                    >
                                        Back to Dashboard
                                    </Button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Footer Controls */}
                {!showResult && (
                    <div className="p-6 border-t border-white/5 bg-black/40 backdrop-blur-md relative z-10 flex justify-end">
                        <Button
                            onClick={handleNext}
                            disabled={!isAnswered}
                            className={`
                                rounded-full px-6 py-2 transition-all duration-300 flex items-center gap-2
                                ${isAnswered
                                    ? 'bg-white text-black hover:bg-gray-200'
                                    : 'bg-white/10 text-gray-500 cursor-not-allowed hover:bg-white/10'
                                }
                            `}
                        >
                            {currentQuestionIndex === questions.length - 1 ? "Finish" : "Next Question"}
                            <ArrowRight size={16} />
                        </Button>
                    </div>
                )}
            </motion.div>
        </div>
    );
}

// Add custom scrollbar styles to global css or via updated tailwind logic if needed,
// for now `custom-scrollbar` class is a placeholder or relies on standards.
