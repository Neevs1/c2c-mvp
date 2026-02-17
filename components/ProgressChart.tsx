"use client";

import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    ScriptableContext
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Card } from "@/components/ui/card";

// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export function ProgressChart() {
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Performance Score',
                data: [65, 59, 80, 81, 56, 95, 88],
                fill: true,
                backgroundColor: (context: ScriptableContext<"line">) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
                    gradient.addColorStop(0, 'rgba(56, 189, 248, 0.5)'); // Cyan with opacity
                    gradient.addColorStop(1, 'rgba(56, 189, 248, 0)');   // Transparent
                    return gradient;
                },
                borderColor: 'rgb(56, 189, 248)', // Cyan
                borderWidth: 2,
                tension: 0.4, // Smooth curves
                pointBackgroundColor: 'rgb(56, 189, 248)',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
            tooltip: {
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                titleColor: '#fff',
                bodyColor: '#cbd5e1',
                borderColor: 'rgba(56, 189, 248, 0.2)',
                borderWidth: 1,
                padding: 10,
                cornerRadius: 8,
                displayColors: false,
                callbacks: {
                    label: (context: any) => `Score: ${context.parsed.y}`,
                },
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                grid: {
                    color: 'rgba(255, 255, 255, 0.05)',
                },
                ticks: {
                    color: '#94a3b8',
                    font: {
                        size: 11
                    }
                },
                border: {
                    display: false
                }
            },
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: '#94a3b8',
                    font: {
                        size: 11
                    }
                },
                border: {
                    display: false
                }
            },
        },
        interaction: {
            mode: 'index' as const,
            intersect: false,
        },
    };

    return (
        <Card className="glass-card p-6 border-white/5 bg-white/5 relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="flex items-center justify-between mb-6 relative z-10">
                <div>
                    <h3 className="text-xl font-bold text-white">Weekly Progress</h3>
                    <p className="text-gray-400 text-sm mt-1">Track your performance stats</p>
                </div>
                <div className="flex gap-2">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-primary/10 text-primary border border-primary/20 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        Live Stats
                    </span>
                </div>
            </div>

            <div className="h-[300px] w-full relative z-10">
                <Line data={data} options={options} />
            </div>
        </Card>
    );
}
