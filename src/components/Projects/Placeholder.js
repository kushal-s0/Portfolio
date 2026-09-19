import React from "react";
import { FiLayers } from "react-icons/fi";

function Placeholder({ title, tags = [] }) {
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

export default Placeholder;
