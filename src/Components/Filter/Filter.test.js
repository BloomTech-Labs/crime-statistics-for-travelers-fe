import React from "react";
import Filter from "./Filter";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

it("Snapshot test for Filter component", () => {
  const tree = renderer
    .create(
      <Router>
        <Filter />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
