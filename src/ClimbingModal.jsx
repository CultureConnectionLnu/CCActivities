import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
function ClimbingModal({ isOpen, onClose }) {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isOpen) return;

    fetch(`${import.meta.env.VITE_API_URL}/assets/climbing-pictures`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const shuffledImages = shuffleArray(data);
        setImages(shuffledImages);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
        setError("Failed to load images. Please try again later.");
      });
  }, [isOpen]);

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const totalSlides = images.length;

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  // Preload next image
  useEffect(() => {
    if (images[currentIndex + 1]) {
      const img = new Image();
      img.src = images[currentIndex + 1].url;
    }
  }, [currentIndex, images]);

  return (
    <>
      {isOpen && (
        <div className="modal modal-open" onClick={onClose}>
          <div
            className="modal-box w-11/12"
            onClick={(e) => e.stopPropagation()}
          >
            {error && <div className="alert alert-error">{error}</div>}

            {/* Carousel */}
            <div className="carousel w-full p-2">
              {images.length > 0 && (
                <div
                  className="carousel-item relative w-full p-4 flex justify-center items-center"
                  style={{ height: "400px" }}
                >
                  <img
                    src={images[currentIndex].url}
                    alt={`Slide ${currentIndex + 1}`}
                    loading="lazy"
                    className={`rounded-box object-contain ${
                      images[currentIndex].orientation === "vertical"
                        ? "h-full"
                        : "w-full"
                    }`}
                    style={{ maxHeight: "100%", maxWidth: "100%" }}
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <button
                      onClick={goToPrevSlide}
                      className="btn btn-circle"
                    >
                      ❮
                    </button>
                    <button
                      onClick={goToNextSlide}
                      className="btn btn-circle"
                    >
                      ❯
                    </button>
                  </div>
                </div>
              )}
              {images.length === 0 && !error && (
                <div>Loading images...</div>
              )}
            </div>

            {/* Event Details */}
            <div className="mt-6">
              <h3 className="font-bold text-2xl mb-4">Climbing Event Details</h3>
              <p className="mb-4">
                Join us every <strong>Monday</strong> for our climbing event! If you arrive
                early or late, please go to the counter, and the staff will guide you to the
                waiting area.
              </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Big thanks to <strong>Idrottshuset</strong> for their partnership! We&apos;re
                    excited to offer a <strong>50% discount</strong> on entry fees.
                  </li>
                  <li>
                    We&apos;ll provide all the gear, so just bring yourself! 😊 Whether you&apos;re new
                    or experienced in climbing.
                  </li>
                  <li>
                    Grab a towel if you&apos;d like to enjoy Idrottshuset&apos;s sauna!
                  </li>
                </ul>
              </div>
            <div className="flex mb-4 justify-center">
              <button onClick={onClose} className="sm:w-96 mx-auto mt-6 text-center p-4 text-black text-xl font-bold rounded py-3 border-2 bg-gray-700 border-black shadow-sm shadow-black hover:shadow-none transition-all hover:translate-x-1 translate-y-1">
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