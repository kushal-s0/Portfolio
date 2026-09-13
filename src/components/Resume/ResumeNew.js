import React, { useEffect, useRef, useState } from "react";
import { FiDownload, FiExternalLink } from "react-icons/fi";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { resume } from "../../data/profile";
import Reveal from "../Reveal";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Loader() {
  return (
    <div className="loader">
      <span className="loader__spinner" />
      Loading resume…
    </div>
  );
}

function ResumeNew() {
  const paperRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const node = paperRef.current;
    const update = () => setWidth(node.clientWidth);
    update();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", update);
      return () => window.removeEventListener("resize", update);
    }
    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="page-hero page-hero--center">
        <div className="container">
          <span className="eyebrow anim anim--fade">Résumé</span>
          <h1 className="page-title anim anim--fade" style={{ "--d": "100ms" }}>
            My <span className="gradient-text">resume</span>
          </h1>
          <p className="page-lead anim anim--fade" style={{ "--d": "220ms" }}>
            A snapshot of my education, projects and skills. Grab a copy or read it right here.
          </p>
          <div className="resume-actions anim anim--fade" style={{ "--d": "340ms" }}>
            <a href={resume} download="Kushal_Soni_Resume.pdf" className="btn btn--primary magnetic">
              <FiDownload /> Download CV
            </a>
            <a href={resume} target="_blank" rel="noopener noreferrer" className="btn btn--ghost magnetic">
              <FiExternalLink /> Open in new tab
            </a>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal className="resume-frame">
            <div className="resume-frame__glow" aria-hidden="true" />
            <div className="resume-paper" ref={paperRef}>
              {width > 0 && (
                <Document
                  file={resume}
                  loading={<Loader />}
                  error={<div className="loader">Couldn't load the preview. Use the download button above.</div>}
                >
                  <Page pageNumber={1} width={width} renderTextLayer={false} loading={<Loader />} />
                </Document>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default ResumeNew;
