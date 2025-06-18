"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDropzone } from "react-dropzone";
import { cn, formatFileSize, isPdf } from "@/lib/utils";

export default function UploadPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [processingProgress, setProcessingProgress] = useState<number>(0);
  const [processingStatus, setProcessingStatus] = useState<string>("");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Filter for PDF files only
    const pdfFiles = acceptedFiles.filter(file => isPdf(file.name));
    setFiles(prevFiles => [...prevFiles, ...pdfFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
    },
    maxSize: 50 * 1024 * 1024, // 50MB
  });

  const removeFile = (index: number) => {
    setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };

  const handleProcessFiles = async () => {
    if (files.length === 0) return;
    
    setIsProcessing(true);
    setCurrentStep(2);
    
    // Simulate processing steps
    const steps = [
      "Uploading files...",
      "Extracting text from PDFs...",
      "Analyzing content structure...",
      "Identifying key concepts...",
      "Generating educational script...",
      "Creating video storyboard...",
      "Rendering video content...",
      "Finalizing video production...",
      "Preparing download..."
    ];
    
    for (let i = 0; i < steps.length; i++) {
      setProcessingStatus(steps[i]);
      setProcessingProgress(Math.round((i + 1) / steps.length * 100));
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1500));
    }
    
    setCurrentStep(3);
    setIsProcessing(false);
  };

  const resetUpload = () => {
    setFiles([]);
    setCurrentStep(1);
    setProcessingProgress(0);
    setProcessingStatus("");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-heading font-bold mb-2">Upload Content</h1>
        <p className="text-muted-foreground">
          Transform your academic PDFs into engaging educational videos.
        </p>
      </motion.div>

      {/* Step Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-10"
      >
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex flex-col items-center">
              <div
                className={cn(
                  "h-10 w-10 rounded-full flex items-center justify-center text-sm font-medium mb-2",
                  currentStep === step
                    ? "cosmic-gradient text-white"
                    : currentStep > step
                    ? "bg-primary/20 text-primary"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {currentStep > step ? (
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
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                ) : (
                  step
                )}
              </div>
              <span
                className={cn(
                  "text-xs font-medium",
                  currentStep >= step
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {step === 1
                  ? "Upload"
                  : step === 2
                  ? "Process"
                  : "Complete"}
              </span>
            </div>
          ))}
          
          {/* Connecting lines */}
          <div className="absolute left-0 right-0 flex justify-center">
            <div className="w-full max-w-xs flex items-center justify-between">
              <div
                className={cn(
                  "h-0.5 w-full",
                  currentStep > 1 ? "bg-primary" : "bg-muted"
                )}
              />
              <div
                className={cn(
                  "h-0.5 w-full",
                  currentStep > 2 ? "bg-primary" : "bg-muted"
                )}
              />
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {currentStep === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Dropzone */}
            <div
              {...getRootProps()}
              className={cn(
                "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors",
                isDragActive
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50 hover:bg-muted/30"
              )}
            >
              <input {...getInputProps()} />
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="chakra-throat">
                  <div className="chakra-indicator h-16 w-16 rounded-full bg-muted flex items-center justify-center">
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
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-lg font-medium mb-1">
                    {isDragActive
                      ? "Drop your PDF files here"
                      : "Drag & drop PDF files here"}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    or click to browse from your computer
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Maximum file size: 50MB
                  </p>
                </div>
              </div>
            </div>

            {/* File List */}
            {files.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-8"
              >
                <h3 className="text-lg font-medium mb-4">Uploaded Files</h3>
                <div className="space-y-3">
                  {files.map((file, index) => (
                    <motion.div
                      key={`${file.name}-${index}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center justify-between bg-card border border-border/50 rounded-lg p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded bg-muted flex items-center justify-center">
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
                              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-medium">{file.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {formatFileSize(file.size)}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFile(index)}
                        className="h-8 w-8 rounded-md flex items-center justify-center text-muted-foreground hover:text-destructive hover:bg-destructive/10"
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
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8 flex justify-end"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleProcessFiles}
                    disabled={files.length === 0}
                    className="cosmic-gradient text-white px-6 py-2 rounded-md font-medium disabled:opacity-50"
                  >
                    Process Files
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-card border border-border/50 rounded-lg p-8 text-center"
          >
            <div className="flex flex-col items-center justify-center gap-6 max-w-md mx-auto">
              <div className="chakra-third">
                <div className="chakra-indicator h-20 w-20 rounded-full bg-muted flex items-center justify-center">
                  <span className="sanskrit-glyph-animated text-3xl">ॐ</span>
                </div>
              </div>
              
              <h2 className="text-2xl font-heading font-semibold">
                Processing Your Content
              </h2>
              
              <p className="text-muted-foreground mb-4">
                Our AI is analyzing your documents and creating educational videos.
                This may take a few minutes.
              </p>
              
              <div className="w-full space-y-2">
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${processingProgress}%` }}
                    className="h-full cosmic-gradient"
                  />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{processingProgress}% Complete</span>
                  <span>{processingStatus}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-card border border-border/50 rounded-lg p-8 text-center"
          >
            <div className="flex flex-col items-center justify-center gap-6 max-w-md mx-auto">
              <div className="chakra-crown">
                <div className="chakra-indicator h-20 w-20 rounded-full bg-muted flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              
              <h2 className="text-2xl font-heading font-semibold">
                Processing Complete!
              </h2>
              
              <p className="text-muted-foreground mb-4">
                Your educational videos have been successfully created and are ready to view.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="cosmic-gradient text-white px-6 py-3 rounded-md font-medium"
                  onClick={() => window.location.href = "/dashboard/videos"}
                >
                  View Videos
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-medium"
                  onClick={resetUpload}
                >
                  Upload More
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}