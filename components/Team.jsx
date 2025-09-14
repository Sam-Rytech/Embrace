export default function Team() {
  const team = [
    'Amelia Joseph',
    'Jacob Joshua',
    'Sarah Lee',
    'John Doe',
    'Mia Stone',
    'Daniel Brown',
  ]

  return (
    <section className="py-16 max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-10">Meet Our Team</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {team.map((member, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mb-3"></div>
            <h3 className="font-semibold">{member}</h3>
          </div>
        ))}
      </div>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 mt-8">
        Learn More
      </button>
    </section>
  )
}
