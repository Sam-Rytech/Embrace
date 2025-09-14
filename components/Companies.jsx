export default function Companies() {
  const companies = [
    'Spotify',
    'Google',
    'Uber',
    'Microsoft',
    'Shopify',
    'Evernote',
    'Adobe',
    'PayPal',
    'Amazon',
    'Asana',
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
        {companies.map((company, i) => (
          <div key={i} className="text-center text-gray-500 font-medium">
            {company}
          </div>
        ))}
      </div>
    </section>
  )
}
