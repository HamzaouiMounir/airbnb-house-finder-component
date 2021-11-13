const SplitDateInput = ({ label, placeholder }: any) => (
    <div className="defaultContainer">
      <div className="searchBarLabel">
        <b>{label}</b>
        <label className="dimmed lightText">{placeholder}</label>
      </div>
    </div>
  );

export default SplitDateInput;