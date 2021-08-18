import React from "react";

const Savings = (props) => {
  return (
    <div className="container">
      <div class="card mt-5">
        <div class="card-body fs-3">{props.amount}</div>
      </div>
    </div>
  );
};

export default Savings;
