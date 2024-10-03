// eslint-disable-next-line react/prop-types
function ClimbingModal({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div className="modal modal-open">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">Climbing Event Details</h3>
            <p className="py-4">
              Join us every Monday at 17:30 for an exciting climbing session at
              Bollgatan 1 (Town). All skill levels are welcome!
            </p>
            <div className="modal-action">
              <button onClick={onClose} className="btn">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ClimbingModal;