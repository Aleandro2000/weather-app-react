import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NotfoundPage from "./NotfoundPage";

describe("NotfoundPage", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <NotfoundPage />
      </BrowserRouter>,
    );
    const componentElement = getByTestId("notfound");
    expect(componentElement).toBeInTheDocument();
  });
});
