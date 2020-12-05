import React from "react";
import { useFormContext } from "react-hook-form";

const TermFinancing = ()=> {
    const { register } = useFormContext();
    return (
        
<div className="card border-0 mb-4">
  <div className="card-header">Term Financing</div>
  <div className="card-body">
    <div className="form-group">
    <button type="submit"> add </button>
    </div>
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Enter Your Middle Name"
      />
    </div>
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Enter Your Last Name"
      />
    </div>
  </div>
</div>
    )
};

export default TermFinancing;