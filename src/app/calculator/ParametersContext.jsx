"use client";

import params from "./parameters.json";
import { createContext, useState } from "react";

export const ParametersProvider = createContext(null);
export const ParametersDispatchProvider = createContext(null);

export const ParametersContext = ({ children }) => {
  const [parameters, setParameters] = useState(params);

  return (
    <ParametersProvider.Provider value={parameters}>
      <ParametersDispatchProvider.Provider value={setParameters}>
        {children}
      </ParametersDispatchProvider.Provider>
    </ParametersProvider.Provider>
  );
};
