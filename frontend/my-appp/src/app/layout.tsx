import './globals.css'; // Adjusted path for global styles
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex bg-background text-text-dark">
        <Sidebar />
        <div className="flex flex-col flex-grow">
          <Navbar />
          <main className="p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
