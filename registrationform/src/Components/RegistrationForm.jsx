import React, { useState } from "react";

import LabelInput from "./LableInput";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.username) {
      newErrors.username = "Username is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Submit form data to the server or perform desired action
      console.log("Form data submitted:", formData);
      alert("data is submitted");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <LabelInput
        label={"Username"}
        type={"text"}
        name={"username"}
        value={formData.username}
        onChange={handleChange}
        error={errors.username}
      />

      <LabelInput
        label={"Email"}
        type={"email"}
        name={"email"}
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />

      <LabelInput
        label={"Password"}
        type={"password"}
        name={"password"}
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
      />

      <LabelInput
        label={"Confirm Password"}
        type={"password"}
        name={"confirmPassword"}
        value={formData.confirmPassword}
        onChange={handleChange}
        error={errors.confirmPassword}
      />

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
