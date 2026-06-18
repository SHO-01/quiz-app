export type Question = {
  id: number;
  text: string;
  choices: string[];
  correctIndex: number;
};

export type QuizState = "playing" | "finished";

export type WrongAnswer = {
  questionNumber: number;
  questionText: string;
  selectedAnswer: string;
  correctAnswer: string;
};
