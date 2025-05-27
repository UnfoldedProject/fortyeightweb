"use client"

import type React from "react"

import { useState } from "react"

export default function AutomateConsole() {
  const [prompt, setPrompt] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!prompt.trim()) return

    setIsSubmitting(true)
    setShowConfirmation(false)

    try {
      const webhookUrl = `https://fortyeight.app.n8n.cloud/webhook/95109a76-ef08-463c-ae7a-28ad717bcf2e?prompt=${encodeURIComponent(
        prompt,
      )}`

      const response = await fetch(webhookUrl, {
        method: "GET",
      })

      if (response.ok) {
        setShowConfirmation(true)
        setPrompt("") // Auto-clear the input field
        setTimeout(() => setShowConfirmation(false), 5000) // Hide confirmation after 5 seconds
      }
    } catch (error) {
      console.error("Error sending prompt:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Automation Console</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
                Enter your automation request
              </label>
              <textarea
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Describe the automation you need..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !prompt.trim()}
              className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : (
                "Send to Automate"
              )}
            </button>
          </form>

          {showConfirmation && (
            <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
              Prompt received. Check the Google Doc.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
