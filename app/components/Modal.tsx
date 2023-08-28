// app/components/modal.tsx
import { Portal } from "./Portal";
import { useNavigate } from "@remix-run/react";
import { styled } from "styled-components";

interface props {
  children: React.ReactNode;
  isOpen: boolean;
  ariaLabel?: string;
  className?: string;
}

const Overlay = styled("div")`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* width: 100%; */
  /* height: 100%; */
  padding: 0%;
  margin: 0;
  overflow-y: auto;
  background-color: #111;
  opacity: 0.7;
`;

const ModalWrapper = styled("div")`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
  pointer-events: none;
`;

const ModalContent = styled("div")`
  width: 100%;
  max-width: 500px;
  height: auto;
  background-color: #fff;
  padding: 30px;
  margin: 30px;
  border-radius: 8px;
  box-shadow: 1px 2px 2px gray;
`;

export const Modal: React.FC<props> = ({ children, isOpen, ariaLabel }) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  return (
    <Portal wrapperId="modal">
      <Overlay
        aria-labelledby={ariaLabel ?? "modal-title"}
        role="dialog"
        aria-modal="true"
        onClick={() => navigate("/calendar")}
      />
      <ModalWrapper>
        <ModalContent>
          {/* This is where the modal content is rendered  */}
          {children}
        </ModalContent>
      </ModalWrapper>
    </Portal>
  );
};
