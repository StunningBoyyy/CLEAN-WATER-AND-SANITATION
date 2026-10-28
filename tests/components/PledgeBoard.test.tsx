import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { PledgeBoard } from "@/components/action/PledgeBoard";
import { PLEDGE_ITEMS } from "@/data/actions";

describe("PledgeBoard Component", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders all pledge items and initializes score at 0", () => {
    render(<PledgeBoard />);

    expect(screen.getByRole("heading", { name: /clean water pledge board/i })).toBeInTheDocument();

    const checkboxes = screen.getAllByRole("checkbox");
    expect(checkboxes.length).toBe(PLEDGE_ITEMS.length);
  });

  it("toggles pledge state and updates localStorage", () => {
    render(<PledgeBoard />);

    const firstCheckbox = screen.getAllByRole("checkbox")[0];
    expect(firstCheckbox).toHaveAttribute("aria-checked", "false");

    fireEvent.click(firstCheckbox);
    expect(firstCheckbox).toHaveAttribute("aria-checked", "true");

    const saved = localStorage.getItem("clean_water_pledges_v1");
    expect(saved).toBeTruthy();
    expect(JSON.parse(saved || "[]")).toContain(PLEDGE_ITEMS[0].id);
  });
});
