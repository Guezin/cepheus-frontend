import { useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

import RocketSVG from '../../../assets/space-rocket.svg';

import colors from '../../../styles/colors';
import { Container, GoBack, Content, Rocket, MissionDetails } from './styles';

type LocationState = {
  mission: string;
  success: boolean;
  failures: Array<{
    reason?: string;
  }>;
  details: string | null;
  date_utc: string;
  rocket: {
    name: string;
    cost_per_launch: number;
    description: string;
  };
};

const Latest = () => {
  const {
    mission,
    rocket,
    details,
    failures,
    date_utc,
    success: missionAccomplished,
  } = useLocation().state as LocationState;

  const missionFailed = useMemo(() => {
    if (!missionAccomplished) {
      return (
        <>
          <li>A missão falhou!</li>
          <li>{failures.map(failure => failure.reason)}</li>
          {(!details ? '' : <li>{details}</li>)}
        </>
      );
    }

    return (
      <>
        <li>Missão cumprida!</li>
        {(!details ? '' : <li>{details}</li>)}
      </>
    );
  }, [missionAccomplished, details, failures]);

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
                {missionFailed}
              </ul>
            </MissionDetails>
          </section>
        </main>
      </Content>
    </Container>
  );
};

export default Latest;
