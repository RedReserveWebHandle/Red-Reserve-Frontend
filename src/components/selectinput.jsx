const SelectInput = ({ label, name, value, onChange, options, defaultValue }) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-semibold text-gray-700 mb-1 text-left">{label}</label>
      <select
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        className="px-4 py-2 border border-gray-300 rounded-lg bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
