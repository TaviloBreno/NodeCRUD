import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserList from "./compenents/UserList";
import AddUser from "./compenents/AddUser";


const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={UserList} />
          <Route path="/add-user" component={AddUser} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
