import { useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

import RocketSVG from '../../../assets/space-rocket.svg';

import colors from '../../../styles/colors';
import { Container, GoBack, Content, Rocket, MissionDetails } from './styles';

type LocationState = {
  mission: string;
  details: string | null;
  date_utc: string;
  rocket: {
    name: string;
    cost_per_launch: number;
    description: string;
  };
};

const Next = () => {
  const {
    mission,
    rocket,
    details,
    date_utc,
  } = useLocation().state as LocationState;

  const missionDetails = useMemo(() => (!details ? '' : <li>{details}</li>), []);

  const formattedDate = useMemo(() => {
    const date = date_utc.split('T')[0].split('-');
    const day = date[2];
    const month = date[1];
    const year = date[0];

    return `${day}/${month}/${year}`;
  }, [date_utc]);

  return (
    <Container>
      <GoBack>
        <MdArrowBack color={colors.textInPrimary} size={20} />

        <Link to="/">Voltar para Home</Link>
      </GoBack>

      <Content>
        <Rocket>
          <div>
            <img src={RocketSVG} alt="Rocket" />
          </div>
          <h2>{rocket.name}</h2>
        </Rocket>

        <main>
          <section>
            <span>{rocket.description}</span>

            <h3>Missão: {mission}</h3>

            <MissionDetails>
              <ul>
                <li>Data do lançamento: {formattedDate}</li>
                {missionDetails}
              </ul>
            </MissionDetails>
          </section>
        </main>
      </Content>
    </Container>
  );
};

export default Next;
