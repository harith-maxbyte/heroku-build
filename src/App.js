import { ThemeProvider } from "@material-ui/core";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../src/store";
import Routes from "./Routes";
import theme from "./theme";
class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Routes />
          </ThemeProvider>
        </Provider>
      </>
    )
  }
}

export default App;
