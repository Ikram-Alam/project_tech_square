import { Feature } from "@/types/feature";

const servicesData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M20 0C8.95 0 0 8.95 0 20C0 31.05 8.95 40 20 40C31.05 40 40 31.05 40 20C40 8.95 31.05 0 20 0ZM20 36C11.16 36 4 28.84 4 20C4 11.16 11.16 4 20 4C28.84 4 36 11.16 36 20C36 28.84 28.84 36 20 36Z"/>
        <path d="M26 14H14C13.45 14 13 14.45 13 15V25C13 25.55 13.45 26 14 26H26C26.55 26 27 25.55 27 25V15C27 14.45 26.55 14 26 14ZM25 24H15V16H25V24Z"/>
      </svg>
    ),
    title: "Brand Design",
    paragraph:
      "Creating stunning visual identities, logos, and brand materials that capture your business essence and resonate with your target audience.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M35 5H5C2.24 5 0 7.24 0 10V30C0 32.76 2.24 35 5 35H35C37.76 35 40 32.76 40 30V10C40 7.24 37.76 5 35 5ZM36 30C36 30.55 35.55 31 35 31H5C4.45 31 4 30.55 4 30V10C4 9.45 4.45 9 5 9H35C35.55 9 36 9.45 36 10V30Z"/>
        <path d="M12 16L20 22L28 16V24L20 30L12 24V16Z"/>
      </svg>
    ),
    title: "Animation & Motion Graphics",
    paragraph:
      "Bringing your ideas to life with captivating animations, motion graphics, and interactive visual experiences that engage and inspire.",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M32 8H8C6.9 8 6 8.9 6 10V30C6 31.1 6.9 32 8 32H32C33.1 32 34 31.1 34 30V10C34 8.9 33.1 8 32 8ZM30 28H10V12H30V28Z"/>
        <path d="M14 16H26V18H14V16ZM14 20H26V22H14V20ZM14 24H22V26H14V24Z"/>
      </svg>
    ),
    title: "E-commerce Solutions",
    paragraph:
      "Complete online store development with payment integration, inventory management, and user-friendly shopping experiences.",
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M20 2L3 9L20 16L37 9L20 2ZM20 30L3 23V16L20 23L37 16V23L20 30Z"/>
      </svg>
    ),
    title: "Web Development",
    paragraph:
      "Modern, responsive websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
  },
  {
    id: 5,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M20 4C13.37 4 8 9.37 8 16C8 22.63 13.37 28 20 28C26.63 28 32 22.63 32 16C32 9.37 26.63 4 20 4ZM20 24C15.58 24 12 20.42 12 16C12 11.58 15.58 8 20 8C24.42 8 28 11.58 28 16C28 20.42 24.42 24 20 24Z"/>
        <path d="M20 12C17.79 12 16 13.79 16 16C16 18.21 17.79 20 20 20C22.21 20 24 18.21 24 16C24 13.79 22.21 12 20 12Z"/>
        <path d="M38 32H2C1.45 32 1 32.45 1 33V35C1 35.55 1.45 36 2 36H38C38.55 36 39 35.55 39 35V33C39 32.45 38.55 32 38 32Z"/>
      </svg>
    ),
    title: "AI Solutions",
    paragraph:
      "Intelligent automation, machine learning models, and AI-powered tools to streamline your business processes and decision-making.",
  },
  {
    id: 6,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M36 18C36 16.9 35.1 16 34 16H32V12C32 10.9 31.1 10 30 10H10C8.9 10 8 10.9 8 12V16H6C4.9 16 4 16.9 4 18V28C4 29.1 4.9 30 6 30H8V32C8 33.1 8.9 34 10 34H30C31.1 34 32 33.1 32 32V30H34C35.1 30 36 29.1 36 28V18ZM28 30H12V14H28V30Z"/>
        <circle cx="20" cy="22" r="4"/>
      </svg>
    ),
    title: "Chatbots",
    paragraph:
      "Intelligent conversational AI that enhances customer service, automates support, and provides 24/7 assistance to your users.",
  },
];
export default servicesData;
