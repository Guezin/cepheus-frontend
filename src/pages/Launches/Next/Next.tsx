import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import formatDateUTC from '../../../utils/formatDateUTC';

import RocketSVG from '../../../assets/space-rocket.svg';

import { GoBack } from '../../../components/GoBack';

import { Container, Content, Rocket, MissionDetails } from './styles';

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

  const formattedDate = useMemo(() => formatDateUTC(date_utc), [date_utc]);

  return (
    <Container>
      <GoBack to="/" title="Voltar para Home" />

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
