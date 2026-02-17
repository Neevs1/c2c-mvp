"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (!user) {
            router.push("/");
        } else {
            setAuthorized(true);
        }
    }, [router]);

    
    if (!authorized) return null; 

    return <>{children}</>;
}