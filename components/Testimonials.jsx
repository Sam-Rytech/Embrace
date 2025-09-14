export default function Testimonials() {
  const testimonials = [
    {
      name: 'Amelia Joseph',
      role: 'Chief Manager',
      quote: 'Amazing experience! They truly care about results.',
    },
    {
      name: 'Jacob Joshua',
      role: 'Growth Strategist',
      quote: 'Our brand visibility skyrocketed with their help.',
    },
    {
      name: 'Mia Stone',
      role: 'Marketing Lead',
      quote: 'Professional, responsive, and results-driven.',
    },
  ]

  return (
    <section className="py-16 max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">
        What Our Clients Said About Us
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-blue-50 p-6 rounded-2xl shadow-sm">
            <p className="italic mb-3 text-gray-700">"{t.quote}"</p>
            <h3 className="font-semibold">{t.name}</h3>
            <p className="text-sm text-gray-500">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
