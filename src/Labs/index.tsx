import Assignment3 from "./a3";
import Assignment4 from "./a4";
import {Link, Route, Routes} from "react-router-dom";
import Nav from "../Nav";
import store from "./store";
import { Provider } from "react-redux";
import Assignment5 from "./a5";

function Labs() {
    return (
      <Provider store={store}>
        <div className="container-fluid">
          <Nav />
          <h1>Labs</h1>
          <Link to="/Labs/a3">Assignment 3</Link> |
          <Link to="/Labs/a4">Assignment 4</Link> |
          <Link to="/Labs/a5">Assignment 5</Link>
          <Routes>
            <Route path="/a3/*" element={<Assignment3 />} />
            <Route path="/a4/*" element={<Assignment4 />} />
            <Route path="/a5/*" element={<Assignment5 />} />
          </Routes>
        </div>
      </Provider>
    );
  }
  export default Labs;