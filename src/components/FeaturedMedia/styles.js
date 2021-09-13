import styled from "styled-components";

export const Container = styled.div`
  grid-area: featured;
  width:100%;
  ${({ isAmp }) => isAmp && "position: relative;"};
`;

export const StyledImage = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
