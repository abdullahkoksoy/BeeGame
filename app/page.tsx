import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-24 bg-gradient-to-b from-teal-700 to-teal-500">
      <div className="text-white text-5xl justify-center items-center font-semibold">
        Bee&nbsp;Game
      </div>
      <div className="grid grid-cols-2 gap-4 m-10">
        <Link href="/en">
          <img
            src="/images/en.png"
            alt=""
            className="w-32 hover:border-2 border-white rounded-full cursor-pointer"
          />
        </Link>
        <Link href="/tr">
          <img
            src="/images/tr.png"
            alt=""
            className="w-32 hover:border-2 border-white rounded-full cursor-pointer"
          />
        </Link>
      </div>
      <button className="text-teal-500 text-3xl font-semibold bg-white rounded-2xl m-6 pl-6 pr-6 cursor-default">
        Choose Language
      </button>
    </main>
  );
}
