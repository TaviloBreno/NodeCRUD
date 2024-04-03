import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={UserList} />
          <Route path="/add-user" component={AddUser} />
          <Route path="/edit-user/:id" component={EditUser} />{" "}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
