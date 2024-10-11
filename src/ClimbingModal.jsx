import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
function ClimbingModal({ isOpen, onClose }) {
  const [images, setLinks] = useState([]);

    useEffect(() => {
      fetch(`${import.meta.env.VITE_API_URL}/climbing-pictures`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setLinks(data);
        })
        .catch((error) => console.error("Error fetching links:", error));
    }, []);

  const totalSlides = images.length;

  return (
    <>
      {isOpen && (
        <div className="modal modal-open" onClick={onClose}>
          <div
            className="modal-box w-11/12"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Carousel with Arrow Navigation */}
            <div className="carousel w-full p-2">
              {images.map((imageObj, index) => {
                const { url, orientation } = imageObj;
                const prevIndex = (index - 1 + totalSlides) % totalSlides;
                const nextIndex = (index + 1) % totalSlides;
                return (
                  <div
                    key={index}
                    id={`slide${index}`}
                    className="carousel-item relative w-full p-4 flex justify-center items-center"
                    style={{ height: '400px' }}
                  >
                    <img
                      src={url}
                      alt={`Slide ${index + 1}`}
                      className={`rounded-box object-contain ${
                        orientation === 'vertical' ? 'h-full' : 'w-full'
                      }`}
                      style={{ maxHeight: '100%', maxWidth: '100%' }}
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href={`#slide${prevIndex}`} className="btn btn-circle">
                        ❮
                      </a>
                      <a href={`#slide${nextIndex}`} className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Event Details */}
            <h3 className="font-bold text-lg mt-4">Climbing Event Details</h3>
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