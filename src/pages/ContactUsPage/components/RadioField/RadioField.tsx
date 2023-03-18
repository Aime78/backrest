type RadioFieldProps = {
  label: string;
  name: string;
};

const RadioField = ({ label, name }: RadioFieldProps) => {
  return (
    <div className="my-2">
      <input type="radio" name={name} id={label} />
      <label htmlFor={label} className="text-breatheColor ml-2">
        {label}
      </label>
    </div>
  );
};

export default RadioField;
