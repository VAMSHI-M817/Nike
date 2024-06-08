import { star } from "../assets/icons";
import { reviews } from "../constants";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="img"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="info-text mt-6 text-center max-w-sm">{feedback}</p>
      <div className="flex mt-3 justify-center items-center gap-2.5">
        <img
          src={star}
          alt="rate"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className=" text-xl font-montserrat text-slate-gray">{rating}</p>
      </div>
      <h3 className=" mt-2 text-3xl font-palanquin text-center font-bold">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
