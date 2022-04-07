import React, { useState, useEffect } from "react";
import HeadTitle from "../../../common/HeadTitle/HeadTitle";
import { Link, useParams } from "react-router-dom";
import EmptyFile from "../../../common/EmptyFile/EmptyFile";
import BlogData from "../BlogData";
const BlogSingle = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    let item = BlogData.find((item) => item.id === parseInt(id));
    if (item) {
      setItem(item);
    }
  }, [id]);
  return (
    <React.Fragment>
      <HeadTitle />
      {item ? (
        <section className="single-page top">
          <div className="container">
            <Link to="/blog" className="primary-btn back">
              <i className="fas fa-long-arrow-alt-left"></i> Go back
            </Link>

            <article className="content flex">
              <div className="main-content">
                <img src={item.cover} alt="" />

                <div className="category flex_space">
                  <span>{item.date}</span>
                  <label>{item.category}</label>
                </div>
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <p>{item.desc}</p>

                <h2>Description</h2>
                <div className="para flex_space">
                  <p>{item.para}</p>
                  <p>{item.para}</p>
                </div>
              </div>

              <div className="side-content">
                <div className="category-list">
                  <h2>Category</h2>
                  <hr />

                  <ul>
                      {
                          BlogData.map(item => {
                              return (
                                  <li>
                                      <i className="fas fa-play-circle"></i>
                                      {item.category}
                                  </li>
                              );
                          })
                      }
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </section>
      ) : (
        <EmptyFile />
      )}
    </React.Fragment>
  );
};

export default BlogSingle;
