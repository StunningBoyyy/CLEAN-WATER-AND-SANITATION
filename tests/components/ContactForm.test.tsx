import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ContactForm } from "@/components/action/ContactForm";

describe("ContactForm Component", () => {
  it("shows validation error messages when submitted empty", async () => {
    render(<ContactForm />);

    const submitBtn = screen.getByRole("button", { name: /send message/i });
    fireEvent.click(submitBtn);

    expect(await screen.findByText(/please enter your name/i)).toBeInTheDocument();
    expect(screen.getByText(/please enter your email address/i)).toBeInTheDocument();
    expect(screen.getByText(/please enter a message/i)).toBeInTheDocument();
  });

  it("submits valid form data to api", async () => {
    // Mock fetch
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        success: true,
        message: "Thank you, Alex! Your message has been received.",
      }),
    });
    global.fetch = mockFetch;

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/full name/i), {
      target: { value: "Alex Smith" },
    });
    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: "alex@example.org" },
    });
    fireEvent.change(screen.getByLabelText(/your message/i), {
      target: { value: "This is a detailed message expressing support for UN SDG 6." },
    });

    const submitBtn = screen.getByRole("button", { name: /send message/i });
    fireEvent.click(submitBtn);

    expect(await screen.findByText(/message sent successfully/i)).toBeInTheDocument();
    expect(mockFetch).toHaveBeenCalledWith(
      "/api/contact",
      expect.objectContaining({
        method: "POST",
      })
    );
  });
});
