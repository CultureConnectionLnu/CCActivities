// eslint-disable-next-line react/prop-types
function BoardGamesModal({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div className="modal modal-open">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">Board Games Event Details</h3>
            <p className="py-4">
              Join us every Tuesday at 18:00 for a fun evening of board games at
              F-Building (Campus). Bring your favorite game or try out a new one!
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

export default BoardGamesModal;