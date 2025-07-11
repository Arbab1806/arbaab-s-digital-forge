import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Shield, Code, Database, Globe } from 'lucide-react';

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  // Sample projects - In a real app, this would come from Supabase
  const projects = [
    {
      id: 1,
      title: "Web Application Security Scanner",
      description: "Automated vulnerability scanner for web applications detecting XSS, SQLi, and OWASP Top 10 vulnerabilities",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Flask", "SQLAlchemy", "BeautifulSoup"],
      category: "Security Tool",
      githubUrl: "https://github.com/arbaab",
      liveUrl: "https://demo.example.com",
      features: ["XSS Detection", "SQL Injection Scanner", "Report Generation"]
    },
    {
      id: 2,
      title: "Excel Data Automation Suite",
      description: "Comprehensive Excel automation tools for data processing, analysis, and report generation",
      image: "/api/placeholder/400/250",
      technologies: ["VBA", "Power Query", "Python", "Pandas"],
      category: "Automation",
      githubUrl: "https://github.com/arbaab",
      liveUrl: "https://demo.example.com",
      features: ["Data Cleaning", "Automated Reports", "Chart Generation"]
    },
    {
      id: 3,
      title: "Cybersecurity Portfolio Website",
      description: "Modern, animated portfolio website built with React and advanced CSS animations",
      image: "/api/placeholder/400/250",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      category: "Web Development",
      githubUrl: "https://github.com/arbaab",
      liveUrl: "https://arbaab-portfolio.com",
      features: ["3D Animations", "Responsive Design", "Dark Theme"]
    },
    {
      id: 4,
      title: "Network Vulnerability Assessment Tool",
      description: "Comprehensive network scanner for identifying open ports, services, and potential vulnerabilities",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Nmap", "Scapy", "Tkinter"],
      category: "Security Tool",
      githubUrl: "https://github.com/arbaab",
      liveUrl: null,
      features: ["Port Scanning", "Service Detection", "Vulnerability Database"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Security Tool':
        return Shield;
      case 'Web Development':
        return Code;
      case 'Automation':
        return Database;
      default:
        return Globe;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Security Tool':
        return 'cyber-red';
      case 'Web Development':
        return 'cyber-blue';
      case 'Automation':
        return 'cyber-green';
      default:
        return 'cyber-purple';
    }
  };

  return (
    <section className="snap-section relative" id="projects" ref={ref}>
      {/* Background */}
      <div className="cyber-grid opacity-10" />
      
      <div className="relative z-10 px-4 max-w-7xl mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gradient-cyber mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my cybersecurity tools, automation scripts, and web development projects. 
            Each project demonstrates practical skills and real-world applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => {
            const CategoryIcon = getCategoryIcon(project.category);
            const categoryColor = getCategoryColor(project.category);
            
            return (
              <motion.div
                key={project.id}
                variants={projectVariants}
                className="group"
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden bg-card/30 backdrop-blur-sm border-gray-700 hover:border-cyber-blue transition-all duration-500 animated-border h-full">
                  {/* Project Image */}
                  <div className="relative h-48 bg-gray-800 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 to-cyber-green/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <CategoryIcon className={`w-16 h-16 text-${categoryColor} opacity-60`} />
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className={`bg-${categoryColor}/20 text-${categoryColor} border-${categoryColor}/30`}>
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Project Title */}
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-cyber-blue transition-colors">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs text-gray-400 border-gray-600">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} className={`bg-${categoryColor}/10 text-${categoryColor} border-${categoryColor}/30`}>
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-cyber-blue/50 text-cyber-blue hover:bg-cyber-blue/10"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      
                      {project.liveUrl && (
                        <Button
                          size="sm"
                          className="flex-1 bg-cyber-blue hover:bg-cyber-blue/80"
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* GitHub Integration Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 text-center"
        >
          <Card className="p-6 bg-card/20 border-gray-700 max-w-2xl mx-auto">
            <Github className="w-12 h-12 text-cyber-blue mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              More Projects on GitHub
            </h3>
            <p className="text-gray-400 mb-4">
              Explore my complete portfolio of security tools, automation scripts, and web projects.
            </p>
            <Button
              className="bg-gradient-cyber hover:shadow-cyber"
              asChild
            >
              <a href="https://github.com/arbaab" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View All Projects
              </a>
            </Button>
          </Card>
        </motion.div>
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['🐍', '⚡', '🔒', '🛡️', '🔧', '💻'].map((icon, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;