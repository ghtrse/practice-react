import React from "react";
import './Download.css';
const Download = () => {
  return (
      <React.Fragment>
          <section className="download top">
                <div className="container flex_space">
                    <div className="row">
                        <h3>Download our app</h3>
                        <h1>Get this template app for your mobile!</h1>
                        <ul>
                            <li><i class="fa-solid fa-check"></i> Get paperless confirmation </li>
                            <li><i class="fa-solid fa-check"></i> Get paperless confirmation </li>
                            <li><i class="fa-solid fa-check"></i> Get paperless confirmation </li>
                            <li><i class="fa-solid fa-check"></i> Get paperless confirmation </li>
                            <li><i class="fa-solid fa-check"></i> Get paperless confirmation </li>
                            <li><i class="fa-solid fa-check"></i> Get paperless confirmation </li>
                            <li><i class="fa-solid fa-check"></i> Get paperless confirmation </li>
                        </ul>
                        <div className="img flex">
                            <img src="/images/appstore-button.png" alt="" />
                            <img src="/images/google-play-button.png" alt="" />
                        </div>
                    </div>

                    <div className="row row2">
                        <img src="/images/app-image-1.png" alt="" />
                    </div>
                </div>
          </section>
      </React.Fragment>
  );
};

export default Download;
