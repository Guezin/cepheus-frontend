import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.header`
  border-bottom: 1px solid ${colors.grey[700]};

  section {
    padding: 8.6rem 3.2rem 3.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    div:nth-child(1) {
      h1 {
        color: ${colors.titleInPrimary};
      }
    }

    div:nth-child(2) {
      span {
        font-size: 1.6rem;
        color: ${colors.textInPrimary};
      }
    }
  }
`;

export const Content = styled.main`
  padding: 3.4rem 3.2rem;

  section {
    display: flex;
    flex-direction: column;
    gap: 2.1rem;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;

    section {
      width: 64rem;
    }
  }
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  color: ${colors.grey[100]};
`;

export const Launches = styled.div`
  background: ${colors.shapePrimary};
  padding: 2.4rem;
  border-radius: 5px;
  cursor: pointer;

  header {
    display: flex;
    flex-direction: column;

    h2 {
      padding-bottom: 1rem;
    }
  }
`;

export const LatestLaunch = styled.div`
  margin-bottom: 1.8rem;
  padding: 2.4rem;
  background: ${colors.shapePrimary};
  border-radius: 5px;
  cursor: pointer;

  header {
    display: flex;
    flex-direction: column;

    h2 {
      padding-bottom: 1rem;
    }
  }
`;
