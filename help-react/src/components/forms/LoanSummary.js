import React from "react";
import { useFormContext } from "react-hook-form";

const LoanSummary = () => {
  const { register } = useFormContext();
  return (
    <div className="card border-0 mb-4">
      <div className="card-header">Basic Form</div>
      <div className="card-body">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your First Name"
            ref={register}
            name="firstName"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Middle Name"
            ref={register}
            name="middleName"
          />
        </div>
        <div className="form-group">
          <label for="state">Select</label>
          <select class="form-control" id="state">
            <option value="">Select</option>
            <option value="Maharastra">Maharastra</option>
            <option value="Delhi">Delhi</option>
          </select>
        </div>
        
<div className="form-group">
<select id="chkveg" multiple="multiple">
      <option value="cheese">Cheese</option>
      <option value="tomatoes">Tomatoes</option>
      <option value="mozarella">Mozzarella</option>
    </select>
</div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Last Name"
            ref={register}
            name="lastName"
          />
        </div>
      </div>
    </div>
  );
};

export default LoanSummary;

