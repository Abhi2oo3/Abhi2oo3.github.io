import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Header from '@/components/common/Header';
import Footer from '../homepage/components/Footer';

// Dynamically import the Globe component to avoid SSR issues
const Globe = dynamic(() => import('@/components/three/Globe'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-xl">
      <div className="text-text-secondary">Loading 3D Globe...</div>
    </div>
  )
});

export const metadata: Metadata = {
  title: 'Contact - Abhishek Portfolio Pro',
  description: 'Get in touch with Abhishek Patel, a full-stack developer and AI/ML engineer. Let\'s discuss your project ideas and collaboration opportunities.',
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 animate-fade-in">
                Let's Connect
              </h1>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto animate-fade-in-delayed">
                Have a project in mind or want to discuss potential opportunities? 
                I'd love to hear from you. Fill out the form below or reach out through 
                my social channels.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* 3D Globe */}
              <div className="h-96 lg:h-auto animate-fade-in-left">
                <div className="bg-card border border-subtle rounded-xl p-4 h-full shadow-brand">
                  <Globe />
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="animate-fade-in-right">
                <div className="bg-card border border-subtle rounded-xl p-8 shadow-brand">
                  <h2 className="text-2xl font-semibold text-text-primary mb-6">Send a Message</h2>
                  
                  <form className="space-y-6">
                    <div className="animate-fade-in-up">
                      <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 bg-muted border border-subtle rounded-lg focus:ring-2 focus:ring-brand-cyan focus:border-brand-cyan outline-none transition-all duration-250 text-text-primary"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    
                    <div className="animate-fade-in-up-delayed-1">
                      <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 bg-muted border border-subtle rounded-lg focus:ring-2 focus:ring-brand-cyan focus:border-brand-cyan outline-none transition-all duration-250 text-text-primary"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    
                    <div className="animate-fade-in-up-delayed-2">
                      <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-3 bg-muted border border-subtle rounded-lg focus:ring-2 focus:ring-brand-cyan focus:border-brand-cyan outline-none transition-all duration-250 text-text-primary"
                        placeholder="What's this regarding?"
                        required
                      />
                    </div>
                    
                    <div className="animate-fade-in-up-delayed-3">
                      <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="w-full px-4 py-3 bg-muted border border-subtle rounded-lg focus:ring-2 focus:ring-brand-cyan focus:border-brand-cyan outline-none transition-all duration-250 text-text-primary"
                        placeholder="Tell me about your project or idea..."
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-brand-pink text-brand-pink-foreground font-semibold rounded-lg hover:bg-brand-pink/90 transition-all duration-250 hover:shadow-brand hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brand-pink focus:ring-offset-2 focus:ring-offset-background animate-fade-in-up-delayed-4"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
              {/* Contact Information */}
              <div className="animate-fade-in-up">
                <div className="bg-card border border-subtle rounded-xl p-8 shadow-brand">
                  <h2 className="text-2xl font-semibold text-text-primary mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 p-3 bg-brand-cyan/10 rounded-lg">
                        <svg className="h-6 w-6 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-text-primary">Email</h3>
                        <p className="mt-1 text-text-secondary">abhishekdixit0322@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 p-3 bg-brand-green/10 rounded-lg">
                        <svg className="h-6 w-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-text-primary">Phone</h3>
                        <p className="mt-1 text-text-secondary">+91 89537 17589</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 p-3 bg-brand-purple/10 rounded-lg">
                        <svg className="h-6 w-6 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-text-primary">Location</h3>
                        <p className="mt-1 text-text-secondary">Bangalore, India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Follow Me */}
              <div className="animate-fade-in-up-delayed-1">
                <div className="bg-card border border-subtle rounded-xl p-8 shadow-brand">
                  <h2 className="text-2xl font-semibold text-text-primary mb-6">Follow Me</h2>
                  
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/Abhi2oo3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-muted hover:bg-muted/70 rounded-lg transition-all duration-250 group hover:-translate-y-1"
                      aria-label="GitHub Profile"
                    >
                      <img src="/assets/images/github-octocat-svgrepo-com (2).svg" alt="GitHub" className="w-6 h-6 text-text-secondary group-hover:text-brand-cyan transition-colors duration-250" />
                    </a>
                    
                    <a
                      href="https://www.linkedin.com/in/abhishek-dixit03/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-muted hover:bg-muted/70 rounded-lg transition-all duration-250 group hover:-translate-y-1"
                      aria-label="LinkedIn Profile"
                    >
                      <svg className="h-6 w-6 text-text-secondary group-hover:text-brand-light-cyan transition-colors duration-250" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;