import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ExternalLink, Shield } from 'lucide-react';

const SocialSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/arbaab",
      description: "Explore my open-source security tools and automation scripts",
      color: "cyber-blue",
      bgGradient: "from-cyber-blue/20 to-cyber-green/20",
      stats: "50+ Repositories"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/arbaab-hussain",
      description: "Connect with me professionally and see my latest achievements",
      color: "cyber-purple",
      bgGradient: "from-cyber-purple/20 to-cyber-blue/20",
      stats: "Professional Network"
    },
    {
      name: "TryHackMe",
      icon: Shield,
      url: "https://tryhackme.com/p/arbaab",
      description: "Check out my cybersecurity challenges and ethical hacking journey",
      color: "cyber-green",
      bgGradient: "from-cyber-green/20 to-cyber-purple/20",
      stats: "Security Expert"
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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  return (
    <section className="h-screen w-full relative" id="social" ref={ref}>
      {/* Background */}
      <div className="cyber-grid opacity-10" />
      
      <div className="relative z-10 px-4 max-w-4xl mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gradient-cyber mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Follow my journey in cybersecurity and connect with me on professional platforms. 
            Let's build a network of security professionals!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.name}
              variants={cardVariants}
              className="group"
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden bg-card/30 backdrop-blur-sm border-gray-700 hover:border-cyber-blue transition-all duration-500 animated-border h-full">
                {/* Card Header with Gradient */}
                <div className={`relative h-32 bg-gradient-to-br ${social.bgGradient} p-6 flex items-center justify-center`}>
                  <motion.div
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 15,
                      boxShadow: `0 0 30px hsl(var(--${social.color}))`
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <social.icon className={`w-16 h-16 text-${social.color}`} />
                  </motion.div>
                  
                  {/* Stats Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`px-3 py-1 rounded-full bg-${social.color}/20 border border-${social.color}/30`}>
                      <span className={`text-xs font-medium text-${social.color}`}>
                        {social.stats}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-cyber-blue transition-colors">
                    {social.name}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {social.description}
                  </p>

                  <a 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button
                      variant="outline"
                      className="w-full border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Connect on {social.name}
                    </Button>
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center"
        >
          <Card className="p-8 bg-card/20 border-gray-700 max-w-2xl mx-auto">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mb-6"
            >
              <Mail className="w-12 h-12 text-cyber-blue mx-auto" />
            </motion.div>
            
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start a Project?
            </h3>
            <p className="text-gray-400 mb-6">
              I'm always excited to work on challenging cybersecurity projects and 
              help businesses secure their digital infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-gradient-cyber hover:shadow-cyber"
              >
                <a href="mailto:aaahussain1806@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </a>
              </Button>
              
              <Button
                asChild
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10"
              >
                <a href="https://wa.me/923707332494" target="_blank" rel="noopener noreferrer">
                  📱 WhatsApp
                </a>
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-500 mb-4">
              Built with 💙 using React, TypeScript & Framer Motion
            </p>
            <p className="text-sm text-gray-600">
              © 2024 Arbaab Hussain. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Floating social icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['🔗', '👥', '💼', '🌐', '⚡', '🚀'].map((icon, i) => (
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
              scale: [1, 1.3, 1]
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

export default SocialSection;