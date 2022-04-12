import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

export default function ProductEdit(props) {
  return (
    <Edit title="Edit Post" {...props}>
      <SimpleForm>
        <TextInput source="name"></TextInput>
      </SimpleForm>
    </Edit>
  );
}
