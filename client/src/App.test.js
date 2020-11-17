import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { toMatchDiffSnapshot } from "snapshot-diff";
import App from "./App";

expect.extend({ toMatchDiffSnapshot });

test("renders & tests the Fetch Fund Investments button", () => {
  const { asFragment } = render(<App />);
  const firstRender = asFragment();

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();

  fireEvent.click(button);
  expect(firstRender).toMatchDiffSnapshot(asFragment());
});
