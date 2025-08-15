//import photo from '../photos/photo1.jpg'
import Footers from '../components/footers'
import { Link } from 'react-router-dom'


const More = () => {
  return (
    <>
      {/* Navbar Section */}
      <nav className="bg-[#DBEDF0] p-6">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo/Title */}
          <a href="#" className="flex items-center text-4xl font-extrabold text-[#1AB6CA]">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.44 26H19L20 24L24 33L28 19L31 26H41.54M4 19C4.00004 16.7744 4.67519 14.6012 5.93627 12.7673C7.19735 10.9335 8.98503 9.52532 11.0632 8.7288C13.1414 7.93228 15.4123 7.78489 17.576 8.30609C19.7397 8.82729 21.6944 9.99256 23.182 11.648C23.2868 11.76 23.4134 11.8493 23.5542 11.9104C23.6949 11.9715 23.8466 12.003 24 12.003C24.1534 12.003 24.3051 11.9715 24.4458 11.9104C24.5866 11.8493 24.7132 11.76 24.818 11.648C26.3009 9.9818 28.256 8.80674 30.4233 8.2792C32.5905 7.75167 34.867 7.89669 36.9497 8.69497C39.0325 9.49324 40.8228 10.9069 42.0822 12.7478C43.3417 14.5887 44.0106 16.7695 44 19C44 23.58 41 27 38 30L27.016 40.626C26.6433 41.054 26.1839 41.3978 25.6681 41.6346C25.1523 41.8714 24.5921 41.9957 24.0246 41.9993C23.4571 42.0029 22.8953 41.8857 22.3766 41.6555C21.8579 41.4252 21.3941 41.0873 21.016 40.664L10 30C7 27 4 23.6 4 19Z" stroke="#1AB6CA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            {/* <HeartIcon /> */}
            RedReserve
          </a>

          {/* Buttons */}
          <div className="flex items-center space-x-4">
            <Link to='/login' className="rounded-lg border border-gray-400 px-4 py-2 text-black transition duration-300 hover:bg-white">
              <button>
                Login
              </button>
            </Link>
            <Link to="/donorsignup" className="rounded-lg bg-[#1AB6CA] px-4 py-2 font-semibold text-white transition duration-300 hover:bg-teal-600 ">
              <button>
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-12 max-w-6xl mx-auto">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-[#1AB6CA] mb-4">
            Why RedReserve?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            RedReserve connects life-saving donors with hospitals in need —
            instantly. In emergencies, every second counts, and our platform
            ensures the right donors are notified within moments.
          </p><ul className="space-y-3">
  {[
    "Real-time alerts for critical blood shortages",
    "Match donors based on blood group and location",
    "Notify via SMS, email, and push notifications",
    "Role-based dashboards for hospitals and donors",
  ].map((text, idx) => (
    <li key={idx} className="flex items-start">
      <span className="w-6 text-lg">📍</span> {/* You can change icon per item if you want */}
      <span className="text-gray-700">{text}</span>
    </li>
  ))}
</ul>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Blood donation"
            className="w-80"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-[#1AB6CA]">500+</h3>
            <p className="text-gray-600">Donors Registered</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#1AB6CA]">150+</h3>
            <p className="text-gray-600">Lives Saved</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#1AB6CA]">20+</h3>
            <p className="text-gray-600">Hospitals Connected</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 bg-[#e6f4f4]">
        <h2 className="text-2xl font-bold text-[#1AB6CA] mb-4">
          Be part of the change.
        </h2>
        <p className="text-gray-700 mb-6">
          Your contribution can save lives. Register today and be a hero.
        </p>
        <Link to='/'>
        <button className="px-6 py-3 bg-[#2db8b3] text-white rounded-lg hover:bg-[#26a3a0]">
          Join Now
        </button></Link>
      <Footers />
      </section>
    </>
  )
}

export default More