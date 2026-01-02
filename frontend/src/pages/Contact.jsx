import { useState } from 'react';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin, Linkedin, Github, Sparkles, Clock, CheckCircle2, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'john.doe@example.com',
      link: 'mailto:john.doe@example.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (123) 456-7890',
      link: 'tel:+11234567890',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'New York, NY',
      link: null,
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/johndoe',
      link: 'https://linkedin.com/in/johndoe',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const availability = [
    'Open to internship opportunities',
    'Available for freelance projects',
    'Remote or on-site positions'
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-40 right-20 w-60 h-60 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 backdrop-blur-sm rounded-full border border-purple-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">Let's Connect</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              I am currently seeking internship opportunities for Summer/Fall 2024.
              Feel free to reach out for collaborations, opportunities, or just to connect!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative py-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Contact Information */}
            <div className="space-y-8">
              {/* Contact Info Card */}
              <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <Send className="w-5 h-5 text-purple-400" />
                    </div>
                    Contact Information
                  </h2>
                  
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      return (
                        <div key={index} className="flex items-start gap-4 group/item">
                          <div className={`p-3 bg-gradient-to-br ${info.color} rounded-xl group-hover/item:scale-110 transition-transform duration-300`}>
                            <Icon className="text-white w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-white mb-1">{info.title}</h3>
                            {info.link ? (
                              
                                <a href={info.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm break-all"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-gray-400 text-sm">{info.value}</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Availability Card */}
              <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <h3 className="text-xl font-bold text-white">Availability</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {availability.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Response Time Card */}
              <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative flex items-start gap-4">
                  <div className="p-3 bg-purple-500/20 rounded-xl">
                    <Clock className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Response Time</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      I typically respond within 24 hours. For urgent matters, please mention URGENT in your message.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-2">
              <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative">
                  <h2 className="text-3xl font-bold text-white mb-2">Send a Message</h2>
                  <p className="text-gray-400 mb-8">
                    Fill out the form below and I will get back to you as soon as possible.
                  </p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};

export default Contact;