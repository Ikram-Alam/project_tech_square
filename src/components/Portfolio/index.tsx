import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
  tech: string[];
  results: string;
  timeline: string;
}

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: "Luxe Fashion E-commerce",
    category: "Digital Solutions",
    description: "Revolutionary online fashion platform with AI-powered recommendations, virtual try-on, and seamless payment integration.",
    image: "/images/blog/blog-01.jpg",
    tech: ["Next.js", "Stripe", "AI/ML", "PWA"],
    results: "300% increase in sales",
    timeline: "6 weeks",
  },
  {
    id: 2,
    title: "TechFlow Brand Identity",
    category: "Creative & Design",
    description: "Complete visual identity transformation for a fintech startup, including logo design, brand guidelines, and digital assets.",
    image: "/images/blog/blog-02.jpg",
    tech: ["Figma", "Adobe Suite", "Branding", "UI/UX"],
    results: "50% brand recognition boost",
    timeline: "4 weeks",
  },
  {
    id: 3,
    title: "SmartAssist AI Chatbot",
    category: "AI & Automation",
    description: "Intelligent customer service automation that handles 90% of inquiries with natural language processing and sentiment analysis.",
    image: "/images/blog/blog-03.jpg",
    tech: ["OpenAI", "Python", "NLP", "Integration"],
    results: "80% faster response time",
    timeline: "8 weeks",
  },
];

