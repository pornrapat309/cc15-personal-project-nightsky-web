import { useState } from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { FiMail, FiUser, FiEye, FiEyeOff } from "react-icons/fi";
import AuthInput from "./AuthInput";
import AuthButton from "./AuthButton";
import InputErrorMessage from "./InputErrorMessage";
import { useAuth } from "../../hooks/use-auth";
import RegisterFormContent from "./RegisterFormContent";
import { registerSchema } from "../../validators/auth-validator";

const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, { abortEarly: false });
  if (error) {
    const result = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
      return acc;
    }, {});
    return result;
  }
};

export default function RegisterForm() {
  const [input, setInput] = useState({
    fullName: "",
    username: "",
    emailOrMobile: "",
    password: "",
    confirmPassword: "",
  });

  const { register } = useAuth();
  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const validationError = validateRegister(input);
    if (validationError) {
      return setError(validationError);
    }
    setError({});
    register(input).catch((err) => {
      console.log(err);
      if (err.response.data.emailOrMobileExist) {
        setError({
          emailOrMobile: err.response.data.message,
        });
      } else if (err.response.data.usernameExist) {
        setError({
          username: err.response.data.message,
        });
      }
    });
  };

  return (
    <form className="grid gap-3 w-96 text-white" onSubmit={handleSubmitForm}>
      <RegisterFormContent />
      <AuthInput
        type="text"
        placeholder="Mobile Number or Email"
        value={input.emailOrMobile}
        onChange={handleChangeInput}
        name="emailOrMobile"
        icon={<FiMail />}
        hasError={error.emailOrMobile}
      />
      {error.emailOrMobile && (
        <InputErrorMessage message={error.emailOrMobile} />
      )}

      <AuthInput
        type="text"
        placeholder="Full Name"
        value={input.fullName}
        onChange={handleChangeInput}
        name="fullName"
        icon={<FiUser />}
        hasError={error.fullName}
      />
      {error.fullName && <InputErrorMessage message={error.fullName} />}

      <AuthInput
        type="text"
        placeholder="Username"
        value={input.username}
        onChange={handleChangeInput}
        name="username"
        icon={<FiUser />}
        hasError={error.username}
      />
      {error.username && <InputErrorMessage message={error.username} />}

      <AuthInput
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        value={input.password}
        onChange={handleChangeInput}
        name="password"
        icon={<RiLockPasswordLine />}
        hasError={error.password}
        iconPassword={
          showPassword ? (
            <FiEye onClick={toggleShowPassword} />
          ) : (
            <FiEyeOff onClick={toggleShowPassword} />
          )
        }
      />
      {error.password && <InputErrorMessage message={error.password} />}

      <AuthInput
        type={showConfirmPassword ? "text" : "password"}
        placeholder="Confirm password"
        value={input.confirmPassword}
        onChange={handleChangeInput}
        name="confirmPassword"
        icon={<RiLockPasswordLine />}
        hasError={error.confirmPassword}
        iconPassword={
          showConfirmPassword ? (
            <FiEye onClick={toggleShowConfirmPassword} />
          ) : (
            <FiEyeOff onClick={toggleShowConfirmPassword} />
          )
        }
      />
      {error.confirmPassword && (
        <InputErrorMessage message={error.confirmPassword} />
      )}

      <AuthButton title="Register" />
    </form>
  );
}
