import { render, screen } from "@testing-library/react";
import App from "./AppBar/AppBar";

test("renders learn react link", () => {
  render(<AppBar />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
