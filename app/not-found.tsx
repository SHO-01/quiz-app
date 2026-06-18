import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center px-4 py-12">
      <main className="cyber-card rounded-lg p-8 text-center">
        <p className="mb-2 font-mono text-xs tracking-[0.3em] text-cyber-magenta uppercase">
          // error.404
        </p>
        <h1 className="cyber-glow-text text-2xl font-bold text-cyber-cyan">
          ページが見つかりません
        </h1>
        <p className="mt-2 font-mono text-sm text-foreground/60">
          指定されたURLは存在しません。
        </p>
        <Link
          href="/"
          className="cyber-btn mt-6 inline-block rounded px-6 py-3 font-mono text-sm tracking-wider uppercase"
        >
          トップへ戻る
        </Link>
      </main>
    </div>
  );
}
