import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import FormInput from './forminput.jsx';
import { BACKEND_URL } from '../config.js';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BACKEND_URL}/donor/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (res.status === 201) {
        setMessage("Signup successful!");
        navigate('/login');
      } else {
        const data = await res.json();
        setMessage(data.message || "Signup failed");
      }
    } catch (err) {
      console.error(err);
      setMessage("Error signing up");
    }
  };

  return (
    <div className="bg-[#DBEDF0] rounded-lg shadow-md p-8 md:w-106 m-8">
      <h2 className="text-3xl font-extrabold text-black mb-6 text-left">Sign up</h2>
      <form className="space-y-4" onSubmit={handleSignup}>
        <FormInput label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <FormInput label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button
          type="submit"
          className="bg-[#1AB6CA] hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded w-52"
        >
          Signup
        </button>
        {message != '' && (<p>{message.substring(0,message.indexOf('['))}</p>)}
      </form>
      <div className="mt-6 pt-4 border-t border-gray-300 text-center">
        <p className="text-gray-600 text-sm mb-2">
          Donated before? <br />
          Let's do the cause once more!
        </p>
        <Link
          to="/login"
          className="bg-white hover:bg-gray-200 text-[#1AB6CA] font-semibold py-2 px-4 rounded border border-[#1AB6CA]"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignupForm;
