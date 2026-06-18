import type { WrongAnswer } from "@/types/quiz";

type ResultScreenProps = {
  score: number;
  totalQuestions: number;
  wrongAnswers: WrongAnswer[];
  onRestart: () => void;
};

export default function ResultScreen({
  score,
  totalQuestions,
  wrongAnswers,
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

      {wrongAnswers.length === 0 ? (
        <p className="mb-8 font-mono text-sm text-cyber-green">
          全問正解！すばらしい！
        </p>
      ) : (
        <div className="mb-8 text-left">
          <p className="mb-4 text-center font-mono text-sm tracking-widest text-cyber-magenta uppercase">
            // wrong.answers
          </p>
          <ul className="flex flex-col gap-3">
            {wrongAnswers.map((item) => (
              <li
                key={item.questionNumber}
                className="rounded-lg bg-white p-4 text-zinc-900"
              >
                <p className="mb-2 font-mono text-xs text-cyber-magenta">
                  問題 {item.questionNumber}
                </p>
                <p className="mb-3 text-sm font-semibold leading-relaxed">
                  {item.questionText}
                </p>
                <p className="font-mono text-sm text-red-600">
                  あなたの答え：{item.selectedAnswer}
                </p>
                <p className="font-mono text-sm text-green-700">
                  正解：{item.correctAnswer}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center font-mono text-sm text-cyber-cyan">
            間違えた問題は復習してね
          </p>
        </div>
      )}

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
