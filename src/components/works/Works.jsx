import React from "react";
import Carousel from "./Carousel";
import { worksData } from "../../data.js";

const Works = () => {
  return (
    <div className="works" id="works">
      <Carousel>
        {worksData.map((work, index) => (
          <div className="carousel-item" key={work.index}>
            {/* Render your carousel item content here */}
            <h2>{work.title}</h2>
            <p>{work.description}</p>
            <p>{work.index}</p>

            {/* Add more content specific to your carousel item */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Works;
