import Link from "next/link";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex w-full max-w-110 flex-col items-center space-y-1 rounded-md border px-15 py-5">
        <h2 className="text-2xl font-semibold">Plan your meals.</h2>
        <h2 className="text-2xl font-semibold">Save your time.</h2>
        <h2 className="mb-15 text-2xl font-semibold">Eat better</h2>
        <Link
          className="bg-primary text-primary-foreground hover:bg-chart-2 rounded-md px-4 py-2 shadow-xs"
          href="/sign-up"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export { Home };
