"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '../../services/apiService';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(username, password);
    if (success) router.push('/dashboard');
    else alert('Invalid credentials');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-3xl font-bold text-blue-600">Login</h1>
      <form onSubmit={handleLogin} className="flex flex-col mt-4 space-y-3">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border rounded"
        />
        <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Login</button>
      </form>
    </div>
  );
}
