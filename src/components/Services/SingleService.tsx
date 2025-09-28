import { Feature } from "@/types/feature";

const SingleService = ({ service }: { service: Feature }) => {
  const { icon, title, paragraph } = service;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
        <div className="mt-6">
          <a
            href={`https://wa.me/923324038258?text=Hi%20Tech%20Square,%20I'm%20interested%20in%20${encodeURIComponent(title)}%20services`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-sm bg-primary px-6 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
          >
            Discuss on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
