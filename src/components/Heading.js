import React from "react";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class Heading extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <>
          <AppBar title="To-Do List" />
          <br />
        </>
      </MuiThemeProvider>
    );
  }
}

export default Heading;
