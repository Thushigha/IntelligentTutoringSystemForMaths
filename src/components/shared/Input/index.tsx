interface IInputProps {
  placeholder?: string;
  name?: string;
  id?: string;
  type?: string;
  labelText?: string;
  bg?: string;
  boderBg?: string;
  phBg?: string;
  onChange?: any;
  value?: any;
}

export const Input: React.FC<IInputProps> = ({
  placeholder,
  name,
  id,
  type = "text",
  bg = "bg-white/30",
  boderBg = "border-gray-500",
  phBg = "placeholder:text-gray-500",
  onChange,
  value,
  labelText,
}) => {
  return (
    <div className="flex flex-col items-start gap-1 w-full">
      <label
        htmlFor={name}
        className={`text-p2 font-axiformaMedium tracking-wider ${labelText}`}
      >
        {name}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        name={name}
        placeholder={placeholder}
        className={`w-full border ${boderBg} ${bg} p-2 border-opacity-50 rounded-md ${phBg} placeholder:text-p3 placeholder:text-gray-500 bg-clip-padding backdrop-filter backdrop-blur-[50%] bg-opacity-10 text-[12px]`}
        required
        onChange={onChange}
      />
    </div>
  );
};
