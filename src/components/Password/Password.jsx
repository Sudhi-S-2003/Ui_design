import { useState } from "react";

function Password() {
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    return (
        <div className="max-w-sm mx-auto p-4 bg-gray-50 rounded-lg shadow-md">
            <div className="mb-4">
                <input
                    type="password"
                    placeholder="Enter password"
                    className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className="relative mb-4">
                <input
                    type="password"
                    placeholder="Confirm password"
                    className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={confirmpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>

            {/* Optional: Show an error message if passwords don't match */}
            {password && confirmpassword && password !== confirmpassword && (
                <div className="text-red-500 text-sm">
                    Passwords do not match!
                </div>
            )}
        </div>
    );
}

export default Password;
