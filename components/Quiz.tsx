"use client";

import { useState } from "react";
import { questions } from "@/data/questions";
import type { QuizState, WrongAnswer } from "@/types/quiz";
import QuestionCard from "./QuestionCard";
import ResultScreen from "./ResultScreen";

export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState<WrongAnswer[]>([]);
  const [quizState, setQuizState] = useState<QuizState>("playing");

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  const recordAnswer = (isCorrect: boolean) => {
    if (isCorrect || selectedIndex === null) return wrongAnswers;

    return [
      ...wrongAnswers,
      {
        questionNumber: currentIndex + 1,
        questionText: currentQuestion.text,
        selectedAnswer: currentQuestion.choices[selectedIndex],
        correctAnswer: currentQuestion.choices[currentQuestion.correctIndex],
      },
    ];
  };

  const handleNext = () => {
    if (selectedIndex === null) return;

    const isCorrect = selectedIndex === currentQuestion.correctIndex;
    const nextScore = isCorrect ? score + 1 : score;
    const nextWrongAnswers = recordAnswer(isCorrect);

    if (isLastQuestion) {
      setScore(nextScore);
      setWrongAnswers(nextWrongAnswers);
      setQuizState("finished");
      return;
    }

    setScore(nextScore);
    setWrongAnswers(nextWrongAnswers);
    setCurrentIndex((prev) => prev + 1);
    setSelectedIndex(null);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedIndex(null);
    setScore(0);
    setWrongAnswers([]);
    setQuizState("playing");
  };

  if (quizState === "finished") {
    return (
      <ResultScreen
        score={score}
        totalQuestions={questions.length}
        wrongAnswers={wrongAnswers}
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
