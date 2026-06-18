import Quiz from "@/components/Quiz";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center px-4 py-12">
      <main className="w-full max-w-xl">
        <header className="mb-8 text-center">
          <p className="mb-2 font-mono text-xs tracking-[0.3em] text-cyber-magenta uppercase">
            // system.online
          </p>
          <h1 className="cyber-glow-text text-3xl font-bold tracking-wider text-cyber-cyan">
            クイズアプリ
          </h1>
          <p className="mt-2 font-mono text-sm text-cyber-cyan/60">
            選択肢を選んで「次へ」を押してください
          </p>
        </header>
        <Quiz />
      </main>
    </div>
  );
}
