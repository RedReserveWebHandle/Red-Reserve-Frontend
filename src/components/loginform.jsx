import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { BACKEND_URL } from '../config.js'; // adjust path as needed

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BACKEND_URL}/donor/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('token', data.token); // store token
        setMessage('Login successful!');
        navigate('/donordashboard');
      } else {
        setMessage(data.message || 'Login failed');
      }
    } catch (err) {
      console.error(err);
      setMessage('Error logging in');
    }
  };

  return (
    <div className="bg-[#DBEDF0] rounded-lg shadow-md p-8 md:w-106 m-8">
      <h2 className="text-3xl font-extrabold text-black mb-6 text-left">LOGIN</h2>
      <br />
      <form className="space-y-4" onSubmit={handleLogin}>
        <div>
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2 text-left">
            Email
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white border-[#1AB6CA]"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2 text-left">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="shadow appearance-none border border-[#1AB6CA] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
          />
        </div>
        <br />
        <button
          type="submit"
          className="bg-[#1AB6CA] hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-52"
        >
          Login
        </button>
        {message != '' && (<p>{message.substring(0,message.indexOf('['))}</p>)}
      </form>
      <div className="mt-6 pt-4 border-t border-gray-300 text-center">
        <p className="text-gray-600 text-sm mb-2">
          Haven't donated before? <br />
          No worries, we got you covered!
        </p>
        <Link
          to="/donorsignup"
          className="bg-white hover:bg-gray-200 text-[#1AB6CA] font-semibold py-2 px-4 rounded border border-[#1AB6CA] focus:outline-none focus:shadow-outline"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
