import React, { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiAward,
  FiCheck,
  FiMaximize2,
  FiUsers,
} from "react-icons/fi";
import { majorProjects, getProject } from "../../data/projects";
import CountUp from "../CountUp";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import Lightbox from "./Lightbox";
import Placeholder from "./Placeholder";
import ProjectLinks from "./ProjectLinks";

const pad = (n) => String(n).padStart(2, "0");

function Metrics({ items }) {
  return (
    <div className="case-metrics">
      {items.map(({ value, prefix = "", suffix = "", label }, index) => (
        <Reveal key={label} className="card case-metric spotlight" delay={index * 90}>
          <div className="case-metric__value gradient-text">
            {prefix}
            <CountUp end={value} suffix={suffix} />
          </div>
          <div className="case-metric__label">{label}</div>
        </Reveal>
      ))}
    </div>
  );
}

function Architecture({ layers }) {
  return (
    <div className="arch" style={{ "--cols": layers.length }}>
      {layers.map((layer, index) => (
        <Reveal key={layer.title} className="arch__col" delay={index * 110}>
          <div className="arch__head">
            <span>{pad(index + 1)}</span>
            {layer.title}
          </div>
          {layer.nodes.map((node) => (
            <div key={node.title} className="arch__node">
              <strong>{node.title}</strong>
              <span>{node.text}</span>
            </div>
          ))}
        </Reveal>
      ))}
    </div>
  );
}

