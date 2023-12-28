import React from "react";
import { render } from "@testing-library/react";
import TopbarTemplate from "./TopbarTemplate";

describe("TopbarTemplate", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<TopbarTemplate />);
    const componentElement = getByTestId("topbar");
    expect(componentElement).toBeInTheDocument();
  });
});
