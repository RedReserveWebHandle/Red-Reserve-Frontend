import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from './forminput.jsx';
import { BACKEND_URL } from '../config.js';

const HospitalForm = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const [form, setForm] = useState({
    name: '',
    licenseid: '',
    contact: '',
    pincode: '',
    address: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (Object.values(form).some(field => field === '')) {
      setMessage("Please fill all fields");
      return;
    }

    try {
      const res = await fetch(`${BACKEND_URL}/hospital/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token); // store JWT
        navigate('/login');
      } else {
        setMessage(data.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Signup error:', error);
      setMessage('Something went wrong');
    }
  };

  return (
    <div className="w-216 flex items-center justify-center">
      <div className="bg-[#DBEDF0] rounded-3xl shadow-lg p-8 w-156 mx-auto my-10">
        <h1 className="text-4xl font-bold text-[#1ab6ca] mb-2">Set Hospital Details</h1>
        <p className="text-gray-800 mb-6">Ensure all details of your hospital are correct.</p>

        <FormInput label="Hospital Name" name="name" value={form.name} onChange={handleChange} />
        <FormInput label="License ID" name="licenseid" value={form.licenseid} onChange={handleChange} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
          <FormInput label="Contact Number" name="contact" value={form.contact} onChange={handleChange} />
          <FormInput label="Pincode" name="pincode" value={form.pincode} onChange={handleChange} />
        </div>

        <FormInput label="Address" name="address" value={form.address} onChange={handleChange} />
        <FormInput label="Email ID" name="email" value={form.email} onChange={handleChange} />
        <FormInput label="Password" name="password" type="password" value={form.password} onChange={handleChange} />

        {message && <p className="text-red-500 mt-4">{message}</p>}

        <div className="flex justify-center mt-6">
          <button
            onClick={handleSubmit}
            className="bg-[#1ab6ca] hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-xl transition duration-300 ease-in-out"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default HospitalForm;
