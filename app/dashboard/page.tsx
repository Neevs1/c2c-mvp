"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function dashboard(){
    const router = useRouter();
    const [msg,setMsg] = useState("");

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

    return(
        <div>
            <h1>Hello World!</h1>
            <p>{msg}</p>
            <button onClick={logout}>Logout</button>
        </div>
    )
}