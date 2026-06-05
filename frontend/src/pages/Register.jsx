import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Input from "../components/Input";
import PasswordInput from "../components/PasswordInput";
import Button from "../components/Button";
import AuthCard from "../components/Card";
import { useRegister } from "../hooks/useRegister";
function Register() {
  const navigate = useNavigate();
  const { mutate, isPending } = useRegister();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    mutate(
      {
        fullName: `${formData.firstName} ${formData.lastName}`,
        username: formData.username,
        email: formData.email,
        password: formData.password,
      },
      {
        onSuccess: () => {
          toast.success("Registration successful");
          navigate("/");
        },
        onError: (error) => {
          toast.error(error.response?.data?.message || "Registration failed");
        },
      },
    );
  }
  return (
    <AuthCard title="Create Account" subtitle="Register to continue">
      {" "}
      <form className="space-y-5" onSubmit={handleSubmit}>
        {" "}
        <Input
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />{" "}
        <Input
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />{" "}
        <Input
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />{" "}
        <Input
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />{" "}
        <PasswordInput
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />{" "}
        <PasswordInput
          label="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />{" "}
        <Button disabled={isPending}>
          {" "}
          {isPending ? "Registering..." : "Register"}{" "}
        </Button>{" "}
      </form>{" "}
      <p className="text-center text-gray-500 mt-6">
        {" "}
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 font-medium">
          {" "}
          Login{" "}
        </Link>{" "}
      </p>{" "}
    </AuthCard>
  );
}
export default Register;
