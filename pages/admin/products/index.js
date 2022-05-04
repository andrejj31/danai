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
            Header: "Име на продуктот",
            accessor: "name",
          },
          {
            Header: "Опис на продуктот",
            accessor: "description",
          },
        ],
      },
      {
        Header: "Англиски",
        columns: [
          {
            Header: "Име на продуктот",
            accessor: "translation.en.name",
          },
          {
            Header: "Опис на продуктот",
            accessor: "translation.en.description",
          },
        ],
      },
      {
        Header: "Останати информации",
        columns: [
          {
            Header: "Каталошки број",
            accessor: "catalogNumber",
          },
          {
            Header: "Транспортни пакувања",
            accessor: "transportPackages",
          },
          {
            Header: "Количини",
            accessor: "quantity",
          },
          {
            Header: "Категорија",
            accessor: "category.name",
          },
          {
            Header: "Слика",
            accessor: "image",
            Cell: ({ value }) => (
              <img
                className="admin__image"
                src={`${process.env.NEXT_PUBLIC_SERVER_IMAGES}Products/${value}.png`}
              />
            ),
            maxWidth: 50,
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
        location: `/admin/products/${id}/edit`,
      },
      {
        title: "Избриши",
        type: "delete",
        location: `products/${id}`,
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}products`);
  const data = await res.json();
  return {
    props: data,
  };
}

Admin.requireAuth = true;
