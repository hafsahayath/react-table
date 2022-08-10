import { Column } from "react-table";
import { format } from "date-fns";
import ColumnFilter from "../column-filter/ColumnFilter";

export interface IColumnData {
  id: number;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  country: string;
  phone: string;
  email?: string;
  age?: number;
}

export const columns: Column<IColumnData>[] = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "First Name",
    accessor: "first_name",
    Filter: ColumnFilter,
  },
  {
    Header: "Last Name",
    accessor: "last_name",
    Filter: ColumnFilter,
  },
  {
    Header: "DOB",
    accessor: "date_of_birth",
    Filter: ColumnFilter,
    // @ts-ignore
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
  {
    Header: "Country",
    accessor: "country",
    Filter: ColumnFilter,
  },
  {
    Header: "Phone",
    accessor: "phone",
    Filter: ColumnFilter,
  },
];
