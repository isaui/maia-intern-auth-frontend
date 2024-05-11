import React from 'react';

interface CheckboxProps {
  isChecked: boolean;
  label: string;
  onClick?: () => void;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ isChecked, label, onClick, className }) => {
  return (
    <div className={`${className ? className : ''} flex items-center`} onClick={onClick}>
      <div className={`w-4 h-4 border border-gray-300 rounded-full mr-2 flex items-center justify-center ${isChecked ? 'bg-green-500 border-green-500' : 'bg-white'}`}>
        {isChecked && (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white pointer-events-none" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 3.293a1 1 0 010 1.414L8.707 14.414a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )}
      </div>
      <label className="text-[#79889D]">{label}</label>
    </div>
  );
};

export default Checkbox;
