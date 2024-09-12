import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const BlogEventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="eventTimestamp" source="eventTimestamp" />
        <TextInput label="eventType" source="eventType" />
        <TextInput label="postId" source="postId" />
      </SimpleForm>
    </Edit>
  );
};
