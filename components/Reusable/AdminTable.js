import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import AdminTableFilter from "./AdminTableFilter";
import AdminOptionsBtn from "./AdminOptionsBtn";
import AdminOptions from "./AdminOptions";
import { useRouter } from "next/router";

export default function AdminTable({ columns, data, adminButtons }) {
  const router = useRouter();

  const withoutCreate = ["job-applications"];

  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: "Options",
        Header: "Опции",
        Cell: ({ row }) => (
          <>
            <AdminOptions
              btns={() => adminButtons(row.original._id)}
            ></AdminOptions>
          </>
        ),
      },
    ]);
  };

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    tableHooks,
    useSortBy,
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    state = { hiddenColumns: [], pageIndex: 1, pageSize: 5, sortBy: [] },
  } = tableInstance;

  return (
    <div style={{ overflowX: "scroll" }}>
      <div className="table-admin__options">
        <AdminTableFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          setGlobalFilter={setGlobalFilter}
          globalFilter={state.globalFilter}
        />
        {!router.pathname.includes(withoutCreate) && (
          <AdminOptionsBtn
            title="+ Креирај нов документ"
            type="edit"
            location={`${router.pathname}/create`}
          ></AdminOptionsBtn>
        )}
      </div>
      <div className="table-admin__container">
        <table className="table-admin" {...getTableProps}>
          <thead>
            {headerGroups.map((headerGroup, idx) => (
              <tr key={idx} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, idx) => (
                  <th
                    key={idx}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render("Header")}
                    {column.isSorted ? (column.isSortedDesc ? " ▼" : " ▲") : ""}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr key={i} {...row.getRowProps()}>
                  {row.cells.map((cell, idx) => {
                    return (
                      <td key={idx} {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>
      </div>
    </div>
  );
}
