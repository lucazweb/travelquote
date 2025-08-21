import type { JSX } from "react";
import { StyledWrapper } from "./styled";

interface ShareButtonProps {
  icon: JSX.Element;
  label: string;
  onClick?: () => void;
}

export const ShareButton = ({ icon, label, onClick }: ShareButtonProps) => {
  return (
    <StyledWrapper onClick={onClick}>
      {icon} {label}
    </StyledWrapper>
  );
};
