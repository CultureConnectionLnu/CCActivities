// eslint-disable-next-line react/prop-types
function FunSwedishModal({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div className="modal modal-open">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">Fun Swedish Event Details</h3>
            <p className="py-4">
              Join us every Thursday at 20:00 for an engaging session of learning
              Swedish in a fun way at F-Building (Campus). All levels are welcome!
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

export default FunSwedishModal;