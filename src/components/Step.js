import React from "react";

const Step = ({
  step,
  formData,
  handleChange,
  nextStep,
  prevStep,
  handleSubmit,
}) => {
  return (
    <div style={{ width: "300px", margin: "auto", padding: "20px", border: "1px solid #ccc" }}>
      {step === 1 && (
        <>
          <h3>Customer Details</h3>
          <input
            id="first_name"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleChange}
          />
          <br /><br />
          <input
            id="last_name"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleChange}
          />
          <br /><br />
          <button onClick={nextStep}>Next</button>
        </>
      )}

      {step === 2 && (
        <>
          <h3>Car Details</h3>
          <input
            id="model"
            placeholder="Car Model"
            value={formData.model}
            onChange={handleChange}
          />
          <br /><br />
          <input
            id="car_price"
            placeholder="Car Price"
            value={formData.car_price}
            onChange={handleChange}
          />
          <br /><br />
          <button onClick={prevStep}>Previous</button>{" "}
          <button onClick={nextStep}>Next</button>
        </>
      )}

      {step === 3 && (
        <>
          <h3>Payment Details</h3>
          <input
            id="card_info"
            placeholder="Card Info"
            value={formData.card_info}
            onChange={handleChange}
          />
          <br /><br />
          <input
            id="expiry_date"
            placeholder="Expiry Date"
            value={formData.expiry_date}
            onChange={handleChange}
          />
          <br /><br />
          <button onClick={prevStep}>Previous</button>{" "}
          <button onClick={handleSubmit}>Submit</button>
        </>
      )}
    </div>
  );
};

export default Step;
