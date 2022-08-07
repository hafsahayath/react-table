import mockData from "./mock_data.json";
import { columns as COLUMNS } from "./columns";
import { useMemo } from "react";

const TableContainer = (): JSX.Element => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => mockData, []);

  return <div>TableContainer</div>;
};

export default TableContainer;
