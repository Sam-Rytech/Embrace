export default function OurWork() {
  const projects = [
    { name: 'Apple', color: 'bg-black' },
    { name: 'Coca-Cola', color: 'bg-red-600' },
    { name: 'Nike', color: 'bg-blue-200' },
  ]

  return (
    <section id="our-work" className="py-16 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Our Work</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`${project.color} h-48 rounded-xl flex items-center justify-center text-white font-bold text-2xl`}
          >
            {project.name}
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
          See More
        </button>
      </div>
    </section>
  )
}
