import { useState, useEffect, useCallback, useMemo } from 'react';

import api from '../../../service/api';
import formatDateUTC from '../../../utils/formatDateUTC';

import PlanetGlobalSVG from '../../../assets/planet-earth-global.svg';

import Loading from '../../../components/Loading';
import { GoBack } from '../../../components/GoBack';

import { Container, Content, Rocket, MissionDetails } from './styles';

type PastLaunchesData = {
  mission: string;
  success: boolean;
  details: string | null;
  date_utc: string;
  rocket: {
    name: string;
    cost_per_launch: number;
    description: string | null;
  };
};

const Past = () => {
  const [loading, setLoading] = useState(false);
  const [pastLaunches, setPastLaunches] = useState([] as Array<PastLaunchesData>);

  useEffect(() => {
    setLoading(true);

    const loadPastLaunchesData = async () => {
      const { data: pastLaunchesData } = await api.get<PastLaunchesData[]>('/v1/past/launches');

      setPastLaunches(pastLaunchesData);

      setLoading(false);
    };

    loadPastLaunchesData();
  }, []);

  const formatCostPerLaunch = useCallback((value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value), []);

  const pastMissions = useMemo(() => (
    pastLaunches.map(({ mission, success, details, date_utc, rocket }) => (
      <div key={mission}>
        <Rocket>
          <div>
            <img src={PlanetGlobalSVG} alt="Planeta Global icone" />
          </div>
          <h2>{rocket.name}</h2>
        </Rocket>

        <main>
          <section>
            <span>{rocket.description}</span>

            <h3>Missão: {mission}</h3>

            <MissionDetails>
              <ul>
                <li>Data do lançamento: {formatDateUTC(date_utc)}</li>
                <li>Custo por lançamento: {formatCostPerLaunch(rocket.cost_per_launch)}</li>
                <li>{!success ? 'A missão falhou!' : 'Missão cumprida!'}</li>
              </ul>

              <span>{details}</span>
            </MissionDetails>
          </section>
        </main>
      </div>
    ))), [pastLaunches]);

  return (
    <>
      {loading ? (<Loading />) : (
        <Container>
          <GoBack to="/" title="Voltar para Home" />

          <Content>
            {pastMissions}
          </Content>
        </Container>
      )}
    </>
  );
};

export default Past;
