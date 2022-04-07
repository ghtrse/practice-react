import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({
  item: { id, date, category, title, cover, para, desc },
}) => {
  return (
    <React.Fragment>
      <div className="items">
        <div className="img">
          <img src={cover} alt="" />
        </div>
        <div className="category flex_space">
          <span>{date}</span>
          <label>{category}</label>
        </div>
        <div className="details">
          <h3>{title}</h3>
          <p>{para}</p>
        </div>

        <Link to={`/blogsingle/${id}`} className="blogItem-link">
          Read more <i className="fas fa-long-arrow-alt-right"></i>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default BlogCard;
