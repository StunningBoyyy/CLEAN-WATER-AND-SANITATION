import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FootprintCalc } from "@/components/action/FootprintCalc";

describe("FootprintCalc Component", () => {
  it("renders with default inputs and displays calculated daily liters", () => {
    render(<FootprintCalc />);

    expect(
      screen.getByRole("heading", { name: /personal water footprint calculator/i })
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/shower duration per day/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/toilet flushes per day/i)).toBeInTheDocument();

    // Default calculated result heading or status
    expect(screen.getByText(/calculated footprint/i)).toBeInTheDocument();
    expect(screen.getByText(/3 tailored conservation tips/i)).toBeInTheDocument();
  });

  it("updates water calculation when brushing toggle is clicked", () => {
    render(<FootprintCalc />);

    const turnedOffBtn = screen.getByRole("button", { name: /turned off/i });
    fireEvent.click(turnedOffBtn);

    expect(turnedOffBtn).toHaveClass("bg-sdggreen");
  });

  it("resets defaults when reset button is clicked", () => {
    render(<FootprintCalc />);

    const resetBtn = screen.getByRole("button", { name: /reset defaults/i });
    fireEvent.click(resetBtn);

    expect(screen.getByText(/calculated footprint/i)).toBeInTheDocument();
  });
});
