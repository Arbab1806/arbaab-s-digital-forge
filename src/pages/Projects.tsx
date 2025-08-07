import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Github, Shield, Code, FileSpreadsheet } from 'lucide-react';
import { Link } from 'react-router-dom';
import CustomCursor from '@/components/CustomCursor';

const Projects = () => {
  const projects = [
    {
      title: "Web Security Scanner",
      description: "Automated tool for detecting common web vulnerabilities including XSS, SQL injection, and CSRF attacks.",
      tech: ["Python", "BeautifulSoup", "Requests", "Security"],
      icon: Shield,
      status: "Completed"
    },
    {
      title: "Excel VBA Automation Suite",
      description: "Collection of VBA macros for data processing, report generation, and workflow automation.",
      tech: ["VBA", "Excel", "Automation", "Data Processing"],
      icon: FileSpreadsheet,
      status: "Active"
    },
    {
      title: "Penetration Testing Lab",
      description: "Virtual lab environment for practicing penetration testing techniques and vulnerability assessment.",
      tech: ["Kali Linux", "VirtualBox", "Metasploit", "Burp Suite"],
      icon: Shield,
      status: "In Progress"
    },
    {
      title: "React Security Dashboard",
      description: "Web application for monitoring security metrics and vulnerability reports.",
      tech: ["React", "TypeScript", "Charts", "Security APIs"],
      icon: Code,
      status: "Completed"
    }
  ];

  return (
    <>
      <CustomCursor />
      <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="p-6">
        <Link to="/">
          <Button variant="outline" className="cyber-button">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-5xl font-bold text-gradient-cyber mb-4 text-center">My Projects</h1>
          <p className="text-xl text-gray-300 text-center mb-12">
            A showcase of my cybersecurity and development work
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="flip-card h-80"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <div className="flip-card-inner">
                  {/* Back Side - Clean and Minimal */}
                  <div className="flip-card-back">
                    <div className="w-full h-full bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg flex items-center justify-center">
                      <project.icon className="w-16 h-16 text-gray-600 opacity-30" />
                    </div>
                  </div>
                  
                  {/* Front Side - Project Details */}
                  <div className="flip-card-front">
                    <div className="cyber-card p-6 h-full flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <project.icon className="w-8 h-8 text-cyber-blue mr-3" />
                          <div>
                            <h3 className="text-xl font-bold">{project.title}</h3>
                            <span className={`text-sm px-2 py-1 rounded ${
                              project.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                              project.status === 'Active' ? 'bg-blue-500/20 text-blue-400' :
                              'bg-yellow-500/20 text-yellow-400'
                            }`}>
                              {project.status}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-cyber-blue/20 text-cyber-blue rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3 mt-auto">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="cyber-button"
                          onClick={() => window.open('https://github.com', '_blank')}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="cyber-button"
                          onClick={() => window.open('#', '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
      </div>
    </>
  );
};

export default Projects;