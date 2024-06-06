import React, { useState } from "react";

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    feedback: "",
    satisfaction: "3",
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
    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (!Number.isInteger(parseInt(formData.age))) {
      newErrors.age = "Age must be a number";
    }
    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }
    if (!formData.feedback) {
      newErrors.feedback = "Feedback is required";
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
      alert("form is submitted");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>Age</label>
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        {errors.age && <span>{errors.age}</span>}
      </div>
      <div>
        <label>Gender</label>
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <span>{errors.gender}</span>}
      </div>
      <div>
        <label>Feedback</label>
        <textarea
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
        />
        {errors.feedback && <span>{errors.feedback}</span>}
      </div>
      <div>
        <label>Satisfaction Level</label>
        <input
          type="range"
          name="satisfaction"
          min="1"
          max="5"
          value={formData.satisfaction}
          onChange={handleChange}
        />
        <span>{formData.satisfaction}</span>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SurveyForm;
