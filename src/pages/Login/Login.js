import React, { useEffect, useState } from "react";
import Logo from "../../../src/assets/images/logo.png";
import Button from "../../components/common/Button";
import { userData } from "../../data/userdata";
import { useNavigate } from "react-router";
import Input from "../../components/common/Input";
const Login = ({ setIsUserAuthenticated, isUserAuthenticated }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Function to handle form changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle login logic
  const handleLogin = () => {
    const userDetails = userData?.users[0];
    if (!formData?.username) {
      setError("Username is empty");
    }
    if (!formData?.password) {
      setError("Password is empty");
    }
    if (
      formData?.username === userDetails.username &&
      formData?.password === userDetails.password
    ) {
      localStorage.setItem("user", JSON.stringify(userDetails));
      setIsUserAuthenticated(true);
      navigate("/dashboard");
    } else {
      setError("Incorrect username or password!");
    }
  };

  return (
    <div className="flex w-screen flex-wrap text-slate-800">
      <div className="flex w-full flex-col md:w-1/2">
        <div className="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
          <img src={Logo} className="w-[300px]" alt="Logo" />

          <p className="mt-8 text-center font-medium md:text-left">
            Sign in to your account below 🔑
          </p>

          <div className="flex flex-col items-stretch pt-3 md:pt-4">
            <Input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleFormChange}
            />
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleFormChange}
              isPassword={true}
              togglePasswordVisibility={togglePasswordVisibility}
            />
            <a
              href="#"
              className="mt-2 mb-6 text-center text-[10px] font-medium text-gray-500 md:text-left"
            >
              Forgot password?
            </a>
            {error && (
              <div className="text-[12px] text-red-400 my-3">{error}</div>
            )}
            <Button onClick={handleLogin}>Sign in</Button>
          </div>
        </div>
      </div>
      <div
        className="relative hidden h-screen select-none bg-blue-600 bg-gradient-to-br md:block md:w-1/2 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/2157925/pexels-photo-2157925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
        }}
      ></div>
    </div>
  );
};

export default Login;

