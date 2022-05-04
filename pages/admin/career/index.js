import React, { useCallback } from "react";
import AdminMenu from "../../../components/Admin/AdminMenu";
import AdminTable from "../../../components/Reusable/AdminTable";

export default function Admin({ data }) {
  console.log(data);
  const columns = React.useMemo(
    () => [
      {
        Header: "Македонски",
        columns: [
          {
            Header: "Работна позиција",
            accessor: "name",
          },
          {
            Header: "Опис на работна позиција",
            accessor: "description",
          },
          {
            Header: "Квалификации",
            accessor: "qualifications",
            Cell: ({ value }) => {
              const newValue = value.join(", ");
              return <span>{newValue}</span>;
            },
          },
        ],
      },
      {
        Header: "Англиски",
        columns: [
          {
            Header: "Работна позиција",
            accessor: "translation.en.name",
          },
          {
            Header: "Опис на работна позиција",
            accessor: "translation.en.description",
          },
          {
            Header: "Квалификации",
            accessor: "translation.en.qualifications",
            Cell: ({ value }) => {
              const newValue = value.join(", ");
              return <span>{newValue}</span>;
            },
          },
        ],
      },
      {
        Header: "Останати информации",
        columns: [
          {
            Header: "Статус",
            accessor: "status",
          },
        ],
      },
    ],
    []
  );

  const adminButtons = useCallback((id) => {
    return [
      {
        title: "Измени",
        type: "edit",
        location: `/admin/career/${id}/edit`,
      },
      {
        title: "Избриши",
        type: "delete",
        location: `jobs/${id}`,
        req: {
          method: "DELETE",
          data: { delete: "true" },
          options: { credentials: "include" },
        },
      },
    ];
  }, []);

  return (
    <section className="admin bg-light spacing-sm">
      <div className="container">
        <AdminMenu></AdminMenu>
        <div className="admin__flex">
          <AdminTable
            adminButtons={adminButtons}
            columns={columns}
            data={data}
          ></AdminTable>
        </div>
      </div>
    </section>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}jobs`);
  const data = await res.json();
  return {
    props: data,
  };
}

Admin.requireAuth = true;
