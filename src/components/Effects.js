import React, { useEffect, useRef, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

// Global interaction layer: scroll progress, cursor glow, spotlight cards,
// magnetic buttons and the back-to-top button.
function Effects() {
  const progressRef = useRef(null);
  const glowRef = useRef(null);
  const ringRef = useRef(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      progressRef.current.style.transform = `scaleX(${ratio})`;
      setShowTop(window.scrollY > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const glow = { ...pointer };
    const ring = { ...pointer };
    let magnet = null;
    let frame = null;

    const releaseMagnet = () => {
      if (!magnet) return;
      magnet.style.transform = "";
      magnet = null;
    };

    const loop = () => {
      glow.x += (pointer.x - glow.x) * 0.08;
      glow.y += (pointer.y - glow.y) * 0.08;
      ring.x += (pointer.x - ring.x) * 0.25;
      ring.y += (pointer.y - ring.y) * 0.25;
      glowRef.current.style.transform = `translate3d(${glow.x}px, ${glow.y}px, 0)`;
      ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;

      const settled =
        Math.abs(pointer.x - glow.x) < 0.3 && Math.abs(pointer.y - glow.y) < 0.3;
      frame = settled ? null : requestAnimationFrame(loop);
    };

    const onMove = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      const target = event.target instanceof Element ? event.target : null;
      if (!target) return;

      const card = target.closest(".spotlight");
      if (card) {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        card.style.setProperty("--my", `${event.clientY - rect.top}px`);
      }

      if (!finePointer) return;

      glowRef.current.classList.add("is-ready");
      ringRef.current.classList.add("is-ready");
      ringRef.current.classList.toggle(
        "is-hover",
        Boolean(target.closest("a, button, [role='button'], .thumb"))
      );
      if (frame === null) frame = requestAnimationFrame(loop);

      const nextMagnet = reduceMotion ? null : target.closest(".magnetic");
      if (magnet !== nextMagnet) releaseMagnet();
      if (nextMagnet) {
        magnet = nextMagnet;
        // Measure without the current offset so the pull doesn't feed back on itself.
        const previous = magnet.style.transform;
        magnet.style.transform = "";
        const rect = magnet.getBoundingClientRect();
        magnet.style.transform = previous;
        const dx = event.clientX - (rect.left + rect.width / 2);
        const dy = event.clientY - (rect.top + rect.height / 2);
        magnet.style.transform = `translate(${dx * 0.22}px, ${dy * 0.3}px)`;
      }
    };

    const onLeave = () => {
      releaseMagnet();
      glowRef.current.classList.remove("is-ready");
      ringRef.current.classList.remove("is-ready");
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" ref={progressRef} />
      <div className="cursor-glow" ref={glowRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
      <button
        type="button"
        className={`to-top ${showTop ? "is-visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <FiArrowUp />
      </button>
    </>
  );
}

export default Effects;
