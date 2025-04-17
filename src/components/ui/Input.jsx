function Input({ id, name, type = 'text', placeholder, disabled = false, className = '', ...props }) {
  return (
    <input
      id={id || name}
      name={name}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      className={`w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${className}`}
      {...props}
    />
  );
}

export default Input;
