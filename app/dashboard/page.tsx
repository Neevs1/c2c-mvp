"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function dashboard(){
    const router = useRouter();
    const [msg,setMsg] = useState("");
    const [usermail,setUsermail] = useState("");

    useEffect(() => {
        //If there is no user in local storage, redirect to / i.e. our landing page
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
            router.push("/");
        }
    }, [router]);

    useEffect(() => {
  const fetchData = async () => {
    const res = await fetch("/api/py/status");
    const data = await res.json();
    setMsg(data.status);
     // "Hello from FastAPI!"
  };
  fetchData();
}, []);
    
    function logout(){
        //Removes stored email corresponding to "user". Redirects to landing page after successfull
        localStorage.removeItem("user");
        router.push("/");

    }
    useEffect(() => {
        
        setUsermail(localStorage.getItem("user")!);
    },[]);

    return(
        <div className="bg-[#030712]">
            <div className="min-w-screen min-h-20 bg-[ #111827] mt-10 font-sans">
                <h1 className="p-4 text-4xl">Welcome {usermail}</h1>
            </div>
            
            <p>{msg}</p>
            <button className="bg-[#2563eb] hover:bg-[#0ea5e9]" onClick={logout}>Logout</button>
            <button className="bg-[#2563eb] hover:bg-[#0ea5e9]" onClick={logout}>Interview phase</button>
            <h3>Or revise these topics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div><p>Aptitude</p></div>
                <div><p>Data Structures & Algorithms </p></div>
                <div><p>Object oriented programming</p></div>
                <div><p>Database Management</p></div>
                <div><p>Networking</p></div>
            </div>
        </div>
    )
}