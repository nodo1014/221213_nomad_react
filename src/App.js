import { ReactDOM } from "react";
import {
   BrowserRouter as Router, Switch, Route,
 } from "react-router-dom";


import Home from "./routes/Home"
import ToDo from "./routes/ToDo";
import Blog from "./routes/Blog";
import Detail from "./routes/Detail";

function App() {
  
  return <Router>
    {/* // switch 는 라우터를 찾는 역할. 한번에 라우터 한개만 렌더링*/}
    {/* <Route path="/todo2" element={<ToDo />} /> 6.x 대 방식 switch 사용 X*/}
    <Switch>
      <Route path="/movie/:id">
        <h1>'/'라우트는 젤 밑으로!</h1>
        <Detail />
      </Route>
      <Route path="/todo">
        <ToDo />
      </Route>

      <Route path="/blog">
        <Blog />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>;

};

export default App;
