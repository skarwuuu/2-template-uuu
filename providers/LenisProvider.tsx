"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import type { PropsWithChildren } from "react";

function LenisProvider({ children }: PropsWithChildren) {
  const options = {
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: true,
  };

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
}

export default LenisProvider;
