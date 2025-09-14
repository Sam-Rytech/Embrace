export default function HowItWorks() {
  const steps = [
    {
      title: 'Discovery',
      desc: 'We start with a deep dive to learn about your goals.',
    },
    {
      title: 'Strategy',
      desc: 'We craft a custom plan to achieve your objectives.',
    },
    {
      title: 'Execution',
      desc: 'Our team brings the plan to life efficiently.',
    },
    {
      title: 'Measurement',
      desc: 'We measure results and optimize continuously.',
    },
  ]

  return (
    <section id="how-it-works" className="py-16 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="text-center">
            <div className="bg-blue-100 text-blue-700 w-14 h-14 rounded-xl flex items-center justify-center mx-auto text-lg font-bold mb-4">
              {i + 1}
            </div>
            <h3 className="font-semibold text-lg">{step.title}</h3>
            <p className="text-gray-600 mt-2">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
