import { useState } from "react";
import { useAsyncDebounce } from "react-table";

const GlobalFilter = ({
  filter,
  setFilter,
}: {
  filter: string;
  setFilter: (arg0: string) => void;
}) => {
  const [value, setValue] = useState(filter);

  const handleChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 300);

  return (
    <div>
      <label htmlFor="search">Search </label>
      <input
        type="text"
        id="search"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          handleChange(e.target.value);
        }}
      />
    </div>
  );
};

export default GlobalFilter;
