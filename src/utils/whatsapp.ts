// WhatsApp integration utilities
export const WHATSAPP_NUMBER = "+923353855193";

// Pre-built message templates for different services
export const WhatsAppMessages = {
  // General Messages
  general: "Hi Tech Square! I'm interested in your services and would like to know more about how you can help transform my business.",
  consultation: "Hi Tech Square! I'd like to schedule a free consultation to discuss my project requirements.",
  
  // Service-specific Messages
  creativeDesign: "Hi Tech Square! I need help with Creative Design services. Can you tell me more about your design solutions?",
  digitalSolutions: "Hi Tech Square! I'm interested in Digital Solutions for my business. What services do you offer?",
  aiAutomation: "Hi Tech Square! I want to learn about AI Automation solutions. How can you help streamline my business processes?",
  webDevelopment: "Hi Tech Square! I need a website/web application developed. Can we discuss my requirements?",
  mobileApp: "Hi Tech Square! I'm looking to develop a mobile application. What's your development process?",
  
  // Business Context Messages
  startup: "Hi Tech Square! I'm a startup founder looking for tech solutions to launch my business. Can you help?",
  enterprise: "Hi Tech Square! We're an established business looking to modernize our digital infrastructure. Let's discuss.",
  ecommerce: "Hi Tech Square! I want to build an e-commerce platform. What solutions do you recommend?",
  
  // Specific Action Messages
  quote: "Hi Tech Square! I'd like to get a quote for my project. Can we schedule a call to discuss the requirements?",
  portfolio: "Hi Tech Square! I've seen your portfolio and I'm impressed. I'd like to discuss a similar project for my business.",
  emergency: "Hi Tech Square! I have an urgent project requirement. Are you available to discuss immediately?",
  
  // Follow-up Messages
  callback: "Hi Tech Square! I filled out your contact form but haven't heard back. Can we connect now?",
  meeting: "Hi Tech Square! I'd like to schedule a meeting to discuss my project in detail.",
  
  // Support Messages
  support: "Hi Tech Square! I need technical support for my existing project. Can you assist?",
  update: "Hi Tech Square! I'd like an update on my current project status.",
};

// Function to create WhatsApp URL with pre-filled message (wa.me)
export const createWhatsAppURL = (messageKey: keyof typeof WhatsAppMessages | string, customMessage?: string) => {
  const message = customMessage || WhatsAppMessages[messageKey as keyof typeof WhatsAppMessages] || messageKey;
  return `https://wa.me/${WHATSAPP_NUMBER.replace("+", "")}?text=${encodeURIComponent(message)}`;
};

// Function to create WhatsApp Web URL with pre-filled message (more reliable)
export const createWhatsAppWebURL = (messageKey: keyof typeof WhatsAppMessages | string, customMessage?: string) => {
  const message = customMessage || WhatsAppMessages[messageKey as keyof typeof WhatsAppMessages] || messageKey;
  return `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER.replace("+", "")}&text=${encodeURIComponent(message)}`;
};

// Helper function to get WhatsApp link properties
export const getWhatsAppProps = (messageKey?: keyof typeof WhatsAppMessages, customMessage?: string) => {
  return {
    href: createWhatsAppURL(messageKey || "general", customMessage),
    target: "_blank" as const,
    rel: "noopener noreferrer" as const,
  };
};

// Predefined WhatsApp buttons for common use cases
export const WhatsAppButtons = {
  // Primary CTA Button
  primary: (message?: keyof typeof WhatsAppMessages) => ({
    href: createWhatsAppURL(message || "general"),
    className: "inline-flex items-center justify-center space-x-2 rounded-full bg-green-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-green-600 hover:scale-105",
    target: "_blank" as const,
    rel: "noopener noreferrer" as const,
  }),
  
  // Secondary Button
  secondary: (message?: keyof typeof WhatsAppMessages) => ({
    href: createWhatsAppURL(message || "general"),
    className: "inline-flex items-center justify-center space-x-2 rounded-full border-2 border-green-500 px-6 py-3 font-semibold text-green-500 transition-all duration-300 hover:bg-green-500 hover:text-white hover:scale-105",
    target: "_blank" as const,
    rel: "noopener noreferrer" as const,
  }),
  
  // Icon Button
  icon: (message?: keyof typeof WhatsAppMessages) => ({
    href: createWhatsAppURL(message || "general"),
    className: "flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white transition-all duration-300 hover:bg-green-600 hover:scale-110",
    target: "_blank" as const,
    rel: "noopener noreferrer" as const,
  }),
};
