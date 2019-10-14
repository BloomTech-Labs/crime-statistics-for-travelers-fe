import React from "react";
import Demographics from "./Demographics";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

it("Snapshot test for Demographics component", () => {
  const tree = renderer
    .create(
      <Router>
        <Demographics />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
