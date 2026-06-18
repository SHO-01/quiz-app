type ResultScreenProps = {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
};

export default function ResultScreen({
  score,
  totalQuestions,
  onRestart,
}: ResultScreenProps) {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <section className="cyber-card w-full rounded-lg p-8 text-center">
      <p className="mb-2 font-mono text-xs tracking-[0.3em] text-cyber-magenta uppercase">
        // mission.complete
      </p>
      <h2 className="cyber-glow-text mb-2 text-2xl font-bold text-cyber-cyan">
        クイズ終了！
      </h2>
      <p className="mb-6 font-mono text-sm text-foreground/60">
        お疲れさまでした。結果はこちらです。
      </p>
      <p className="mb-1 font-mono text-4xl font-bold text-cyber-green shadow-[0_0_20px_rgba(57,255,20,0.5)]">
        {score} / {totalQuestions}
      </p>
      <p className="mb-8 font-mono text-lg text-cyber-cyan/70">
        正答率 {percentage}%
      </p>
      <button
        type="button"
        onClick={onRestart}
        className="cyber-btn rounded px-6 py-3 font-mono text-sm tracking-wider uppercase"
      >
        もう一度挑戦する
      </button>
    </section>
  );
}
