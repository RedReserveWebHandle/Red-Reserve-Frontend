import { useState } from 'react'
import React from 'react'
import photo from '../photos/photo1.jpg'
import Footers from '../components/footers'
import { Link } from 'react-router-dom'


const Landing = () => {
  const [count, setCount] = useState(0)
  return (
    <>
    =
    

      {/* Navbar Section */}
      <nav className="bg-[#DBEDF0] p-6">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo/Title */}
          <a href="#" className="flex items-center text-4xl font-extrabold text-[#1AB6CA]">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.44 26H19L20 24L24 33L28 19L31 26H41.54M4 19C4.00004 16.7744 4.67519 14.6012 5.93627 12.7673C7.19735 10.9335 8.98503 9.52532 11.0632 8.7288C13.1414 7.93228 15.4123 7.78489 17.576 8.30609C19.7397 8.82729 21.6944 9.99256 23.182 11.648C23.2868 11.76 23.4134 11.8493 23.5542 11.9104C23.6949 11.9715 23.8466 12.003 24 12.003C24.1534 12.003 24.3051 11.9715 24.4458 11.9104C24.5866 11.8493 24.7132 11.76 24.818 11.648C26.3009 9.9818 28.256 8.80674 30.4233 8.2792C32.5905 7.75167 34.867 7.89669 36.9497 8.69497C39.0325 9.49324 40.8228 10.9069 42.0822 12.7478C43.3417 14.5887 44.0106 16.7695 44 19C44 23.58 41 27 38 30L27.016 40.626C26.6433 41.054 26.1839 41.3978 25.6681 41.6346C25.1523 41.8714 24.5921 41.9957 24.0246 41.9993C23.4571 42.0029 22.8953 41.8857 22.3766 41.6555C21.8579 41.4252 21.3941 41.0873 21.016 40.664L10 30C7 27 4 23.6 4 19Z" stroke="#1AB6CA" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            {/* <HeartIcon /> */}
            TITLE
          </a>

          {/* Buttons */}
          <div className="flex items-center space-x-4">
            <Link to='/login' className="rounded-lg border border-gray-400 px-4 py-2 text-black transition duration-300 hover:bg-white">
              <button>
                Login
              </button>
            </Link>
            <Link to="/signup" className="rounded-lg bg-[#1AB6CA] px-4 py-2 font-semibold text-white transition duration-300 hover:bg-teal-600 ">
              <button>
              Sign Up
            </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto mt-8 p-6 md:flex md:items-center md:justify-between  shadow-lg">
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
          {/* Placeholder for the image of a person donating blood */}
          <img
            src={photo} // Placeholder image
            alt="Person donating blood"
            className="rounded-lg  max-w-4/5 h-auto"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/34D399/ffffff?text=Image+Not+Found"; }}
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1AB6CA] leading-tight mb-4">
            Be a Hero Today.
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Every drop counts. Every donor is a hero.
          </p>
          <p className="text-lg text-gray-400 mb-8">
            Your 15 minutes can give someone 15 more years. You don't need to be a doctor to save a life.
          </p>
          <div className="flex space-x-4 mb-8 justify-center">
            <button className="flex items-center rounded-lg bg-[#1AB6CA] px-6 py-3 text-xl font-semibold text-white transition duration-300 hover:bg-teal-600 shadow-md">
              Donate Now <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 14H34M34 14V34M34 14L14 34" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </button>
            <button className="rounded-lg border border-teal-500 px-6 py-3 text-teal-400 transition duration-300 hover:bg-teal-500 hover:text-white shadow-md">
              Know More
            </button>
          </div>
          <blockquote className="text-gray-400 italic border-l-4 border-teal-500 pl-4">
            <p className="mb-2 text-lg">"We were minutes away from losing her. Then a donor saved her life..."</p>
            <footer className="text-sm">— Somita K., Guwahati</footer>
          </blockquote>
        </div>
      </header>

      {/* Call to Action / Stats Section */}
      <section className="container mx-auto mt-8 p-6 flex items-center justify-between  shadow-lg">
        <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
          <p className="text-xl font-black text-[#1AB6CA] mb-2">
            Less than 1% of eligible Indians donate regularly
          </p>
          <p className="text-md text-gray-400 mb-6">
            India faces a shortage of over 1 million units every year
          </p>
          <div className="flex flex-row items-center justify-center flex-wrap gap-x-6">
          <button className="rounded-lg bg-[#1AB6CA] px-6 py-3 font-semibold text-white transition duration-300 hover:bg-teal-500 shadow-md">
            Join Hospital
          </button>
          <div className="mt-4 text-gray-400 text-sm">
            <p>Running a hospital?</p>
            <p>Want to join the program? <a href="#" className="text-teal-400 hover:underline">Click here!</a></p>
          </div>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col sm:flex-row justify-around items-center space-y-6 sm:space-y-0 sm:space-x-6">
          <div className="text-center p-4 bg-[#DBEDF0] rounded-lg shadow-md w-full sm:w-auto flex flex-col items-center">
            <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M77.656 57.656C84 51.312 88 46 88 38C87.9999 33.5488 86.6496 29.2024 84.1275 25.5347C81.6053 21.867 78.0299 19.0507 73.8736 17.4576C69.7172 15.8646 65.1754 15.5698 60.8479 16.6122C56.5205 17.6546 52.6111 19.9851 49.636 23.296M77.656 57.656C76.867 58.4451 75.9304 59.071 74.8995 59.498C73.8687 59.9251 72.7638 60.1449 71.648 60.1449C70.5322 60.1449 69.4273 59.9251 68.3964 59.498C67.3656 59.071 66.4289 58.4451 65.64 57.656C66.4942 58.4284 67.1824 59.3664 67.6629 60.4131C68.1434 61.4597 68.4061 62.593 68.435 63.7443C68.4639 64.8956 68.2585 66.0407 67.8312 67.1101C67.4038 68.1796 66.7636 69.151 65.9492 69.9653C65.1349 70.7796 64.1635 71.4199 63.0941 71.8472C62.0247 72.2745 60.8796 72.4799 59.7283 72.451C58.577 72.4221 57.4436 72.1594 56.397 71.6789C55.3504 71.1985 54.4124 70.5102 53.64 69.656C54.4296 70.4426 55.0564 71.377 55.4846 72.406C55.9128 73.4349 56.134 74.5382 56.1355 75.6527C56.137 76.7672 55.9187 77.8711 55.4933 78.9012C55.0678 79.9313 54.4435 80.8674 53.656 81.656C52.8959 82.4164 51.9904 83.0157 50.9934 83.4182C49.9965 83.8207 48.9287 84.0182 47.8538 83.9987C46.7789 83.9793 45.7189 83.7434 44.7372 83.3052C43.7555 82.8669 42.8721 82.2353 42.14 81.448L20 60C14 54 8 47.2 8 38C8.00089 33.5492 9.35177 29.2033 11.8742 25.5362C14.3967 21.8692 17.9721 19.0534 22.1283 17.4609C26.2845 15.8684 30.826 15.5739 35.153 16.6164C39.4801 17.659 43.3891 19.9894 46.364 23.3C46.8087 23.7134 47.3936 23.9428 48.0008 23.942C48.6079 23.9413 49.1923 23.7105 49.636 23.296M77.656 57.656C79.1558 56.1558 79.9983 54.1213 79.9983 52C79.9983 49.8787 79.1558 47.8443 77.656 46.344L70.132 38.816C69.2368 37.9204 68.1739 37.21 67.004 36.7253C65.8342 36.2405 64.5803 35.991 63.314 35.991C62.0477 35.991 60.7938 36.2405 59.624 36.7253C58.4541 37.21 57.3912 37.9204 56.496 38.816L49.656 45.656C48.1558 47.1558 46.1213 47.9983 44 47.9983C41.8787 47.9983 39.8442 47.1558 38.344 45.656C36.8442 44.1558 36.0017 42.1213 36.0017 40C36.0017 37.8787 36.8442 35.8443 38.344 34.344L49.636 23.296" stroke="#1AB6CA" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            <p className="text-3xl font-bold text-[#1AB6CA]">2K+</p>
            <p className="text-[#1AB6CA]">Donors</p>
          </div>
          <div className="text-center p-4 bg-[#DBEDF0] rounded-lg shadow-md w-full sm:w-auto flex flex-col items-center">
            <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M48 28V44M56 84V72C56 69.8783 55.1571 67.8434 53.6569 66.3431C52.1566 64.8429 50.1217 64 48 64C45.8783 64 43.8434 64.8429 42.3431 66.3431C40.8429 67.8434 40 69.8783 40 72V84M56 36H40M72 44H80C82.1217 44 84.1566 44.8429 85.6569 46.3431C87.1571 47.8434 88 49.8783 88 52V76C88 78.1217 87.1571 80.1566 85.6569 81.6569C84.1566 83.1571 82.1217 84 80 84H16C13.8783 84 11.8434 83.1571 10.3431 81.6569C8.84285 80.1566 8 78.1217 8 76V40C8 37.8783 8.84285 35.8434 10.3431 34.3431C11.8434 32.8429 13.8783 32 16 32H24M72 84V20C72 17.8783 71.1571 15.8434 69.6569 14.3431C68.1566 12.8429 66.1217 12 64 12H32C29.8783 12 27.8434 12.8429 26.3431 14.3431C24.8429 15.8434 24 17.8783 24 20V84" stroke="#1AB6CA" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            <p className="text-3xl font-bold text-[#1AB6CA]">50+</p>
            <p className="text-[#1AB6CA]">Hospitals</p>
          </div>
        </div>
      </section>

      <Footers />
    </>
  )
}

export default Landing