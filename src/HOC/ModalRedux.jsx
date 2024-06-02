import React from "react";
import useRedux from "../CustomHook/useRedux";
const ModalRedux = () => {
  const { dispatch, state } = useRedux();
  const { modalTitle, modalContent, onSubmitFunction } = state.modalReducer;
  return (
   <div>

  {/* Modal */}
  <div className="modal fade" id="modal-redux" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{modalTitle}</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          {modalContent}
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary" onClick={onSubmitFunction}>Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default ModalRedux;
