import React, { useState } from "react";
import MarketingApp from "./components/MarketingApp";

export default () => {
  const [state, setState] = useState("Hi there");
  return (
    <div>
      <h1>{state}</h1>
      <hr />
      <MarketingApp state={state} setState={setState} />
    </div>
  );
};
