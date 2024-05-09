"use client";

import { NextUIProvider } from "@nextui-org/react";

const UiProviders = ({ children }: { children: React.ReactNode }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default UiProviders;
