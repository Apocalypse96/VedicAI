"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

export default function VideosPage() {
  const [videos] = useState(mockVideos);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Filter videos based on search query and category
  const filteredVideos = videos.filter((video) => {
    const matchesSearch = video.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || video.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-heading font-bold mb-2">My Videos</h1>
        <p className="text-muted-foreground">
          Manage and share your AI-generated educational videos.
        </p>
      </motion.div>

      {/* Search and Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col sm:flex-row gap-4 items-center justify-between"
      >
        <div className="relative w-full sm:w-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search videos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-80 pl-10 pr-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>

        <div className="flex items-center gap-4 w-full sm:w-auto">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            <option value="all">All Categories</option>
            <option value="science">Science</option>
            <option value="mathematics">Mathematics</option>
            <option value="history">History</option>
            <option value="literature">Literature</option>
            <option value="computer-science">Computer Science</option>
          </select>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/dashboard/upload"
              className="cosmic-gradient text-white px-4 py-2 rounded-md text-sm font-medium inline-flex items-center gap-2"
            >
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
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              New Video
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Video Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {filteredVideos.length === 0 ? (
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
              No videos found
            </h3>
            <p className="text-muted-foreground mb-6">
              {searchQuery
                ? "Try adjusting your search or filters"
                : "Upload your first educational content to get started"}
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                href="/dashboard/upload"
                className="cosmic-gradient text-white px-6 py-3 rounded-md text-sm font-medium"
              >
                Upload Content
              </Link>
            </motion.div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-card border border-border/50 rounded-lg overflow-hidden shadow-sm"
              >
                <div className="aspect-video bg-muted relative group">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8 text-white"
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
                  
                  {/* Overlay with actions */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <Link
                      href={`/dashboard/videos/${video.id}`}
                      className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30"
                    >
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
                          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                        />
                      </svg>
                    </Link>
                    <button className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30">
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
                    </button>
                    <button className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30">
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
                          d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                        />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Duration badge */}
                  <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-medium line-clamp-2">
                      {video.title}
                    </h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {video.category}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                    {video.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
                    <span>{formatDate(new Date(video.createdAt))}</span>
                    <span>{video.views} views</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
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
      "This video covers the fundamental principles of quantum mechanics, including wave-particle duality, the uncertainty principle, and quantum states.",
    category: "science",
    duration: "12:45",
    views: 128,
    createdAt: "2023-12-10T14:30:00Z",
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
  },
];