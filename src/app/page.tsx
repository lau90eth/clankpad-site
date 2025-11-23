import { Countdown } from "@/components/Countdown";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-4">
      <h1 className="text-7xl md:text-9xl font-black bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent text-center leading-tight">
        ClankPad
      </h1>
      <p className="text-2xl md:text-4xl mt-6 text-purple-300 text-center">
        AI-Powered Meme Launcher
      </p>
      <p className="text-2xl md:text-3xl mt-16 text-gray-400 text-center">
        Live in
      </p>
      <Countdown />
      <p className="mt-16 text-lg md:text-xl text-gray-400 text-center max-w-2xl">
        Fastest launches on Monad · 100% LP locked · Clanker sniper built-in
      </p>
      <div className="mt-12 flex flex-col md:flex-row gap-8 text-purple-400 text-lg">
        <a href="https://x.com/ClankPad" className="hover:text-purple-300">@ClankPad</a>
        <a href="https://clankpad.xyz" className="hover:text-purple-300">clankpad.xyz</a>
      </div>
    </div>
  );
}
