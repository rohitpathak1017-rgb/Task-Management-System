const FilterBar = ({ setStatus }) => (
 <div
  style={{
    width: "100%",
    display: "flex",
    justifyContent: "center",
    margin: "15px 0"
  }}
>
  <select
    onChange={(e) => setStatus(e.target.value)}
    style={{
      width: "100%",
      maxWidth: "250px",
      padding: "10px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      background: "white",
      fontSize: "14px",
      cursor: "pointer",
      boxShadow: "0 1px 4px rgba(0,0,0,0.08)"
    }}
  >
    <option value="">All</option>
    <option value="pending">Pending</option>
    <option value="in-progress">In Progress</option>
    <option value="completed">Completed</option>
  </select>
</div>

);

export default FilterBar;
