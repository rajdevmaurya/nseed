import React from "react";
import { useFormContext } from "react-hook-form";

const Pricing = () => {
  const { register } = useFormContext();
  return (
    <div className="card border-0 mb-4">
      <div className="card-header">Pricing</div>
      <div className="card-body">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your E-mail Address"
            ref={register}
            name="email"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Phone Number"
            ref={register}
            name="phone"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Alternate Phone Number"
            ref={register}
            name="alternate_phone"
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
