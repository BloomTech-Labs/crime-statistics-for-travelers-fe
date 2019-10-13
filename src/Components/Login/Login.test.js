import React from "react";
import Login from "./Login";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

it("Snapshot test for Login page", () => {
  const tree = renderer
    .create(
      <Router>
        <Login />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
