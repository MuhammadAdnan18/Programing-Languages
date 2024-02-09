import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, src } = props;

  return (
    <div className="my-3">
      <div className="card">
        <img
          src={
            !imageUrl
              ? "https://as1.ftcdn.net/v2/jpg/04/54/38/16/1000_F_454381691_37sakwmAos8PKW2GcmplzsE6Q2oz5RIZ.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-body-secondary">
              by {author} |On {new Date(date).toGMTString()} |
              <span className="badge bg-secondary">{src}</span>
            </small>
          </p>

          <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
            Read More...
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
