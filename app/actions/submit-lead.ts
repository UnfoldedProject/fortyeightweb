"use server"

export async function submitLead(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string

  if (!name || !email) {
    return {
      success: false,
      message: "Name and email are required",
    }
  }

  try {
    const response = await fetch("https://jaflgwbfhwdogrzimtoc.supabase.co/rest/v1/fortyeightweb_leads", {
      method: "POST",
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        name,
        email,
        created_at: new Date().toISOString(),
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to submit lead")
    }

    return {
      success: true,
      message: "Thanks! We'll reach out shortly.",
    }
  } catch (error) {
    console.error("Error submitting lead:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    }
  }
}
