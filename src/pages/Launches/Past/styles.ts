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

export const GoBack = styled.nav`
  margin-right: auto;
  font-size: 1.6rem;
  display: flex;

  a {
    padding-left: 0.9rem;
    color: ${colors.textInPrimary};
  }
`;

export const Content = styled.div`
  margin-top: 5.2rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  div main {
    margin-top: 1.6rem;
    padding: 3.4rem;
    border-radius: 5px;
    background: ${colors.shapePrimary};

    section h3 {
      margin: 4rem 0 2rem 0;
      font-size: 1.6rem;
      color: ${colors.titleInPrimary};
    }
  }

  div + div {
    margin-top: 5.2rem;
  }
`;

export const Rocket = styled.header`
  height: 7.4rem;
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

  h2 {
    font-weight: 700;
    padding-left: 2rem;
  }
`;

export const MissionDetails = styled.div`
  padding-top: 2rem;
  border-top: 2px solid ${colors.grey[700]};

  ul li {
    font-size: 1.6rem;
    color: ${colors.textInPrimary};
    line-height: 3rem;
  }

  span {
    margin-top: 1.6rem;
  }
`;
