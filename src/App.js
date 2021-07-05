import "./App.css";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Box, CssBaseline, NoSsr, StylesProvider } from "@material-ui/core";
import MainTheme from "./theme/MainTheme";
import Routes from "./Routes/Routes";
import Nav from "./components/Nav";

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <NoSsr>
        <MainTheme>
          <StylesProvider>
            <CssBaseline />
            <Nav />
            <Box mb={8}>
              <Routes />
            </Box>
          </StylesProvider>
        </MainTheme>
      </NoSsr>
    </Router>
  );
};

export default App;
