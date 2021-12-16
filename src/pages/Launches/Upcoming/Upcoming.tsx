import { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

import api from '../../../service/api';

import PlanetSaturnSVG from '../../../assets/planet-saturn.svg';

import Loading from '../../../components/Loading';

import colors from '../../../styles/colors';
import { Container, GoBack, Content, Rocket } from './styles';

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

  const formatDate = useCallback((dateUTC: string) => {
    const date = dateUTC.split('T')[0].split('-');
    const day = date[2];
    const month = date[1];
    const year = date[0];

    return `${day}/${month}/${year}`;
  }, []);

  const upcomingMissions = useMemo(() => (
    upcomingLaunches.map(({ mission, date_utc }) => (
      <Rocket key={mission}>
        <div>
          <img src={PlanetSaturnSVG} alt="Planeta Saturno icone" />
        </div>

        <article>
          <p>Missão: <strong>{mission}</strong></p>
          <span>Data do lançamento: {formatDate(date_utc)}</span>
        </article>
      </Rocket>
    ))), [upcomingLaunches]);

  return (
    <>
      {loading ? (<Loading />) : (
        <Container>
          <GoBack>
            <MdArrowBack color={colors.textInPrimary} size={20} />

            <Link to="/">Voltar para Home</Link>
          </GoBack>

          <Content>
            {upcomingMissions}
          </Content>
        </Container>
      )}
    </>
  );
};

export default Upcoming;
