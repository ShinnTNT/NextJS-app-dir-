import React from "react";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>About Layout</h1>
      <div>{children}</div>
    </div>
  );
};

export default AboutLayout;
