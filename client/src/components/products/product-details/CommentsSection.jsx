/* eslint-disable react/prop-types */

const CommentsSection = ({ comments }) => {
  return (
    <div>
      <nav>
        <div className="nav nav-tabs mb-3">
          <button
            className="nav-link active border-white border-bottom-0"
            type="button"
            role="tab"
            id="nav-about-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-about"
            aria-controls="nav-about"
            aria-selected="true"
          >
            Reviews
          </button>
        </div>
      </nav>
      <div className="tab-content mb-5">
        <div
          className="tab-pane active"
          id="nav-about"
          role="tabpanel"
          aria-labelledby="nav-about-tab"
        >
          <ul>
            {comments.map(({ _id, text, owner: { username }, rating }) => (
              <li key={_id} className="comment">
                <p>
                  {username}: {text}
                  <br />
                  {rating && (
                    <span>
                      Rating: {rating} <i className="fa fa-star text-warning" />
                    </span>
                  )}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CommentsSection;
