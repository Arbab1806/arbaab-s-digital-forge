import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X, Mail, Phone, User, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage?: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, selectedPackage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: selectedPackage ? `Interest in ${selectedPackage} Package` : '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. I'll get back to you within 24 hours.",
    });

    setIsSubmitting(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    onClose();
  };

  React.useEffect(() => {
    if (selectedPackage) {
      setFormData(prev => ({
        ...prev,
        subject: `Interest in ${selectedPackage} Package`,
        message: `Hi, I'm interested in the ${selectedPackage} package. Could you please provide more details about the services included and the next steps to get started?`
      }));
    }
  }, [selectedPackage]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative z-10 w-full max-w-2xl mx-4"
          >
            <Card className="bg-background border-primary/20 shadow-2xl">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold text-gradient-cyber">
                    Get In Touch
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onClose}
                    className="h-8 w-8 p-0 hover:bg-primary/10"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                {selectedPackage && (
                  <p className="text-muted-foreground">
                    Interested in the <span className="text-primary font-semibold">{selectedPackage}</span> package
                  </p>
                )}
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="How can I help you?"
                        required
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project requirements..."
                      required
                      rows={4}
                      className="border-primary/20 focus:border-primary resize-none"
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/25"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={onClose}
                      className="border-primary/20 hover:bg-primary/10"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;