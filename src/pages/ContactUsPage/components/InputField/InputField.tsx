type InputFieldProps = {
  label: string;
  required: boolean;
  size: string;
  type: string;
  placeholder?: string;
};

const InputField = ({ label, required, size, type, placeholder }: InputFieldProps) => {
  return (
    <div className="md:my-2">
      <label htmlFor={label} className="block text-breatheColor md:my-2 my-4">
        {label} {required ? <span style={{ color: '#790000' }}>*</span> : ''}
      </label>
      <input
        type={type}
        name={label}
        id={label}
        required={required}
        placeholder={placeholder}
        className={`block rounded p-2 h-[35px] font-light text-medium ${size === 'medium' ? 'md:w-[300px] w-[400px]' : 'md:w-[300px] w-[816px]'}`}
        style={{ border: '2px solid #B8A6C1' }}
      />
    </div>
  );
};

export default InputField;
