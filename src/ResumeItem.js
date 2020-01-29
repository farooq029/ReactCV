import React from "react";

const ResumeItem = ({ title, children }) => {
  return (
    <section className="resume-item">
      <h2 className="resume-item__title">{title}</h2>
      <div className="resume-item__content">{children}</div>
    </section>
  );
};

export default ResumeItem;
