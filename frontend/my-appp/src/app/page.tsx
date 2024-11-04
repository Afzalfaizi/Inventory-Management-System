"use client";

import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to Inventory Management</h1>
      <div className="mt-6 space-x-4">
        <Link href="/login" className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          Login
        </Link>
        <Link href="/register" className="px-6 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50">
          Register
        </Link>
      </div>
    </div>
  );
}
