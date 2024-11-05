import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <Header />
      <main className="text-center py-12">
        <h1 className="text-5xl font-bold text-primary mb-4">Welcome to Your Inventory System</h1>
        <p className="text-lg text-gray-600">Effortlessly manage and track your inventory.</p>
      </main>
      <Footer />
    </div>
  );
}
