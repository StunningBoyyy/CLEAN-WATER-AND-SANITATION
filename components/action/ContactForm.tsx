"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { validateContactForm, type ContactFormData, type ValidationErrors } from "@/lib/validators";

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverStatus, setServerStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear field-specific error as user types
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerStatus({ type: null, message: "" });

    // Client-side validation
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setServerStatus({
          type: "success",
          message: data.message,
        });
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        setServerStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
        if (data.fieldErrors) {
          setErrors(data.fieldErrors);
        }
      }
    } catch {
      setServerStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-10 bg-white dark:bg-navy-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-navy-800 shadow-sm my-8" aria-labelledby="contact-heading">
      <div className="max-w-2xl mb-8">
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-water dark:text-water-400">
          Get Involved
        </span>
        <h2
          id="contact-heading"
          className="font-heading text-2xl sm:text-3xl font-bold text-navy dark:text-white mt-1 mb-2"
        >
          Join Our Community or Send a Message
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
          Have an inquiry, suggestion, or wish to collaborate on UN SDG 6 awareness? Reach out to founders Vishwa Vijay and Prateek Saroj.
        </p>
      </div>

      {serverStatus.type === "success" ? (
        <div className="p-6 rounded-2xl bg-sdggreen/10 border border-sdggreen/30 text-navy dark:text-white flex items-start gap-3">
          <CheckCircle2 className="w-6 h-6 text-sdggreen flex-shrink-0 mt-0.5" />
          <div className="space-y-2">
            <h3 className="font-heading font-bold text-base text-sdggreen">
              Message Sent Successfully!
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {serverStatus.message}
            </p>
            <button
              type="button"
              onClick={() => setServerStatus({ type: null, message: "" })}
              className="text-xs font-semibold text-water hover:underline pt-2 block"
            >
              Send another message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5 max-w-2xl">
          {serverStatus.type === "error" && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-sm flex items-center gap-2">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span>{serverStatus.message}</span>
            </div>
          )}

          {/* Name Field */}
          <div>
            <label
              htmlFor="contact-name"
              className="block font-heading font-semibold text-xs sm:text-sm text-navy dark:text-white mb-1.5"
            >
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors bg-white dark:bg-navy-800 text-navy dark:text-white focus:outline-none focus:ring-2 ${
                errors.name
                  ? "border-red-400 focus:ring-red-400"
                  : "border-slate-200 dark:border-navy-700 focus:ring-water"
              }`}
              placeholder="e.g. Alex Johnson"
            />
            {errors.name && (
              <p id="name-error" className="text-xs text-rose-500 mt-1">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="contact-email"
              className="block font-heading font-semibold text-xs sm:text-sm text-navy dark:text-white mb-1.5"
            >
              Email Address <span className="text-rose-500">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors bg-white dark:bg-navy-800 text-navy dark:text-white focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-400 focus:ring-red-400"
                  : "border-slate-200 dark:border-navy-700 focus:ring-water"
              }`}
              placeholder="e.g. alex@example.com"
            />
            {errors.email && (
              <p id="email-error" className="text-xs text-rose-500 mt-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="contact-message"
              className="block font-heading font-semibold text-xs sm:text-sm text-navy dark:text-white mb-1.5"
            >
              Your Message <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors bg-white dark:bg-navy-800 text-navy dark:text-white focus:outline-none focus:ring-2 ${
                errors.message
                  ? "border-red-400 focus:ring-red-400"
                  : "border-slate-200 dark:border-navy-700 focus:ring-water"
              }`}
              placeholder="Share your thoughts, local water observations, or collaboration ideas..."
            />
            {errors.message && (
              <p id="message-error" className="text-xs text-rose-500 mt-1">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-water hover:bg-water-600 shadow-md hover:shadow-water disabled:opacity-50 transition-all active:scale-95"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      )}
    </section>
  );
}
