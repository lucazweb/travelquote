import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  min-width: 250px;
  gap: 6px;
  font-size: 0.9rem;
  padding: 10px;
  font-family: "Roboto";
  border: 1px solid #333;
  border-radius: 4px;
  margin: 12px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
