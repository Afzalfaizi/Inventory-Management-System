"use client";

import { useEffect, useState } from 'react';
import { fetchInventory } from '../services/apiService';
import InventoryItem from './InventoryItem';

export default function InventoryList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchInventory().then(setItems);
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <InventoryItem key={item.id} item={item} />
      ))}
    </div>
  );
}
