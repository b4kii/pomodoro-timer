import { motion } from "framer-motion";
import { useContext, useState, useRef, useEffect } from "react";
import ReactSlider from "react-slider";
import { SettingsContext } from "./SettingsContext";

export default function Slider() {
  const [width, setWidth] = useState(0);
  const [activeId, setActiveId] = useState();

  const carousel = useRef();

  const settingsInfo = useContext(SettingsContext);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const divs = [
    { id: 5 },
    { id: 10 },
    { id: 15 },
    { id: 20 },
    { id: 25 },
    { id: 30 },
    { id: 35 },
    { id: 40 },
    { id: 45 },
    { id: 50 },
    { id: 55 },
    { id: 60 },
  ];

  let handleClick = (e) => {
    let getValue = e.currentTarget.textContent;
    settingsInfo.setWorkMinutes(getValue);
    console.log(settingsInfo.setWorkMinutes(getValue));
  };

  return (
    <div>
      <div className="caro-wrap">
        <motion.div
          className="carousel"
          ref={carousel}
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="inner-carousel"
            drag="x"
            dragConstraints={{ right: 400, left: -width * 1.2 }}
          >
            {divs.map((val) => (
              <div
                id={val.id}
                key={val.id}
                onClick={(e) => {
                  setActiveId(val.id);
                  handleClick(e);
                }}
                className={activeId === val.id ? "active" : "inactive"}
              >
                {val.id}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <div className="react-slider-wrap">
        <ReactSlider
          className={"rslider"}
          thumbClassName={"thumb"}
          trackClassName={"track"}
          value={settingsInfo.breakMinutes}
          onChange={(newValue) => settingsInfo.setBreakMinutes(newValue)}
          min={1}
          max={30}
        />
      </div>
    </div>
  );
}
