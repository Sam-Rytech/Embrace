'use client'
import { useState } from 'react'

export default function FAQ() {
  const faqs = [
    {
      q: 'How do I sign up for Embrace?',
      a: "Simply click on the 'Start Now' button and follow the steps.",
    },
    {
      q: 'What things should I do to prepare before starting?',
      a: 'Have your brand assets, goals, and target audience ready.',
    },
    {
      q: 'Does my company need help formulating a strategy?',
      a: 'Yes, we provide strategy sessions to align with your goals.',
    },
  ]

  const [open, setOpen] = useState(null)

  return (
    <section className="py-16 max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">
        How We Can Help You?
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex justify-between w-full py-3 text-left font-medium"
            >
              {faq.q}
              <span>{open === i ? '-' : '+'}</span>
            </button>
            {open === i && <p className="text-gray-600 pb-3">{faq.a}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}
