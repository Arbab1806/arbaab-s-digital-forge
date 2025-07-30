import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Mail, MessageSquare, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aaahussain1806@gmail.com",
      href: "mailto:aaahussain1806@gmail.com",
      color: "cyber-blue"
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "03707332494",
      href: "https://wa.me/923707332494",
      color: "cyber-blue"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pakistan (Remote Available)",
      href: null,
      color: "cyber-purple"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - In real app, this would connect to Supabase
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', whatsapp: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="h-screen w-full relative" id="contact" ref={ref}>
      {/* Background */}
      <div className="cyber-grid opacity-10" />
      
      <div className="relative z-10 px-4 max-w-6xl mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gradient-cyber mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on cybersecurity projects or need freelance services? 
            Let's discuss how I can help secure your digital assets.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                I'm currently available for remote work and freelancing opportunities. 
                Whether you need penetration testing, security audits, data processing, 
                or web development services, I'm here to help.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <Card className="p-4 bg-card/30 backdrop-blur-sm border-gray-700 hover:border-cyber-blue transition-all duration-300 animated-border">
                    <div className="flex items-center space-x-4">
                      <motion.div
                        className={`p-3 rounded-xl bg-${contact.color}/20 border border-${contact.color}/30`}
                        whileHover={{ 
                          scale: 1.1,
                          boxShadow: `0 0 20px hsl(var(--${contact.color}))`
                        }}
                      >
                        <contact.icon className={`w-5 h-5 text-${contact.color}`} />
                      </motion.div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-400 mb-1">{contact.label}</p>
                        {contact.href ? (
                          <a 
                            href={contact.href}
                            className="text-foreground hover:text-cyber-blue transition-colors font-medium"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Availability Status */}
            <motion.div variants={itemVariants}>
              <Card className="p-6 bg-card/20 border-primary/50">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <span className="text-primary font-semibold">Available for Work</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/10 text-primary border-primary/30">
                    Remote Projects
                  </Badge>
                  <Badge className="bg-cyber-blue/10 text-cyber-blue border-cyber-blue/30">
                    Security Audits
                  </Badge>
                  <Badge className="bg-cyber-purple/10 text-cyber-purple border-cyber-purple/30">
                    Data Processing
                  </Badge>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="p-8 bg-card/30 backdrop-blur-sm border-gray-700 animated-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-foreground mb-2 block">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-gray-600 focus:border-cyber-blue"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground mb-2 block">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-gray-600 focus:border-cyber-blue"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="whatsapp" className="text-foreground mb-2 block">
                    WhatsApp Number
                  </Label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className="bg-background/50 border-gray-600 focus:border-cyber-blue"
                    placeholder="+1 234 567 8900"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground mb-2 block">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-background/50 border-gray-600 focus:border-cyber-blue resize-none"
                    placeholder="Tell me about your project requirements, timeline, and any specific security concerns..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-cyber hover:shadow-cyber text-background font-semibold py-6"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="mr-2"
                    >
                      ⚡
                    </motion.div>
                  ) : (
                    <Send className="w-4 h-4 mr-2" />
                  )}
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </motion.div>
        </motion.div>

        {/* Note about Supabase integration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            💡 Form submissions will be stored securely once Supabase integration is activated
          </p>
        </motion.div>
      </div>

      {/* Floating message icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['💌', '📧', '📱', '🔒', '💼', '🚀'].map((icon, i) => (
          <motion.div
            key={i}
            className="absolute text-xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 15, -15, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;