import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

import { Container } from './styles';

import colors from '../../styles/colors';

type GoBackProps = {
  title: string;
  to: string;
}

const GoBack = ({ title, to }: GoBackProps) => (
  <Container>
    <Link to={to}>
      <MdArrowBack color={colors.textInPrimary} size={20} />

      <span>{title}</span>
    </Link>
  </Container>
);

export default GoBack;
