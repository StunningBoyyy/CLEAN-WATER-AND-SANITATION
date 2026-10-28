import { describe, it, expect } from "vitest";
import { QUIZ_QUESTIONS } from "@/data/quiz";

describe("Myth vs Fact Quiz Data Integrity", () => {
  it("contains exactly 8 vetted questions", () => {
    expect(QUIZ_QUESTIONS.length).toBe(8);
  });

  it("has valid questions with boolean answer, explanation, topic, and source note", () => {
    QUIZ_QUESTIONS.forEach((q) => {
      expect(typeof q.id).toBe("number");
      expect(typeof q.question).toBe("string");
      expect(q.question.length).toBeGreaterThan(10);
      expect(typeof q.isFact).toBe("boolean");
      expect(typeof q.explanation).toBe("string");
      expect(q.explanation.length).toBeGreaterThan(20);
      expect(typeof q.topic).toBe("string");
      expect(typeof q.sourceNote).toBe("string");
    });
  });

  it("contains a balanced mix of Myths and Facts", () => {
    const facts = QUIZ_QUESTIONS.filter((q) => q.isFact);
    const myths = QUIZ_QUESTIONS.filter((q) => !q.isFact);

    expect(facts.length).toBe(4);
    expect(myths.length).toBe(4);
  });
});
