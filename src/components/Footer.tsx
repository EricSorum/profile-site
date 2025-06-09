export default function Footer() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-18 w-full bg-stone-600 mt-12">
      <div className="m-6">
        <ul className="flex align-center gap-3">
          <li className="opacity-70 hover:opacity-100 transition ease-in-out"><a href="/">Privacy Policy</a></li>
          <li className="opacity-70 hover:opacity-100 transition ease-in-out"><a href="/">Terms and Conditions</a></li>
          <li className="opacity-70 hover:opacity-100 transition ease-in-out"><a href="/">Cookies</a></li>
        </ul>
      </div>
      <div className="m-6">&copy; Copyright 2024 Eric Sorum</div>
    </div>
  )
}