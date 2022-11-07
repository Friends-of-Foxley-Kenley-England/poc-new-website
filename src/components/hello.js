import React from "react";

export const Hello = ({ greeting, name }) => {
  return (
    <h1>
      {greeting}, {name}!
    </h1>
  );
}
