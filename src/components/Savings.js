import React from "react";

const Savings = (props) => {
  return (
    <div className="container mt-2" key={props.key}>
      <div class="card">
        <div class="card-body">
          <p className="lead text-muted fs-6">{ props.date }</p>
          <p className="card-text fs-1">Rs.{props.amount}</p>
        </div>
      </div>
    </div>
  );
};

export default Savings;
