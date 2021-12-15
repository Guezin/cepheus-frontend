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

type LaunchesData = {
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

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [latestLaunch, setLatestLaunch] = useState<LaunchesData>(
    {} as LaunchesData
  );

  const navigation = useNavigate();

  useEffect(() => {
    setLoading(true);

    const loadLatestLauncheData = async () => {
      const { data } = await api.get<LaunchesData>('/v1/latest/launch');

      setLatestLaunch(data);

      setLoading(false);
    };

    loadLatestLauncheData();
  }, []);

  const handleNavigation = () => {
    navigation('/launches/latest', { state: latestLaunch });
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

              <LatestLaunch onClick={handleNavigation}>
                <header>
                  <h2>Último</h2>
                  <span>Missão: {latestLaunch.mission}</span>
                </header>
              </LatestLaunch>

              <Launches to="/launches/next">
                <header>
                  <h2>Próximo</h2>
                  <span>lançamento</span>
                </header>
              </Launches>

              <Launches to="/launches/upcoming">
                <header>
                  <h2>Próximos</h2>
                  <span>lançamentos</span>
                </header>
              </Launches>

              <Launches to="/launches/past">
                <header>
                  <h2>Passados</h2>
                  <span>lançamentos</span>
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
