import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Activity,
  Database,
  Brain,
  Share2,
  BarChart2,
  MessageCircle,
  Github,
  Youtube,
  ChevronRight,
  Code,
  LineChart,
} from "lucide-react";

const HomePage: React.FC = () => {
  const features = [
    {
      title: "Data Collection",
      icon: Database,
      description:
        "Fetch and store social media engagement data using DataStax Astra DB",
    },
    {
      title: "Workflow Integration",
      icon: Activity,
      description:
        "Create powerful analytics workflows with Langflow and GPT integration",
    },
    {
      title: "Smart Analysis",
      icon: Brain,
      description:
        "Generate insights on post performance and engagement patterns",
    },
  ];

  const workflowSteps = [
    {
      title: "Data Collection",
      icon: Share2,
      description:
        "Collect social media metrics including likes, shares, comments, and post types",
    },
    {
      title: "Performance Analysis",
      icon: BarChart2,
      description:
        "Analyze engagement metrics for different post types using DataStax Astra DB",
    },
    {
      title: "AI Insights",
      icon: MessageCircle,
      description:
        "Generate intelligent insights using GPT integration in Langflow",
    },
  ];

  const teamMembers = [
    {
      name: "Yashvardhan Sharma",
      role: "Full Stack Developer",
      specialty: "Langflow & Architecture",
      github: "github.com/yashvardhansharma111",
      image: "yash.jpg",
    },
    {
      name: "Diya Verma",
      role: "AI Engineer",
      specialty: "GPT Integration & ML",
      github: "https://github.com/diyaverma",
      image: "diya.jpg",
    },
    {
      name: "Mayank Sahu",
      role: "Data Engineer",
      specialty: "DataStax & Analytics",
      github: "https://github.com/mayanksahu17",
      image: "mayank.enc",
    },
    {
      name: "Shivi Tiwari",
      role: "Frontend Developer",
      specialty: "UI/UX & Animations",
      github: "https://github.com/shivi028",
      image: "shivi.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8"
        style={{
          background: "linear-gradient(to bottom, #0A0A0F, #111827)",
        }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="text-center">
            <motion.h1
              className="text-5xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 mb-6"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Social Media Analytics
            </motion.h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Revolutionizing social media performance analysis with AI-powered
              insights using Langflow and DataStax integration.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/workflow">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg flex items-center"
                >
                  Try Demo
                  <ChevronRight className="ml-2 w-5 h-5" />
                </motion.button>
              </Link>
              <a
                href="https://github.com/yourusername/social-media-analytics"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-blue-500 transition-colors"
              >
                <Github className="w-6 h-6" />
                <span>View on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-[#111827]"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-500 mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map(({ title, icon: Icon, description }, index) => (
              <motion.div
                key={title}
                className="bg-gray-900 p-6 rounded-lg border border-gray-700"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
              >
                <Icon className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
                <p className="text-gray-400">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Workflow Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-500 mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workflowSteps.map(({ title, icon: Icon, description }, index) => (
              <motion.div
                key={title}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
              >
                <div className="bg-gray-800 p-6 rounded-lg relative z-10">
                  <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
                  <p className="text-gray-400">{description}</p>
                </div>
                {index < workflowSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-600 transform -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0A0A0F]"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map(
              ({ name, role, specialty, github, image }, index) => (
                <motion.div
                  key={name}
                  className="relative rounded-xl bg-[#1A1A2E] p-6 border border-blue-900/30 transition-opacity duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                >
                  <img
                    src={image}
                    alt={name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-blue-500/30"
                  />
                  <h3 className="text-xl font-bold mb-2 text-blue-100 text-center">
                    {name}
                  </h3>
                  <p className="text-blue-300 mb-2 text-center">{role}</p>
                  <p className="text-blue-400 text-sm text-center mb-4">
                    {specialty}
                  </p>
                  <div className="flex justify-center">
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </motion.section>

      {/* Tech Stack Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-500 mb-12">
            Tech Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-gray-800 p-6 rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              <Code className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Langflow</h3>
              <p className="text-gray-400">
                Workflow creation and GPT integration for intelligent analysis
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-800 p-6 rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              <Database className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">
                DataStax Astra
              </h3>
              <p className="text-gray-400">
                Robust database operations for storing and querying social media
                data
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-800 p-6 rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              <LineChart className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Analytics</h3>
              <p className="text-gray-400">
                Advanced metrics calculation and visualization tools
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Demo Video Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-500 mb-6">Watch Demo</h2>
          <p className="text-gray-400 mb-8">
            See how our platform analyzes social media performance
          </p>
          <a
            href="https://youtube.com/your-demo-video"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg"
          >
            <Youtube className="w-6 h-6" />
            Watch Demo Video
          </a>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
