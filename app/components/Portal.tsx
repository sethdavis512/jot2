// source: https://www.prisma.io/blog/fullstack-remix-prisma-mongodb-3-By5pmN5Nzo1v#open-a-portal

import { createPortal } from "react-dom";
import { useState, useEffect } from "react";

interface props {
  children: React.ReactNode;
  wrapperId: string;
}

// 1
const createWrapper = (wrapperId: string) => {
  const wrapper = document.createElement("div");
  wrapper.setAttribute("id", wrapperId);
  document.body.appendChild(wrapper);
  return wrapper;
};

export const Portal: React.FC<props> = ({ children, wrapperId }) => {
  const [wrapper, setWrapper] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // 2
    let element = document.getElementById(wrapperId);
    let created = false;

    if (!element) {
      created = true;
      element = createWrapper(wrapperId);
    }

    setWrapper(element);

    // 3
    return () => {
      if (created && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (wrapper === null) return null;

  // 4
  return createPortal(children, wrapper);
};
