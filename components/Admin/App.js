import * as React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import simpleRestProvider from "ra-data-simple-rest";
import jsonapiClient from "ra-jsonapi-client";
// const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
import ProductsList from "./Lists/ProductsList";
import ProductEdit from "./Lists/ProductEdit";

const App = () => (
  <Admin dataProvider={jsonapiClient("http://localhost:3080/api/")}>
    <Resource name="products" list={ProductsList} edit={ProductEdit} />
    <Resource name="jobs" list={ListGuesser} />
  </Admin>
);

export default App;
