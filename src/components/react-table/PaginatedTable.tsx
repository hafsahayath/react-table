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
    pageOptions,
    state,
  } = useTable(
    {
      columns,
      data,
    },
    usePagination
  );

  const { pageIndex } = state;

  // console.log({ pageOptions, pageIndex });

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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={previousPage} disabled={!canPreviousPage}>
          previous
        </button>
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <button onClick={nextPage} disabled={!canNextPage}>
          next
        </button>
      </div>
    </>
  );
};

export { PaginatedTable };
