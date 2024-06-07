import { Button } from "../components/Button";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";

const SpecialOffers = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div>
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-5 font-palanquin capitalize text-4xl font-bold ">
          <span className="text-coral-red inline-block mt-3">Special</span>{" "}
          Offer
          <br />
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text mb-5">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex mt-11 flex-wrap gap-4">
          <Button label="View Details" />
          <Button label="Learn More"
            backgroundColor = "bg-white"
            borderColor = "border-slate-gray"
            textColor = "text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
