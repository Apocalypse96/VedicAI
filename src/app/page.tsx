"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="h-10 w-10 rounded-full cosmic-gradient flex items-center justify-center">
              <span className="sanskrit-glyph-animated text-white">ॐ</span>
            </div>
            <h1 className="text-2xl font-heading font-bold">
              <span className="flow-underline">VedicAI</span>
            </h1>
          </motion.div>
          
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#features" 
                className="text-sm font-medium hover:text-primary"
              >
                Features
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#how-it-works" 
                className="text-sm font-medium hover:text-primary"
              >
                How It Works
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#pricing" 
                className="text-sm font-medium hover:text-primary"
              >
                Pricing
              </motion.a>
            </nav>
            
            <ThemeToggle />
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/dashboard" 
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Transform Academic Content into 
            <span className="block mt-2 bg-gradient-to-r from-chakra-throat to-chakra-crown bg-clip-text text-transparent">
              Intelligent Educational Videos
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            VedicAI uses advanced AI to convert your PDFs and notes into engaging, 
            high-retention educational videos with intelligent narration and visual elements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/dashboard/upload" 
                className="cosmic-gradient text-white px-6 py-3 rounded-md text-lg font-medium inline-block"
              >
                Upload Your Content
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/demo" 
                className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md text-lg font-medium inline-block"
              >
                Watch Demo
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              <span className="flow-underline">Powerful Features</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform combines ancient wisdom with cutting-edge AI technology
              to create a unique learning experience.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-card rounded-lg p-6 shadow-sm border border-border/50"
              >
                <div className={`chakra-${feature.chakra} mb-4`}>
                  <div className="chakra-indicator h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                    <span className="sanskrit-glyph text-2xl">{feature.glyph}</span>
                  </div>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              <span className="flow-underline">How It Works</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A simple three-step process to transform your academic content
              into engaging educational videos.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border hidden md:block" />
            
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="mb-6 relative">
                  <div className="h-16 w-16 rounded-full cosmic-gradient flex items-center justify-center text-white font-bold text-xl">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 cosmic-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Transform Your Educational Content?
            </h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Join universities and educators already using VedicAI to create
              engaging learning experiences.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link 
                href="/dashboard" 
                className="bg-white text-cosmic-800 px-8 py-4 rounded-md text-lg font-medium"
              >
                Get Started Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <div className="h-8 w-8 rounded-full cosmic-gradient flex items-center justify-center">
                <span className="sanskrit-glyph text-white text-sm">ॐ</span>
              </div>
              <span className="text-lg font-heading font-bold">VedicAI</span>
            </div>
            
            <div className="flex flex-wrap gap-8 justify-center mb-6 md:mb-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">About</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Features</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Pricing</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Blog</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Contact</a>
            </div>
            
            <div className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} VedicAI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Data
const features = [
  {
    title: "Intelligent Content Extraction",
    description: "Our AI analyzes your PDFs and extracts key concepts, relationships, and knowledge structures.",
    chakra: "root",
    glyph: "ज्ञा"
  },
  {
    title: "High-Quality Video Generation",
    description: "Transform extracted content into engaging educational videos with professional narration.",
    chakra: "throat",
    glyph: "दृश्"
  },
  {
    title: "Personalized Learning Paths",
    description: "Adaptive learning algorithms create customized educational journeys for each student.",
    chakra: "third",
    glyph: "पथ्"
  },
  {
    title: "Interactive Quizzes",
    description: "Automatically generated assessments to test comprehension and retention of material.",
    chakra: "solar",
    glyph: "परी"
  },
  {
    title: "LMS Integration",
    description: "Seamlessly integrate with popular Learning Management Systems like Moodle and Canvas.",
    chakra: "heart",
    glyph: "संग्"
  },
  {
    title: "Analytics Dashboard",
    description: "Comprehensive insights into student engagement, performance, and learning patterns.",
    chakra: "crown",
    glyph: "विश्"
  }
];

const steps = [
  {
    title: "Upload Your Content",
    description: "Simply upload your academic PDFs, notes, or presentations to our secure platform."
  },
  {
    title: "AI Processing",
    description: "Our advanced AI analyzes your content, extracts key concepts, and prepares it for video generation."
  },
  {
    title: "Download & Share",
    description: "Within minutes, receive professionally narrated educational videos ready to share with students."
  }
];