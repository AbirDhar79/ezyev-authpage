export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold">Welcome to EzyEV!</h1>
      <p className="mt-4 text-lg">
        Explore our platform and login to access the protected pages.
      </p>
      <div className="mt-6">
        <a
          href="/login"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Login
        </a>
      </div>
    </div>
  );
}
