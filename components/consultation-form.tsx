"use client"

import type React from "react"

import { useState } from "react"

export function ConsultationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    serviceType: "",
    budget: "",
    projectDescription: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section className="bg-background px-8 py-16 md:px-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex mb-12">
          <h2 className="flex-1 font-display text-4xl font-light text-foreground md:text-5xl">Book Consultation</h2>
          <p className="flex-1 mt-6 max-w-2xl text-foreground/80">
            Transform your ideas into a chair that's authentically yours. Fill out the form below, and our team will
            guide you from concept to creation, turning your concepts into a chair that reflects your style and
            identity.
          </p>
        </div>

        {/* Divider */}
        <div className="mb-12 border-t border-foreground/20" />

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="grid gap-8 md:grid-cols-2">
            {/* The Essentials */}
            <div>
              <h3 className="mb-8 text-xl font-semibold text-foreground">The Essentials</h3>
              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm text-foreground/70">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full border-b border-foreground/20 bg-transparent px-0 py-2 text-foreground placeholder-foreground/40 focus:border-foreground focus:outline-none"
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-foreground/70">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-b border-foreground/20 bg-transparent px-0 py-2 text-foreground placeholder-foreground/40 focus:border-foreground focus:outline-none"
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-foreground/70">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full border-b border-foreground/20 bg-transparent px-0 py-2 text-foreground placeholder-foreground/40 focus:border-foreground focus:outline-none"
                    placeholder=""
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="mb-8">
                <h3 className="mb-8 text-xl font-semibold text-foreground">Project Objectives</h3>
                <div className="space-y-6">
                  <div>
                    <label className="mb-2 block text-sm text-foreground/70">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full border-b border-foreground/20 bg-transparent px-0 py-2 text-foreground placeholder-foreground/40 focus:border-foreground focus:outline-none"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-foreground/70">Phone/WhatsApp *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border-b border-foreground/20 bg-transparent px-0 py-2 text-foreground placeholder-foreground/40 focus:border-foreground focus:outline-none"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-foreground/70">Budget (approx)</label>
                    <input
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full border-b border-foreground/20 bg-transparent px-0 py-2 text-foreground placeholder-foreground/40 focus:border-foreground focus:outline-none"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full Width Fields */}
          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-sm text-foreground/70">What type of service that you need?</label>
              <input
                type="text"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full border-b border-foreground/20 bg-transparent px-0 py-2 text-foreground placeholder-foreground/40 focus:border-foreground focus:outline-none"
                placeholder=""
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-foreground/70">Tell us about what you project</label>
              <textarea
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleChange}
                className="w-full border-b border-foreground/20 bg-transparent px-0 py-2 text-foreground placeholder-foreground/40 focus:border-foreground focus:outline-none"
                placeholder=""
                rows={4}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded-lg border-2 border-foreground px-8 py-3 text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Contact Us
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
