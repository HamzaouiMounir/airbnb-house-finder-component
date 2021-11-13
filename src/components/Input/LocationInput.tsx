import { useState } from "react";

const LocationInput = ({ label, placeholder, isSelected }: any) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="defaultContainer">
      <div className="searchBarLabel">
        <b>{label}</b>
        <form>
          <input
            id="searchInputText"
            value={searchText}
            type="search"
            placeholder={placeholder}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </form>
      </div>
      {isSelected && (
        <div className="searchResults">
          {!searchText.length && <div className="searchGeneralSuggestion">
            <img
              src="https://a0.muscache.com/im/pictures/fc42dde0-36a7-460e-af89-10b5e44e48d8.jpg?im_w=240&im_q=lowq"
              className="suggestionMap"
            />
            <a href="#">Découvrir des destinations de proximité</a>
          </div>}
          {searchText.length
            ? placez.map((p) => (
                <div className="searchGeneralSuggestion">
                  <img
                    src="https://cdn0.iconfinder.com/data/icons/map-location-solid-style/91/Map_-_Location_Solid_Style_01-512.png"
                    className="suggestionMap"
                  />
                  <a href="#">{p}</a>
                </div>
              ))
            : null}
        </div>
      )}
    </div>
  );
};

const placez = [
  "Tunis, Tunisie",
  "Paris, France",
  "Santorini, Grece",
  "Marrakech, Marroc",
];
export default LocationInput;
