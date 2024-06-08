import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants/index";
const CustomerReviews = () => {
  return (
    <section className="flex flex-col flex-1 justify-center items-center max-container">
      <h2 className="text-4xl font-palanquin font-bold text-center">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h2>
      <p className="info-text mt-5 text-center max-w-lg">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 ">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
