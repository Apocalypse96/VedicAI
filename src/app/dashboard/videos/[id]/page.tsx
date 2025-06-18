"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { formatDate } from "@/lib/utils";

export default function VideoPage() {
  const params = useParams();
  const videoId = params.id as string;
  const [video, setVideo] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<"transcript" | "quiz">("transcript");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching video data
    const fetchVideo = async () => {
      setIsLoading(true);
      // In a real app, this would be an API call
      const foundVideo = mockVideos.find((v) => v.id === videoId);
      
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setVideo(foundVideo || null);
      setIsLoading(false);
    };

    fetchVideo();
  }, [videoId]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="chakra-third">
          <div className="chakra-indicator h-16 w-16 rounded-full bg-muted flex items-center justify-center">
            <span className="sanskrit-glyph-animated text-2xl">ॐ</span>
          </div>
        </div>
      </div>
    );
  }

  if (!video) {
    return (
      <div className="text-center py-12">
        <div className="chakra-third mb-4 mx-auto">
          <div className="chakra-indicator h-16 w-16 rounded-full bg-muted flex items-center justify-center mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 01-2.25-2.25V9m12.841 9.091L16.5 19.5m-1.409-1.409c.407-.407.659-.97.659-1.591v-9a2.25 2.25 0 00-2.25-2.25h-9c-.621 0-1.184.252-1.591.659m12.182 12.182L2.909 5.909M1.5 4.5l1.409 1.409"
              />
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-heading font-semibold mb-2">
          Video not found
        </h3>
        <p className="text-muted-foreground">
          The video you're looking for doesn't exist or has been removed.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-heading font-bold mb-2">{video.title}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>{formatDate(new Date(video.createdAt))}</span>
          <span>{video.views} views</span>
          <span className="px-2 py-0.5 rounded-full bg-muted text-xs">
            {video.category}
          </span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2"
        >
          <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-20 w-20 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 text-white"
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
            </div>
            
            {/* Video controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <div className="flex flex-col gap-2">
                <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-white"></div>
                </div>
                <div className="flex items-center justify-between text-white text-sm">
                  <div className="flex items-center gap-4">
                    <button className="hover:text-white/80">
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
                          d="M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.954l-7.108 4.061A1.125 1.125 0 013 16.811z"
                        />
                      </svg>
                    </button>
                    <button className="hover:text-white/80">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                        />
                      </svg>
                    </button>
                    <button className="hover:text-white/80">
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
                          d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
                        />
                      </svg>
                    </button>
                    <span>4:08 / {video.duration}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="hover:text-white/80">
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
                          d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                        />
                      </svg>
                    </button>
                    <button className="hover:text-white/80">
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
                          d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
                        />
                      </svg>
                    </button>
                    <button className="hover:text-white/80">
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
                          d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
                        />
                      </svg>
                    </button>
                    <button className="hover:text-white/80">
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
                          d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-heading font-semibold mb-4">Description</h2>
            <p className="text-muted-foreground">{video.description}</p>
            
            <div className="mt-6 flex flex-wrap gap-2">
              {video.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-muted text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Transcript and Quiz */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-card border border-border/50 rounded-lg overflow-hidden shadow-sm">
            <div className="flex border-b border-border/50">
              <button
                onClick={() => setActiveTab("transcript")}
                className={`flex-1 py-3 text-sm font-medium ${
                  activeTab === "transcript"
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Transcript
              </button>
              <button
                onClick={() => setActiveTab("quiz")}
                className={`flex-1 py-3 text-sm font-medium ${
                  activeTab === "quiz"
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Quiz
              </button>
            </div>

            <div className="p-4 h-[500px] overflow-y-auto vedic-scrollbar">
              {activeTab === "transcript" ? (
                <div className="space-y-4">
                  {video.transcript.map((segment: any, index: number) => (
                    <div
                      key={index}
                      className="flex gap-3 p-2 rounded hover:bg-muted/50 cursor-pointer"
                    >
                      <span className="text-xs text-muted-foreground pt-1 whitespace-nowrap">
                        {segment.time}
                      </span>
                      <p className="text-sm">{segment.text}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {video.quiz.map((question: any, index: number) => (
                    <div key={index} className="space-y-3">
                      <h3 className="text-sm font-medium">
                        {index + 1}. {question.question}
                      </h3>
                      <div className="space-y-2">
                        {question.options.map((option: string, optIndex: number) => (
                          <div
                            key={optIndex}
                            className="flex items-center gap-2 p-2 rounded hover:bg-muted/50 cursor-pointer"
                          >
                            <div className="h-4 w-4 rounded-full border border-muted-foreground flex items-center justify-center">
                              {optIndex === question.correctAnswer && (
                                <div className="h-2 w-2 rounded-full bg-primary"></div>
                              )}
                            </div>
                            <span className="text-sm">{option}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  <div className="pt-4 flex justify-end">
                    <button className="cosmic-gradient text-white px-4 py-2 rounded-md text-sm font-medium">
                      Check Answers
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Related Videos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-heading font-semibold">Related Videos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockVideos
            .filter((v) => v.id !== videoId && v.category === video.category)
            .slice(0, 3)
            .map((relatedVideo, index) => (
              <motion.div
                key={relatedVideo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-card border border-border/50 rounded-lg overflow-hidden shadow-sm"
              >
                <div className="aspect-video bg-muted relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-white"
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
                  </div>
                  
                  {/* Duration badge */}
                  <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                    {relatedVideo.duration}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-sm font-medium line-clamp-2">
                    {relatedVideo.title}
                  </h3>
                  
                  <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                    <span>{formatDate(new Date(relatedVideo.createdAt))}</span>
                    <span>{relatedVideo.views} views</span>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </motion.div>
    </div>
  );
}

// Mock data
const mockVideos = [
  {
    id: "1",
    title: "Introduction to Quantum Mechanics",
    description:
      "This video covers the fundamental principles of quantum mechanics, including wave-particle duality, the uncertainty principle, and quantum states. We explore the mathematical foundations and conceptual challenges of quantum theory, as well as its applications in modern physics and technology.",
    category: "science",
    duration: "12:45",
    views: 128,
    createdAt: "2023-12-10T14:30:00Z",
    tags: ["Physics", "Quantum", "Science", "Modern Physics"],
    transcript: [
      {
        time: "00:00",
        text: "Welcome to this introduction to quantum mechanics, one of the most fascinating and counterintuitive theories in modern physics."
      },
      {
        time: "00:15",
        text: "Quantum mechanics was developed in the early 20th century to explain phenomena that classical physics couldn't account for."
      },
      {
        time: "00:30",
        text: "At its core, quantum mechanics tells us that particles like electrons can behave as waves, and waves can behave as particles - this is called wave-particle duality."
      },
      {
        time: "00:45",
        text: "One of the most famous experiments demonstrating this is the double-slit experiment, where electrons passing through two slits create an interference pattern as if they were waves."
      },
      {
        time: "01:10",
        text: "However, when we try to observe which slit each electron passes through, the interference pattern disappears, and the electrons behave like particles again."
      },
      {
        time: "01:30",
        text: "This leads us to Heisenberg's uncertainty principle, which states that we cannot simultaneously know both the position and momentum of a particle with perfect precision."
      },
      {
        time: "01:55",
        text: "The more accurately we measure one property, the less accurately we can know the other."
      },
      {
        time: "02:15",
        text: "Quantum states are described by wave functions, mathematical objects that contain all the information about a quantum system."
      },
      {
        time: "02:40",
        text: "When we measure a quantum system, the wave function 'collapses' to a definite state, but before measurement, the system exists in a superposition of multiple possible states."
      },
      {
        time: "03:10",
        text: "This leads to fascinating phenomena like quantum entanglement, where particles become correlated in ways that cannot be explained by classical physics."
      },
      {
        time: "03:35",
        text: "Einstein famously referred to this as 'spooky action at a distance,' though we now know it's a fundamental aspect of quantum reality."
      },
      {
        time: "04:00",
        text: "Quantum mechanics has led to numerous technological applications, from lasers and transistors to MRI machines and quantum computers."
      },
      {
        time: "04:25",
        text: "Despite its strange and counterintuitive nature, quantum mechanics is one of the most successful scientific theories ever developed, with predictions that have been confirmed to extraordinary precision."
      },
      {
        time: "04:50",
        text: "In the next section, we'll explore the mathematical formalism of quantum mechanics in more detail."
      }
    ],
    quiz: [
      {
        question: "What is wave-particle duality?",
        options: [
          "The theory that waves and particles cannot exist simultaneously",
          "The principle that quantum particles can exhibit both wave-like and particle-like properties",
          "The mathematical relationship between wavelength and particle mass",
          "The observation that waves can transform into particles under certain conditions"
        ],
        correctAnswer: 1
      },
      {
        question: "What happens to the interference pattern in the double-slit experiment when we observe which slit the electrons pass through?",
        options: [
          "It becomes brighter",
          "It shifts position",
          "It disappears",
          "It remains unchanged"
        ],
        correctAnswer: 2
      },
      {
        question: "According to Heisenberg's uncertainty principle, what cannot be simultaneously measured with perfect precision?",
        options: [
          "Mass and energy",
          "Charge and spin",
          "Position and momentum",
          "Time and frequency"
        ],
        correctAnswer: 2
      },
      {
        question: "What is a wave function in quantum mechanics?",
        options: [
          "A physical wave that carries particles",
          "A mathematical object that describes the quantum state of a system",
          "The path that a particle takes through space",
          "The frequency at which particles vibrate"
        ],
        correctAnswer: 1
      },
      {
        question: "What did Einstein call 'spooky action at a distance'?",
        options: [
          "Wave-particle duality",
          "The uncertainty principle",
          "Quantum entanglement",
          "Wave function collapse"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: "2",
    title: "Advanced Calculus: Integration Techniques",
    description:
      "Learn various integration techniques including substitution, integration by parts, partial fractions, and trigonometric substitutions.",
    category: "mathematics",
    duration: "18:22",
    views: 245,
    createdAt: "2023-12-08T09:15:00Z",
    tags: ["Mathematics", "Calculus", "Integration", "Advanced Math"],
    transcript: [
      {
        time: "00:00",
        text: "Welcome to our lesson on advanced integration techniques in calculus."
      },
      {
        time: "00:15",
        text: "Integration is a fundamental concept in calculus that allows us to find areas, volumes, and solve differential equations."
      },
      {
        time: "00:30",
        text: "While basic integrals can be evaluated using the power rule and basic formulas, more complex integrals require specialized techniques."
      }
    ],
    quiz: [
      {
        question: "Which integration technique is most appropriate for integrals of the form ∫f(g(x))g'(x)dx?",
        options: [
          "Integration by parts",
          "Partial fractions",
          "Substitution",
          "Trigonometric substitution"
        ],
        correctAnswer: 2
      },
      {
        question: "The integration by parts formula is based on which calculus rule?",
        options: [
          "Chain rule",
          "Product rule",
          "Quotient rule",
          "Mean value theorem"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "3",
    title: "Organic Chemistry: Functional Groups",
    description:
      "An overview of organic chemistry functional groups, their properties, reactions, and importance in biological systems.",
    category: "science",
    duration: "15:10",
    views: 187,
    createdAt: "2023-12-05T16:45:00Z",
    tags: ["Chemistry", "Organic Chemistry", "Functional Groups", "Biochemistry"],
    transcript: [
      {
        time: "00:00",
        text: "Welcome to our exploration of functional groups in organic chemistry."
      },
      {
        time: "00:15",
        text: "Functional groups are specific arrangements of atoms within molecules that give the molecule its characteristic chemical properties."
      }
    ],
    quiz: [
      {
        question: "Which functional group is characterized by a carbon-oxygen double bond?",
        options: [
          "Alcohol",
          "Amine",
          "Carbonyl",
          "Ether"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: "4",
    title: "World History: Renaissance Period",
    description:
      "Explore the Renaissance period in Europe, including its art, literature, philosophy, and impact on modern society.",
    category: "history",
    duration: "22:35",
    views: 312,
    createdAt: "2023-12-01T11:20:00Z",
    tags: ["History", "Renaissance", "European History", "Art History"],
    transcript: [
      {
        time: "00:00",
        text: "The Renaissance, meaning 'rebirth' in French, was a period of cultural, artistic, and intellectual revival in Europe."
      }
    ],
    quiz: [
      {
        question: "In which Italian city did the Renaissance begin?",
        options: [
          "Rome",
          "Venice",
          "Florence",
          "Milan"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: "5",
    title: "Shakespeare's Macbeth: Analysis and Themes",
    description:
      "A detailed analysis of Shakespeare's tragedy Macbeth, exploring its major themes, characters, and literary devices.",
    category: "literature",
    duration: "19:18",
    views: 156,
    createdAt: "2023-11-28T13:40:00Z",
    tags: ["Literature", "Shakespeare", "Drama", "Literary Analysis"],
    transcript: [
      {
        time: "00:00",
        text: "Macbeth is one of Shakespeare's most famous tragedies, written around 1606."
      }
    ],
    quiz: [
      {
        question: "What prophecy do the witches make to Macbeth at the beginning of the play?",
        options: [
          "That he will die in battle",
          "That he will become king",
          "That he will have many children",
          "That he will travel to a distant land"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "6",
    title: "Introduction to Machine Learning Algorithms",
    description:
      "An overview of common machine learning algorithms, including supervised and unsupervised learning approaches.",
    category: "computer-science",
    duration: "24:50",
    views: 423,
    createdAt: "2023-11-25T10:10:00Z",
    tags: ["Computer Science", "Machine Learning", "AI", "Data Science"],
    transcript: [
      {
        time: "00:00",
        text: "Machine learning is a subset of artificial intelligence that focuses on developing systems that can learn from data."
      }
    ],
    quiz: [
      {
        question: "Which of the following is an example of supervised learning?",
        options: [
          "Clustering customer data",
          "Dimensionality reduction",
          "Image classification",
          "Association rule learning"
        ],
        correctAnswer: 2
      }
    ]
  }
];