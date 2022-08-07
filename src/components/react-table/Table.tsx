import { Column } from "react-table";

interface ITableProps<T extends object> {
  data: T[];
  columns: Column<T>[];
}

const Table = <T extends object>({
  columns,
  data,
}: ITableProps<T>): JSX.Element => {
  return <div>Table</div>;
};

export { Table };
