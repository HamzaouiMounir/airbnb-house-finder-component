const GuestsInputFilter = ({
  label,
  placeholder,
  classes,
  isSelected,
}: any) => (
  <div className={classes.join(" ")}>
    <div className="searchBarLabel">
      <b>{label}</b>
      <label className="dimmed lightText">{placeholder}</label>
    </div>
    <div className="searchInputButton">
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="presentation"
        focusable="false"
        style={{
          display: "block",
          fill: "none",
          height: "16px",
          width: "16px",
          stroke: "currentcolor",
          strokeWidth: "4",
          overflow: "visible",
        }}
      >
        <g fill="none">
          <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
        </g>
      </svg>
      &nbsp;
      {isSelected && <b>Rechercher </b>}
    </div>
  </div>
);

export default GuestsInputFilter;
