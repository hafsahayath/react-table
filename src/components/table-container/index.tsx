import mockData from "./mock_data.json";
import { columns as COLUMNS } from "./columns";
import { useMemo } from "react";
import { Table } from "../react-table";
import SortingTable from "../sorting-table/SortingTable";
import FilteringTable from "../filtering-table/FilteringTable";
import ColumnFilter from "../column-filter/ColumnFilter";
import { PaginatedTable } from "../react-table/PaginatedTable";

const TableContainer = (): JSX.Element => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => mockData, []);
  // applies column filter to each column, unless disableFilter is specified at the column level
  const defaultColumn = useMemo(() => ({ Filter: ColumnFilter }), []);

  return (
    <div>
      {/* <Table columns={columns} data={data} /> */}
      {/* <SortingTable columns={columns} data={data} /> */}
      {/* <FilteringTable
        columns={columns}
        data={data}
        defaultColumn={defaultColumn}
      /> */}
      <PaginatedTable columns={columns} data={data} />
    </div>
  );
};

export default TableContainer;
