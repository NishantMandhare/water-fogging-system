"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async () => {
        try {
            const data = await api.post("/auth/login", { email, password });
            localStorage.setItem("token", data.token);
            router.push("/dashboard");
        } catch (error) {
            alert("Login failed: " + (error as Error).message);
        }
    };

    return (
        <div style={{ padding: "40px" }}>
            <h1>Login</h1>
            <div>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}