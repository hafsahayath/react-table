const ColumnFilter = ({ column }:{column: any}) => {
  const { filterValue, setFilter } = column;
  return (
    <div>
      <label htmlFor="search">Search </label>
      <input
        type="text"
        id="search"
        value={filterValue}
        onChange={(e) => setFilter(e.target.value) || undefined}
      />
    </div>
  );
}

export default ColumnFilter