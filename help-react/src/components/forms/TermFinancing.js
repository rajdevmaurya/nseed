import React from "react";
import { useFormContext } from "react-hook-form";

const TermFinancing = ()=> {
    const { register } = useFormContext();
    return (
        
<div className="card border-0 mb-4">
  <div className="card-header">Term Financing</div>
  <div className="card-body">
  <div className="form-group">
    <label for="state">Hello Registartion</label>
    </div>
    <div className="form-group">
         <button className="btn btn-primary mr-2"> add </button>
         <button className="btn btn-primary mr-2"> save </button>
         <button className="btn btn-primary mr-2"> cancel </button>
    </div>
    
    <div className="form-group">
    <label for="state">Select</label>
      <select class="form-control" id="state">
       <option value="">Select Your State</option>
       <option value="Maharastra">Maharastra</option>
       <option value="Delhi">Delhi</option>
     </select>
    </div>
  </div>
</div>
    )
};

export default TermFinancing;