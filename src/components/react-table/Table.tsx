import { Column, useTable } from "react-table";
interface ITableProps<T extends object> {
  data: T[];
  columns: Column<T>[];
}

const Table = <T extends object>({
  columns,
  data,
}: ITableProps<T>): JSX.Element => {
  const reactTableInstance = useTable({
    columns,
    data,
  });

  return (
    <table>
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export { Table };
