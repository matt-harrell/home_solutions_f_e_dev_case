import { render, screen } from "@testing-library/react";
import StarRating from "../src/components/StarRating/StarRating";

describe("StarRating Component has 3.5 stars", () => {
  beforeEach(() => {
    render(<StarRating rating={3.5} />);
  });

  it("renders full stars correctly", () => {
    const fullStars = screen.getAllByTestId("full-star");
    expect(fullStars).toHaveLength(3);
  });

  it("renders half star correctly", () => {
    const halfStars = screen.getAllByTestId("half-star");
    expect(halfStars).toHaveLength(1);
  });

  it("renders half star correctly", () => {
    const emptyStars = screen.getAllByTestId("empty-star");
    expect(emptyStars).toHaveLength(1);
  });
});

describe("StarRating Component has 3.4 stars", () => {
  beforeEach(() => {
    render(<StarRating rating={3.4} />);
  });

  it("renders full stars correctly", () => {
    const fullStars = screen.getAllByTestId("full-star");
    expect(fullStars).toHaveLength(3);
  });

  it("renders half star correctly", () => {
    const halfStars = screen.queryByTestId("half-star");
    expect(halfStars).toBeNull();
  });

  it("renders half star correctly", () => {
    const emptyStars = screen.getAllByTestId("empty-star");
    expect(emptyStars).toHaveLength(2);
  });
});
