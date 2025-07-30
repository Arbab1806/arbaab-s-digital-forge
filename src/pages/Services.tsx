import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Database, 
  Brain, 
  Shield, 
  Monitor, 
  Wrench,
  Star,
  Check,
  Clock,
  Target,
  Zap,
  Globe,
  Eye,
  Heart,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';
import CustomCursor from '@/components/CustomCursor';

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: 'web-dev',
      title: 'Web Development',
      icon: Code,
      price: '$999',
      category: 'Development',
      description: 'Full-stack web applications with modern technologies and responsive design',
      features: [
        'React/Next.js Development',
        'Responsive Design',
        'API Integration',
        'Database Design',
        'Performance Optimization',
        'SEO Implementation',
        'Progressive Web Apps',
        'E-commerce Solutions'
      ],
      deliverables: [
        'Source Code',
        'Documentation',
        'Deployment Guide',
        'Testing Suite',
        'Performance Report',
        '3 Months Support'
      ],
      timeline: '2-4 weeks'
    },
    {
      id: 'data-entry',
      title: 'Data Entry & Excel Services',
      icon: Database,
      price: '$299',
      category: 'Data Processing',
      description: 'Professional data entry, Excel automation, and data analysis services',
      features: [
        'Data Entry & Validation',
        'Excel Automation',
        'Data Cleaning',
        'Dashboard Creation',
        'Report Generation',
        'Data Migration',
        'Spreadsheet Design',
        'Formula Optimization'
      ],
      deliverables: [
        'Clean Dataset',
        'Excel Templates',
        'Automated Reports',
        'Data Visualizations',
        'Process Documentation',
        'Training Materials'
      ],
      timeline: '1-2 weeks'
    },
    {
      id: 'ai-integration',
      title: 'AI Integration Services',
      icon: Brain,
      price: '$1299',
      category: 'AI/ML',
      description: 'Custom AI solutions, chatbots, and machine learning integrations',
      features: [
        'Custom AI Chatbots',
        'ML Model Integration',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI API Development',
        'Data Science Solutions',
        'Model Training'
      ],
      deliverables: [
        'AI Solution',
        'API Documentation',
        'Model Files',
        'Integration Guide',
        'Performance Metrics',
        'Maintenance Plan'
      ],
      timeline: '3-6 weeks'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Consulting',
      icon: Shield,
      price: '$799',
      category: 'Security',
      description: 'Comprehensive security assessments and penetration testing services',
      features: [
        'Penetration Testing',
        'Vulnerability Assessment',
        'Security Audits',
        'Risk Analysis',
        'Compliance Check',
        'Security Training',
        'Incident Response',
        'Security Architecture'
      ],
      deliverables: [
        'Security Report',
        'Vulnerability List',
        'Remediation Plan',
        'Security Policies',
        'Compliance Checklist',
        'Security Training'
      ],
      timeline: '1-3 weeks'
    },
    {
      id: 'frontend-dev',
      title: 'Frontend Development',
      icon: Monitor,
      price: '$699',
      category: 'Development',
      description: 'Modern, interactive frontend applications with beautiful user interfaces',
      features: [
        'React/Vue.js Development',
        'UI/UX Implementation',
        'Animation & Interactions',
        'Mobile Responsive',
        'Performance Optimization',
        'Cross-browser Testing',
        'Component Libraries',
        'State Management'
      ],
      deliverables: [
        'Frontend Application',
        'Component Documentation',
        'Style Guide',
        'Testing Results',
        'Performance Report',
        'Deployment Package'
      ],
      timeline: '2-3 weeks'
    },
    {
      id: 'custom-solutions',
      title: 'Custom Solutions',
      icon: Wrench,
      price: 'Custom',
      category: 'Consulting',
      description: 'Tailored solutions for unique business requirements and challenges',
      features: [
        'Custom Software Development',
        'Business Process Automation',
        'System Integration',
        'Legacy System Modernization',
        'Technical Consulting',
        'Architecture Design',
        'Prototype Development',
        'Scalability Planning'
      ],
      deliverables: [
        'Custom Solution',
        'Technical Specification',
        'Implementation Plan',
        'User Manual',
        'Support Documentation',
        'Ongoing Support'
      ],
      timeline: 'Variable'
    }
  ];

  const packages = [
    {
      name: 'Starter',
      price: '$499',
      description: 'Perfect for small businesses and startups',
      features: [
        'Basic Web Development',
        'Responsive Design',
        'SEO Optimization',
        'Contact Form',
        '3 Pages',
        '1 Month Support'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      price: '$999',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced Web Development',
        'Custom Design',
        'Database Integration',
        'Admin Panel',
        'Up to 10 Pages',
        'E-commerce Ready',
        '3 Months Support'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      price: '$1999',
      description: 'Complete solution for large organizations',
      features: [
        'Full-Stack Development',
        'Custom Features',
        'API Development',
        'Security Implementation',
        'Unlimited Pages',
        'Performance Optimization',
        '6 Months Support'
      ],
      popular: false,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const workProcess = [
    { step: 1, title: 'Discovery & Planning', description: 'Understanding your requirements and creating a detailed plan' },
    { step: 2, title: 'Design & Prototyping', description: 'Creating mockups and prototypes for your approval' },
    { step: 3, title: 'Development & Testing', description: 'Building your solution with rigorous testing' },
    { step: 4, title: 'Deployment & Training', description: 'Launching your project and providing training' },
    { step: 5, title: 'Support & Maintenance', description: 'Ongoing support and regular maintenance' }
  ];

  const whyChoose = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising quality',
      color: 'text-yellow-400'
    },
    {
      icon: Target,
      title: 'Quality Assured',
      description: 'Rigorous testing and quality control processes',
      color: 'text-green-400'
    },
    {
      icon: Eye,
      title: 'Transparent Process',
      description: 'Clear communication and progress tracking',
      color: 'text-blue-400'
    },
    {
      icon: Heart,
      title: 'Remote Friendly',
      description: 'Seamless collaboration from anywhere in the world',
      color: 'text-red-400'
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

      {/* Header */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="cyber-grid opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-gradient-cyber"
          >
            My Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Professional services tailored to your needs with cutting-edge technology and expert craftsmanship
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Services List */}
            <div className="space-y-6">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 ${
                      selectedService === service.id
                        ? 'border-primary bg-primary/10 shadow-lg shadow-primary/20'
                        : 'border-border hover:border-primary/50 hover:bg-primary/5'
                    }`}
                    onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                    data-clickable="true"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg bg-primary/20">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{service.title}</h3>
                          <Badge variant="secondary" className="mt-1">
                            {service.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{service.price}</div>
                        <div className="text-sm text-muted-foreground">{service.timeline}</div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Service Details */}
            <div className="sticky top-8">
              <AnimatePresence mode="wait">
                {selectedService ? (
                  <motion.div
                    key={selectedService}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    className="p-8 rounded-xl border border-primary bg-card"
                  >
                        {(() => {
                          const service = services.find(s => s.id === selectedService);
                          if (!service) return null;
                          const IconComponent = service.icon;
                          
                          return (
                            <div>
                              <div className="flex items-center space-x-4 mb-6">
                                <div className="p-4 rounded-lg bg-primary/20">
                                  <IconComponent className="w-8 h-8 text-primary" />
                                </div>
                                <div>
                                  <h3 className="text-2xl font-bold">{service.title}</h3>
                                  <p className="text-muted-foreground">{service.description}</p>
                                </div>
                              </div>

                              <div className="space-y-6">
                                <div>
                                  <h4 className="font-semibold mb-3 text-primary">Features Included:</h4>
                                  <div className="grid grid-cols-1 gap-2">
                                    {service.features.map((feature, idx) => (
                                      <div key={idx} className="flex items-center space-x-2">
                                        <Check className="w-4 h-4 text-green-400" />
                                        <span className="text-sm">{feature}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                <div>
                                  <h4 className="font-semibold mb-3 text-primary">Deliverables:</h4>
                                  <div className="grid grid-cols-1 gap-2">
                                    {service.deliverables.map((item, idx) => (
                                      <div key={idx} className="flex items-center space-x-2">
                                        <Target className="w-4 h-4 text-blue-400" />
                                        <span className="text-sm">{item}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t">
                                  <div className="flex items-center space-x-2">
                                    <Clock className="w-4 h-4 text-muted-foreground" />
                                    <span className="text-sm text-muted-foreground">Timeline: {service.timeline}</span>
                                  </div>
                                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                                </div>
                              </div>
                            </div>
                          );
                        })()}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-8 rounded-xl border border-dashed border-muted-foreground/30 text-center"
                  >
                    <Globe className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Select a Service</h3>
                    <p className="text-muted-foreground">
                      Click on any service from the left to view detailed information
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Package Deals */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gradient-cyber">Package Deals</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our pre-designed packages for the best value
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-8 rounded-xl border ${
                  pkg.popular ? 'border-primary scale-105' : 'border-border'
                } bg-card hover:shadow-lg transition-all duration-300`}
                data-clickable="true"
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className={`text-4xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent mb-2`}>
                    {pkg.price}
                  </div>
                  <p className="text-muted-foreground">{pkg.description}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full bg-gradient-to-r ${pkg.color} hover:shadow-lg`}
                  data-clickable="true"
                >
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gradient-cyber">How I Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My proven 5-step process ensures successful project delivery
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-primary/20" />

            <div className="space-y-16">
              {workProcess.map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-card p-6 rounded-xl border border-border shadow-lg">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                          {process.step}
                        </div>
                        <h3 className="text-xl font-semibold">{process.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{process.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose My Services */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gradient-cyber">Why Choose My Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What sets me apart from the competition
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                  data-clickable="true"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-card border-2 border-current ${item.color} flex items-center justify-center`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 text-gradient-cyber">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss your requirements and create something amazing together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/25 px-8 py-6 text-lg"
                  data-clickable="true"
                >
                  Request Free Consultation
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                data-clickable="true"
              >
                View Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Services;