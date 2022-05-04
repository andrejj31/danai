import React, { useCallback } from "react";
import AdminMenu from "../../../components/Admin/AdminMenu";
import AdminTable from "../../../components/Reusable/AdminTable";

export default function Admin({ data }) {
  console.log(data);
  const columns = React.useMemo(
    () => [
      {
        Header: "Информации за апликантот",
        columns: [
          {
            Header: "Име и презиме",
            accessor: "name",
          },
          {
            Header: "Адреса",
            accessor: "address",
          },
          {
            Header: "Е-пошта за контакт",
            accessor: "mail",
          },
          {
            Header: "Телефон за контакт",
            accessor: "number",
          },
          {
            Header: "CV",
            accessor: "CV",
          },
          {
            Header: "Аплицирал за:",
            accessor: "applicationFor.name",
          },
        ],
      },
    ],
    []
  );

  const adminButtons = useCallback((id) => {
    return [
      {
        title: "Избриши",
        type: "delete",
        location: `job-applications/${id}`,
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
  const query = context.resolvedUrl.split("?")[1];
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}job-applications`
  );
  const data = await res.json();
  return {
    props: data,
  };
}

Admin.requireAuth = true;
