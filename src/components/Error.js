import React from "react";

export const Error = ({ error }) => {
  return <div className="alert alert-danger">{error}</div>;
};
