export type Question = {
  id: number;
  text: string;
  choices: string[];
  correctIndex: number;
};

export type QuizState = "playing" | "finished";
