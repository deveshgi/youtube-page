import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import Input from "../components/Input";
import PasswordInput from "../components/PasswordInput";
import Button from "../components/Button";
import AuthCard from "../components/Card";
import { useLogin } from "../hooks/useLogin";
function Login() {
  const navigate = useNavigate();
  const { mutate, isPending } = useLogin();
  const [formData, setFormData] = useState({ email: "", password: "" });
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    mutate(formData, {
      onSuccess: () => {
        toast.success("Login successful");
        navigate("/");
      },
      onError: (error) => {
        toast.error(error.response?.data?.message || "Login failed");
      },
    });
  }
  return (
    <AuthCard title="Welcome Back" subtitle="Sign in to your account">
      {" "}
      <form className="space-y-5" onSubmit={handleSubmit}>
        {" "}
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
        <Button disabled={isPending}>
          {" "}
          {isPending ? "Logging in..." : "Login"}{" "}
        </Button>{" "}
      </form>{" "}
      <p className="text-center text-gray-500 mt-6">
        {" "}
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-600 font-medium">
          {" "}
          Sign Up{" "}
        </Link>{" "}
      </p>{" "}
    </AuthCard>
  );
}
export default Login;
