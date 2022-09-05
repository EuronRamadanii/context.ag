import React from "react";
import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { classNames } from "../../utils/className";
import "../../Assets/css/_scrolltotop.scss";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="position">
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(isVisible ? "op1" : "op2", "position2")}
      >
        <AiOutlineArrowUp className="scrollbutton" aria-hidden="true" />
      </button>
    </div>
  );
};
