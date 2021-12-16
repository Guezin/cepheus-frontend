import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.nav`
  margin-right: auto;
  font-size: 1.6rem;
  display: flex;

  a {
    display: flex;
    align-items: center;

    span {
      padding-left: 0.9rem;
      color: ${colors.textInPrimary};
    }
  }
`;
