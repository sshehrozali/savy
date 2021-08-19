import React from "react";
import "./css/saving.css";

const Savings = (props) => {
  return (
    <div className="container mt-2" key={props.key}>
      <div class="card">
        <div class="card-body">
          <p className="lead fs-6">
            <i class="fas fa-calendar-day"></i> 
            &nbsp;
            &nbsp;
            {props.date}
          </p>
          <p className="card-text display-1">Rs.{props.amount}</p>
        </div>
      </div>
    </div>
  );
};

export default Savings;
