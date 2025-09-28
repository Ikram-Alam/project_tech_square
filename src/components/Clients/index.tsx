import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

interface ClientTestimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

const clientsData: ClientTestimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    role: "CEO",
    content: "Tech Square transformed our brand completely. Their creative design and AI solutions helped us increase our conversion rate by 150%.",
    image: "/images/testimonials/auth-01.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "GrowthCorp",
    role: "Marketing Director",
    content: "The e-commerce platform they built for us is outstanding. Sales increased by 200% in the first quarter. Highly recommend their services!",
    image: "/images/testimonials/auth-02.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "InnovateLab",
    role: "Founder",
    content: "Their AI chatbot solution revolutionized our customer service. Response time decreased by 80% and customer satisfaction soared.",
    image: "/images/testimonials/auth-03.png",
    rating: 5,
  },
];

const Clients = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="What Our Clients Say"
          paragraph="Trusted by businesses worldwide. Here's what our clients have to say about working with Tech Square."
          center
        />

        {/* Client Testimonials */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {clientsData.map((client) => (
            <div key={client.id} className="w-full">
              <div className="rounded-sm bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8">
                <div className="mb-5 flex items-center space-x-1">
                  {[...Array(client.rating)].map((_, i) => (
                    <svg
                      key={i}
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      className="fill-current text-yellow"
                    >
                      <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-8 border-l-2 border-primary pl-5 text-base font-medium italic leading-relaxed text-body-color">
                  "{client.content}"
                </p>
                <div className="flex items-center">
                  <div className="relative mr-4 h-[50px] w-[50px] overflow-hidden rounded-full">
                    <Image src={client.image} alt={client.name} fill />
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-lg font-semibold text-black dark:text-white">
                      {client.name}
                    </h4>
                    <p className="text-sm text-body-color">
                      {client.role} at {client.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos Section */}


        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="mx-auto max-w-2xl">
            <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
              Ready to Join Our Success Stories?
            </h3>
            <p className="mb-8 text-base font-medium leading-relaxed text-body-color">
              Let's create the next success story together. Contact us to discuss your project and see how we can help transform your business.
            </p>
            <Link
              href="https://wa.me/923324038258?text=Hi%20Tech%20Square,%20I%20want%20to%20be%20your%20next%20success%20story"
              target="_blank"
              className="inline-block rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
            >
              💬 Start Your Success Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
