import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, Terminal, Code, Globe, Award, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import CustomCursor from '@/components/CustomCursor';

const Skills = () => {
  const skillCategories = [
    {
      title: "Cybersecurity & Penetration Testing",
      icon: Shield,
      description: "NAVTAC AI Course Graduate & Penetration Tester Learner",
      skills: [
        "OWASP Top 10 Security Vulnerabilities",
        "Cross-Site Scripting (XSS) Detection",
        "SQL Injection Testing & Prevention",
        "Web Application Penetration Testing",
        "Vulnerability Assessment & Analysis",
        "Network Security Analysis",
        "AI Security Fundamentals (NAVTAC Certified)"
      ]
    },
    {
      title: "Technical Skills",
      icon: Terminal,
      description: "System Administration & Development",
      skills: [
        "Linux System Administration",
        "Network Protocols & Security",
        "Burp Suite, Nmap, Metasploit",
        "Python Security Scripting",
        "Web Technologies (HTML, CSS, JS)",
        "React & TypeScript Development"
      ]
    },
    {
      title: "Professional Services",
      icon: Code,
      description: "Freelance & Client Work",
      skills: [
        "Excel VBA Automation",
        "Data Processing & Analysis",
        "Remote Collaboration",
        "Client Communication",
        "Project Management",
        "Quality Assurance"
      ]
    },
    {
      title: "Certifications & Learning",
      icon: Award,
      description: "Continuous Education & Growth",
      skills: [
        "NAVTAC AI Course Certification",
        "Penetration Testing Training",
        "BS IT Student (Ongoing)",
        "Cybersecurity Bootcamps",
        "Online Security Courses",
        "Industry Best Practices"
      ]
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

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="cyber-card p-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <category.icon className="w-8 h-8 text-cyber-blue mr-3" />
                  <div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                    <p className="text-sm text-gray-400">{category.description}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-cyber-blue rounded-full mr-3 flex-shrink-0"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
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