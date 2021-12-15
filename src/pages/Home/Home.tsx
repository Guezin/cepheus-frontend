import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../../service/api';

import Loading from '../../components/Loading';

import {
  Container,
  Header,
  Content,
  Title,
  Launches,
  LatestLaunch,
} from './styles';

type LatestLaunchData = {
  mission: string;
  success: boolean;
  failures: Array<{
    reason?: string;
  }>;
  details: string | null;
  date_utc: string;
  date_local: string;
  rocket: {
    name: string;
    cost_per_launch: number;
    description: string;
  };
}

type NextLaunchData = {
  mission: string;
  details: string | null;
  date_utc: string;
  date_local: string;
  rocket: {
    name: string;
    cost_per_launch: number;
    description: string;
  };
}

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [latestLaunch, setLatestLaunch] = useState<LatestLaunchData>(
    {} as LatestLaunchData
  );
  const [nextLaunch, setNextLaunch] = useState<NextLaunchData>(
    {} as NextLaunchData
  );

  const navigation = useNavigate();

  useEffect(() => {
    setLoading(true);

    const loadLatestLauncheData = async () => {
      const { data: latestLaunchData } = await api.get<LatestLaunchData>('/v1/latest/launch');
      const { data: nextLaunchData } = await api.get<NextLaunchData>('/v1/next/launch');

      setLatestLaunch(latestLaunchData);
      setNextLaunch(nextLaunchData);

      setLoading(false);
    };

    loadLatestLauncheData();
  }, []);

  const navigationTo = (path: string, stateData: LatestLaunchData | NextLaunchData) => {
    navigation(path, { state: stateData });
  };

  return (
    <>
      {loading ? (<Loading />) : (
        <Container>
          <Header>
            <section>
              <div>
                <h1>Cepheus</h1>
              </div>

              <div>
                <span>Lembre-se! Foguete não tem ré.</span>
              </div>
            </section>
          </Header>

          <Content>
            <section>
              <Title>Lançamentos</Title>

              <LatestLaunch onClick={() => navigationTo('/launches/latest', latestLaunch)}>
                <header>
                  <h2>Último</h2>
                  <span>Missão: {latestLaunch.mission}</span>
                </header>
              </LatestLaunch>

              <Launches onClick={() => navigationTo('/launches/next', nextLaunch)}>
                <header>
                  <h2>Próximo</h2>
                  <span>Missão: {nextLaunch.mission}</span>
                </header>
              </Launches>

              <Launches>
                <header>
                  <h2>Passados</h2>
                </header>
              </Launches>

              <Launches>
                <header>
                  <h2>Próximos</h2>
                </header>
              </Launches>
            </section>
          </Content>
        </Container>
      )}
    </>
  );
};

export default Home;