function Decision({ index, title, text, before, after, points = [] }) {
  return (
    <Reveal as="article" className="card decision spotlight">
      <span className="decision__num">{pad(index + 1)}</span>
      <div className="decision__body">
        <h3>{title}</h3>
        <p>{text}</p>

        {before && after && (
          <div className="compare">
            <div className="compare__cell">
              <span>Before</span>
              <strong>{before.value}</strong>
              <small>{before.label}</small>
            </div>
            <FiArrowRight className="compare__arrow" aria-hidden="true" />
            <div className="compare__cell compare__cell--after">
              <span>After</span>
              <strong className="gradient-text">{after.value}</strong>
              <small>{after.label}</small>
            </div>
          </div>
        )}

        {points.length > 0 && (
          <ul className="check-list">
            {points.map((point) => (
              <li key={point}>
                <FiCheck /> {point}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Reveal>
  );
}

function Scoring({ title, text, items }) {
  const max = Math.max(...items.map((item) => item.weight));
  return (
    <Reveal className="card scoring">
      <div className="scoring__intro">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className="scoring__rows">
        {items.map(({ label, weight, note }, index) => (
          <div key={label} className="scoring__row" style={{ "--w": weight / max, "--i": index }}>
            <div className="scoring__top">
              <strong>{label}</strong>
              <span>{weight}%</span>
            </div>
            <div className="scoring__bar">
              <span />
            </div>
            <p>{note}</p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);
  const [lightbox, setLightbox] = useState(null);

  if (!project) return <Navigate to="/project" replace />;

  const { title, tagline, description, award, tags, images, ghLink, demoLink, demoVideo } = project;
  const details = project.details || {};
  const gallery =
    details.gallery ||
    images.map((src, i) => ({ src, caption: `${title} screenshot ${i + 1}` }));
  const stack = details.stack || tags;
  const position = majorProjects.indexOf(project);
  const prev = majorProjects[(position - 1 + majorProjects.length) % majorProjects.length];
  const next = majorProjects[(position + 1) % majorProjects.length];

  const meta = [
    details.role && { label: "Role", value: details.role },
    details.timeline && { label: "Timeline", value: details.timeline },
    details.recognition && { label: "Recognition", value: details.recognition },
  ].filter(Boolean);

  // Number the sections that this project actually has.
  let sectionCount = 0;
  const eyebrow = (label) => `${pad(++sectionCount)} / ${label}`;

  return (
    <>
      <section className="page-hero case-hero">
        <div className="container">
          <Link to="/project" className="case-back anim anim--fade">
            <FiArrowLeft /> All projects
          </Link>
          <span className="eyebrow case-hero__eyebrow anim anim--fade" style={{ "--d": "80ms" }}>
            Case study · {pad(position + 1)} / {pad(majorProjects.length)}
          </span>
          <h1 className="page-title case-hero__title anim anim--fade" style={{ "--d": "160ms" }}>
            {title}
          </h1>
          <p className="case-hero__summary anim anim--fade" style={{ "--d": "260ms" }}>
            {details.summary || tagline}
          </p>
          {award && (
            <span className="award award--lg anim anim--fade" style={{ "--d": "320ms" }}>
              <FiAward /> {award}
            </span>
          )}
          <div className="case-hero__actions anim anim--fade" style={{ "--d": "380ms" }}>
            <ProjectLinks demoLink={demoLink} demoVideo={demoVideo} ghLink={ghLink} />
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal className="card case-meta">
            {meta.map(({ label, value }) => (
              <div key={label} className="case-meta__item">
                <span className="case-meta__label">{label}</span>
                <p>{value}</p>
              </div>
            ))}
            <div className="case-meta__item case-meta__item--stack">
              <span className="case-meta__label">{details.stack ? "Stack" : "Focus"}</span>
              <ul className="tags tags--sm">
                {stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="case-cover" delay={100}>
            <div className="browser spotlight">
              <div className="browser__bar">
                <span />
                <span />
                <span />
                <div className="browser__url">{project.slug}.app</div>
              </div>
              {gallery.length ? (
                <button
                  type="button"
                  className="browser__screen case-cover__screen"
                  onClick={() => setLightbox(0)}
                  aria-label={`Enlarge: ${gallery[0].caption}`}
                >
                  <img src={gallery[0].src} alt={gallery[0].caption} className="is-active" />
                  <span className="browser__zoom">
                    <FiMaximize2 /> Enlarge
                  </span>
                </button>
              ) : (
                <Placeholder title={title} tags={tags} />
              )}
            </div>
            {gallery.length > 0 && <p className="case-cover__caption">{gallery[0].caption}</p>}
          </Reveal>

          {details.metrics && <Metrics items={details.metrics} />}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow={eyebrow("Overview")} title="The" highlight="big picture" />
          <Reveal className="case-overview">
            <p className="case-overview__lead">{details.overview || description}</p>
          </Reveal>

          {details.problem && details.approach && (
            <div className="case-split">
              <Reveal className="card case-split__card spotlight">
                <span className="eyebrow">The problem</span>
                <p>{details.problem}</p>
              </Reveal>
              <Reveal className="card case-split__card case-split__card--accent spotlight" delay={120}>
                <span className="eyebrow">The approach</span>
                <p>{details.approach}</p>
              </Reveal>
            </div>
          )}
        </div>
      </section>

      {details.roles && (
        <section className="section section--tight">
          <div className="container">
            <SectionHeading eyebrow={eyebrow("Who it's for")} title="Built around" highlight="every role" />
            <div className="feature-grid">
              {details.roles.map((role, index) => (
                <Reveal key={role.title} className="card feature spotlight" delay={index * 90}>
                  <span className="icon-box">
                    <FiUsers />
                  </span>
                  <h3>{role.title}</h3>
                  <p>{role.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {details.features && (
        <section className="section section--tight">
          <div className="container">
            <SectionHeading eyebrow={eyebrow("Features")} title="What it" highlight="does" />
            <div className="feature-grid">
              {details.features.map((feature, index) => (
                <Reveal key={feature.title} className="card feature spotlight" delay={(index % 3) * 90}>
                  <span className="icon-box feature__num">{pad(index + 1)}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {details.architecture && (
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow={eyebrow("Architecture")}
              title="How it"
              highlight="fits together"
            />
            <Architecture layers={details.architecture} />
          </div>
        </section>
      )}

      {details.scoring && (
        <section className="section section--tight">
          <div className="container">
            <SectionHeading eyebrow={eyebrow("Under the hood")} title="Explainable" highlight="ranking" />
            <Scoring {...details.scoring} />
          </div>
        </section>
      )}

      {details.decisions && (
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow={eyebrow("Engineering decisions")}
              title="The calls that"
              highlight="mattered"
            />
            <div className="decision-list">
              {details.decisions.map((decision, index) => (
                <Decision key={decision.title} index={index} {...decision} />
              ))}
            </div>
          </div>
        </section>
      )}

      {gallery.length > 1 && (
        <section className="section section--tight">
          <div className="container">
            <SectionHeading
              eyebrow={eyebrow("Gallery")}
              title="Inside"
              highlight={title}
              description="Click any screenshot to see it full size."
            />
            <div className="gallery">
              {gallery.map((shot, index) => (
                <Reveal key={shot.src} delay={(index % 3) * 90}>
                  <button
                    type="button"
                    className="shot spotlight"
                    onClick={() => setLightbox(index)}
                    aria-label={`Enlarge: ${shot.caption}`}
                  >
                    <span className="shot__media">
                      <img src={shot.src} alt={shot.caption} loading="lazy" />
                    </span>
                    <span className="shot__caption">
                      <span>{pad(index + 1)}</span>
                      {shot.caption}
                    </span>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {details.outcome && (
        <section className="section">
          <div className="container">
            <Reveal variant="scale" className="cta">
              <div className="cta__border" aria-hidden="true" />
              <div className="cta__inner outcome">
                <div className="cta__grid" aria-hidden="true" />
                <span className="outcome__icon">
                  <FiAward />
                </span>
                <span className="eyebrow">{eyebrow("Outcome")}</span>
                <p className="outcome__text">{details.outcome}</p>
                <div className="cta__actions">
                  <ProjectLinks demoLink={demoLink} demoVideo={demoVideo} ghLink={ghLink} />
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <section className="section section--tight">
        <div className="container">
          <nav className="case-nav" aria-label="More projects">
            <Link to={`/project/${prev.slug}`} className="card case-nav__link spotlight">
              <span className="case-nav__dir">
                <FiArrowLeft /> Previous
              </span>
              <strong>{prev.title}</strong>
            </Link>
            <Link to={`/project/${next.slug}`} className="card case-nav__link case-nav__link--next spotlight">
              <span className="case-nav__dir">
                Next <FiArrowRight />
              </span>
              <strong>{next.title}</strong>
            </Link>
          </nav>
          <div className="case-nav__all">
            <Link to="/project" className="btn btn--ghost magnetic">
              All projects <FiArrowUpRight className="btn__arrow" />
            </Link>
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <Lightbox
          images={gallery.map((shot) => shot.src)}
          captions={gallery.map((shot) => shot.caption)}
          index={lightbox}
          title={title}
          onChange={setLightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}

export default ProjectDetail;
