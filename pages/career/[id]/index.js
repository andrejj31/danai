import React from "react";
import Application from "../../../components/Career/Application";

export default function index({ data }) {
  const { data: job } = data;
  const { name, applications } = job;
  console.log(applications);
  return (
    <section className="applications bg-light spacing-sm">
      <div className="container">
        <h3 className="applications__heading">
          Апликации за работна позиција: {name}
        </h3>
        <div className="applications__grid">
          {applications.map((app, idx) => {
            return <Application key={idx} app={app}></Application>;
          })}
        </div>
      </div>
    </section>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}jobs`);
  const dataReady = await res.json();

  const paths = dataReady.data.map((job) => ({
    params: {
      id: job._id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}jobs/${id}`);
  const data = await res.json();
  return {
    props: data,
    revalidate: 1,
  };
}
