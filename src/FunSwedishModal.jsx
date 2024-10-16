import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
function FunSwedishModal({ isOpen, onClose }) {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isOpen) return;

    fetch(`${import.meta.env.VITE_API_URL}/assets/swedish-fun-pictures`)
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

              {/* Swedish Language Immersion Event */}
              <div className="mt-6">
                <h3 className="font-bold text-2xl mb-4">Swedish Language Immersion</h3>
                <p className="mb-4">
                  Join us for a fun and immersive experience to improve your Swedish naturally, just like children do! We provide an environment where Swedish is spoken in an engaging and understandable way, helping you acquire the language effortlessly.
                </p>
                <p className="mb-4">
                  No prior study is necessary—simply show up, relax, and enjoy the sessions. We&apos;ll do the talking; all you need to do is listen and have fun. Sessions are filmed and uploaded to YouTube for you to revisit anytime, enhancing your learning through repetition.
                </p>
                <p className="mb-4">
                  Everyone is welcome, regardless of age or experience. Embrace the opportunity to grow your Swedish language skills naturally!
                </p>
              </div>
              <div className="flex mb-4 justify-center">
              <button onClick={onClose} className="`sm:w-96 mx-auto mt-6 text-center p-4 text-black rounded py-3 border-2 bg-red-300 border-black shadow-custom hover:shadow-none transition-all hover:translate-x-1 translate-y-1`">
                More Information!
              </button>
              </div>
            <div className="flex mb-4 justify-center">
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