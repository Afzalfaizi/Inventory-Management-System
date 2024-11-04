"use client";

export default function InventoryItem({ item }) {
  return (
    <div className="p-4 bg-white border rounded shadow">
      <h2 className="text-xl font-bold">{item.name}</h2>
      <p>Category: {item.category}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Reorder Level: {item.reorder_level}</p>
    </div>
  );
}
