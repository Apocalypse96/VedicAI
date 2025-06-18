"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState<"week" | "month" | "year">("month");
  const [analyticsData] = useState(mockAnalyticsData);

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-heading font-bold mb-2">Analytics</h1>
        <p className="text-muted-foreground">
          Track engagement and performance metrics for your educational content.
        </p>
      </motion.div>

      {/* Time Range Selector */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-2 bg-muted/50 rounded-lg p-1">
          <button
            onClick={() => setTimeRange("week")}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              timeRange === "week"
                ? "bg-card shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Week
          </button>
          <button
            onClick={() => setTimeRange("month")}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              timeRange === "month"
                ? "bg-card shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Month
          </button>
          <button
            onClick={() => setTimeRange("year")}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              timeRange === "year"
                ? "bg-card shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Year
          </button>
        </div>

        <button className="text-sm text-primary hover:underline">
          Export Report
        </button>
      </motion.div>

      {/* Overview Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        {analyticsData.overview.map((stat, index) => (
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
                  {stat.change}% from previous {timeRange}
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

      {/* Engagement Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-card border border-border/50 rounded-lg p-6 shadow-sm"
      >
        <h2 className="text-lg font-heading font-semibold mb-4">
          Viewer Engagement
        </h2>
        
        {/* Chart placeholder */}
        <div className="aspect-[3/1] bg-muted/30 rounded-lg flex items-center justify-center">
          <div className="h-full w-full p-4">
            {/* This would be a real chart in production */}
            <div className="h-full w-full flex items-end justify-between gap-2">
              {analyticsData.engagementData.map((item, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div 
                    className="w-full bg-primary/80 rounded-t-sm" 
                    style={{ height: `${item.value}%` }}
                  ></div>
                  <span className="text-xs text-muted-foreground mt-2">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
          <span>Average watch time: 8:24 minutes</span>
          <span>Completion rate: 68%</span>
        </div>
      </motion.div>

      {/* Top Performing Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="space-y-4"
      >
        <h2 className="text-lg font-heading font-semibold">
          Top Performing Content
        </h2>
        
        <div className="bg-card border border-border/50 rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                    Video Title
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                    Views
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                    Avg. Watch Time
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                    Completion Rate
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                    Quiz Score
                  </th>
                </tr>
              </thead>
              <tbody>
                {analyticsData.topContent.map((content, index) => (
                  <motion.tr
                    key={index}
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
                          <p className="font-medium text-sm">{content.title}</p>
                          <p className="text-xs text-muted-foreground">
                            {content.category}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm">{content.views}</td>
                    <td className="py-3 px-4 text-sm">{content.avgWatchTime}</td>
                    <td className="py-3 px-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary" 
                            style={{ width: `${content.completionRate}%` }}
                          ></div>
                        </div>
                        <span>{content.completionRate}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm">{content.quizScore}%</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>

      {/* Learning Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="space-y-4"
      >
        <h2 className="text-lg font-heading font-semibold">
          Learning Insights
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card border border-border/50 rounded-lg p-6 shadow-sm">
            <h3 className="text-md font-medium mb-4">Challenging Concepts</h3>
            <div className="space-y-4">
              {analyticsData.insights.challengingConcepts.map((concept, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full bg-chakra-${concept.difficulty === 'high' ? 'root' : concept.difficulty === 'medium' ? 'sacral' : 'solar'}`}></div>
                    <span className="text-sm">{concept.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {concept.successRate}% success
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-card border border-border/50 rounded-lg p-6 shadow-sm">
            <h3 className="text-md font-medium mb-4">Recommendations</h3>
            <div className="space-y-4">
              {analyticsData.insights.recommendations.map((rec, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`chakra-${rec.chakra} mt-0.5`}>
                    <div className="chakra-indicator h-6 w-6 rounded-full bg-muted flex items-center justify-center">
                      <span className="sanskrit-glyph text-xs">{rec.glyph}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium">{rec.title}</p>
                    <p className="text-xs text-muted-foreground">{rec.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Mock data
const mockAnalyticsData = {
  overview: [
    {
      label: "Total Views",
      value: "2,845",
      change: 12.5,
      chakra: "throat",
      glyph: "दृश्",
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
    {
      label: "New Students",
      value: "156",
      change: 24.8,
      chakra: "crown",
      glyph: "विद्",
    },
  ],
  engagementData: [
    { label: "Mon", value: 45 },
    { label: "Tue", value: 60 },
    { label: "Wed", value: 75 },
    { label: "Thu", value: 65 },
    { label: "Fri", value: 80 },
    { label: "Sat", value: 50 },
    { label: "Sun", value: 40 },
  ],
  topContent: [
    {
      title: "Introduction to Quantum Mechanics",
      category: "Physics",
      views: 428,
      avgWatchTime: "10:24",
      completionRate: 82,
      quizScore: 76,
    },
    {
      title: "Advanced Calculus: Integration Techniques",
      category: "Mathematics",
      views: 356,
      avgWatchTime: "14:12",
      completionRate: 75,
      quizScore: 68,
    },
    {
      title: "Organic Chemistry: Functional Groups",
      category: "Chemistry",
      views: 312,
      avgWatchTime: "11:45",
      completionRate: 70,
      quizScore: 72,
    },
    {
      title: "World History: Renaissance Period",
      category: "History",
      views: 287,
      avgWatchTime: "18:20",
      completionRate: 65,
      quizScore: 80,
    },
    {
      title: "Introduction to Machine Learning Algorithms",
      category: "Computer Science",
      views: 245,
      avgWatchTime: "16:38",
      completionRate: 60,
      quizScore: 74,
    },
  ],
  insights: {
    challengingConcepts: [
      { name: "Heisenberg's Uncertainty Principle", successRate: 45, difficulty: "high" },
      { name: "Integration by Parts", successRate: 52, difficulty: "medium" },
      { name: "Functional Group Reactions", successRate: 58, difficulty: "medium" },
      { name: "Renaissance Art Periods", successRate: 65, difficulty: "low" },
      { name: "Supervised vs. Unsupervised Learning", successRate: 48, difficulty: "high" },
    ],
    recommendations: [
      {
        title: "Add supplementary materials",
        description: "Provide additional resources for challenging concepts like Uncertainty Principle",
        chakra: "third",
        glyph: "ज्ञा",
      },
      {
        title: "Create shorter video segments",
        description: "Break down complex topics into 5-7 minute focused segments",
        chakra: "throat",
        glyph: "दृश्",
      },
      {
        title: "Increase interactive elements",
        description: "Add more practice questions throughout videos to improve retention",
        chakra: "solar",
        glyph: "परी",
      },
      {
        title: "Develop concept maps",
        description: "Visual relationships between concepts improve understanding",
        chakra: "heart",
        glyph: "संग्",
      },
    ],
  },
};