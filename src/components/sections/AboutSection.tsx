import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Shield, Briefcase, Globe } from 'lucide-react';

const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  const [clickedCard, setClickedCard] = React.useState<number | null>(null);

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

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: { opacity: 1, y: 0, rotateX: 0 }
  };

  const achievements = [
    {
      icon: GraduationCap,
      title: "BS IT Student",
      description: "3rd Semester - Building strong foundation in Information Technology",
      color: "cyber-blue"
    },
    {
      icon: Shield,
      title: "Cybersecurity Training",
      description: "Comprehensive cybersecurity course from NAVTAC - Learning industry best practices",
      color: "cyber-blue"
    },
    {
      icon: Briefcase,
      title: "Versatile Skills",
      description: "Data Entry, Excel Automation, Frontend Development, Web Penetration Testing",
      color: "cyber-purple"
    },
    {
      icon: Globe,
      title: "Remote Ready",
      description: "Open to remote work and freelancing opportunities worldwide",
      color: "cyber-blue"
    }
  ];

  return (
    <section className="h-screen w-full relative" id="about" ref={ref}>
      {/* Background elements */}
      <div className="cyber-grid opacity-20" />
      
      <div className="relative z-10 px-4 max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-gradient-cyber mb-6"
          >
            About Me
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            I'm a passionate cybersecurity enthusiast currently pursuing my Bachelor's in IT. 
            With a focus on penetration testing and a drive for continuous learning, 
            I'm building expertise in securing digital environments while offering versatile 
            remote services to clients globally.
          </motion.p>
        </motion.div>

        {/* Achievement Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group cursor-pointer"
              whileHover={{ 
                scale: 1.05,
                rotateY: 25,
                rotateX: 25
              }}
              onClick={() => {
                setClickedCard(index);
                setTimeout(() => setClickedCard(null), 300);
              }}
              style={{ transformStyle: 'preserve-3d' }}
              data-clickable="true"
            >
              <motion.div
                className="p-6 bg-card/50 backdrop-blur-sm border-gray-700 hover:border-cyber-blue transition-all duration-500 animated-border h-full rounded-lg border"
                animate={clickedCard === index ? {
                  scale: [1, 0.95, 1.05, 1],
                  rotateZ: [0, -2, 2, 0],
                  boxShadow: [
                    `0 0 20px hsl(var(--cyber-blue) / 0.3)`,
                    `0 0 40px hsl(var(--cyber-blue) / 0.8)`,
                    `0 0 60px hsl(var(--cyber-blue) / 1)`,
                    `0 0 20px hsl(var(--cyber-blue) / 0.3)`
                  ]
                } : {}}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className={`p-3 rounded-xl bg-${achievement.color}/20 border border-${achievement.color}/30`}
                    whileHover={{ 
                      scale: 1.1, 
                      rotateY: 15,
                      boxShadow: `0 0 20px hsl(var(--${achievement.color}))`
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <achievement.icon className={`w-6 h-6 text-${achievement.color}`} />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-cyber-blue transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Current Status */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 text-center"
        >
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="px-4 py-2 text-primary border-primary/50 bg-primary/10">
              🎓 Currently Learning
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-cyber-blue border-cyber-blue/50 bg-cyber-blue/10">
              💼 Available for Remote Work
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-cyber-purple border-cyber-purple/50 bg-cyber-purple/10">
              🚀 Open to Freelancing
            </Badge>
          </div>
        </motion.div>
      </div>

      {/* Floating code elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['<script>', '</html>', '{console.log}', 'SELECT *', 'XSS', 'SQLi'].map((code, i) => (
          <motion.div
            key={i}
            className="absolute text-cyber-blue/30 font-mono text-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          >
            {code}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;