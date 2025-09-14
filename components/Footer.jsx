export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-2">Embrace</h3>
          <p className="text-sm">© 2025 Embrace, All Rights Reserved</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Work With Us</h4>
          <ul className="space-y-1">
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Resources</h4>
          <ul className="space-y-1">
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Docs</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <ul className="space-y-1">
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-6 text-center text-sm text-gray-500">
        Built with ❤️ using Next.js & Tailwind CSS
      </div>
    </footer>
  )
}
