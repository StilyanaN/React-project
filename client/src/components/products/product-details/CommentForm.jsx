/* eslint-disable react/prop-types */


const CommentForm = ({ onSubmit, values, onChange, handleRatingChange, rating }) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      <h5 className="mb-5 fw-bold">Leave a review</h5>
      <div className="row g-4">
        <div className="col-lg-12">
          <div className="border-bottom rounded my-4">
            <textarea
              name="comment"
              value={values.comment}
              onChange={onChange}
              className="form-control border-0"
              cols={30}
              rows={8}
              placeholder="Your Review *"
              spellCheck="false"
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="d-flex justify-content-between py-3 mb-5">
            <div className="d-flex align-items-center">
              <p className="mb-0 me-3">Please rate:</p>
              <div
                className="d-flex align-items-center"
                style={{ fontSize: 12 }}
              >
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={`fa fa-star ${i < rating ? "text-warning" : "text-muted"}`}
                    onClick={() => handleRatingChange(i + 1)}
                    style={{ cursor: "pointer" }}
                  />
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="btn border border-secondary text-primary rounded-pill px-4 py-3"
            >
              Post Comment
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
