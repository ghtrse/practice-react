import React, { useState } from "react";
import Dcard from "./Dcard";
import Sdata from "./Sdata";

const AllItem = (props) => {
    const [items, setItems] = useState(Sdata);
  return (
      <React.Fragment>
          <section className="gallery mtop desi">
              <div className="container">
                  <div className="content grid">
                      {
                          items.map(item => {
                              return <Dcard key={item.id} item={item}  />
                          })
                      }
                  </div>
              </div>
          </section>
      </React.Fragment>
  );
};

export default AllItem;
