import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { BACKEND_URL } from '../config.js';

// Box component for displaying profile fields
const Box = ({ label, id, value }) => (
  <div>
    <label htmlFor={id} className="block text-blue-900 text-lg font-semibold mb-2">
      {label}
    </label>
    <input
      type="text"
      id={id}
      className="w-full p-3 rounded-xl border border-[#1AB6CA] bg-white text-[#1AB6CA] placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-[#1ab6ca]"
      value={value || 'NA'}
      readOnly
    />
  </div>
);

const ProfileCard = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchProfile = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/donor/profile`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        const data = await res.json();
        if (res.ok && data && Object.keys(data).length > 0) {
          setProfile(data);
          console.log("Profile Data:", data);
        } else {
          navigate('/setprofile'); // redirect if no profile
        }
      } catch (err) {
        console.error('Error fetching profile:', err);
        navigate('/setprofile');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  if (loading) return <p className="text-center mt-10">Loading profile...</p>;

  return (
    <div className="bg-[#dbedf0] rounded-3xl shadow-lg p-8 max-w-xl w-full mx-auto my-10">
      <h1 className="text-4xl font-bold text-blue-900 mb-6 text-center">Profile</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Box label="First Name" id="firstName" value={profile.firstname} />
        <Box label="Last Name" id="lastName" value={profile.lastname} />
      </div>

      <div className="mb-6">
        <Box label="Phone Number" id="phoneNumber" value={profile.phone} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Box label="Pincode" id="pincode" value={profile.pincode} />
        <Box label="Last Donation Date" id="lastDonationDate" value={profile.lastdonationdate?.slice(0, 10)} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Box label="Gender" id="gender" value={profile.gender} />
        <Box label="Age" id="age" value={profile.age} />
        <Box label="Blood Group" id="bloodGroup" value={profile.bloodgroup} />
      </div>

      <div className="flex justify-end">
        <Link
          to='/setprofile'
          className="bg-[#1AB6CA] hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-xl mt-8 transition duration-300 ease-in-out"
        >
          Edit
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
