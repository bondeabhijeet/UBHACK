import React, { useState } from "react";

export default function SignInPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedUser = username.trim();
    const trimmedPass = password.trim();

    if (!trimmedUser || !trimmedPass) {
      setError("Please enter both username and password.");
      return;
    }

    // Demo: accept any non-empty credentials.
    localStorage.setItem("signedIn", "true");
    localStorage.setItem("username", trimmedUser);
    window.location.replace("1.html");
  };

  const handleDemo = () => {
    localStorage.setItem("signedIn", "true");
    localStorage.setItem("username", "demo-user");
    window.location.replace("1.html");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        fontFamily:
          "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
        background: "#f3f4f6",
      }}
    >
      <div
        className="bg-white rounded-xl shadow-lg p-8"
        style={{ width: 380, maxWidth: "calc(100% - 32px)" }}
      >
        <h1 className="text-2xl font-bold mb-4">Sign in to continue</h1>
        <p className="text-sm text-gray-600 mb-6">
          Enter any username and password to continue to Academic Monopoly
          (demo).
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col text-sm">
            <span className="mb-1">Username</span>
            <input
              id="username"
              name="username"
              type="text"
              className="border rounded px-3 py-2"
              required
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                if (error) setError("");
              }}
            />
          </label>

          <label className="flex flex-col text-sm">
            <span className="mb-1">Password</span>
            <input
              id="password"
              name="password"
              type="password"
              className="border rounded px-3 py-2"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (error) setError("");
              }}
            />
          </label>

          <div className="flex items-center justify-between mt-2">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Sign in
            </button>
            <button
              type="button"
              onClick={handleDemo}
              className="text-sm text-blue-600 underline"
            >
              Use demo
            </button>
          </div>
        </form>

        {error && (
          <p className="text-red-600 text-sm mt-3">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}
