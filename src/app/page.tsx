import { Countdown } from "@/components/Countdown";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
      <Image
        src="/logo.svg"
        alt="ClankPad"
        width={320}
        height={320}
        className="mb-8 animate-pulse"
        priority
      />

      <h1 className="text-8xl font-black bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
        ClankPad
      </h1>

      <p className="text-3xl mt-4 text-purple-300 tracking-wider">
        AI-Powered Meme Launcher
      </p>

      <p className="text-3xl mt-16 text-gray-400">Live in</p>
      <Countdown />

      <p className="mt-16 text-xl text-gray-400 max-w-2xl text-center">
        First 50 creators = 100 $MON each · 100% LP locked forever · Clanker sniper built-in
      </p>

      <div className="mt-12 flex gap-12 text-purple-400 text-lg">
        <a href="https://x.com/ClankPad" className="hover:text-purple-300">@ClankPad</a>
        <span>·</span>
        <a href="https://clankpad.xyz" className="hover:text-purple-300">clankpad.xyz</a>
      </div>
    </div>
  );
}
