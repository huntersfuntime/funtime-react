import React, { Component } from "react";
import PasswordInput from "funtime-react/PasswordInput";

class ExampleAllFeatures extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: ""
    };
  }

  getQuality() {
    const length = this.state.password.length;
    // Each keystroke is 10%
    return length > 10 ? 100 : length * 10;
  }

  render() {
    return (
      <div>
        <PasswordInput
          htmlId="password-input-example-all-features"
          name="password"
          onChange={event => this.setState({ password: event.target.value })}
          value={this.state.password}
          minLength={8}
          placeholder="Enter password"
          showVsibilityToggle
          quality={this.getQuality()}
          {...this.props}
        />
      </div>
    );
  }
}

export default ExampleAllFeatures;
