const GlobalFilter = ({ filter, setFilter }: {filter: string; setFilter: (arg0: string)=>void;}) => {
  return (
    <div>
      <label htmlFor="search">Search </label>
      <input
        type="text"
        id="search"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default GlobalFilter;
