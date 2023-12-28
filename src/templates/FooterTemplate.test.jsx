import React from "react";
import { render } from "@testing-library/react";
import FooterTemplate from "./FooterTemplate";

describe("FooterTemplate", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<FooterTemplate />);
    const componentElement = getByTestId("footer");
    expect(componentElement).toBeInTheDocument();
  });
});
