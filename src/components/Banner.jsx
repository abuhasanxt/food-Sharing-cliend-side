import animation from "../assets/cooking.json";

import Lottie from "lottie-react";
const Banner = () => {
  return (
    <section className="bg-contain bg-fixed">
      <div
        id="banner"
        className="flex min-h-screen bg-white bg-opacity-95 flex-col-reverse md:flex-row items-center justify-around "
      >
        <div className="text space-y-4  text-center md:text-start ">
          <h1 className="text-5xl font-bold">
            RecipeBook
            <span className="text-orange-400"> Authentication </span>
            Template,
          </h1>
          <div className=" max-w-[520px] md:rounded-full p-2 bg-orange-400 text-white">
            <marquee direction="left">Share food, spread love.</marquee>
          </div>

          <h2 className="text-3xl">Every meal be a favor</h2>
        </div>
        <div className="max-w-[400px] ">
          <Lottie animationData={animation} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
