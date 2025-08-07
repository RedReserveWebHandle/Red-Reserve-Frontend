import FormInput from './forminput.jsx'
import SelectInput from './selectinput.jsx'

const Profileform = () => {
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
    <>
    <div className="w-1/2 p-10 bg-[#DBEDF0] rounded-l-3xl shadow-lg border-l border-gray-200 m-6">
      <h2 className="text-3xl font-bold text-gray-800">Set profile</h2>
      <p className="mt-2 text-gray-600 mb-6">Your profile needs to be complete before you can start donating</p>
      
      <div className="grid grid-cols-2 gap-6">
        <FormInput label="First Name" placeholder="First Name" />
        <FormInput label="Last Name" placeholder="Last Name" />
        <div className="col-span-2">
          <FormInput label="Phone Number" placeholder="Phone Number" type="tel" />
        </div>
        <FormInput label="Pincode" placeholder="Pincode" />
        <FormInput label="Last donation date" placeholder="Last donation date" type="date" />
        
        <SelectInput label="Gender" options={genderOptions} defaultValue="male" />
        <FormInput label="Age" placeholder="Age" type="number" />
        <SelectInput label="Blood Group" options={bloodGroupOptions} defaultValue="b+" />
      </div>
      
      <button className="mt-8 w-full bg-[#1AB6CA] text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors">
        Continue
      </button>
    </div>
    </>
  )
}

export default Profileform