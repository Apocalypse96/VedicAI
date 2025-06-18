"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function QuizBuilderPage() {
  const [videos] = useState(mockVideos);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [quizType, setQuizType] = useState<"auto" | "custom">("auto");
  const [questionCount, setQuestionCount] = useState<number>(5);
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("medium");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generatedQuiz, setGeneratedQuiz] = useState<any | null>(null);

  const handleGenerateQuiz = async () => {
    if (!selectedVideo) return;
    
    setIsGenerating(true);
    
    // Simulate API call to generate quiz
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock generated quiz
    setGeneratedQuiz({
      id: `quiz_${Date.now()}`,
      videoId: selectedVideo,
      title: videos.find(v => v.id === selectedVideo)?.title + " - Quiz",
      questionCount,
      difficulty,
      questions: [
        {
          id: "q1",
          question: "What is wave-particle duality?",
          options: [
            "The theory that waves and particles cannot exist simultaneously",
            "The principle that quantum particles can exhibit both wave-like and particle-like properties",
            "The mathematical relationship between wavelength and particle mass",
            "The observation that waves can transform into particles under certain conditions",
          ],
          correctAnswer: 1,
        },
        {
          id: "q2",
          question: "What happens to the interference pattern in the double-slit experiment when we observe which slit the electrons pass through?",
          options: [
            "It becomes brighter",
            "It shifts position",
            "It disappears",
            "It remains unchanged",
          ],
          correctAnswer: 2,
        },
        {
          id: "q3",
          question: "According to Heisenberg's uncertainty principle, what cannot be simultaneously measured with perfect precision?",
          options: [
            "Mass and energy",
            "Charge and spin",
            "Position and momentum",
            "Time and frequency",
          ],
          correctAnswer: 2,
        },
        {
          id: "q4",
          question: "What is a wave function in quantum mechanics?",
          options: [
            "A physical wave that carries particles",
            "A mathematical object that describes the quantum state of a system",
            "The path that a particle takes through space",
            "The frequency at which particles vibrate",
          ],
          correctAnswer: 1,
        },
        {
          id: "q5",
          question: "What did Einstein call 'spooky action at a distance'?",
          options: [
            "Wave-particle duality",
            "The uncertainty principle",
            "Quantum entanglement",
            "Wave function collapse",
          ],
          correctAnswer: 2,
        },
      ].slice(0, questionCount),
    });
    
    setIsGenerating(false);
  };

  const resetQuiz = () => {
    setGeneratedQuiz(null);
    setSelectedVideo(null);
    setQuizType("auto");
    setQuestionCount(5);
    setDifficulty("medium");
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-heading font-bold mb-2">Quiz Builder</h1>
        <p className="text-muted-foreground">
          Create interactive quizzes from your educational videos to test comprehension.
        </p>
      </motion.div>

      {!generatedQuiz ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-card border border-border/50 rounded-lg p-6 shadow-sm"
        >
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Select Video
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {videos.map((video) => (
                  <div
                    key={video.id}
                    onClick={() => setSelectedVideo(video.id)}
                    className={`flex items-center gap-3 p-3 rounded-md cursor-pointer border ${
                      selectedVideo === video.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="h-12 w-20 rounded bg-muted flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-muted-foreground"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">
                        {video.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {video.duration} • {video.category}
                      </p>
                    </div>
                    {selectedVideo === video.id && (
                      <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-3 h-3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Quiz Type
              </label>
              <div className="flex gap-4">
                <div
                  onClick={() => setQuizType("auto")}
                  className={`flex-1 flex items-center gap-3 p-4 rounded-md cursor-pointer border ${
                    quizType === "auto"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="chakra-third">
                    <div className="chakra-indicator h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium">AI-Generated Quiz</p>
                    <p className="text-xs text-muted-foreground">
                      Automatically generate questions based on video content
                    </p>
                  </div>
                </div>

                <div
                  onClick={() => setQuizType("custom")}
                  className={`flex-1 flex items-center gap-3 p-4 rounded-md cursor-pointer border ${
                    quizType === "custom"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="chakra-crown">
                    <div className="chakra-indicator h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Custom Quiz</p>
                    <p className="text-xs text-muted-foreground">
                      Create your own questions and answers manually
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {quizType === "auto" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Number of Questions
                  </label>
                  <select
                    value={questionCount}
                    onChange={(e) => setQuestionCount(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    <option value={3}>3 Questions</option>
                    <option value={5}>5 Questions</option>
                    <option value={10}>10 Questions</option>
                    <option value={15}>15 Questions</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Difficulty Level
                  </label>
                  <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
              </div>
            )}

            <div className="pt-4 flex justify-end">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleGenerateQuiz}
                disabled={!selectedVideo || isGenerating}
                className="cosmic-gradient text-white px-6 py-2 rounded-md font-medium disabled:opacity-50 flex items-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Generating Quiz...
                  </>
                ) : (
                  <>
                    {quizType === "auto" ? "Generate Quiz" : "Create Custom Quiz"}
                  </>
                )}
              </motion.button>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <div className="bg-card border border-border/50 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-heading font-semibold">
                {generatedQuiz.title}
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                  {generatedQuiz.questionCount} Questions
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground capitalize">
                  {generatedQuiz.difficulty}
                </span>
              </div>
            </div>

            <div className="space-y-8">
              {generatedQuiz.questions.map((question: any, index: number) => (
                <div key={question.id} className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full cosmic-gradient flex items-center justify-center text-white text-sm font-medium">
                      {index + 1}
                    </div>
                    <h3 className="text-md font-medium flex-1">
                      {question.question}
                    </h3>
                  </div>

                  <div className="ml-9 space-y-3">
                    {question.options.map((option: string, optIndex: number) => (
                      <div
                        key={optIndex}
                        className={`flex items-center gap-3 p-3 rounded-md border ${
                          optIndex === question.correctAnswer
                            ? "border-primary/50 bg-primary/5"
                            : "border-border"
                        }`}
                      >
                        <div
                          className={`h-5 w-5 rounded-full flex items-center justify-center text-xs ${
                            optIndex === question.correctAnswer
                              ? "bg-primary text-white"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {String.fromCharCode(65 + optIndex)}
                        </div>
                        <span className="text-sm">{option}</span>
                        {optIndex === question.correctAnswer && (
                          <div className="ml-auto flex items-center text-primary text-xs">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4 mr-1"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            Correct Answer
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={resetQuiz}
                className="px-4 py-2 rounded-md border border-border text-sm font-medium"
              >
                Create Another Quiz
              </motion.button>

              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-2 rounded-md border border-primary text-primary text-sm font-medium"
                >
                  Edit Quiz
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="cosmic-gradient text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Publish Quiz
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Existing Quizzes */}
      {!generatedQuiz && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-heading font-semibold">
              Your Quizzes
            </h2>
            <button className="text-sm text-primary hover:underline">
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockQuizzes.map((quiz, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-card border border-border/50 rounded-lg overflow-hidden shadow-sm"
              >
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="text-md font-medium line-clamp-2">
                      {quiz.title}
                    </h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {quiz.questions} Q
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                    <span>{quiz.completions} completions</span>
                    <span>•</span>
                    <span>{quiz.avgScore}% avg. score</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/dashboard/quiz/${quiz.id}`}
                      className="text-sm text-primary hover:underline"
                    >
                      View Details
                    </Link>
                    
                    <div className="flex items-center gap-1">
                      <button className="h-8 w-8 rounded-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          />
                        </svg>
                      </button>
                      <button className="h-8 w-8 rounded-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

// Mock data
const mockVideos = [
  {
    id: "1",
    title: "Introduction to Quantum Mechanics",
    category: "science",
    duration: "12:45",
  },
  {
    id: "2",
    title: "Advanced Calculus: Integration Techniques",
    category: "mathematics",
    duration: "18:22",
  },
  {
    id: "3",
    title: "Organic Chemistry: Functional Groups",
    category: "science",
    duration: "15:10",
  },
  {
    id: "4",
    title: "World History: Renaissance Period",
    category: "history",
    duration: "22:35",
  },
];

const mockQuizzes = [
  {
    id: "quiz1",
    title: "Quantum Mechanics Fundamentals",
    questions: 10,
    completions: 45,
    avgScore: 76,
  },
  {
    id: "quiz2",
    title: "Calculus Integration Methods",
    questions: 8,
    completions: 32,
    avgScore: 68,
  },
  {
    id: "quiz3",
    title: "Organic Chemistry Basics",
    questions: 12,
    completions: 28,
    avgScore: 72,
  },
];