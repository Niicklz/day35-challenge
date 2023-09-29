import React, { useEffect, useState } from "react";
import "./styles.css";

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [transition, setTransition] = useState(0);
  const [size, setSize] = useState(370);

  const changeImg = (e) => {
    if (e.target.className === "next" && counter === 3) return setCounter(0);
    if (e.target.className === "prev" && counter === 0) return setCounter(3);

    if (e.target.className === "prev") {
      setCounter((counter) => counter - 1);
    }
    if (e.target.className === "next") {
      setCounter((counter) => counter + 1);
    }
  };
  console.log(transition);
  useEffect(() => {
    setTransition(counter * size);
  }, [counter]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => (counter + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="container">
      <div className="slider-container">
        <div
          className="slider"
          style={{ transform: `translateX(-${transition}px)` }}
        >
          <img
            src="https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80"
            alt=""
          />
        </div>
      </div>

      <div className="buttons-container">
        <button className="prev" onClick={changeImg}>
          prev
        </button>
        <button className="next" onClick={changeImg}>
          next
        </button>
      </div>
    </div>
  );
};