const Portfolio = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary/5 pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-20 md:pb-20 lg:pt-28 lg:pb-28 dark:from-gray-dark dark:via-gray-dark dark:to-gray-dark">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/6 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 h-80 w-80 rounded-full bg-secondary/5 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 h-96 w-96 rounded-full bg-yellow/5 blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Enhanced Header */}
        <div className="mb-16 text-center">
          <div className="mb-4">
            <span className="inline-block rounded-full bg-primary/10 px-6 py-2 text-sm font-semibold text-primary">
              Our Success Stories
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-black dark:text-white sm:text-5xl">
            Portfolio That
            <span className="bg-gradient-to-r from-primary via-secondary to-yellow bg-clip-text text-transparent"> Speaks </span>
            Results
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-body-color">
            Discover how we've transformed businesses across industries with innovative solutions, 
            creative excellence, and cutting-edge technology. Each project tells a story of success.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="rounded-xl bg-white p-6 text-center shadow-lg dark:bg-gray-dark">
            <div className="mb-2 text-3xl font-bold text-primary">200+</div>
            <div className="text-sm text-body-color">Projects Completed</div>
          </div>
          <div className="rounded-xl bg-white p-6 text-center shadow-lg dark:bg-gray-dark">
            <div className="mb-2 text-3xl font-bold text-secondary">150+</div>
            <div className="text-sm text-body-color">Happy Clients</div>
          </div>
          <div className="rounded-xl bg-white p-6 text-center shadow-lg dark:bg-gray-dark">
            <div className="mb-2 text-3xl font-bold text-yellow">50+</div>
            <div className="text-sm text-body-color">Industries Served</div>
          </div>
          <div className="rounded-xl bg-white p-6 text-center shadow-lg dark:bg-gray-dark">
            <div className="mb-2 text-3xl font-bold text-primary">99%</div>
            <div className="text-sm text-body-color">Success Rate</div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioData.map((item, index) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl dark:bg-gray-dark"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm ${
                    item.category === 'Digital Solutions' ? 'bg-primary/80' :
                    item.category === 'Creative & Design' ? 'bg-secondary/80' : 'bg-yellow/80'
                  }`}>
                    {item.category}
                  </span>
                </div>

                {/* Results Badge */}
                <div className="absolute bottom-4 right-4">
                  <div className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    {item.results}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <div className="text-xs text-body-color">
                    {item.timeline}
                  </div>
                </div>
                
                <p className="mb-4 text-sm leading-relaxed text-body-color">
                  {item.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="mb-2 text-xs font-semibold text-black dark:text-white">
                    Tech Stack:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <Link
                    href={`https://wa.me/923353855193?text=Hi%20Tech%20Square,%20I%20want%20a%20project%20like%20${encodeURIComponent(item.title)}`}
                    target="_blank"
                    className="flex-1 rounded-lg bg-primary px-4 py-2 text-center text-sm font-semibold text-white transition-all duration-300 hover:bg-primary/80 hover:scale-105"
                  >
                    Get Similar
                  </Link>
                  
                  <button className="rounded-lg border border-gray-200 p-2 transition-all duration-300 hover:border-primary hover:text-primary dark:border-gray-700">
                    <svg width="16" height="16" viewBox="0 0 24 24" className="fill-current">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L19 8L21 9ZM3 9L5 8L3 7V9ZM12 18C10.9 18 10 18.9 10 20C10 21.1 10.9 22 12 22C13.1 22 14 21.1 14 20C14 18.9 13.1 18 12 18Z"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>

        {/* Featured Case Study */}
        <div className="mt-20">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-secondary to-yellow p-1">
            <div className="rounded-3xl bg-white p-8 dark:bg-gray-dark md:p-12">
              <div className="grid items-center gap-8 lg:grid-cols-2">
                <div>
                  <div className="mb-4">
                    <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                      Featured Case Study
                    </span>
                  </div>
                  <h3 className="mb-4 text-3xl font-bold text-black dark:text-white">
                    Enterprise Digital Transformation
                  </h3>
                  <p className="mb-6 text-lg text-body-color">
                    How we helped a Fortune 500 company modernize their entire digital infrastructure, 
                    resulting in 400% efficiency improvement and $2M cost savings annually.
                  </p>
                  
                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">400%</div>
                      <div className="text-sm text-body-color">Efficiency Boost</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">$2M</div>
                      <div className="text-sm text-body-color">Cost Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow">6 Months</div>
                      <div className="text-sm text-body-color">Timeline</div>
                    </div>
                  </div>

                  <Link
                    href="https://wa.me/923353855193?text=Hi%20Tech%20Square,%20I%20want%20to%20discuss%20enterprise%20solutions"
                    target="_blank"
                    className="inline-flex items-center space-x-2 rounded-full bg-primary px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-primary/80 hover:scale-105"
                  >
                    <span>Discuss Your Enterprise Project</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" className="fill-current">
                      <path d="M10.293 3.293L6 7.586 7.414 9l4-4 4 4L16.828 7.586l-4.293-4.293a1 1 0 00-1.414 0z"/>
                    </svg>
                  </Link>
                </div>
                
                <div className="relative">
                  <div className="aspect-video overflow-hidden rounded-2xl">
                    <Image
                      src="/images/blog/blog-01.jpg"
                      alt="Enterprise Case Study"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 rounded-xl bg-white p-4 shadow-xl dark:bg-gray-dark">
                    <div className="text-2xl">🚀</div>
                    <div className="text-sm font-semibold text-black dark:text-white">Success Story</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-r from-primary/10 via-secondary/10 to-yellow/10 p-8 md:p-12">
            <h3 className="mb-4 text-3xl font-bold text-black dark:text-white">
              Ready to Create Your Success Story?
            </h3>
            <p className="mb-8 text-lg text-body-color">
              Join 200+ successful businesses who trusted Tech Square to transform their vision into reality. 
              Let's discuss your project and create something extraordinary together.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="https://wa.me/923353855193?text=Hi%20Tech%20Square,%20I'm%20ready%20to%20start%20my%20project"
                target="_blank"
                className="rounded-full bg-primary px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-primary/80 hover:scale-105"
              >
                🚀 Start Your Project
              </Link>
              
              <Link
                href="/contact"
                className="rounded-full border-2 border-primary/30 px-8 py-4 font-semibold text-primary transition-all duration-300 hover:border-primary hover:bg-primary/5"
              >
                Schedule Consultation
              </Link>
              
              <Link
                href="https://wa.me/923353855193?text=Hi%20Tech%20Square,%20I%20want%20to%20see%20more%20portfolio%20examples"
                target="_blank"
                className="rounded-full bg-secondary px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-secondary/80 hover:scale-105"
              >
                View More Work
              </Link>
            </div>

            <div className="mt-8 text-sm text-body-color">
              ⚡ Free consultation • 🎯 Custom solutions • 💬 Instant WhatsApp support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
