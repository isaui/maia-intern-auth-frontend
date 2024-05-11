import { ReactNode } from "react";

interface TextFieldProps {
    label: string;
    type: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    children?: ReactNode;
  }
  
  const TextField: React.FC<TextFieldProps> = ({ label, type, placeholder, value, onChange, children }) => {
    return (
      <div className="mb-4">
        <label className="block text-gray-700 text-sm  mb-2">
          {label}
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {children}
      </div>
    );
  };
  
  export default TextField;
  