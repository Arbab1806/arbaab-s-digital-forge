import React from 'react';
import { motion } from 'framer-motion';
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
  Eye,
  Cpu,
  Database
} from 'lucide-react';

const SkillsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const skills = [
    { name: "Cybersecurity", icon: Shield, level: 85, color: "destructive" },
    { name: "Web Development", icon: Code, level: 90, color: "primary" },
    { name: "Data Processing", icon: FileSpreadsheet, level: 95, color: "accent" },
    { name: "Penetration Testing", icon: Search, level: 75, color: "destructive" },
    { name: "Linux Systems", icon: Terminal, level: 80, color: "primary" },
    { name: "Network Security", icon: Globe, level: 70, color: "accent" }
  ];

  return (
    <section className="py-20 px-4" id="skills" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise across cybersecurity, development, and data processing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 h-full hover:border-primary/30 transition-all duration-300 overflow-hidden relative radial-fill-container" style={{'--fill-color': `hsl(var(--${skill.color}))`} as React.CSSProperties}>
                <div className="flex items-center mb-4 relative z-10">
                  <div className={`p-3 rounded-lg bg-${skill.color}/10 group-hover:bg-${skill.color}/20 transition-colors`}>
                    <skill.icon className={`w-6 h-6 text-${skill.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold ml-4 text-foreground">
                    {skill.name}
                  </h3>
                </div>
                
                <div className="space-y-2 relative z-10">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className={`text-${skill.color} font-medium`}>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1.2, delay: index * 0.1 + 0.3 }}
                      className={`h-full bg-gradient-to-r from-${skill.color}/80 to-${skill.color} rounded-full relative overflow-hidden`}
                    >
                      <motion.div
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Bug, label: "Vulnerability Research" },
              { icon: Target, label: "Threat Analysis" },
              { icon: Server, label: "System Hardening" },
              { icon: Database, label: "Data Security" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="p-4 rounded-lg bg-card/30 border border-border/30 hover:border-primary/30 transition-colors"
              >
                <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;