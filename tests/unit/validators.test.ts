import { describe, it, expect } from "vitest";
import { validateContactForm, sanitizeString } from "@/lib/validators";

describe("Contact Form Validators & Sanitizer", () => {
  it("sanitizes dangerous characters", () => {
    expect(sanitizeString("<script>alert('xss')</script>")).toBe("scriptalert('xss')/script");
    expect(sanitizeString("  Clean Text  ")).toBe("Clean Text");
    expect(sanitizeString(123)).toBe("");
    expect(sanitizeString(null)).toBe("");
  });

  it("validates correct form data", () => {
    const result = validateContactForm({
      name: "Jane Doe",
      email: "jane.doe@example.org",
      message: "This is a detailed message expressing support for UN SDG 6.",
    });

    expect(result.isValid).toBe(true);
    expect(Object.keys(result.errors).length).toBe(0);
  });

  it("rejects empty fields with appropriate error messages", () => {
    const result = validateContactForm({
      name: "",
      email: "",
      message: "",
    });

    expect(result.isValid).toBe(false);
    expect(result.errors.name).toBe("Please enter your name.");
    expect(result.errors.email).toBe("Please enter your email address.");
    expect(result.errors.message).toBe("Please enter a message.");
  });

  it("rejects invalid email formats", () => {
    const result = validateContactForm({
      name: "Jane Doe",
      email: "not-an-email",
      message: "Valid length message here for testing purposes.",
    });

    expect(result.isValid).toBe(false);
    expect(result.errors.email).toContain("valid email address");
  });

  it("rejects messages shorter than 10 characters", () => {
    const result = validateContactForm({
      name: "Jane Doe",
      email: "jane@example.com",
      message: "Short",
    });

    expect(result.isValid).toBe(false);
    expect(result.errors.message).toContain("at least 10 characters");
  });
});
