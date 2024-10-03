// eslint-disable-next-line react/prop-types
function CraftsModal({ isOpen, onClose }) {
  const images = [
    {
      url: 'https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp',
      orientation: 'horizontal',
    },
    {
      url: 'https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp',
      orientation: 'vertical',
    },
    {
      url: 'https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp',
      orientation: 'horizontal',
    },
    {
      url: 'https://www.mathopenref.com/images/lines/horizontal.png',
      orientation: 'horizontal',
    },
    {
      url: 'https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp',
      orientation: 'vertical',
    },
    {
      url: 'https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp',
      orientation: 'horizontal',
    },
    {
      url: 'https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp',
      orientation: 'vertical',
    },
  ];

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