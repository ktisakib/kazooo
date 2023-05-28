"use client";

import { Provider } from "jotai";

const JotaiProvider = ({ children }) => {
  return <Provider>{children}</Provider>;
};

export default JotaiProvider;