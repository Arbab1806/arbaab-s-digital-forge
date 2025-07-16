import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, Terminal, Code, Globe, Award, Target, Zap, Lock, Eye, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import CustomCursor from '@/components/CustomCursor';

const Skills = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const skillCategories = [
    {
      title: "Cybersecurity & Penetration Testing",
      icon: Shield,
      description: "NAVTAC AI Course Graduate & Penetration Tester Learner",
      color: "cyber-red",
      skills: [
        { name: "OWASP Top 10 Security Vulnerabilities", level: 75, icon: Target },
        { name: "Cross-Site Scripting (XSS) Detection", level: 80, icon: Zap },
        { name: "SQL Injection Testing & Prevention", level: 70, icon: Database },
        { name: "Web Application Penetration Testing", level: 65, icon: Globe },
        { name: "Vulnerability Assessment & Analysis", level: 72, icon: Eye },
        { name: "Network Security Analysis", level: 68, icon: Shield },
        { name: "AI Security Fundamentals (NAVTAC Certified)", level: 85, icon: Lock }
      ]
    },
    {
      title: "Technical Skills",
      icon: Terminal,
      description: "System Administration & Development",
      color: "cyber-blue",
      skills: [
        { name: "Linux System Administration", level: 75, icon: Terminal },
        { name: "Network Protocols & Security", level: 70, icon: Globe },
        { name: "Burp Suite, Nmap, Metasploit", level: 68, icon: Shield },
        { name: "Python Security Scripting", level: 72, icon: Code },
        { name: "Web Technologies (HTML, CSS, JS)", level: 85, icon: Globe },
        { name: "React & TypeScript Development", level: 88, icon: Code }
      ]
    },
    {
      title: "Professional Services",
      icon: Code,
      description: "Freelance & Client Work",
      color: "cyber-purple",
      skills: [
        { name: "Excel VBA Automation", level: 90, icon: Terminal },
        { name: "Data Processing & Analysis", level: 95, icon: Database },
        { name: "Remote Collaboration", level: 92, icon: Globe },
        { name: "Client Communication", level: 88, icon: Target },
        { name: "Project Management", level: 85, icon: Shield },
        { name: "Quality Assurance", level: 90, icon: Eye }
      ]
    },
    {
      title: "Certifications & Learning",
      icon: Award,
      description: "Continuous Education & Growth",
      color: "cyber-green",
      skills: [
        { name: "NAVTAC AI Course Certification", level: 100, icon: Award },
        { name: "Penetration Testing Training", level: 70, icon: Shield },
        { name: "BS IT Student (Ongoing)", level: 60, icon: Code },
        { name: "Cybersecurity Bootcamps", level: 75, icon: Lock },
        { name: "Online Security Courses", level: 80, icon: Globe },
        { name: "Industry Best Practices", level: 85, icon: Target }
      ]
    }
  ];

  const Skill3DCard = ({ skill, index, categoryColor, delay }) => {
    const [isClicked, setIsClicked] = useState(false);
    
    return (
      <motion.div
        className="relative group cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: delay
        }}
        whileHover={{ 
          scale: 1.05,
          rotateY: 20,
          rotateX: 20
        }}
        onClick={() => {
          setIsClicked(true);
          setTimeout(() => setIsClicked(false), 300);
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >        
        {/* Main card */}
        <motion.div
          className={`relative bg-card/40 backdrop-blur-sm border border-${categoryColor}/30 rounded-xl p-6 transition-all duration-300 hover:border-${categoryColor} hover:shadow-xl hover:shadow-${categoryColor}/25`}
          animate={isClicked ? {
            scale: [1, 0.95, 1.05, 1],
            rotateZ: [0, -2, 2, 0],
            boxShadow: [
              `0 0 20px hsl(var(--${categoryColor}) / 0.3)`,
              `0 0 40px hsl(var(--${categoryColor}) / 0.8)`,
              `0 0 60px hsl(var(--${categoryColor}) / 1)`,
              `0 0 20px hsl(var(--${categoryColor}) / 0.3)`
            ]
          } : {}}
          transition={{ duration: 0.3 }}
        >
          {/* Icon */}
          <div className={`w-16 h-16 mx-auto mb-4 bg-${categoryColor}/20 rounded-full flex items-center justify-center border border-${categoryColor}/40`}>
            <skill.icon className={`w-8 h-8 text-${categoryColor}`} />
          </div>

          {/* Skill name */}
          <h4 className={`text-lg font-bold text-center mb-3 text-${categoryColor}`}>
            {skill.name}
          </h4>

          {/* Progress bar */}
          <div className="relative mb-4">
            <div className="w-full bg-muted/30 rounded-full h-3 overflow-hidden">
              <motion.div
                className={`h-full bg-gradient-to-r from-${categoryColor} to-${categoryColor}/60 rounded-full`}
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5, delay: delay + 0.3 }}
              />
            </div>
            
            {/* Percentage display */}
            <div className={`absolute right-0 -top-8 text-sm font-bold text-${categoryColor}`}>
              {skill.level}%
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

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
          <h1 className="text-5xl font-bold text-gradient-cyber mb-4 text-center">Technical Skills</h1>
          <p className="text-xl text-gray-300 text-center mb-12">
            Comprehensive overview of my expertise and certifications
          </p>

          {/* Special Highlight - NAVTAC & Penetration Tester */}
          <motion.div
            className="cyber-card p-8 mb-12 bg-gradient-cyber/10 border-cyber-blue"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Target className="w-16 h-16 text-cyber-blue mr-4" />
              <div>
                <h2 className="text-3xl font-bold text-cyber-blue">NAVTAC AI Graduate</h2>
                <p className="text-xl text-gray-300">Penetration Tester Learner</p>
              </div>
            </div>
            <p className="text-lg text-center text-gray-300">
              Completed specialized AI course from NAVTAC and actively learning penetration testing 
              methodologies. Combining AI knowledge with cybersecurity expertise for modern threat assessment.
            </p>
          </motion.div>

          {/* Skills Categories with 3D Cards */}
          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: categoryIndex * 0.2 }}
                className="relative"
              >
                {/* Category Header with 3D effect */}
                <motion.div 
                  className="text-center mb-12"
                  whileHover={{ scale: 1.05, rotateX: 5 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="flex items-center justify-center mb-6">
                    <motion.div
                      className={`p-4 rounded-full bg-${category.color}/20 border border-${category.color}/30 mr-4`}
                      animate={{
                        boxShadow: [
                          `0 0 20px hsl(var(--${category.color}) / 0.3)`,
                          `0 0 40px hsl(var(--${category.color}) / 0.6)`,
                          `0 0 20px hsl(var(--${category.color}) / 0.3)`
                        ],
                        rotateY: [0, 360]
                      }}
                      transition={{ 
                        boxShadow: { duration: 2, repeat: Infinity },
                        rotateY: { duration: 8, repeat: Infinity, ease: "linear" }
                      }}
                    >
                      <category.icon className={`w-8 h-8 text-${category.color}`} />
                    </motion.div>
                    <div>
                      <h3 className={`text-3xl font-bold text-${category.color} mb-2`}>
                        {category.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                </motion.div>

                {/* 3D Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.skills.map((skill, skillIndex) => (
                    <Skill3DCard
                      key={skillIndex}
                      skill={skill}
                      index={categoryIndex * 100 + skillIndex}
                      categoryColor={category.color}
                      delay={categoryIndex * 0.1 + skillIndex * 0.1}
                    />
                  ))}
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

export default Skills;