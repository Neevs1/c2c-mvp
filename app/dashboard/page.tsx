"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function dashboard(){
    const router = useRouter();

    useEffect(() => {
        //If there is no user in local storage, redirect to / i.e. our landing page
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
            router.push("/");
        }
    }, [router]);
    
    function logout(){
        //Removes stored email corresponding to "user". Redirects to landing page after successfull
        localStorage.removeItem("user");
        router.push("/");

    }

    return(
        <div>
            <h1>Hello World!</h1>
            <button onClick={logout}>Logout</button>
        </div>
    )
}