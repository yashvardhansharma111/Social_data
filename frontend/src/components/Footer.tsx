import React from 'react';
import { motion } from 'framer-motion';
import { Github, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const links = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/yourusername/social-media-analytics' },
    { name: 'Demo Video', icon: Youtube, url: 'https://youtube.com/your-demo-video' },
    { name: 'Contact', icon: Mail, url: 'mailto:team@example.com' },
  ];

  return (
    <footer className="bg-[#0A0A0F] border-t border-blue-900/30">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            className="text-sm text-blue-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            © 2024 Social Media Analytics. Built for Level Supermind Hackathon.
          </motion.p>
          <motion.div
            className="flex space-x-6 mt-4 md:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {links.map(({ name, icon: Icon, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                title={name}
              >
                <Icon className="w-6 h-6" />
                <span className="sr-only">{name}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

