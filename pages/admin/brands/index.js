import React, { useCallback } from "react";
import AdminMenu from "../../../components/Admin/AdminMenu";
import AdminTable from "../../../components/Reusable/AdminTable";

export default function Admin({ data }) {
  const columns = React.useMemo(
    () => [
      {
        Header: "Македонски",
        columns: [
          {
            Header: "Име и презиме",
            accessor: "name",
          },
          {
            Header: "Опис",
            accessor: "description",
          },
        ],
      },
      {
        Header: "Англиски",
        columns: [
          {
            Header: "Име и презиме",
            accessor: "translation.en.name",
          },
          {
            Header: "Опис",
            accessor: "translation.en.description",
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
        location: `/admin/brands/${id}/edit`,
      },
      {
        title: "Избриши",
        type: "delete",
        location: `brands/${id}`,
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
        <AdminTable
          adminButtons={adminButtons}
          columns={columns}
          data={data}
        ></AdminTable>
      </div>
    </section>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}brands`);
  const data = await res.json();
  return {
    props: data,
  };
}

Admin.requireAuth = true;
