import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import PageLoader from "../components/small/Loading/Loading";

const Home = lazy(() => import("../pages/Home"));

const Routes = () => (
  <Suspense fallback={`Loading...`}>
    <Switch>
      <Redirect from="/:url*(/+)" to={window.location.pathname.slice(0, -1)} />
      <Route exact path={`/`} component={Home} />
    </Switch>
  </Suspense>
);

export default Routes;
