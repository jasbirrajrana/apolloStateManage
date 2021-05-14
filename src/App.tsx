import * as React from "react";
import { ChakraProvider, theme, Heading, Box } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Fetch from "./pages/Fetch";
import Header from "./components/Header";
import Home from "./pages/Home";
import Info from "./pages/Info";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />

        <Route path="/fetch" component={Fetch} />
        <Route path="/info" component={Info} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
