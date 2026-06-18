type QuestionCardProps = {
  questionNumber: number;
  totalQuestions: number;
  text: string;
  choices: string[];
  selectedIndex: number | null;
  onSelect: (index: number) => void;
};

export default function QuestionCard({
  questionNumber,
  totalQuestions,
  text,
  choices,
  selectedIndex,
  onSelect,
}: QuestionCardProps) {
  return (
    <section className="w-full">
      <p className="mb-3 font-mono text-xs tracking-widest text-cyber-magenta uppercase">
        Q.{String(questionNumber).padStart(2, "0")} / {String(totalQuestions).padStart(2, "0")}
      </p>
      <div className="mb-4 rounded-lg bg-white p-5 shadow-[0_0_20px_rgba(0,245,255,0.15)]">
        <h2 className="text-xl font-semibold leading-relaxed text-zinc-900">
          {text}
        </h2>
      </div>
      <ul className="flex flex-col gap-3">
        {choices.map((choice, index) => {
          const isSelected = selectedIndex === index;

          return (
            <li key={index}>
              <button
                type="button"
                onClick={() => onSelect(index)}
                className={`w-full rounded-lg border-2 bg-white px-4 py-3 text-left font-mono transition-all ${
                  isSelected
                    ? "border-cyber-cyan text-zinc-900 shadow-[0_0_15px_rgba(0,245,255,0.5)]"
                    : "border-white/80 text-zinc-800 hover:border-cyber-cyan/60 hover:shadow-[0_0_10px_rgba(0,245,255,0.25)]"
                }`}
              >
                <span className="mr-2 font-bold text-cyber-magenta">
                  [{String.fromCharCode(65 + index)}]
                </span>
                {choice}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
