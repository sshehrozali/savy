import React from "react";

const Modal = (props) => {
  return (
    <div>
      <div class="modal fade" id="SuccessModal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Success ✔</h5>
            </div>
            <div class="modal-body">
              <p>You Saved Rs.{props.saved} today!</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                id="modal-close-btn"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
