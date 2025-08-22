import { useForm } from "react-hook-form";
import StarRating from "./StarRating";

const ReviewForm = ({onSubmit}) => {
  const { register, handleSubmit, setValue, watch, formState:{errors,isSubmitting} } = useForm();
  const ratingValue = watch("ratings", 0)

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow border border-base-200 rounded-xl overflow-hidden p-5 my-4">
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="label font-medium">
          <span className="label-text">Rating</span>
        </label>
        <StarRating onChange={(value) => setValue("ratings", value, { shouldValidate: true, shouldDirty: true })} rating={ratingValue}/>
        <input type="hidden" {...register("ratings",{ required: "Rating is required" })} />
        {errors.ratings && (
          <p className="text-error text-sm mt-1">{errors.ratings.message}</p>
        )}
      </div>

      <div className="form-control">
        <label className="label font-medium">
          <span className="label-text">Your Review</span>
        </label>
        <div>
          <textarea
            {...register("comment",{ required: "Comment is required" })}
            className="textarea textarea-bordered min-h-[120px] focus:textarea-primary"
            placeholder="Share your experience with this product..."
          />
          {errors.comment && (
          <p className="text-error text-sm mt-1">{errors.comment.message}</p>
            )}
        </div>
      </div>

      <button type="submit" className="btn btn-primary w-full md:w-auto" disabled={isSubmitting}>
        {isSubmitting ? (
            <>
            <span className="loading loading-spinner loading-sm mr-2"></span>
            Submitting...
            </>
        ) : (
            <span>Submit Review</span>
        )}
      </button>
    </form>
    </div>
  );
};

export default ReviewForm;
