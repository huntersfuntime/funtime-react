import React from "react";
import TextInput from "funtime-react/TextInput";

// Optional textbox
export default class ExampleOptional extends React.Component {
  render() {
    return (
      <TextInput
        htmlId="example-optional"
        label="First Name"
        name="Firstname"
        onChange={() => {}}
      />
    );
  }
}
