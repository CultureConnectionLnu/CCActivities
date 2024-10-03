// eslint-disable-next-line react/prop-types
function CraftsModal({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div className="modal modal-open">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">Crafts Event Details</h3>
            <p className="py-4">
              Join us every Friday at 18:00 for a creative crafts session at
              B-Building (Campus). Materials are provided, and all are welcome!
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

export default CraftsModal;