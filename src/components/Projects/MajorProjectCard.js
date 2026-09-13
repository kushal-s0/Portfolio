import React, { useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FiArrowUpRight, FiLayers, FiMaximize2, FiPlayCircle } from "react-icons/fi";
import Reveal from "../Reveal";
import Lightbox from "./Lightbox";

const SLIDE_MS = 5000;

function Placeholder({ title, tags }) {
  return (
    <div className="placeholder">
      <div className="placeholder__grid" />
      <div className="placeholder__icon">
        <FiLayers />
      </div>
      <h4 className="placeholder__title">{title}</h4>
      <div className="placeholder__tags">
        {tags.slice(0, 3).map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

function MajorProjectCard({
  index,
  total,
  title,
  tagline,
  description,
  tags = [],
  images = [],
  ghLink,
  demoLink,
  demoVideo,
}) {
  const imageCount = images.length;
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(null);

  // `active` is a dependency so picking a thumbnail restarts the timer.
  useEffect(() => {
    if (imageCount <= 1 || lightbox !== null) return undefined;
    const timer = setTimeout(() => setActive((prev) => (prev + 1) % imageCount), SLIDE_MS);
    return () => clearTimeout(timer);
  }, [imageCount, lightbox, active]);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <Reveal as="article" className={`major-card ${index % 2 ? "major-card--reverse" : ""}`}>
      <div className="major-card__media">
        <div className="browser spotlight">
          <div className="browser__bar">
            <span />
            <span />
            <span />
            <div className="browser__url">{title.toLowerCase().replace(/\s+/g, "-")}.app</div>
          </div>

          {imageCount === 0 ? (
            <Placeholder title={title} tags={tags} />
          ) : (
            <>
              <button
                type="button"
                className="browser__screen"
                onClick={() => setLightbox(active)}
                aria-label={`Open ${title} screenshots`}
              >
                {images.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`${title} screenshot ${i + 1}`}
                    className={i === active ? "is-active" : ""}
                    loading="lazy"
                  />
                ))}
                <span className="browser__zoom">
                  <FiMaximize2 /> View
                </span>
              </button>

              {imageCount > 1 && (
                <div className="browser__thumbs">
                  {images.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      className={`thumb ${i === active ? "is-active" : ""}`}
                      onClick={() => setActive(i)}
                      aria-label={`Show screenshot ${i + 1}`}
                    >
                      <img src={src} alt="" loading="lazy" />
                      {i === active && lightbox === null && (
                        <span className="thumb__progress" key={active} />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <div className="major-card__body">
        <span className="major-card__index">
          {pad(index + 1)} <span>/ {pad(total)}</span>
        </span>
        <h3 className="major-card__title">{title}</h3>
        {tagline && <p className="major-card__tagline">{tagline}</p>}
        <p className="major-card__desc">{description}</p>

        <ul className="tags">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className="major-card__links">
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--sm magnetic">
              Live demo <FiArrowUpRight className="btn__arrow" />
            </a>
          )}
          {demoVideo && (
            <a
              href={demoVideo}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn--sm magnetic ${demoLink ? "btn--ghost" : "btn--primary"}`}
            >
              <FiPlayCircle /> Video demo
            </a>
          )}
          {ghLink && (
            <a href={ghLink} target="_blank" rel="noopener noreferrer" className="btn btn--ghost btn--sm magnetic">
              <BsGithub /> Source code
            </a>
          )}
        </div>
      </div>

      {lightbox !== null && (
        <Lightbox
          images={images}
          index={lightbox}
          title={title}
          onChange={setLightbox}
          onClose={() => {
            setActive(lightbox);
            setLightbox(null);
          }}
        />
      )}
    </Reveal>
  );
}

export default MajorProjectCard;
