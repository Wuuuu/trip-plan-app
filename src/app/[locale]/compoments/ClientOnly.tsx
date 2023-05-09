"use client";

import { useEffect, useState } from "react";

interface ClienOnlyProps {
  children: React.ReactNode;
}

const ClinetOnly: React.FC<ClienOnlyProps> = ({ children }) => {
  const [hasMounted, sethasMounted] = useState(false);

  useEffect(() => {
    sethasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  return <>{children}</>;
};

export default ClinetOnly;
