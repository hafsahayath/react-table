import { Column, useTable, useGlobalFilter } from "react-table";
import GlobalFilter from "../global-filter/GlobalFilter";
import "../react-table/Table.css";

interface ITableProps<T extends object> {
  data: T[];
  columns: Column<T>[];
}

const FilteringTable = <T extends object>({
  columns,
  data,
}: ITableProps<T>): JSX.Element => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    // table state
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter
  );

  const { globalFilter } = state;

  return (
    <div>
      <div className="search">
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => {
            return (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => {
                  console.log(column, "column");
                  return (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FilteringTable;
