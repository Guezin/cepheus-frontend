import styled from 'styled-components';

import colors from '../../../styles/colors';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 6rem 3.4rem 3.4rem 3.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.main`
  padding: 5.2rem 0 3.4rem 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Rocket = styled.section`
  height: 10.8rem;
  width: 100%;
  border-radius: 5px;
  background: ${colors.shapePrimary};

  display: flex;
  align-items: center;

  div {
    width: 6.8rem;
    height: 100%;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background: ${colors.shapeSecondary};

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 3.4rem;
      height: 3.4rem;
    }
  }

  article {
    padding-left: 2rem;

    p {
      margin-bottom: 0.4rem;
    }
  }

  & + section {
    margin-top: 3.2rem;
  }
`;
