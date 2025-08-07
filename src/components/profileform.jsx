import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from './forminput.jsx';
import SelectInput from './selectinput.jsx';
import { BACKEND_URL } from '../config.js';

const Profileform = () => {
  const navigate = useNavigate();

  // Form state
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    pincode: '',
    lastdonationdate: '',
    gender: 'male',
    age: '',
    bloodgroup: 'b+',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert("Not authenticated");
      return;
    }

    try {
      const res = await fetch(`${BACKEND_URL}/donor/createprofile`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Profile saved successfully!");
        navigate('/donordashboard');
      } else {
        alert(data.message || "Error saving profile");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong");
    }
  };

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
  ];

  const bloodGroupOptions = [
    { value: 'a+', label: 'A+' },
    { value: 'b+', label: 'B+' },
    { value: 'ab+', label: 'AB+' },
    { value: 'o+', label: 'O+' },
    { value: 'a-', label: 'A-' },
    { value: 'b-', label: 'B-' },
    { value: 'ab-', label: 'AB-' },
    { value: 'o-', label: 'O-' },
  ];

  return (
    <div className="w-1/2 p-10 bg-[#DBEDF0] rounded-l-3xl shadow-lg border-l border-gray-200 m-6">
      <h2 className="text-3xl font-bold text-gray-800">Set profile</h2>
      <p className="mt-2 text-gray-600 mb-6">Your profile needs to be complete before you can start donating</p>
      
      <div className="grid grid-cols-2 gap-6">
        <FormInput label="First Name" placeholder="First Name" name="firstname" value={form.firstname} onChange={handleChange} />
        <FormInput label="Last Name" placeholder="Last Name" name="lastname" value={form.lastname} onChange={handleChange} />
        <div className="col-span-2">
          <FormInput label="Phone Number" placeholder="Phone Number" type="tel" name="phone" value={form.phone} onChange={handleChange} />
        </div>
        <FormInput label="Pincode" placeholder="Pincode" name="pincode" value={form.pincode} onChange={handleChange} />
        <FormInput label="Last donation date" placeholder="Last donation date" type="date" name="lastdonationdate" value={form.lastdonationdate} onChange={handleChange} />
        
        <SelectInput label="Gender" name="gender" options={genderOptions} value={form.gender} onChange={handleChange} />
        <FormInput label="Age" placeholder="Age" type="number" name="age" value={form.age} onChange={handleChange} />
        <SelectInput label="Blood Group" name="bloodgroup" options={bloodGroupOptions} value={form.bloodgroup} onChange={handleChange} />
      </div>
      
      <button
        onClick={handleSubmit}
        className="mt-8 w-full bg-[#1AB6CA] text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Continue
      </button>
    </div>
  );
};

export default Profileform;
