import Checkbox from "@/components/elements/Checkbox";

interface PasswordValidatorProps {
    password: string;
  }
  
  const PasswordValidator: React.FC<PasswordValidatorProps> = ({ password }) => {
    const isLengthValid = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[^A-Za-z0-9]/.test(password);
  
    const isPasswordValid = isLengthValid && hasUppercase && hasLowercase && hasNumber && hasSymbol;
  
    return (
      <div>
        {isPasswordValid ? (
          <div></div>
        ) : (
          <div className="rounded-md w-full text-sm border-[#FBDFDF] border-2 bg-[#FFF5F5]
          text-[#79889D] mt-6 p-4 -pb-4">
            <Checkbox className="mb-2" isChecked={isLengthValid} label="Contains at least 8 characters" />
            <Checkbox className="mb-2" isChecked={hasUppercase} label="Includes uppercase letters" />
            <Checkbox className="mb-2" isChecked={hasLowercase} label="Includes lowercase letters" />
            <Checkbox className="mb-2" isChecked={hasNumber} label="Includes numbers" />
            <Checkbox className="mb-2" isChecked={hasSymbol} label="Includes symbols" />
          </div>
        )}
      </div>
    );
  };
  
  export default PasswordValidator;