import React, { useMemo } from "react";
import { useTable } from "react-table"
import { COLUMNS } from "../components/columns";
import MOCK_DATA from "../components/MOCK_DATA (1).json";
import './Review.css'

const ReviewPage = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <div>
      <section>
        <header className="first_header">Latest Film Reviews</header>

        <header className="second_header">
          Action Adventure Comedy and more ...
        </header>

        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                      <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
            ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                      <td {...cell.getCellProps()}>{cell.render("cell")}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ReviewPage;
