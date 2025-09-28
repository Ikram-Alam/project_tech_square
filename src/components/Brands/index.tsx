import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="text-center mb-8">
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                Our Core Services
              </h2>
              <p className="text-base font-medium text-body-color">
                Specialized solutions across creative design, digital development, and AI automation
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center rounded-xs bg-gray-light px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <a
        href={href}
        className="group relative flex h-16 w-full items-center justify-center transition hover:scale-105"
      >
        {/* Service Icon Placeholder - Using text for now since we don't have the actual SVG files */}
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary bg-opacity-10 text-primary transition group-hover:bg-primary group-hover:text-white">
          {name === "Creative Design" && (
            <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"/>
              <path d="M15 9H9C8.45 9 8 9.45 8 10V14C8 14.55 8.45 15 9 15H15C15.55 15 16 14.55 16 14V10C16 9.45 15.55 9 15 9ZM14 13H10V11H14V13Z"/>
            </svg>
          )}
          {name === "Digital Solutions" && (
            <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8H20V18Z"/>
              <path d="M8 10H16V12H8V10ZM8 14H14V16H8V14Z"/>
            </svg>
          )}
          {name === "AI Automation" && (
            <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L19 8L21 9ZM3 9L5 8L3 7V9ZM12 18C10.9 18 10 18.9 10 20C10 21.1 10.9 22 12 22C13.1 22 14 21.1 14 20C14 18.9 13.1 18 12 18Z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          )}
          {name === "Web Development" && (
            <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M12 1L3 5L12 9L21 5L12 1ZM12 17L3 13V8L12 12L21 8V13L12 17Z"/>
            </svg>
          )}
          {name === "E-commerce" && (
            <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M7 18C5.9 18 5 18.9 5 20S5.9 22 7 22S9 21.1 9 20S8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5H5.21L4.27 3H1V2ZM17 18C15.9 18 15 18.9 15 20S15.9 22 17 22S19 21.1 19 20S18.1 18 17 18Z"/>
            </svg>
          )}
          {name === "Branding" && (
            <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
              <path d="M19 15L19.74 17.74L22.48 18.48L19.74 19.22L19 22L18.26 19.22L15.52 18.48L18.26 17.74L19 15Z"/>
              <path d="M5 15L5.74 17.74L8.48 18.48L5.74 19.22L5 22L4.26 19.22L1.52 18.48L4.26 17.74L5 15Z"/>
            </svg>
          )}
        </div>
        <span className="ml-3 text-sm font-medium text-black transition group-hover:text-primary dark:text-white">
          {name}
        </span>
      </a>
    </div>
  );
};
