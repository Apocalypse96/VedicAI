"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { formatDate } from "@/lib/utils";

export default function Dashboard() {
  const [recentVideos] = useState(mockRecentVideos);
  const [stats] = useState(mockStats);

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-heading font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's an overview of your VedicAI activity.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-card border border-border/50 rounded-lg p-6 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  {stat.label}
                </p>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <p className="text-xs text-muted-foreground mt-2">
                  {stat.change > 0 ? "+" : ""}
                  {stat.change}% from last month
                </p>
              </div>
              <div className={`chakra-${stat.chakra}`}>
                <div className="chakra-indicator h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                  <span className="sanskrit-glyph">{stat.glyph}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Recent Videos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-4"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-heading font-semibold">Recent Videos</h2>
          <Link
            href="/dashboard/videos"
            className="text-sm text-primary hover:underline"
          >
            View all
          </Link>
        </div>

        <div className="bg-card border border-border/50 rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                    Title
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                    Date Created
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                    Duration
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                    Views
                  </th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentVideos.map((video, index) => (
                  <motion.tr
                    key={video.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="border-b border-border/50 last:border-0 hover:bg-muted/30"
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-16 rounded bg-muted flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 text-muted-foreground"
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
                        <div>
                          <p className="font-medium text-sm">{video.title}</p>
                          <p className="text-xs text-muted-foreground">
                            {video.source}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm">
                      {formatDate(new Date(video.createdAt))}
                    </td>
                    <td className="py-3 px-4 text-sm">{video.duration}</td>
                    <td className="py-3 px-4 text-sm">{video.views}</td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
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
                              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
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
                              d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-heading font-semibold">Quick Actions</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-card border border-border/50 rounded-lg p-6 shadow-sm"
          >
            <div className="chakra-throat mb-4">
              <div className="chakra-indicator h-12 w-12 rounded-full bg-muted flex items-center justify-center">
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
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-heading font-semibold mb-2">
              Upload New Content
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Transform your PDFs and notes into engaging educational videos.
            </p>
            <Link
              href="/dashboard/upload"
              className="text-sm font-medium text-primary hover:underline"
            >
              Upload Now →
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-card border border-border/50 rounded-lg p-6 shadow-sm"
          >
            <div className="chakra-solar mb-4">
              <div className="chakra-indicator h-12 w-12 rounded-full bg-muted flex items-center justify-center">
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
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-heading font-semibold mb-2">
              Create Quiz
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Generate interactive quizzes from your existing video content.
            </p>
            <Link
              href="/dashboard/quiz"
              className="text-sm font-medium text-primary hover:underline"
            >
              Create Quiz →
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-card border border-border/50 rounded-lg p-6 shadow-sm"
          >
            <div className="chakra-crown mb-4">
              <div className="chakra-indicator h-12 w-12 rounded-full bg-muted flex items-center justify-center">
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
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-heading font-semibold mb-2">
              View Analytics
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get insights into student engagement and learning patterns.
            </p>
            <Link
              href="/dashboard/analytics"
              className="text-sm font-medium text-primary hover:underline"
            >
              View Analytics →
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

// Mock data
const mockRecentVideos = [
  {
    id: "1",
    title: "Introduction to Quantum Mechanics",
    source: "quantum_mechanics.pdf",
    createdAt: "2023-12-10T14:30:00Z",
    duration: "12:45",
    views: 128,
  },
  {
    id: "2",
    title: "Advanced Calculus: Integration Techniques",
    source: "calculus_notes.pdf",
    createdAt: "2023-12-08T09:15:00Z",
    duration: "18:22",
    views: 245,
  },
  {
    id: "3",
    title: "Organic Chemistry: Functional Groups",
    source: "organic_chem.pdf",
    createdAt: "2023-12-05T16:45:00Z",
    duration: "15:10",
    views: 187,
  },
  {
    id: "4",
    title: "World History: Renaissance Period",
    source: "renaissance_history.pdf",
    createdAt: "2023-12-01T11:20:00Z",
    duration: "22:35",
    views: 312,
  },
];

const mockStats = [
  {
    label: "Total Videos",
    value: "24",
    change: 12.5,
    chakra: "throat",
    glyph: "दृश्",
  },
  {
    label: "Total Views",
    value: "1,842",
    change: 18.2,
    chakra: "third",
    glyph: "विद्",
  },
  {
    label: "Avg. Retention",
    value: "78%",
    change: 5.3,
    chakra: "heart",
    glyph: "धृ",
  },
  {
    label: "Quiz Completion",
    value: "64%",
    change: -2.1,
    chakra: "solar",
    glyph: "परी",
  },
];