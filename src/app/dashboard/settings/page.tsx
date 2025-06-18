"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<
    "account" | "preferences" | "notifications" | "integrations"
  >("account");
  const [name, setName] = useState("User Name");
  const [email, setEmail] = useState("user@example.com");
  const [bio, setBio] = useState("Professor of Physics at Example University");

  // Preferences
  const [videoQuality, setVideoQuality] = useState("auto");
  const [autoplay, setAutoplay] = useState(true);
  const [subtitles, setSubtitles] = useState(true);

  // Notifications
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [newVideoNotifications, setNewVideoNotifications] = useState(true);
  const [quizReminders, setQuizReminders] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(false);

  // Integrations
  const [integrations] = useState([
    { id: "moodle", name: "Moodle", connected: true },
    { id: "canvas", name: "Canvas LMS", connected: false },
    { id: "google", name: "Google Classroom", connected: true },
    { id: "blackboard", name: "Blackboard", connected: false },
  ]);

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-heading font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-1"
        >
          <button
            onClick={() => setActiveTab("account")}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === "account"
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
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
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            Account
          </button>

          <button
            onClick={() => setActiveTab("preferences")}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === "preferences"
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
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
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Preferences
          </button>

          <button
            onClick={() => setActiveTab("notifications")}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === "notifications"
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
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
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
            Notifications
          </button>

          <button
            onClick={() => setActiveTab("integrations")}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === "integrations"
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
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
                d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            Integrations
          </button>
        </motion.div>

        {/* Main Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-3"
        >
          {activeTab === "account" && (
            <div className="bg-card border border-border/50 rounded-lg p-6 shadow-sm space-y-6">
              <h2 className="text-xl font-heading font-semibold mb-4">
                Account Settings
              </h2>

              <div className="flex items-center gap-4">
                <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center text-2xl font-medium">
                  {name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-medium">{name}</p>
                  <p className="text-sm text-muted-foreground">{email}</p>
                  <button className="text-xs text-primary hover:underline mt-1">
                    Change profile picture
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Bio</label>
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Password
                  </label>
                  <button className="text-sm text-primary hover:underline">
                    Change password
                  </button>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="cosmic-gradient text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Save Changes
                </motion.button>
              </div>
            </div>
          )}

          {activeTab === "preferences" && (
            <div className="bg-card border border-border/50 rounded-lg p-6 shadow-sm space-y-6">
              <h2 className="text-xl font-heading font-semibold mb-4">
                Preferences
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-md font-medium mb-4">Appearance</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Theme</p>
                      <p className="text-xs text-muted-foreground">
                        Choose between light and dark mode
                      </p>
                    </div>
                    <ThemeToggle />
                  </div>
                </div>

                <div className="pt-4 border-t border-border/40">
                  <h3 className="text-md font-medium mb-4">Video Playback</h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Video Quality
                      </label>
                      <select
                        value={videoQuality}
                        onChange={(e) => setVideoQuality(e.target.value)}
                        className="w-full px-3 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                      >
                        <option value="auto">Auto (Recommended)</option>
                        <option value="low">Low (480p)</option>
                        <option value="medium">Medium (720p)</option>
                        <option value="high">High (1080p)</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Autoplay Videos</p>
                        <p className="text-xs text-muted-foreground">
                          Automatically play videos when page loads
                        </p>
                      </div>
                      <div
                        onClick={() => setAutoplay(!autoplay)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                          autoplay ? "bg-primary" : "bg-muted"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            autoplay ? "translate-x-6" : "translate-x-1"
                          }`}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Show Subtitles</p>
                        <p className="text-xs text-muted-foreground">
                          Display subtitles during video playback
                        </p>
                      </div>
                      <div
                        onClick={() => setSubtitles(!subtitles)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                          subtitles ? "bg-primary" : "bg-muted"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            subtitles ? "translate-x-6" : "translate-x-1"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="cosmic-gradient text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Save Preferences
                </motion.button>
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="bg-card border border-border/50 rounded-lg p-6 shadow-sm space-y-6">
              <h2 className="text-xl font-heading font-semibold mb-4">
                Notification Settings
              </h2>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Email Notifications</p>
                    <p className="text-xs text-muted-foreground">
                      Receive notifications via email
                    </p>
                  </div>
                  <div
                    onClick={() => setEmailNotifications(!emailNotifications)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                      emailNotifications ? "bg-primary" : "bg-muted"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        emailNotifications ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-border/40 space-y-4">
                  <h3 className="text-md font-medium">Notification Types</h3>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">
                        New Video Notifications
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Get notified when your videos are processed and ready
                      </p>
                    </div>
                    <div
                      onClick={() =>
                        setNewVideoNotifications(!newVideoNotifications)
                      }
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                        newVideoNotifications ? "bg-primary" : "bg-muted"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          newVideoNotifications
                            ? "translate-x-6"
                            : "translate-x-1"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Quiz Reminders</p>
                      <p className="text-xs text-muted-foreground">
                        Receive reminders about quizzes you've created
                      </p>
                    </div>
                    <div
                      onClick={() => setQuizReminders(!quizReminders)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                        quizReminders ? "bg-primary" : "bg-muted"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          quizReminders ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Weekly Digest</p>
                      <p className="text-xs text-muted-foreground">
                        Get a weekly summary of your content performance
                      </p>
                    </div>
                    <div
                      onClick={() => setWeeklyDigest(!weeklyDigest)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                        weeklyDigest ? "bg-primary" : "bg-muted"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          weeklyDigest ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="cosmic-gradient text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Save Notification Settings
                </motion.button>
              </div>
            </div>
          )}

          {activeTab === "integrations" && (
            <div className="bg-card border border-border/50 rounded-lg p-6 shadow-sm space-y-6">
              <h2 className="text-xl font-heading font-semibold mb-4">
                Integrations
              </h2>

              <div className="space-y-6">
                <p className="text-sm text-muted-foreground">
                  Connect VedicAI with your learning management systems and
                  other educational tools.
                </p>

                <div className="space-y-4">
                  {integrations.map((integration) => (
                    <div
                      key={integration.id}
                      className="flex items-center justify-between p-4 border border-border rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded bg-muted flex items-center justify-center">
                          <span className="text-sm font-medium">
                            {integration.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium">
                            {integration.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {integration.connected
                              ? "Connected"
                              : "Not connected"}
                          </p>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`px-3 py-1 rounded-md text-xs font-medium ${
                          integration.connected
                            ? "bg-muted text-muted-foreground hover:bg-muted/80"
                            : "cosmic-gradient text-white"
                        }`}
                      >
                        {integration.connected ? "Disconnect" : "Connect"}
                      </motion.button>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border/40">
                  <h3 className="text-md font-medium mb-4">API Access</h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        API Key
                      </label>
                      <div className="flex">
                        <input
                          type="password"
                          value="••••••••••••••••••••••••••••••"
                          readOnly
                          className="flex-1 px-3 py-2 rounded-l-md border border-r-0 border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                        />
                        <button className="px-3 py-2 rounded-r-md border border-border bg-muted text-sm font-medium hover:bg-muted/80">
                          Copy
                        </button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Use this API key to access VedicAI programmatically.
                      </p>
                    </div>

                    <div className="flex justify-between">
                      <button className="text-sm text-primary hover:underline">
                        View API Documentation
                      </button>
                      <button className="text-sm text-primary hover:underline">
                        Regenerate API Key
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
