import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Shield, 
  Terminal, 
  FileSpreadsheet, 
  Code, 
  Globe,
  Search,
  Bug,
  Server,
  Zap,
  Target,
  Lock,
  Eye,
  Cpu,
  Database
} from 'lucide-react';

const SkillsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skillCategories = [
    {
      title: "Cybersecurity & Penetration Testing",
      icon: Shield,
      color: "cyber-red",
      skills: [
        { name: "OWASP Top 10", level: 75, description: "Web application security vulnerabilities", icon: Target },
        { name: "XSS Attacks", level: 80, description: "Cross-site scripting detection & prevention", icon: Bug },
        { name: "SQL Injection", level: 70, description: "Database attack vectors & mitigation", icon: Database },
        { name: "Web PenTesting", level: 65, description: "Comprehensive web application testing", icon: Search }
      ]
    },
    {
      title: "Systems & Networking",
      icon: Terminal,
      color: "cyber-blue",
      skills: [
        { name: "Linux Administration", level: 75, description: "Command line proficiency & system management", icon: Terminal },
        { name: "Network Security", level: 65, description: "Network protocols & security analysis", icon: Globe },
        { name: "Vulnerability Assessment", level: 70, description: "System & network vulnerability scanning", icon: Eye },
        { name: "Security Tools", level: 68, description: "Nmap, Burp Suite, Metasploit, Wireshark", icon: Zap }
      ]
    },
    {
      title: "Development & Automation",
      icon: Code,
      color: "cyber-purple",
      skills: [
        { name: "Frontend Development", level: 85, description: "React, TypeScript, Tailwind CSS", icon: Code },
        { name: "Excel Automation", level: 90, description: "VBA, Power Query, advanced formulas", icon: FileSpreadsheet },
        { name: "Data Entry & Processing", level: 95, description: "Accurate & efficient data handling", icon: Cpu },
        { name: "Web Technologies", level: 80, description: "HTML, CSS, JavaScript, APIs", icon: Globe }
      ]
    }
  ];

  // Circular progress component
  const CircularProgress = ({ percentage, size = 120, strokeWidth = 8, color = "cyber-blue" }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDasharray = `${circumference} ${circumference}`;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          className="transform -rotate-90"
          width={size}
          height={size}
        >
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="hsl(var(--muted))"
            strokeWidth={strokeWidth}
            fill="transparent"
            opacity={0.3}
          />
          {/* Progress circle */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={`hsl(var(--${color}))`}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset } : { strokeDashoffset: circumference }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{
              filter: `drop-shadow(0 0 8px hsl(var(--${color}) / 0.6))`
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-2xl font-bold text-${color}`}>
            {percentage}%
          </span>
        </div>
      </div>
    );
  };

  // Floating particles animation
  const FloatingParticles = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyber-blue/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    );
  };

  // Skill Orb component with 3D effect
  const SkillOrb = ({ skill, index, categoryIndex, categoryColor }) => {
    const orbSize = 200;
    const isHovered = hoveredSkill === index;

    return (
      <motion.div
        className="relative group cursor-pointer"
        initial={{ opacity: 0, scale: 0, rotateY: -180 }}
        animate={inView ? { 
          opacity: 1, 
          scale: 1, 
          rotateY: 0 
        } : { 
          opacity: 0, 
          scale: 0, 
          rotateY: -180 
        }}
        transition={{ 
          duration: 1.5, 
          delay: categoryIndex * 0.2 + index * 0.3,
          type: "spring",
          stiffness: 100
        }}
        whileHover={{ 
          scale: 1.1, 
          rotateY: 10,
          z: 50
        }}
        onHoverStart={() => setHoveredSkill(index)}
        onHoverEnd={() => setHoveredSkill(null)}
        style={{ perspective: 1000 }}
      >
        {/* Glowing background */}
        <motion.div
          className={`absolute inset-0 rounded-full bg-gradient-to-br from-${categoryColor}/20 to-transparent blur-xl`}
          animate={isHovered ? {
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Main orb */}
        <div className={`relative w-48 h-48 rounded-full bg-gradient-to-br from-card/40 to-card/10 backdrop-blur-sm border border-${categoryColor}/30 flex flex-col items-center justify-center p-6 transition-all duration-500 group-hover:border-${categoryColor} group-hover:shadow-lg group-hover:shadow-${categoryColor}/25`}>
          
          {/* Circular progress around the orb */}
          <div className="absolute inset-0 flex items-center justify-center">
            <CircularProgress 
              percentage={skill.level} 
              size={190} 
              strokeWidth={3}
              color={categoryColor}
            />
          </div>

          {/* Icon with pulsing effect */}
          <motion.div
            className={`p-4 rounded-full bg-${categoryColor}/20 mb-3`}
            animate={isHovered ? {
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            } : {}}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <skill.icon className={`w-8 h-8 text-${categoryColor}`} />
          </motion.div>

          {/* Skill name */}
          <h4 className={`text-lg font-bold text-center text-${categoryColor} mb-2 group-hover:text-white transition-colors`}>
            {skill.name}
          </h4>

          {/* Animated percentage display */}
          <motion.div
            className="text-sm text-muted-foreground text-center"
            animate={isHovered ? { y: [-2, 2, -2] } : {}}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Proficiency
          </motion.div>
        </div>

        {/* Tooltip on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              className={`absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-${categoryColor}/90 backdrop-blur-sm text-white p-3 rounded-lg text-sm max-w-xs text-center z-20 border border-${categoryColor}`}
            >
              {skill.description}
              <div className={`absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-${categoryColor}/90 rotate-45`} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <section className="min-h-screen w-full relative overflow-hidden" id="skills" ref={ref}>
      {/* Animated background grid */}
      <div className="cyber-grid opacity-10" />
      <FloatingParticles />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 border border-cyber-blue/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 360]
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 px-4 max-w-7xl mx-auto py-20">
        {/* Title section with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1.2 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block mb-6"
            animate={{
              scale: [1, 1.05, 1],
              textShadow: [
                "0 0 20px hsl(var(--cyber-blue) / 0.5)",
                "0 0 40px hsl(var(--cyber-blue) / 0.8)",
                "0 0 20px hsl(var(--cyber-blue) / 0.5)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-gradient-cyber">
              Technical Skills
            </h2>
          </motion.div>
          <motion.p 
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Explore my expertise through interactive skill orbs - hover to discover detailed insights 
            into each technology and capability.
          </motion.p>
        </motion.div>

        {/* Skills categories with orb layout */}
        <div className="space-y-32">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -100 : 100 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: categoryIndex % 2 === 0 ? -100 : 100 }}
              transition={{ duration: 1, delay: categoryIndex * 0.3 }}
              className="relative"
            >
              {/* Category header */}
              <motion.div 
                className="text-center mb-12"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <motion.div
                    className={`p-4 rounded-full bg-${category.color}/20 border border-${category.color}/30 mr-4`}
                    animate={{
                      boxShadow: [
                        `0 0 20px hsl(var(--${category.color}) / 0.3)`,
                        `0 0 40px hsl(var(--${category.color}) / 0.6)`,
                        `0 0 20px hsl(var(--${category.color}) / 0.3)`
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <category.icon className={`w-8 h-8 text-${category.color}`} />
                  </motion.div>
                  <h3 className={`text-3xl font-bold text-${category.color}`}>
                    {category.title}
                  </h3>
                </div>
              </motion.div>

        {/* Skills orbs grid with proper spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 justify-items-center px-8">
          {category.skills.map((skill, skillIndex) => (
            <div key={skillIndex} className="flex justify-center w-full">
              <SkillOrb
                skill={skill}
                index={categoryIndex * 10 + skillIndex}
                categoryIndex={categoryIndex}
                categoryColor={category.color}
              />
            </div>
          ))}
        </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skill highlights with matrix effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-32 text-center"
        >
          <h3 className="text-3xl font-bold text-cyber-blue mb-12">Core Competencies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Bug, label: "Vulnerability Research", color: "cyber-red" },
              { icon: Search, label: "Security Analysis", color: "cyber-blue" },
              { icon: Server, label: "System Hardening", color: "cyber-purple" },
              { icon: FileSpreadsheet, label: "Data Processing", color: "cyber-green" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl bg-card/20 border border-${item.color}/30 hover:border-${item.color} transition-all duration-300 group cursor-pointer`}
                whileHover={{ 
                  scale: 1.1,
                  rotateY: 10,
                  boxShadow: `0 20px 40px hsl(var(--${item.color}) / 0.3)`
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 2.5 + index * 0.1 }}
              >
                <motion.div
                  animate={{
                    rotateZ: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                >
                  <item.icon className={`w-10 h-10 text-${item.color} mx-auto mb-3 group-hover:scale-110 transition-transform`} />
                </motion.div>
                <p className={`text-sm font-medium text-${item.color} group-hover:text-white transition-colors`}>
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;