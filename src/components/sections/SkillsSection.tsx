import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Shield, 
  Terminal, 
  FileSpreadsheet, 
  Code, 
  Globe,
  Search,
  Bug,
  Server
} from 'lucide-react';

const SkillsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const skillCategories = [
    {
      title: "Cybersecurity & Penetration Testing",
      icon: Shield,
      color: "cyber-red",
      skills: [
        { name: "OWASP Top 10", level: 75, description: "Web application security vulnerabilities" },
        { name: "XSS Attacks", level: 80, description: "Cross-site scripting detection & prevention" },
        { name: "SQL Injection", level: 70, description: "Database attack vectors & mitigation" },
        { name: "Web PenTesting", level: 65, description: "Comprehensive web application testing" }
      ]
    },
    {
      title: "Systems & Networking",
      icon: Terminal,
      color: "cyber-blue",
      skills: [
        { name: "Linux Administration", level: 75, description: "Command line proficiency & system management" },
        { name: "Network Security", level: 65, description: "Network protocols & security analysis" },
        { name: "Vulnerability Assessment", level: 70, description: "System & network vulnerability scanning" },
        { name: "Security Tools", level: 68, description: "Nmap, Burp Suite, Metasploit, Wireshark" }
      ]
    },
    {
      title: "Development & Automation",
      icon: Code,
      color: "cyber-green",
      skills: [
        { name: "Frontend Development", level: 85, description: "React, TypeScript, Tailwind CSS" },
        { name: "Excel Automation", level: 90, description: "VBA, Power Query, advanced formulas" },
        { name: "Data Entry & Processing", level: 95, description: "Accurate & efficient data handling" },
        { name: "Web Technologies", level: 80, description: "HTML, CSS, JavaScript, APIs" }
      ]
    },
    {
      title: "Professional Skills",
      icon: Globe,
      color: "cyber-purple",
      skills: [
        { name: "Remote Collaboration", level: 90, description: "Effective remote work & communication" },
        { name: "Project Management", level: 75, description: "Task organization & deadline management" },
        { name: "Client Communication", level: 85, description: "Clear & professional client interactions" },
        { name: "Continuous Learning", level: 95, description: "Staying updated with latest trends" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateY: -15 },
    visible: { opacity: 1, y: 0, rotateY: 0 }
  };

  return (
    <section className="snap-section relative" id="skills" ref={ref}>
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
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across cybersecurity, 
            development, and professional services.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={cardVariants}
              className="group"
            >
              <Card className="p-6 bg-card/30 backdrop-blur-sm border-gray-700 hover:border-cyber-blue transition-all duration-500 animated-border h-full">
                <div className="flex items-center mb-6">
                  <motion.div
                    className={`p-3 rounded-xl bg-${category.color}/20 border border-${category.color}/30 mr-4`}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: `0 0 20px hsl(var(--${category.color}))`,
                      rotateY: 15
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <category.icon className={`w-6 h-6 text-${category.color}`} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-cyber-blue transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: categoryIndex * 0.3 + skillIndex * 0.1 
                      }}
                      className="group/skill"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-foreground group-hover/skill:text-cyber-blue transition-colors">
                          {skill.name}
                        </span>
                        <span className={`text-${category.color} font-mono text-sm`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      <Progress 
                        value={inView ? skill.level : 0} 
                        className="h-2 mb-2"
                      />
                      
                      <p className="text-gray-400 text-sm">
                        {skill.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
        >
          {[
            { icon: Bug, label: "Vulnerability Research", color: "cyber-red" },
            { icon: Search, label: "Security Analysis", color: "cyber-blue" },
            { icon: Server, label: "System Hardening", color: "cyber-green" },
            { icon: FileSpreadsheet, label: "Data Processing", color: "cyber-purple" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-4 rounded-xl bg-card/20 border border-gray-700 hover:border-cyber-blue transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 0 20px hsl(var(--${item.color}) / 0.3)`
              }}
            >
              <item.icon className={`w-8 h-8 text-${item.color} mx-auto mb-2`} />
              <p className="text-sm font-medium text-gray-300">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background code snippets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          'function pentTest()',
          'SELECT * FROM users',
          '<script>alert("XSS")</script>',
          'nmap -sS -O target',
          'sqlmap -u "url"',
          'burpsuite.scan()',
        ].map((code, i) => (
          <motion.div
            key={i}
            className="absolute text-cyber-blue/20 font-mono text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, 3, -3, 0]
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          >
            {code}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;