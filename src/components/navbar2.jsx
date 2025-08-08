import { Link } from 'react-router-dom'

const handleLogout = () => {
  localStorage.removeItem('token');
  window.location.href = '/';
};

const Navbar2 = () => {
  return (
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
        <Link to="/" className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg font-semibold  transition-colors hover:border hover:border-[#1ab6ca]">
          <button onClick={handleLogout}>
            Log Out
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar2