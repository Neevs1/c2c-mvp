"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LandingPage() {
  const router = useRouter();

  useEffect(() => {
    // Auth check moved to useEffect to prevent render-phase updates
    const user = localStorage.getItem("user");
    if (user) {
      router.push("/dashboard");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-[#030712] text-white flex flex-col">
      {/* Navbar */}
      <nav className="border-b border-white/10 bg-[#111827]/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <span className="text-xl font-bold tracking-tight">
               Campus to Corporate
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/login">
                <button className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                  Login
                </button>
              </Link>
              <Link href="/signup">
                <button className="text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center relative overflow-hidden">
        <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-8 z-10">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Bridge the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">gap</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-[600px] mx-auto">
              Master technical skills, crack interviews, and land your dream job with our comprehensive placement preparation platform.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 min-w-[300px] sm:min-w-0">
            <Link href="/signup">
              <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-blue-600 px-8 font-medium text-white transition-all duration-300 hover:bg-sky-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]">
                <span className="mr-2">Get Started</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
            <button className="inline-flex h-12 items-center justify-center rounded-md border border-white/10 bg-white/5 px-8 font-medium text-white transition-colors hover:bg-white/10 hover:text-white">
              Learn More
            </button>
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#111827]/50 py-8">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          All rights reserved.
        </div>
      </footer>
    </div>
  );
}