import "./App.css";
import Login from "./Authentication/login";
import Signup from "./Authentication/signup";
import { Route, Switch } from "react-router-dom";
import TasksPage from "./TasksPage/TasksPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={TasksPage} />
      </Switch>
    </div>
  );
}

export default App;
