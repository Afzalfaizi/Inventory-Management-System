import Button from '../../components/Button';

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h2 className="text-3xl font-bold mb-6">Login to Your Account</h2>
      <form className="w-full max-w-md p-6 bg-white rounded shadow-lg space-y-4">
        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded"
        />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}
