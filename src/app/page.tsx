"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("Agent tested!");
    alert("Agent tested!");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Agent Test</h1>
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Test Agent
      </button>
      {message && <p className="mt-4 text-lg">{message}</p>}
    </main>
  );
}