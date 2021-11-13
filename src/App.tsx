import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="PlacesApp">
      <div className="PlacesApp-Header">
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
