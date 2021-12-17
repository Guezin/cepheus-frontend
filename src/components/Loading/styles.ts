import styled, { keyframes } from 'styled-components';

const bounceAnimation = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-24px);
  }
`;

export const Container = styled.div`
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 64px;
      animation: ${bounceAnimation} 1s infinite alternate;
    }
`;
