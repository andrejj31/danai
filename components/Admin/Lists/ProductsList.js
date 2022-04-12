import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  useRecordContext,
} from "react-admin";

const BookAuthor = () => {
  const record = useRecordContext();
  console.log(record);
  return <span>{record.author}</span>;
};
export default function ProductsList(props) {
  console.log(props);
  return (
    <List {...props}>
      <Datagrid>
        <BookAuthor></BookAuthor>
        <TextField source="id"></TextField>
        <TextField source="description"></TextField>
        <EditButton></EditButton>
        <DeleteButton></DeleteButton>
      </Datagrid>
    </List>
  );
}
