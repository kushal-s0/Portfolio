import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

function Lightbox({ images, index, title, captions = [], onClose, onChange }) {
  const count = images.length;
  const prev = () => onChange((index - 1 + count) % count);
  const next = () => onChange((index + 1) % count);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onChange((index + 1) % count);
      if (event.key === "ArrowLeft") onChange((index - 1 + count) % count);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, count, onClose, onChange]);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  const stop = (handler) => (event) => {
    event.stopPropagation();
    handler();
  };

  // Portal to <body> so transformed ancestors can't trap the fixed overlay.
  return ReactDOM.createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${title} screenshots`} onClick={onClose}>
      <button type="button" className="lightbox__btn lightbox__close" onClick={stop(onClose)} aria-label="Close">
        <FiX />
      </button>

      <figure className="lightbox__figure" onClick={(event) => event.stopPropagation()}>
        <img key={images[index]} src={images[index]} alt={captions[index] || `${title} screenshot ${index + 1}`} />
        <figcaption>
          {captions[index] || title}
          <span>
            {index + 1} / {count}
          </span>
        </figcaption>
      </figure>

      {count > 1 && (
        <>
          <button type="button" className="lightbox__btn lightbox__nav lightbox__nav--prev" onClick={stop(prev)} aria-label="Previous screenshot">
            <FiChevronLeft />
          </button>
          <button type="button" className="lightbox__btn lightbox__nav lightbox__nav--next" onClick={stop(next)} aria-label="Next screenshot">
            <FiChevronRight />
          </button>
        </>
      )}
    </div>,
    document.body
  );
}

export default Lightbox;
