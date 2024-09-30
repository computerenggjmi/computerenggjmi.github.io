import HeroSection from "./Component/HeroSection";
import { testimonials } from "../../../data/Testimonial.js";
import TestimonialCard from "./Component/TestimonialCard";
import image from "./assets/aboutjmi.jpeg";

function Testimonials() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-8 font-[450]">
      <HeroSection heading={"Testimonials"} image={image} />
      <div className="-mt-12 h-8 w-full backdrop-blur-[2px]" />
      <div className="mx-auto my-8 grid w-full grid-cols-1 place-items-center gap-x-4 gap-y-12 px-2 sm:px-6 md:grid-cols-2 md:px-12 xl:grid-cols-3 lg:px-20">
        {testimonials.map((testimonial, i) => (
          <TestimonialCard
            key={i}
            text={testimonial.text}
            name={testimonial.name}
            batch={testimonial.batch}
            img={testimonial.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
