"use client";

import { useState } from "react";

const SERVICES = ["Social Media Marketing","Branding & Identity","Packaging Design","Videography Production","Web Design","Not sure yet"];
const BUDGETS = ["Under PKR 100k / month","PKR 100k–250k / month","PKR 250k–500k / month","PKR 500k+ / month","One-off project"];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", brand: "", service: "", budget: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    // TODO: wire to a real endpoint — Formspree, Resend, or a Vercel
    // serverless function (see README "Lead form"). For now we confirm
    // locally and open a pre-filled email as a fallback.
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nBrand: ${form.brand}\nService: ${form.service}\nBudget: ${form.budget}\n\n${form.message}`
    );
    window.location.href = `mailto:hello@penandpixel.studio?subject=${encodeURIComponent("New enquiry — " + (form.brand || form.name))}&body=${body}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="form-success">
        <h3>Thanks — we’ve got it.</h3>
        <p>Your enquiry is on its way. We reply to every serious brief within one business day, and Stage 1 (Discovery) starts within 48 hours of a good fit.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate>
      <div className="field-row">
        <div className="field">
          <label htmlFor="name">Your Name</label>
          <input id="name" type="text" required value={form.name} onChange={update("name")} placeholder="Jane Doe" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" required value={form.email} onChange={update("email")} placeholder="you@brand.com" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="brand">Brand / Company</label>
        <input id="brand" type="text" value={form.brand} onChange={update("brand")} placeholder="Your brand name" />
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="service">What do you need?</label>
          <select id="service" value={form.service} onChange={update("service")}>
            <option value="">Select a service</option>
            {SERVICES.map((s) => (<option key={s} value={s}>{s}</option>))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="budget">Monthly Budget</label>
          <select id="budget" value={form.budget} onChange={update("budget")}>
            <option value="">Select a range</option>
            {BUDGETS.map((b) => (<option key={b} value={b}>{b}</option>))}
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">Tell us about your brand</label>
        <textarea id="message" required value={form.message} onChange={update("message")} placeholder="Where you are now, where you want to get to, and any timelines we should know about." />
      </div>
      <button type="submit" className="btn-primary" style={{ border: "none" }}>Send Enquiry</button>
      <p className="form-note">We read every message. No bots, no auto-funnels — a real person on our team replies within one business day.</p>
    </form>
  );
}
