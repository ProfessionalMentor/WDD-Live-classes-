import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [serverError, setServerError] = useState(null);
  const password = watch("password");

  const onSubmit = (data) => {
    setServerError(null); // Clear previous errors
    axios.post('http://localhost:4000/register', data)
      .then(response => {
        console.log('Registration successful:', response.data);
        alert('Registration successful!');
        // Optionally, you can reset the form or redirect the user
        // reset(); 
      })
      .catch(error => {
        if (error.response && error.response.status === 409) {
          setServerError("This email is already registered.");
        } else {
          setServerError("An unexpected error occurred. Please try again.");
          console.error("Registration error:", error);
        }
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Register
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="fullName"
              className="text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              {...register("fullName", {
                required: "Full Name is required",
                maxLength: {
                  value: 20,
                  message: "Full Name cannot exceed 20 characters",
                },
              })}
              className={`w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.fullName && (
              <span className="text-sm text-red-600">
                {errors.fullName.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className={`w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <span className="text-sm text-red-600">
                {errors.email.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              className={`w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <span className="text-sm text-red-600">
                {errors.password.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "The passwords do not match",
              })}
              className={`w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.confirmPassword && (
              <span className="text-sm text-red-600">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          {serverError && (
            <p className="text-sm text-red-600 text-center">{serverError}</p>
          )}
          
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;