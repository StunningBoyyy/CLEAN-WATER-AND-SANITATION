"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  Award,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { QUIZ_QUESTIONS, type QuizQuestion } from "@/data/quiz";

export function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, boolean>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ: QuizQuestion = QUIZ_QUESTIONS[currentIndex];
  const totalQuestions = QUIZ_QUESTIONS.length;

  const handleSelectAnswer = (selectedIsFact: boolean) => {
    if (showExplanation) return;

    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: selectedIsFact,
    }));
    setShowExplanation(true);
  };

  const handleNext = () => {
    setShowExplanation(false);
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setUserAnswers({});
    setShowExplanation(false);
    setIsCompleted(false);
  };

  // Score calculation
  const correctCount = QUIZ_QUESTIONS.reduce((count, q) => {
    return userAnswers[q.id] === q.isFact ? count + 1 : count;
  }, 0);

  const scorePercentage = Math.round((correctCount / totalQuestions) * 100);

  const isCurrentCorrect = userAnswers[currentQ.id] === currentQ.isFact;

  return (
    <section className="py-10 bg-white dark:bg-navy-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-navy-800 shadow-sm my-8" aria-labelledby="quiz-heading">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-teal dark:text-teal-400">
            Interactive Learning
          </span>
          <h2
            id="quiz-heading"
            className="font-heading text-2xl sm:text-3xl font-bold text-navy dark:text-white mt-1 mb-2"
          >
            Myth vs Fact: Water & Hygiene Quiz
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Test your knowledge against common misconceptions in public water health.
          </p>
        </div>

        {!isCompleted && (
          <div className="text-right">
            <span className="text-xs text-slate-400">Question</span>
            <div className="font-heading font-bold text-lg text-water">
              {currentIndex + 1} of {totalQuestions}
            </div>
          </div>
        )}
      </div>

      {!isCompleted ? (
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Progress bar */}
          <div className="h-2 w-full bg-slate-100 dark:bg-navy-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-water transition-all duration-300 rounded-full"
              style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>

          {/* Question Card */}
          <div className="rounded-2xl bg-aqua/30 dark:bg-navy-800/80 p-6 sm:p-8 border border-slate-200/80 dark:border-navy-700/80">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-water/10 text-water dark:bg-water/20 dark:text-water-300">
                {currentQ.topic}
              </span>
            </div>

            <h3 className="font-heading font-bold text-lg sm:text-xl text-navy dark:text-white mb-6 leading-relaxed">
              &ldquo;{currentQ.question}&rdquo;
            </h3>

            {/* Answer Options */}
            <div
              role="radiogroup"
              aria-label="Is this a Myth or a Fact?"
              className="grid grid-cols-2 gap-4"
            >
              <button
                type="button"
                role="radio"
                aria-checked={userAnswers[currentQ.id] === false}
                disabled={showExplanation}
                onClick={() => handleSelectAnswer(false)}
                className={`py-4 px-6 rounded-2xl font-heading font-bold text-base transition-all border-2 flex items-center justify-center gap-2 ${
                  showExplanation
                    ? !currentQ.isFact
                      ? "bg-sdggreen/20 border-sdggreen text-sdggreen"
                      : userAnswers[currentQ.id] === false
                      ? "bg-rose-500/20 border-rose-500 text-rose-500"
                      : "opacity-40 border-slate-200 dark:border-navy-700"
                    : "bg-white dark:bg-navy-700 hover:border-amber-400 text-navy dark:text-white border-slate-200 dark:border-navy-600 shadow-sm hover:scale-[1.01]"
                }`}
              >
                <span>Myth</span>
              </button>

              <button
                type="button"
                role="radio"
                aria-checked={userAnswers[currentQ.id] === true}
                disabled={showExplanation}
                onClick={() => handleSelectAnswer(true)}
                className={`py-4 px-6 rounded-2xl font-heading font-bold text-base transition-all border-2 flex items-center justify-center gap-2 ${
                  showExplanation
                    ? currentQ.isFact
                      ? "bg-sdggreen/20 border-sdggreen text-sdggreen"
                      : userAnswers[currentQ.id] === true
                      ? "bg-rose-500/20 border-rose-500 text-rose-500"
                      : "opacity-40 border-slate-200 dark:border-navy-700"
                    : "bg-white dark:bg-navy-700 hover:border-teal text-navy dark:text-white border-slate-200 dark:border-navy-600 shadow-sm hover:scale-[1.01]"
                }`}
              >
                <span>Fact</span>
              </button>
            </div>

            {/* Feedback Explanation */}
            {showExplanation && (
              <div
                className={`mt-6 p-5 rounded-2xl border animate-in fade-in-50 duration-200 ${
                  isCurrentCorrect
                    ? "bg-sdggreen/10 border-sdggreen/30 text-navy dark:text-white"
                    : "bg-rose-500/10 border-rose-500/30 text-navy dark:text-white"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {isCurrentCorrect ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-sdggreen flex-shrink-0" />
                      <span className="font-heading font-bold text-sm text-sdggreen">
                        Correct! It is indeed a {currentQ.isFact ? "Fact" : "Myth"}.
                      </span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />
                      <span className="font-heading font-bold text-sm text-rose-500">
                        Incorrect. This statement is a {currentQ.isFact ? "Fact" : "Myth"}.
                      </span>
                    </>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed mb-3">
                  {currentQ.explanation}
                </p>

                <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Verified Source: {currentQ.sourceNote}</span>
                </div>
              </div>
            )}
          </div>

          {/* Next Button */}
          {showExplanation && (
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-water hover:bg-water-600 shadow-md transition-all active:scale-95"
              >
                <span>{currentIndex < totalQuestions - 1 ? "Next Question" : "See Final Score"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Completed Score Screen */
        <div className="max-w-md mx-auto text-center py-8 space-y-6">
          <div className="w-20 h-20 rounded-full bg-water/10 dark:bg-water/20 text-water flex items-center justify-center mx-auto shadow-inner">
            <Award className="w-10 h-10" />
          </div>

          <div>
            <h3 className="font-heading text-2xl font-bold text-navy dark:text-white">
              Quiz Completed!
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Here is your public health score:
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-aqua/50 dark:bg-navy-800 border border-slate-200 dark:border-navy-700">
            <div className="font-heading text-5xl font-bold text-water mb-1">
              {scorePercentage}%
            </div>
            <p className="text-sm font-semibold text-navy dark:text-slate-200">
              {correctCount} out of {totalQuestions} correct
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              {scorePercentage >= 75
                ? "Excellent! You have a strong grasp of water hygiene and sanitation fundamentals."
                : "Good attempt! Review the verified data on our Issue page to deepen your understanding."}
            </p>
          </div>

          <button
            type="button"
            onClick={handleRestart}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-water hover:bg-water-600 shadow-sm transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retake Quiz</span>
          </button>
        </div>
      )}
    </section>
  );
}
