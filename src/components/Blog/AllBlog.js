import React, {useState} from "react";
import BlogCard from "./BlogCard";
import BlogData from "./BlogData";
import './Blog.css';
const AllBlog = () => {
    const [items, setItem] = useState(BlogData);
  return (
      <React.Fragment>
          <div className="blog top">
              <div className="container">
                  <div className="content grid">
                      {items.map(item => {
                          return (<BlogCard key={item.id} item={item} />);
                      })}
                    
                  </div>
              </div>
          </div>
      </React.Fragment>
  );
};

export default AllBlog;
