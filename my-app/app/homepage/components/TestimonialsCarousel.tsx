'use client';

import { useState, useEffect } from 'react';
//import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface TestimonialsCarouselProps {
  className?: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  content: string;
  rating: number;
}

const TestimonialsCarousel = ({ className = '' }: TestimonialsCarouselProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ryan Danisavage',
    role: 'Client',
    company: 'Blackcoffer',
    image: "/assets/images/danisavage.jpg",
    alt: 'Professional portrait of Indian woman with long dark hair in white blazer smiling confidently',
    content: 'Working with Abhishek was smooth and highly productive. He understood requirements quickly, communicated clearly, and delivered the project on time with clean, scalable code. His ability to combine design and development made the entire process efficient and stress-free.',
    rating: 5
  },
  {
    id: 2,
    name: 'Suchit Sharma',
    role: 'Founder & Director',
    company: 'UMA Robotics',
    image: "/assets/images/suchit.png",
    alt: 'Professional portrait of Indian woman with long dark hair in white blazer smiling confidently',
    content: 'Abhishek contributed significantly during his time with our team.He improved the performance of our robot-monitoring dashboard and collaborated seamlessly with developers and designers.His problem-solving ability, speed of learning, and professionalism made him a reliable contributor to the project.— Web Development Team, UMA Robotics Technology (IIT-R)',
    rating: 5
  },
  {
    id: 3,
    name: 'Chandrapal Singh',
    role: 'Senior Developer',
    company: 'Blackcoffer',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_19d0e6f0d-1763295389190.png",
    alt: 'Casual photo of Indian man with beard and glasses in gray t-shirt smiling warmly',
    content: 'Abhishek is highly collaborative, adapts quickly to new technologies, and takes ownership of tasks. His positive mindset and problem-solving approach make him a valuable member of any engineering team.His positive mindset and problem-solving approach make him a valuable member of any engineering team.— Team Lead / Mentor',
    rating: 5
  }];


  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHydrated, testimonials.length]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];
  
  // Add debug log to see what image is being used
  console.log('Current testimonial image:', currentTestimonial.image);

  return (
    <section className={`py-20 bg-card/30 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary">
            <span className="bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            What colleagues and clients say about working with me
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl border border-brand-cyan/10 p-8 md:p-12 shadow-brand relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-cyan/5 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <Icon name="ChatBubbleLeftRightIcon" size={48} className="text-brand-cyan/20 mb-6" />

              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-brand-cyan/20">
                    <img 
                      src={currentTestimonial.image}
                      alt={currentTestimonial.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg text-text-secondary leading-relaxed mb-6 italic">
                    &quot;{currentTestimonial.content}&quot;
                  </p>

                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-text-primary">{currentTestimonial.name}</h4>
                    <p className="text-brand-cyan font-semibold">{currentTestimonial.role}</p>
                    <p className="text-sm text-text-muted">{currentTestimonial.company}</p>
                    
                    <div className="flex items-center justify-center md:justify-start space-x-1 pt-2">
                      {[...Array(currentTestimonial.rating)].map((_, i) =>
                      <Icon key={i} name="StarIcon" size={20} className="text-warning" variant="solid" />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-brand-cyan/10">
                <button
                  onClick={handlePrevious}
                  className="p-3 bg-muted/50 hover:bg-muted rounded-lg transition-colors duration-250 group"
                  aria-label="Previous testimonial">

                  <Icon name="ChevronLeftIcon" size={24} className="text-text-secondary group-hover:text-brand-cyan transition-colors duration-250" />
                </button>

                <div className="flex items-center space-x-2">
                  {testimonials.map((_, index) =>
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-250 ${
                    index === currentIndex ? 'w-8 bg-brand-cyan' : 'bg-text-muted/30'}`
                    }
                    aria-label={`Go to testimonial ${index + 1}`} />

                  )}
                </div>

                <button
                  onClick={handleNext}
                  className="p-3 bg-muted/50 hover:bg-muted rounded-lg transition-colors duration-250 group"
                  aria-label="Next testimonial">

                  <Icon name="ChevronRightIcon" size={24} className="text-text-secondary group-hover:text-brand-cyan transition-colors duration-250" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsCarousel;