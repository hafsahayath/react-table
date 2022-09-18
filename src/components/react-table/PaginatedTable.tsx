import { Column, useTable, usePagination, useRowSelect } from "react-table";
import "./Table.css";
import IndeterminateCheckbox from "./IndeterminateCheckbox";
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
    gotoPage,
    pageCount,
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 10 },
    },
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            // @ts-ignore
            <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
          ),
          // @ts-ignore
          Cell: ({ row }) => (
            <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
          ),
        },
        ...columns,
      ]);
    }
  );

  const { pageIndex } = state;

  console.log(
    selectedFlatRows.map((row) => row.original),
    "selected rows"
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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {"<<"}
          </button>
          <button onClick={previousPage} disabled={!canPreviousPage}>
            previous
          </button>
        </div>
        <div>
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </span>
          <span>
            {" "}
            | Go to page:
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const pageNum = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(pageNum);
              }}
            />
          </span>
        </div>
        <div>
          <button onClick={nextPage} disabled={!canNextPage}>
            next
          </button>
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {">>"}
          </button>
        </div>
      </div>
    </>
  );
};

export { PaginatedTable };
