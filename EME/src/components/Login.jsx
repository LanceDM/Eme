import "./css/Login.css";
import { useState } from "react";
import { BlurPanel } from "./BlurPanel";

export function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e) {
        e.preventDefault();

        console.log("Logged in:", user, password);
    }

    return (
        <BlurPanel >
        <div className="login-root">
            <h2>Login</h2>

            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username or Email"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button 
                    type="submit"
                    className="login-submit"
                >
                    Login
                </button>
            </form>
        </div>
        </BlurPanel>
    );
}