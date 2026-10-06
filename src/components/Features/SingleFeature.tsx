import Link from "next/link";
import { Feature } from "@/types/feature";

const SingleFeature = ({ feature, index }: { feature: Feature; index?: number }) => {
  const { icon, title, paragraph } = feature;
  
  // Color mapping for different services
  const getServiceColor = (title: string) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('design') || lowerTitle.includes('animation')) {
      return 'primary';
    } else if (lowerTitle.includes('web') || lowerTitle.includes('e-commerce')) {
      return 'secondary';
    } else if (lowerTitle.includes('ai') || lowerTitle.includes('chatbot')) {
      return 'yellow';
    }
    return 'primary';
  };

  const colorClass = getServiceColor(title);
  const animationDelay = index ? `${index * 0.1}s` : '0s';

  return (
    <div className="group h-full w-full">
      <div 
        className="h-full rounded-2xl bg-white p-8 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl dark:bg-gray-dark"
        style={{animationDelay}}
      >
        {/* Icon Container */}
        <div className="relative mb-8">
          <div className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-${colorClass}/10 text-${colorClass} transition-all duration-300 group-hover:bg-${colorClass} group-hover:text-white group-hover:scale-110 group-hover:rotate-3`}>
            {icon}
          </div>
          
          {/* Floating indicator */}
          <div className={`absolute -right-2 -top-2 h-6 w-6 rounded-full bg-${colorClass}/20 transition-all duration-300 group-hover:bg-${colorClass} group-hover:scale-125`}>
            <div className={`h-full w-full animate-ping rounded-full bg-${colorClass}/40`}></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="mb-6 text-base leading-relaxed text-body-color">
            {paragraph}
          </p>
        </div>

        {/* Action Section */}
        <div className="mt-auto">
          <div className={`mb-4 h-1 w-12 bg-${colorClass}/30 transition-all duration-300 group-hover:w-full group-hover:bg-${colorClass}`}></div>
          
          <div className="flex items-center justify-between">
            <Link
              href={`https://wa.me/923353855193?text=Hi%20Tech%20Square,%20I%20need%20${encodeURIComponent(title.toLowerCase())}%20services`}
              target="_blank"
              className={`inline-flex items-center space-x-2 rounded-full bg-${colorClass}/10 px-4 py-2 text-sm font-semibold text-${colorClass} transition-all duration-300 hover:bg-${colorClass} hover:text-white hover:scale-105`}
            >
              <span>Get Started</span>
              <svg width="14" height="14" viewBox="0 0 24 24" className="fill-current">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            </Link>
            
            <div className="text-xs text-body-color opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Click to chat
            </div>
          </div>
        </div>

        {/* Hover overlay effect */}
        <div className={`absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-${colorClass}/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}></div>
      </div>
    </div>
  );
};

export default SingleFeature;
