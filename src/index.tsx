import * as React from "react";
import * as ReactDOM from "react-dom";
// import { AppContainer } from "react-hot-loader";
import { hot } from "react-hot-loader/root";
import Home from "./containers/Home";

// import { injectGlobal } from "styled-components";

// import { globalStyles } from "./theme";

// injectGlobal`${globalStyles}`;

const render = (Component: React.FC<any>) => {
  ReactDOM.render(<Component />, document.getElementById("app"));
};

render(hot(Home));
