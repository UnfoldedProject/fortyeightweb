"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { submitLead } from "@/app/actions/submit-lead"

export default function LeadCaptureForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSuccess, setFormSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setErrorMessage("")

    try {
      const result = await submitLead(formData)

      if (result.success) {
        setFormSuccess(true)
        // Reset the form
        const form = document.getElementById("lead-form") as HTMLFormElement
        form.reset()
      } else {
        setErrorMessage(result.message)
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.")
      console.error("Error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <form id="lead-form" action={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-[#2a4365] font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4299e1]"
            placeholder="Your name"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-[#2a4365] font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4299e1]"
            placeholder="your.email@example.com"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#4299e1] hover:bg-[#3182ce] text-white py-3 rounded-md transition-colors duration-300 font-medium text-lg"
        >
          {isSubmitting ? "Submitting..." : "Get Started"}
        </Button>

        {errorMessage && <p className="mt-4 text-red-500 text-center">{errorMessage}</p>}
      </form>

      {formSuccess && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md text-center">
          Thanks! We'll reach out shortly.
        </div>
      )}
    </div>
  )
}
