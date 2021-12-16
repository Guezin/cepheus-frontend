import { useState, useEffect, useMemo } from 'react';

import api from '../../../service/api';
import formatDateUTC from '../../../utils/formatDateUTC';

import PlanetSaturnSVG from '../../../assets/planet-saturn.svg';

import Loading from '../../../components/Loading';
import { GoBack } from '../../../components/GoBack';

import { Container, Content, Rocket } from './styles';

type UpcomingLaunchesData = {
  mission: string;
  date_utc: string;
};

const Upcoming = () => {
  const [loading, setLoading] = useState(false);
  const [upcomingLaunches, setUpcomingLaunches] = useState([] as Array<UpcomingLaunchesData>);

  useEffect(() => {
    setLoading(true);

    const loadPastLaunchesData = async () => {
      const { data: upcomingLaunchesData } = await api
        .get<UpcomingLaunchesData[]>('/v1/upcoming/launches');

      setUpcomingLaunches(upcomingLaunchesData);

      setLoading(false);
    };

    loadPastLaunchesData();
  }, []);

  const upcomingMissions = useMemo(() => (
    upcomingLaunches.map(({ mission, date_utc }) => (
      <Rocket key={mission}>
        <div>
          <img src={PlanetSaturnSVG} alt="Planeta Saturno icone" />
        </div>

        <article>
          <p>Missão: <strong>{mission}</strong></p>
          <span>Data do lançamento: {formatDateUTC(date_utc)}</span>
        </article>
      </Rocket>
    ))), [upcomingLaunches]);

  return (
    <>
      {loading ? (<Loading />) : (
        <Container>
          <GoBack to="/" title="Voltar para Home" />

          <Content>
            {upcomingMissions}
          </Content>
        </Container>
      )}
    </>
  );
};

export default Upcoming;
