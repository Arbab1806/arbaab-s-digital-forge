import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, User, Briefcase, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import CustomCursor from '@/components/CustomCursor';

const About = () => {
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
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="flex-shrink-0">
              <img 
                src="/lovable-uploads/bba63060-9dcb-43a6-a163-2cee10a330e0.png" 
                alt="Arbaab Hussain - Cybersecurity Professional" 
                className="w-64 h-64 object-cover rounded-2xl border-2 border-cyber-blue/30 shadow-2xl"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-5xl font-bold text-gradient-cyber mb-6">About Me</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                I'm Arbaab Hussain, a passionate BS IT student specializing in cybersecurity and penetration testing. 
                My journey combines academic excellence with practical expertise in securing digital infrastructures.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              className="cyber-card p-6 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <User className="w-12 h-12 text-cyber-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Personal</h3>
              <p className="text-gray-300">Passionate about cybersecurity and technology</p>
            </motion.div>

            <motion.div
              className="cyber-card p-6 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <GraduationCap className="w-12 h-12 text-cyber-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Education</h3>
              <p className="text-gray-300">BS IT Student with cybersecurity focus</p>
            </motion.div>

            <motion.div
              className="cyber-card p-6 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <Briefcase className="w-12 h-12 text-cyber-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Experience</h3>
              <p className="text-gray-300">Remote freelancer and penetration tester</p>
            </motion.div>
          </div>

          <motion.div
            className="cyber-card p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-cyber-blue mb-6">My Journey</h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                I'm Arbaab Hussain, a passionate BS IT student with a strong focus on cybersecurity and 
                penetration testing. My journey in technology began with a curiosity about how systems work 
                and how they can be secured.
              </p>
              <p>
                Currently pursuing my degree while gaining practical experience through various projects 
                and freelance work. I specialize in web application security, vulnerability assessment, 
                and Excel automation services.
              </p>
              <p>
                I've completed specialized training from NAVTAC in AI technologies, which has enhanced 
                my understanding of modern security challenges in AI-driven systems. I'm also actively 
                learning penetration testing methodologies and tools.
              </p>
              <p>
                When I'm not studying or working on security projects, I enjoy exploring new technologies, 
                contributing to open-source projects, and sharing knowledge with the cybersecurity community.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      </div>
    </>
  );
};

export default About;