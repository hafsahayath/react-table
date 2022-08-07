import { Column } from "react-table";

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
  },
  {
    Header: "Last Name",
    accessor: "last_name",
  },
  {
    Header: "DOB",
    accessor: "date_of_birth",
  },
  {
    Header: "Country",
    accessor: "country",
  },
  {
    Header: "phone",
    accessor: "phone",
  },
];
