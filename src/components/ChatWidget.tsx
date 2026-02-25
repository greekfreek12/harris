"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

const initialForm = { name: "", phone: "", message: "" };

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<SubmitState>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/chat-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || "Unable to send message right now.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unable to send message right now.");
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-[120] sm:bottom-6 sm:right-6">
      {hidden && (
        <button
          type="button"
          onClick={() => setHidden(false)}
          className="rounded-full border border-[#d8dfea] bg-white px-3 py-1.5 text-[12px] font-semibold text-[#2768b9] shadow-[0_6px_18px_rgba(20,60,110,0.15)]"
          aria-label="Show chat"
        >
          Chat
        </button>
      )}

      {!hidden && !open && (
        <div className="relative mb-2 ml-auto w-[calc(100vw-5rem)] max-w-[300px] rounded-[20px] border border-[#e6e1da] bg-white px-4 py-3.5 shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
          <button
            type="button"
            onClick={() => setHidden(true)}
            className="absolute right-2.5 top-2.5 z-20 inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#d9d5cf] bg-[#f8f8f8] text-[18px] leading-none text-[#5d564f]"
            aria-label="Hide chat"
          >
            ×
          </button>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="block w-full pr-9 text-left"
            aria-label="Open chat"
          >
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 shrink-0 rounded-full bg-[#c8964e] text-center text-[11px] font-bold leading-9 text-white">
                HP
              </div>
              <p className="text-[13px] leading-[1.35] text-[#2a2a2a]">
                Hi there, have a question? Chat with us here.
              </p>
            </div>
          </button>
          <span className="absolute -bottom-2 right-5.5 h-4 w-4 rotate-45 border-r border-b border-[#e6e1da] bg-white" />
        </div>
      )}

      {!hidden && open && (
        <div id="chat-widget-panel" className="relative mb-3 w-[calc(100vw-2rem)] max-w-sm max-h-[calc(100vh-7.5rem)] overflow-y-auto rounded-2xl border border-[#d9d1c6] bg-[#fdfbf8] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#d7d0c4] bg-white text-[20px] font-semibold leading-none text-[#3a342e] shadow-[0_3px_10px_rgba(0,0,0,0.12)] transition-colors hover:bg-[#f5f2ec]"
            aria-label="Close chat"
          >
            ×
          </button>
          <div className="pr-10">
            <div className="inline-flex items-center rounded-full border border-[#d8d2c8] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6b6257]">
              Logo Here
            </div>
          </div>
          <h3 className="mt-4 font-display text-[24px] sm:text-[26px] leading-[1.08] text-[#1a1a1a]">How Can We Help?</h3>
          <p className="mt-2.5 text-[13px] leading-relaxed text-[#5e5852]">
            Share your name and number. We will reach out shortly.
          </p>

          {status === "success" ? (
            <div className="mt-4 rounded-xl border border-[#d8c09a] bg-[#fff7ea] px-4 py-3 text-[13px] text-[#5a4328]">
              Thanks. Someone will be with you shortly.
            </div>
          ) : (
            <form className="mt-4 space-y-3" onSubmit={onSubmit}>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                placeholder="Name"
                className="w-full rounded-xl border border-[#ddd4c9] bg-white px-3 py-2.5 text-[14px] text-[#1a1a1a] outline-none transition-colors focus:border-[#c8964e]"
              />
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                placeholder="Phone Number"
                className="w-full rounded-xl border border-[#ddd4c9] bg-white px-3 py-2.5 text-[14px] text-[#1a1a1a] outline-none transition-colors focus:border-[#c8964e]"
              />
              <textarea
                rows={3}
                value={form.message}
                onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                placeholder="What do you need help with? (optional)"
                className="w-full resize-none rounded-xl border border-[#ddd4c9] bg-white px-3 py-2.5 text-[14px] text-[#1a1a1a] outline-none transition-colors focus:border-[#c8964e]"
              />
              {status === "error" && <p className="text-[12px] text-[#9f2f2f]">{error}</p>}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex w-full items-center justify-center rounded-full bg-[#c8964e] px-4 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#b07d3a] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      )}

      {!hidden && (
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => {
            setOpen((prev) => !prev);
            if (status === "success") setStatus("idle");
          }}
          className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[linear-gradient(145deg,#2a8bff,#1f72d6)] text-white shadow-[0_10px_20px_rgba(31,122,224,0.35)] ring-2 ring-white/85 transition-all hover:brightness-95"
          aria-expanded={open}
          aria-controls="chat-widget-panel"
          aria-label={open ? "Close chat" : "Chat with us"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
          </svg>
        </button>
      </div>
      )}
    </div>
  );
}
