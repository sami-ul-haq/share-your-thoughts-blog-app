import TopBar from "./components/topbar/TopBar";
import Home from "./pages/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./context/GlobalContext";

const App = () => {
  const { state } = useContext(UserContext);
  const user = state;
  return (
    <BrowserRouter>
      <TopBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login">
          {user ? <Home /> : <Login />}
        </Route>
        <Route exact path="/register">
          {user ? <Home /> : <Register />}
        </Route>
        <Route exact path="/write">
          {user ? <Write /> : <Register />}
        </Route>
        <Route exact path="/settings">
          {user ? <Settings /> : <Register />}
        </Route>
        <Route exact path="/post/:postId" component={Single} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
