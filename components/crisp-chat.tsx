"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("d3de1bc0-0bc2-4794-9487-3e1ed59adc95");
  }, []);

  return null;
};
