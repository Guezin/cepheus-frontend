import RocketSVG from '../../assets/space-rocket.svg';

import { Container } from './styles';

const Loading = () => (
  <Container>
    <img src={RocketSVG} alt="Loading" />
  </Container>
);

export default Loading;
