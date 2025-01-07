import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Brain, Database, LineChart, Workflow } from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Yashvardhan Sharma',
      role: 'Full Stack Developer',
      bio: 'Lead architect focusing on Langflow integration and system design. Passionate about creating scalable AI solutions.',
      github: 'https://github.com/yashvardhan',
      linkedin: '#',
      email: 'yash@example.com',
      image: '/placeholder.svg?height=400&width=400'
    },
    {
      name: 'Diya Verma',
      role: 'AI Engineer',
      bio: 'AI specialist with expertise in GPT integration and machine learning. Focused on developing intelligent analytics solutions.',
      github: 'https://github.com/diyaverma',
      linkedin: '#',
      email: 'diya@example.com',
      image: '/placeholder.svg?height=400&width=400'
    },
    {
      name: 'Mayank Sahu',
      role: 'Data Engineer',
      bio: 'Data engineering expert specializing in DataStax implementation and analytics pipeline development.',
      github: 'https://github.com/mayanksahu',
      linkedin: '#',
      email: 'mayank@example.com',
      image: '/placeholder.svg?height=400&width=400'
    },
    {
      name: 'Shivi Tiwari',
      role: 'Frontend Developer',
      bio: 'Creative frontend developer with a passion for building beautiful and intuitive user interfaces.',
      github: 'https://github.com/shivitiwari',
      linkedin: '#',
      email: 'shivi@example.com',
      image: '/placeholder.svg?height=400&width=400'
    }
  ];

  const projectHighlights = [
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Seamless integration with GPT for intelligent insights generation'
    },
    {
      icon: Database,
      title: 'Robust Storage',
      description: 'Efficient data management using DataStax Astra DB'
    },
    {
      icon: Workflow,
      title: 'Smart Workflows',
      description: 'Advanced workflow automation with Langflow'
    },
    {
      icon: LineChart,
      title: 'Analytics',
      description: 'Comprehensive social media performance metrics'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Project Overview Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 mb-8">
            About Our Project
          </h1>
          <div className="bg-[#1A1A2E] rounded-2xl p-8 border border-blue-900/30">
            <p className="text-blue-100 text-lg mb-8 text-center max-w-3xl mx-auto">
              Our social media analytics platform combines cutting-edge AI technology with robust data management
              to provide comprehensive insights into social media performance. Built for the Level Supermind
              Hackathon, our solution demonstrates the power of modern tech stack integration.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projectHighlights.map(({ icon: Icon, title, description }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  className="p-6 rounded-xl bg-[#111827] border border-blue-900/30"
                >
                  <Icon className="w-8 h-8 text-blue-500 mb-4" />
                  <h3 className="text-lg font-semibold text-blue-100 mb-2">{title}</h3>
                  <p className="text-blue-300 text-sm">{description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 mb-12">
            Meet The Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map(({ name, role, bio, github, linkedin, email, image }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl bg-[#1A1A2E] p-6 border border-blue-900/30">
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-blue-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
                    <img
                      src={image}
                      alt={name}
                      className="w-32 h-32 rounded-full border-2 border-blue-500/30"
                    />
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold text-blue-100 mb-2">{name}</h3>
                      <p className="text-blue-400 mb-3">{role}</p>
                      <p className="text-blue-300 text-sm mb-4">{bio}</p>
                      <div className="flex justify-center md:justify-start gap-4">
                        <a
                          href={github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                        <a
                          href={linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                          href={`mailto:${email}`}
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage;

