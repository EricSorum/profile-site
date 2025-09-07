export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between h-18 w-full bg-stone-600 mt-12">
      <nav className="m-6" aria-label="Footer navigation">
        <ul className="flex align-center gap-3">
          <li className="opacity-70 hover:opacity-100 transition ease-in-out">
            <a href="/" className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded">Privacy Policy</a>
          </li>
          <li className="opacity-70 hover:opacity-100 transition ease-in-out">
            <a href="/" className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded">Terms and Conditions</a>
          </li>
          <li className="opacity-70 hover:opacity-100 transition ease-in-out">
            <a href="/" className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded">Cookies</a>
          </li>
        </ul>
      </nav>
      <div className="m-6">&copy; Copyright 2024 Eric Sorum</div>
    </footer>
  )
}