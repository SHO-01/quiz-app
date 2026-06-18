"use client";

import { useState } from "react";
import { questions } from "@/data/questions";
import type { QuizState } from "@/types/quiz";
import QuestionCard from "./QuestionCard";
import ResultScreen from "./ResultScreen";

export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizState, setQuizState] = useState<QuizState>("playing");

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  const handleNext = () => {
    if (selectedIndex === null) return;

    const isCorrect = selectedIndex === currentQuestion.correctIndex;
    const nextScore = isCorrect ? score + 1 : score;

    if (isLastQuestion) {
      setScore(nextScore);
      setQuizState("finished");
      return;
    }

    setScore(nextScore);
    setCurrentIndex((prev) => prev + 1);
    setSelectedIndex(null);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedIndex(null);
    setScore(0);
    setQuizState("playing");
  };

  if (quizState === "finished") {
    return (
      <ResultScreen
        score={score}
        totalQuestions={questions.length}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <div className="flex w-full flex-col gap-6">
      <QuestionCard
        questionNumber={currentIndex + 1}
        totalQuestions={questions.length}
        text={currentQuestion.text}
        choices={currentQuestion.choices}
        selectedIndex={selectedIndex}
        onSelect={handleSelect}
      />
      <button
        type="button"
        onClick={handleNext}
        disabled={selectedIndex === null}
        className="cyber-btn self-end rounded px-6 py-3 font-mono text-sm tracking-wider uppercase"
      >
        {isLastQuestion ? "結果を見る" : "次へ →"}
      </button>
    </div>
  );
}
