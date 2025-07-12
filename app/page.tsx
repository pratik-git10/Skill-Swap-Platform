import Link from "next/link";

export default function HomePage() {
  return (
    <section className="py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to SkillSwap 🚀</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
        A place where people connect and exchange skills — no money, just mutual
        growth.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Link
          href="/browse"
          className="px-6 py-2 bg-neutral-600 text-white rounded-lg shadow hover:bg-neutral-700 transition transform ease-in-out duration-200">
          Browse Skills
        </Link>
        <Link
          href="/profile"
          className="px-6 py-2 border border-neutral-600 text-white-600 rounded-lg hover:bg-neutral-900">
          Create Profile
        </Link>
      </div>
    </section>
  );
}
