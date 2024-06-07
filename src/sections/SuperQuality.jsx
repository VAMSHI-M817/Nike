import { Button } from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container max-sm:-mt-30"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin capitalize text-4xl font-bold ">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 lg:max-w-lg">
            We Provide You
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">
            Super Quality
          </span>{" "}
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text mb-5">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div>
          <Button label="View Details" iconUrl={arrowRight} />
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="shoe"
          className=" relative  shadow-md rounded-xl p-5 hover:shadow-sm transition-all border border-slate-100"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
