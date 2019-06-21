import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Container } from "semantic-ui-react";

import CreateLink from "./CreateLink";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import SearchLinks from "./SearchLinks";
import LinkList from "./LinkList";
import LinkDetail from "./LinkDetail";
import Header from "./Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container style={{ marginTop: "4rem" }}>
        <Switch>
          <Redirect exact from="/" to="/new/1" />
          {/*<Route*/}
          {/*  exact*/}
          {/*  path="/"*/}
          {/*  render={() => {*/}
          {/*    return <Redirect to="/new/1" />;*/}
          {/*  }}*/}
          {/*/>*/}
          <Route path="/create" component={CreateLink} />
          <Route path="/login" component={Login} />
          <Route path="/forgot" component={ForgotPassword} />
          <Route path="/search" component={SearchLinks} />
          <Route path="/top" component={LinkList} />
          <Route path="/new/:page" component={LinkList} />
          <Route path="/link/:linkId" component={LinkDetail} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
