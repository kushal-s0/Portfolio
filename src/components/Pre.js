import React, { useEffect, useState } from "react";

function Pre({ load }) {
  const [progress, setProgress] = useState(0);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const ratio = Math.min((now - start) / 1300, 1);
      setProgress(Math.round((1 - Math.pow(1 - ratio, 3)) * 100));
      if (ratio < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (load) return undefined;
    const timer = setTimeout(() => setRemoved(true), 1100);
    return () => clearTimeout(timer);
  }, [load]);

  if (removed) return null;

  return (
    <div className={`preloader ${load ? "" : "preloader--done"}`} aria-hidden="true">
      <div className="preloader__inner">
        <div className="preloader__logo">
          <span>K</span>
          <span>S</span>
        </div>
        <div className="preloader__bar">
          <span style={{ transform: `scaleX(${progress / 100})` }} />
        </div>
        <div className="preloader__meta">
          <span>Loading portfolio</span>
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
}

export default Pre;
