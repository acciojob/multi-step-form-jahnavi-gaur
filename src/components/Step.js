import React from "react";

const Step = ({
  step,
  formData,
  handleChange,
  nextStep,
  prevStep,
  handleSubmit,
}) => {
  if (step === 1) {
    return (
      <div id="step1">
        <input id="first_name" value={formData.first_name} onChange={handleChange} />
        <input id="last_name" value={formData.last_name} onChange={handleChange} />
        <button type="button" onClick={nextStep}>Next</button>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div id="step2">
        <input id="model" value={formData.model} onChange={handleChange} />
        <input id="car_price" value={formData.car_price} onChange={handleChange} />
        <button type="button" onClick={prevStep}>Previous</button>
        <button type="button" onClick={nextStep}>Next</button>
      </div>
    );
  }

  if (step === 3) {
    return (
      <div id="step3">
        <input id="card_info" value={formData.card_info} onChange={handleChange} />
        <input id="expiry_date" value={formData.expiry_date} onChange={handleChange} />
        <button type="button" onClick={prevStep}>Previous</button>
        <button type="button" onClick={handleSubmit}>Submit</button>
      </div>
    );
  }

  return null;
};

export default Step;
