import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const BlogEventCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="eventTimestamp" source="eventTimestamp" />
        <TextInput label="eventType" source="eventType" />
        <TextInput label="postId" source="postId" />
      </SimpleForm>
    </Create>
  );
};
