import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

interface PortalProps extends PropsWithChildren<unknown> {
  element?: HTMLElement;
}

export const Portal = ({ children, element = document.body }: PortalProps) => {
  return createPortal(children, element);
};
