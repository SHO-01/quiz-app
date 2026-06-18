import type { Question } from "@/types/quiz";

export const questions: Question[] = [
  {
    id: 1,
    text: "【数学I】二次関数 y = x² − 4x + 3 の頂点の座標は？",
    choices: ["(2, −1)", "(2, 1)", "(−2, −1)", "(4, 3)"],
    correctIndex: 0,
  },
  {
    id: 2,
    text: "【数学I】cos(2π/3) の値は？",
    choices: ["−1/2", "1/2", "−√3/2", "√3/2"],
    correctIndex: 0,
  },
  {
    id: 3,
    text: "【数学II】方程式 2ˣ = 16 の解は？",
    choices: ["2", "3", "4", "5"],
    correctIndex: 2,
  },
  {
    id: 4,
    text: "【数学II】関数 f(x) = x³ − 3x の x = −1 における微分係数は？",
    choices: ["−6", "−3", "0", "3"],
    correctIndex: 2,
  },
  {
    id: 5,
    text: "【数学II】定積分 ∫₀² (3x² + 1) dx の値は？",
    choices: ["6", "8", "10", "12"],
    correctIndex: 2,
  },
  {
    id: 6,
    text: "【数学A】赤玉3個・白玉2個の袋から1個を取り、赤が出る確率は？",
    choices: ["1/5", "2/5", "3/5", "4/5"],
    correctIndex: 2,
  },
  {
    id: 7,
    text: "【数学A】原点を中心とし、半径5の円の方程式は？",
    choices: ["x² + y² = 5", "x² + y² = 25", "x + y = 5", "x² − y² = 25"],
    correctIndex: 1,
  },
  {
    id: 8,
    text: "【数学B】初項5、公比2の等比数列の第4項は？",
    choices: ["20", "30", "40", "80"],
    correctIndex: 2,
  },
  {
    id: 9,
    text: "【数学B】5人の生徒を一列に並べる方法の数は？",
    choices: ["60", "120", "240", "3125"],
    correctIndex: 1,
  },
  {
    id: 10,
    text: "【数学C】複素数 z = 1 + i の絶対値 |z| は？",
    choices: ["1", "√2", "2", "√3"],
    correctIndex: 1,
  },
];
