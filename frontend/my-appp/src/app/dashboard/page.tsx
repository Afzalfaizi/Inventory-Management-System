"use client";

import InventoryList from '../../components/InventoryList';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Inventory Dashboard</h1>
      <InventoryList />
    </div>
  );
}
