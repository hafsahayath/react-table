import { Column, useTable } from "react-table";
interface ITableProps<T extends object> {
  data: T[];
  columns: Column<T>[];
}

const Table = <T extends object>({
  columns,
  data,
}: ITableProps<T>): JSX.Element => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
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
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export { Table };
