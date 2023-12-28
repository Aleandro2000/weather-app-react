import React from "react";
import { render } from "@testing-library/react";
import HomePage from "./HomePage";

describe("HomePage", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<HomePage />);
    const componentElement = getByTestId("home");
    expect(componentElement).toBeInTheDocument();
  });
});
