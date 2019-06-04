import React from "react";
import TextInput from "funtime-react/TextInput";

// Optional textbox
export default class ExampleError extends React.Component {
  render() {
    return (
      <TextInput
        htmlId="example-optional"
        label="First Name"
        name="Firstname"
        required
        error="First name is required."
        onChange={() => {}}
      />
    );
  }
}
