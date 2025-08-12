import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { BACKEND_URL } from '../config.js';
import SelectInput from './selectinput.jsx';

const LoginForm = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  // Unified form state
  const [form, setForm] = useState({
    email: '',
    password: '',
    type: 'donor',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const loginTypeOptions = [
    { value: 'donor', label: 'Donor' },
    { value: 'hospital', label: 'Hospital' }
  ];

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const endpoint = form.type === 'donor' ? 'donor/login' : 'hospital/login';

      const res = await fetch(`${BACKEND_URL}/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('token', data.token); // store token
        setMessage('Login successful!');
        navigate(form.type === 'donor' ? '/donordashboard' : '/hospitaldashboard');
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

      <form className="space-y-4" onSubmit={handleLogin}>
        <div>
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2 text-left">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
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
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="shadow appearance-none border border-[#1AB6CA] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
          />
        </div>
        {/* Login Type Select */}
        <SelectInput
          label="Login As"
          name="type"
          options={loginTypeOptions}
          value={form.type}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="bg-[#1AB6CA] hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-52"
        >
          Login
        </button>

        {message && <p className="text-red-500">{message.split('[')[0]}</p>}
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
