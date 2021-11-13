import React, { useState } from "react";
import { INPUT_TYPES } from "./constants";
import "./index.css";
import { Input } from "../Input";
const SearchBar = (): any => {
  const [activeEl, handleOnFocus] = useState(null);
  console.log(activeEl);
  return (
    <div className="searchBarWrapper">
      <Input
        type={INPUT_TYPES.LOCATION}
        activeEl={activeEl}
        onFocus={handleOnFocus}
        props={{ label: "Address", placeholder: "Où allez vous?" }}
      />
      <Input
        type={INPUT_TYPES.DATE_SPLIT}
        activeEl={activeEl}
        onFocus={handleOnFocus}
        props={{ label: "Arrivée", placeholder: "Quand ?" }}
      />
      <Input
        type={INPUT_TYPES.DATE_SPLIT}
        activeEl={activeEl}
        onFocus={handleOnFocus}
        props={{ label: "Départ", placeholder: "Quand ?" }}
      />
      <Input
        type={INPUT_TYPES.GUEST_FILTER}
        activeEl={activeEl}
        onFocus={handleOnFocus}
        props={{
          label: "Voyageurs",
          placeholder: "Qui ?",
          classes: ["guestFilterWrapper"],
        }}
      />
    </div>
  );
};

export default SearchBar;
