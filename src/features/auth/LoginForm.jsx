import { useState } from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { FiEye, FiEyeOff, FiMail } from "react-icons/fi";
import AuthInput from "./AuthInput";
import AuthButton from "./AuthButton";
import InputErrorMessage from "./InputErrorMessage";
import { useAuth } from "../../hooks/use-auth";
import LoginFormContent from "./LoginFormContent";
import { loginSchema } from "../../validators/auth-validator";

const validateLogin = (input) => {
  const { error } = loginSchema.validate(input, { abortEarly: false });
  if (error) {
    const result = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
      return acc;
    }, {});
    return result;
  }
};

export default function LoginForm() {
  const [input, setInput] = useState({
    emailOrMobileOrUsername: "",
    password: "",
  });

  const [error, setError] = useState({});
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const validationError = validateLogin(input);
    if (validationError) {
      return setError(validationError);
    }
    setError({});
    login(input).catch((err) => {
      console.log(err);
      if (err.response.data) {
        setError({
          emailOrMobileOrUsername: err.response.data.message,
          password: err.response.data.message,
        });
      }
    });
  };

  return (
    <form className="grid gap-7 w-96 text-white" onSubmit={handleSubmitForm}>
      <LoginFormContent />
      <AuthInput
        placeholder="Enter your mobile number username or email"
        value={input.emailOrMobileOrUsername}
        onChange={(e) =>
          setInput({ ...input, emailOrMobileOrUsername: e.target.value })
        }
        name="emailOrMobileOrUsername"
        icon={<FiMail />}
        hasError={error.emailOrMobileOrUsername}
      />
      {error.emailOrMobileOrUsername && (
        <InputErrorMessage message={error.emailOrMobileOrUsername} />
      )}
      <AuthInput
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        value={input.password}
        onChange={(e) => setInput({ ...input, password: e.target.value })}
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
      <AuthButton title="Login" />
    </form>
  );
}
