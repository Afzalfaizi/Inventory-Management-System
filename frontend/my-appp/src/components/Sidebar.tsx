import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-primary text-white h-screen p-4">
      <nav className="space-y-4">
        <Link href="/dashboard" className="block py-2 px-4 rounded-lg hover:bg-secondary">
          Dashboard
        </Link>
        <Link href="/inventory" className="block py-2 px-4 rounded-lg hover:bg-secondary">
          Inventory
        </Link>
        <Link href="/settings" className="block py-2 px-4 rounded-lg hover:bg-secondary">
          Settings
        </Link>
      </nav>
    </aside>
  );
}
