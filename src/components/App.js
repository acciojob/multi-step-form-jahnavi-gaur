import './../styles/App.css';
import React, { useState } from "react";
import Step from "./Step";

const App = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    model: "",
    car_price: "",
    card_info: "",
    expiry_date: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <Step
      step={step}
      formData={formData}
      handleChange={handleChange}
      nextStep={() => setStep(step + 1)}
      prevStep={() => setStep(step - 1)}
      handleSubmit={() => {}}
    />
  );
};

export default App;
