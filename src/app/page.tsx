import { Countdown } from "@/components/Countdown";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
      <img
        src="/logo.png"
        alt="ClankPad"
        className="w-80 h-80 mb-8 animate-pulse rounded-full"
      />
      <h1 className="text-8xl font-black bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
        ClankPad
      </h1>
      <p className="text-3xl mt-4 text-purple-300">AI-Powered Meme Launcher</p>
      <p className="text-3xl mt-12 text-gray-400">Live in</p>
      <Countdown />
      <p className="mt-12 text-xl text-gray-400">
        First 50 creators = 100 $MON each · 100% LP locked forever
      </p>
      <div className="mt-10 flex gap-10 text-purple-400 text-lg">
        <a href="https://x.com/ClankPad">@ClankPad</a>
        <a href="https://clankpad.xyz">clankpad.xyz</a>
      </div>
    </div>
  );
}
