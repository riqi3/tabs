import React from "react";
import { IconContext } from "react-icons";
import { FiChevronsRight } from "react-icons/fi";
import { useState } from "react";
import { Data } from "./Data";

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };
  

  return (
    <>
      <div class="tab-container">
        <h2 id="experience">Experience</h2>
        <div class="underline"></div>
        <IconContext.Provider value={{ color: "#000", size: "25px" }}>
          <div class="tab-section">
            <div class="container">
            {Data.map((item, index) => {
                return (
                  <>
                    <div class="btn-wrap" onClick={() => toggle(index)} key={index}>
                        <h4>
                          <button class="job-btn">{item.employee}</button>
                        </h4>

                    </div>
                  </>
                );
              })}

              {Data.map((item, index) => {
                return (
                  <>
                    <div class="info-wrap" onClick={() => toggle(index)} key={index}>

                      {clicked === index ? (
                        <div class="tab">
                          <h4> {item.jobTitle}</h4>
                          <h5> {item.employee}</h5>
                          <p>{item.date}</p>
                          <p class="job-desc"><FiChevronsRight /> {item.bullet1}</p>
                          <p class="job-desc"><FiChevronsRight /> {item.bullet2}</p>
                          <p class="job-desc"><FiChevronsRight /> {item.bullet3}</p>
                        </div>
                      ) : false}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </>
  );
};

export default Accordion;
