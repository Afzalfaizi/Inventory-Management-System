"use client";

import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between px-6 py-4 bg-blue-500 text-white">
      <h1 className="text-2xl">Inventory System</h1>
      <nav>
        <Link href="/dashboard" className="px-4 hover:underline">
          Dashboard
        </Link>
        <Link href="/" className="px-4 hover:underline">
          Logout
        </Link>
      </nav>
    </header>
  );
}
