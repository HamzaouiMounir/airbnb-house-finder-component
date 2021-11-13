import React, { useState, useRef } from "react";
import GuestsInputFilter from "./GuestsInputFilter";
import './index.css'
import LocationInput from "./LocationInput";
import SplitDateInput from "./SplitDateInput";
export const Input = ({ type, props, onFocus, activeEl }: any) => {
  const ref = useRef(null);
  const [isHovered, toggleHoverd] = useState(false);
  const isSelected = ref.current && activeEl === ref.current;
  return (
    <div
      ref={ref}
      onClick={() => onFocus(ref.current)}
      onMouseEnter={() => toggleHoverd(true)}
      onMouseLeave={() => toggleHoverd(false)}
      className={`searchBarInput searchBarLocation ${
        isSelected ? "selectedSearchInput" : ""
      } ${isHovered && !isSelected ? "hoveredInput" : ""}`}
    >
      {renderElementByType(type, props, isSelected)}
    </div>
  );
};

const renderElementByType = (
  type: string,
  props: any,
  isSelected?: boolean | undefined | null
) => {
  switch (type) {
    case "location":
      return <LocationInput isSelected={isSelected} {...props} />;
    case "date-split":
      return <SplitDateInput  {...props} />;
    case "guest-filter":
      return <GuestsInputFilter isSelected={isSelected} {...props} />;
  }
};
