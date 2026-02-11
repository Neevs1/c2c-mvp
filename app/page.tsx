"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const router = useRouter();
  var user = localStorage.getItem("user");
  if(user){
    router.push('/dashboard');
  }
  return (
   <div className="min-h-screen bg-[#030712]">
    <div className='min-h-20 ml-5 mt-10 mr-5 p-4 bg-[#111827] backdrop-blur-lg border-white rounded-xl'>
      <h1 className='float-left font-mono text-4xl text-center font-bond'>Campus2Corporate</h1>
      <div className='float-right'>
       <div className="inline-flex font-mono">
        <button className="rounded-l-sm border border-gray-200 px-3 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white focus:outline-none disabled:pointer-events-auto disabled:opacity-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white dark:focus:ring-offset-gray-900">
        For Colleges
        </button>

       <Link href="/login">
        <button className="-ml-px border border-gray-200 px-3 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white focus:outline-none disabled:pointer-events-auto disabled:opacity-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white dark:focus:ring-offset-gray-900">
        Login
        </button>
       </Link>
       <Link href="/signup">
        <button className="-ml-px rounded-r-sm border border-gray-200 px-3 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white focus:outline-none disabled:pointer-events-auto disabled:opacity-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white dark:focus:ring-offset-gray-900">
        Sign Up
       </button>
       </Link>
      </div>
    </div>
    </div>
    <div className='flex'>
      <div className="mt-20 ">
      <h1 className="text-6xl text-shadow-xl text-shadow-[#2563eb] font-sans color-[#e5e7eb]">Bridge the gap</h1>
      <h2 className="text-4xl text-shadow-md font-sans color-[#e5e7eb]">The corporate jump has never been easier</h2>
      <div className='justify-center items-center'>
        <button className="flex px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#2563eb] rounded-lg hover:bg-[#0ea5e9] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
      Join the revolution  <ArrowRight />
        </button>
      </div>
    </div>
    </div>
   
   </div>
  );
}