import Image from "next/image";
import { Countdown } from "@/components/Countdown";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-4 max-w-4xl mx-auto">
      <Image
        src="/logo.png"
        alt="ClankPad Logo"
        width={280}
        height={280}
        className="mb-8 animate-pulse rounded-full"
        priority
        onError={(e) => {
          e.currentTarget.style.display = 'none';  // Nasconde placeholder se fallisce
        }}
      />
      <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent text-center">
        ClankPad
      </h1>
      <p className="text-xl md:text-3xl mt-4 text-purple-300 tracking-wider text-center">
        AI-Powered Meme Launcher
      </p>
      <p className="text-2xl md:text-3xl mt-12 text-gray-400 text-center">Live in</p>
      <Countdown />
      <p className="mt-12 text-lg md:text-xl text-gray-400 max-w-2xl text-center">
        First 50 creators = 100 $MON each · 100% LP locked forever · Clanker sniper built-in
      </p>
      <div className="mt-10 flex flex-col md:flex-row gap-6 text-purple-400 text-base md:text-lg">
        <a href="https://x.com/ClankPad" className="hover:text-purple-300 text-center">@ClankPad</a>
        <span className="hidden md:inline">·</span>
        <a href="https://clankpad.xyz" className="hover:text-purple-300 text-center">clankpad.xyz</a>
      </div>
    </div>
  );
}
