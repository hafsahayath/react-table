import { Column, useTable, usePagination } from "react-table";
import "./Table.css";
interface ITableProps<T extends object> {
  data: T[];
  columns: Column<T>[];
}

const PaginatedTable = <T extends object>({
  columns,
  data,
}: ITableProps<T>): JSX.Element => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    previousPage,
    nextPage,
    canNextPage,
    canPreviousPage,
  } = useTable(
    {
      columns,
      data,
    },
    usePagination
  );

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => {
            return (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => {
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
          {page.map((row) => {
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
      <div>
        <button onClick={previousPage} disabled={!canPreviousPage}>
          previous
        </button>
        <button onClick={nextPage} disabled={!canNextPage}>
          next
        </button>
      </div>
    </>
  );
};

export { PaginatedTable };
