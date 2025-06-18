# VedicAI - Modern AI-Powered Education Platform

VedicAI is a cutting-edge education platform that transforms academic PDFs and notes into intelligent, high-retention educational videos using advanced Text-to-Video AI technology.

## Features

- **Intelligent Content Extraction**: AI-powered analysis of PDFs to extract key concepts and knowledge structures
- **High-Quality Video Generation**: Transform extracted content into engaging educational videos with professional narration
- **Personalized Learning Paths**: Adaptive learning algorithms create customized educational journeys
- **Interactive Quizzes**: Automatically generated assessments to test comprehension
- **LMS Integration**: Seamless integration with popular Learning Management Systems
- **Analytics Dashboard**: Comprehensive insights into student engagement and performance

## Tech Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Next.js API routes, Serverless Functions
- **AI/ML**: Text extraction (OCR), NLP for concept extraction (GPT or Alibaba Qwen), Text-to-Video generation
- **Storage**: Cloud storage for video hosting (AWS S3 or Alibaba Cloud OSS)
- **Design**: Modern UI with Vedic-inspired elements, dark/light theme support

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/vedic-ai.git
   cd vedic-ai
   ```

2. Install dependencies:

   ```bash
   # Install core dependencies
   npm install
   
   # Install additional required packages
   npm install tailwindcss-animate framer-motion react-dropzone
   npm install @radix-ui/react-slot @radix-ui/react-dropdown-menu
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
/src
  /app                 # Next.js App Router
    /dashboard         # Dashboard pages
    /api               # API routes
  /components          # Reusable UI components
  /lib                 # Utility functions and shared logic
  /hooks               # Custom React hooks
  /store               # State management
  /types               # TypeScript type definitions
```

## API Routes

- `/api/upload` – PDF parser using OCR
- `/api/extract` – NLP for concept extraction
- `/api/generate` – Interface with Text-to-Video API
- `/api/quiz` – Generates dynamic quizzes from extracted concepts

## Design Philosophy

VedicAI combines modern tech aesthetics with subtle Vedic-inspired elements:

- **Clean, Minimalist UI**: Professional interface suitable for academic and enterprise users
- **Vedic Elements**: Animated Sanskrit glyphs, chakra-themed indicators, and flowing transitions
- **Motion-Based Storytelling**: Subtle animations enhance the user experience without distraction
- **Color Theory**: Earth tones and cosmic gradients create a tech-meets-tradition vibe

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by the intersection of ancient wisdom and modern technology
- Built with a focus on enhancing educational outcomes through AI
# VedicAI
