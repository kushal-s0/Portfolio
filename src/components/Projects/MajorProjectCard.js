import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiAward, FiMaximize2 } from "react-icons/fi";
import Reveal from "../Reveal";
import Placeholder from "./Placeholder";
import ProjectLinks from "./ProjectLinks";

const SLIDE_MS = 5000;

function MajorProjectCard({
  index,
  total,
  slug,
  title,
  tagline,
  description,
  award,
  tags = [],
  images = [],
  ghLink,
  demoLink,
  demoVideo,
}) {
  const imageCount = images.length;
  const [active, setActive] = useState(0);
  const detailPath = `/project/${slug}`;

  // `active` is a dependency so picking a thumbnail restarts the timer.
  useEffect(() => {
    if (imageCount <= 1) return undefined;
    const timer = setTimeout(() => setActive((prev) => (prev + 1) % imageCount), SLIDE_MS);
    return () => clearTimeout(timer);
  }, [imageCount, active]);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <Reveal as="article" className={`major-card ${index % 2 ? "major-card--reverse" : ""}`}>
      <div className="major-card__media">
        <div className="browser spotlight">
          <div className="browser__bar">
            <span />
            <span />
            <span />
            <div className="browser__url">{slug}.app</div>
          </div>

          <Link to={detailPath} className="browser__screen" aria-label={`Open the ${title} case study`}>
            {imageCount === 0 ? (
              <Placeholder title={title} tags={tags} />
            ) : (
              images.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`${title} screenshot ${i + 1}`}
                  className={i === active ? "is-active" : ""}
                  loading="lazy"
                />
              ))
            )}
            <span className="browser__zoom">
              <FiMaximize2 /> Case study
            </span>
          </Link>

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
                  {i === active && <span className="thumb__progress" key={active} />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="major-card__body">
        <span className="major-card__index">
          {pad(index + 1)} <span>/ {pad(total)}</span>
        </span>
        <h3 className="major-card__title">
          <Link to={detailPath}>{title}</Link>
        </h3>
        {tagline && <p className="major-card__tagline">{tagline}</p>}
        {award && (
          <span className="award">
            <FiAward /> {award}
          </span>
        )}
        <p className="major-card__desc">{description}</p>

        <ul className="tags">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className="major-card__links">
          <Link to={detailPath} className="btn btn--primary btn--sm magnetic">
            View case study <FiArrowRight className="btn__arrow" />
          </Link>
          <ProjectLinks demoLink={demoLink} demoVideo={demoVideo} ghLink={ghLink} primaryTaken />
        </div>
      </div>
    </Reveal>
  );
}

export default MajorProjectCard;
